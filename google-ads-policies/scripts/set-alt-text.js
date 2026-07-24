/**
 * Bulk-set image alt text for Luminouswand products via Shopify Admin GraphQL API.
 *
 * Usage:
 *   1. Copy shopify-secret.example.json  ->  shopify-secret.json
 *   2. Paste your Admin API access token (shpat_...) into it
 *   3. Run:  node set-alt-text.js          (preview only, changes nothing)
 *      Then: node set-alt-text.js --apply  (actually writes the alt text)
 *
 * Requires Node.js 18+ (uses built-in fetch).
 */

const fs = require('fs');
const path = require('path');

const APPLY = process.argv.includes('--apply');
const API_VERSION = '2024-10';

// --- load credentials ---------------------------------------------------
const cfgPath = path.join(__dirname, 'shopify-secret.json');
if (!fs.existsSync(cfgPath)) {
  console.error('❌ Missing shopify-secret.json. Copy shopify-secret.example.json to shopify-secret.json and paste your token.');
  process.exit(1);
}
const { domain, token } = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
if (!token || token.includes('PASTE_YOUR')) {
  console.error('❌ Token not set in shopify-secret.json.');
  process.exit(1);
}
const ENDPOINT = `https://${domain}/admin/api/${API_VERSION}/graphql.json`;

// --- alt text per product handle ---------------------------------------
// Base phrase; the script prefixes "Woman wearing " and suffixes " — Luminouswand".
const ALT_BY_HANDLE = {
  'womens-high-waist-wide':          'black high-waisted wide leg yoga dress pants with pockets',
  'high-waisted-biker-shorts-pockets':'black high-waisted 5-inch biker shorts with side pockets',
  'high-waisted-wide-leg-jeans-women':'high-waisted wide leg stretch denim jeans',
  'flare-yoga-pants-bootcut':        'high-waisted bootcut flare yoga pants',
  'wide-leg-linen-pants-beach':      'high-waisted wide leg linen beach pants with pockets',
  'high-waisted-wide-leg':           'black high-waisted wide leg yoga pants with pockets',
  'yoga-pants-with-pockets':         'black high-waisted cropped capri yoga pants with pockets',
};

function altFor(product) {
  const base = ALT_BY_HANDLE[product.handle];
  if (base) return `Woman wearing ${base} — Luminouswand`;
  // fallback: derive from title
  const clean = product.title.replace(/^Luminouswand\s*/i, '').replace(/\s*-\s*.*$/, '').trim();
  return `Woman wearing ${clean} — Luminouswand`;
}

// --- GraphQL helper -----------------------------------------------------
async function gql(query, variables) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': token },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error('GraphQL error: ' + JSON.stringify(json.errors));
  return json.data;
}

const PRODUCTS_QUERY = `
  query($cursor: String) {
    products(first: 50, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        title
        handle
        media(first: 50) {
          nodes {
            ... on MediaImage { id alt image { url } }
          }
        }
      }
    }
  }`;

const FILE_UPDATE = `
  mutation($files: [FileUpdateInput!]!) {
    fileUpdate(files: $files) {
      files { ... on MediaImage { id alt } }
      userErrors { field message }
    }
  }`;

async function main() {
  console.log(`\n=== Alt-text ${APPLY ? 'APPLY' : 'PREVIEW (dry run)'} on ${domain} ===\n`);

  // 1. gather all media that need alt text
  const updates = [];
  let cursor = null, hasNext = true, productCount = 0;
  while (hasNext) {
    const data = await gql(PRODUCTS_QUERY, { cursor });
    for (const p of data.products.nodes) {
      productCount++;
      const alt = altFor(p);
      const imgs = p.media.nodes.filter(m => m && m.id);
      console.log(`• ${p.handle}  (${imgs.length} images)  ->  "${alt}"`);
      for (const m of imgs) {
        if (m.alt === alt) continue; // already set, skip
        updates.push({ id: m.id, alt });
      }
    }
    hasNext = data.products.pageInfo.hasNextPage;
    cursor = data.products.pageInfo.endCursor;
  }

  console.log(`\n${productCount} products scanned. ${updates.length} images will be updated.`);

  if (!APPLY) {
    console.log('\nPreview only — nothing changed. Re-run with  --apply  to write.\n');
    return;
  }

  // 2. write in chunks of 20
  let done = 0;
  for (let i = 0; i < updates.length; i += 20) {
    const chunk = updates.slice(i, i + 20);
    const data = await gql(FILE_UPDATE, { files: chunk });
    const errs = data.fileUpdate.userErrors;
    if (errs && errs.length) console.error('  ⚠️ ', JSON.stringify(errs));
    done += data.fileUpdate.files.length;
    console.log(`  updated ${done}/${updates.length}`);
  }
  console.log(`\n✅ Done. ${done} images now have alt text.\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
