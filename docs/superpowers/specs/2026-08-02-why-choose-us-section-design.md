# Why choose us panel on the product page

## Where things stand

`sections/how-it-works.liquid` was extended on 31 July to serve two panels: the
original "How it works" and a new "Why choose us" with a paragraph under each
title. That work was committed to the repo but never uploaded to the store. The
live theme still carries the older file — no description field, no globe / doll /
support / shield / smiley icons, one preset only.

No template references the section, on the live theme or in the repo. It renders
nowhere today.

Meanwhile the product template carries an `icons-with-content` section still
holding the theme's factory copy: three columns of "Icon with text" over "Pair
text with an icon to focus on your chosen product, collection, or blog post", a
"Content heading", and a "Button label" button. Every product page shows it.

## What we are building

Ship the newer section file to the live theme, then put a "Why choose us" panel
on the product page in place of the placeholder section.

### Step 1 — upload the section file

Overwrite `sections/how-it-works.liquid` on the live theme with the repo copy.
Nothing references the section, so no rendered page can break. The block and
setting ids are unchanged from the live version anyway, so a future instance of
the old schema would survive the swap.

### Step 2 — swap the product template section

In `templates/product.json`, drop section `4fc05ee5-1c30-4863-b88f-81cb6fa7c41a`
(`icons-with-content`) and put a `how-it-works` section in its slot in `order`,
keeping the position between the image slider and the testimonials.

Settings follow the "Why choose us" preset: heading "Why choose us?", dividers
off, 76px icons, 26px titles, mint `#c8ebc3` panel at 16px radius, 40px padding
top and bottom.

Four columns:

| Icon | Title | Description |
|---|---|---|
| truck | Tracked Shipping | Every order ships with tracking. We email you the number the moment it leaves us. |
| doll | Made to Order | Nothing is pre-made. We start your doll after you order it, in the size and colours you picked. |
| chat | Talk to the Makers | Your message reaches the people who crochet the dolls, not a script. We answer every one. |
| shield | 30-Day Returns | Not what you hoped for? You have 30 days from delivery to start a return. |

## Copy

The reference site the layout came from advertises worldwide delivery, unlimited
revisions, 24/7 support and over 100,000 customers. None of those hold here: the
shipping policy covers three countries, there is no revision process, support is
not staffed around the clock, and a store this new cannot evidence a customer
count. Google Ads treats unverifiable claims as misrepresentation, so the copy
above stays.

The two claims that do make it in are both backed by published policy — the
30-day return window in `google-ads-policies/02-refund-return-policy.md` and the
tracking email in `03-shipping-policy.md`.

## Verification

`templates/product.json` is auto-generated and opens with a comment block, so it
has to be parsed with that stripped and written back with it intact. Validate the
JSON before upload and read the file back after, since `themeFilesUpsert` writes
straight to the live theme.

Then load a product page and confirm the panel renders: four columns on desktop,
stacked on mobile, placeholder copy gone.
