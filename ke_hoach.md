# 📋 KẾ HOẠCH SETUP STORE MỚI → GOOGLE ADS (US Market)

> **Playbook chi tiết** — tổng hợp toàn bộ quy trình đã làm cho store **Luminouswand**.
> Dùng làm checklist tái sử dụng cho mọi dropship/e-commerce store mới muốn chạy Google Ads.
> Cập nhật: 2026-07-23 · Store mẫu: `gf8wx6-h5.myshopify.com` (luminouswand.com)

---

## 🎯 MỤC TIÊU & NGUYÊN TẮC
- Mục tiêu: đưa store Shopify đạt chuẩn **Google Merchant Center (GMC)** + **Google Ads**, feed sạch, tracking đúng, sẵn sàng chạy **Performance Max**.
- Thị trường ưu tiên: **US trước** (dễ quản lý, ads hiệu quả). Mở rộng UK/Canada sau.
- Nguyên tắc vàng:
  1. **Data sản phẩm phải sạch** trước khi đẩy feed.
  2. **Shipping/policy phải KHỚP nhau** ở 3 nơi: Shopify checkout ↔ Policy page ↔ Merchant Center (lệch = Google treo feed "inaccurate shipping").
  3. **Chỉ 1 conversion Purchase làm Primary** (tránh đếm trùng); chỉ Purchase là account-default.
  4. **Không chạy ads khi chưa test conversion bắn đúng.**

---

## PHẦN 0 — CHUẨN BỊ & TRUY CẬP API

### 0.1. Tạo custom app lấy quyền API (Shopify 2026 — flow mới)
> Từ 1/1/2026 Shopify bỏ token tĩnh `shpat_` cũ, dùng **OAuth client credentials**.

1. Shopify Admin → **Settings → Apps and sales channels → Develop apps → Build app in dev dashboard** (mở dev.shopify.com)
2. **Create app** → đặt tên (vd `Claude MCP`)
3. Tab config → **API access → Scopes** (ô required), nhập:
   ```
   read_products,write_products,read_inventory,write_inventory,read_orders
   ```
   *(thêm `write_orders`, `read_markets`, `read_shipping` nếu cần thao tác nhiều hơn)*
4. **Release** version → **Install app** lên store (mục Installs → Install app)
5. **Settings → Credentials**: copy **Client ID** + **Client Secret** (`shpss_...`)

### 0.2. Lấy access token (client credentials grant)
```
POST https://{shop}.myshopify.com/admin/oauth/access_token
body: client_id, client_secret, grant_type=client_credentials
→ trả về access_token (shpat_..., hết hạn ~24h, tự lấy lại)
```
- Lỗi `app_not_installed` = chưa Install app lên store → quay lại 0.1 bước 4.

### 0.3. Cấu hình MCP (nếu dùng Claude Code)
- File `.mcp.json` (dùng package `shopify-mcp` — hỗ trợ client credentials 2026):
  ```json
  { "mcpServers": { "shopify": { "command": "cmd", "args": ["/c","npx","-y","shopify-mcp",
    "--clientId","<ID>","--clientSecret","<SECRET>","--domain","{shop}.myshopify.com"] } } }
  ```
- ⚠️ **BẢO MẬT**: Client Secret = mật khẩu store → **gitignore `.mcp.json`**, không commit. Nếu lộ → **Rotate** trong app Settings.

---

## PHẦN 1 — TỐI ƯU SẢN PHẨM (SEO + GMC)

> Google Shopping đọc: title, description, ảnh, giá, availability, brand, category, gender, age, color, size, GTIN.

### 1.1. Title chuẩn GMC
- Công thức: **Brand + Women's/Men's + Product Type + thuộc tính chính** (front-load ~70 ký tự đầu).
- Cắt đuôi thừa ("Athleisure", "Athletic"...). Không dùng từ khuyến mãi, không VIẾT HOA nguyên câu.
- VD: `Luminouswand Women's High-Waisted Wide Leg Jeans with Pockets, Stretch Denim`

### 1.2. Description chuẩn GMC
- **500 ký tự đầu factual**: chất liệu + form + tính năng + dịp dùng (chèn keyword tự nhiên).
- Cấu trúc: 1 đoạn intro → `<ul>` bullet ưu điểm → dòng liệt kê màu + size.
- ❌ Cấm: link, "free shipping", "sale/% off", "best price", email/phone, VIẾT HOA cả câu.

### 1.3. Alt text ảnh (từng ảnh)
- Xem **ảnh thật** rồi viết đúng nội dung (màu quần, bối cảnh). Phân biệt ảnh model vs infographic vs bảng size.
- API: mutation **`productUpdateMedia`** (KHÔNG dùng `fileUpdate` — cần scope `write_files` không có).
  ```graphql
  productUpdateMedia(productId, media:[{id, alt}]){ media{...} mediaUserErrors{...} }
  ```

### 1.4. Thuộc tính feed (metafields taxonomy)
- **Category**: set đúng & cụ thể (yoga/legging → `Activewear > Activewear Pants > Leggings`; jeans → `Pants > Jeans`). Tránh để category chung chung như "Apparel & Accessories".
- **Gender**: `shopify.target-gender` = Female · **Age**: `shopify.age-group` = Adult (list.metaobject_reference).
- **Color + Size**: dùng **biến thể (variant options)** — quan trọng nhất cho apparel feed.
- ⚠️ Có thể copy GID metaobject của 1 SP đã set đúng sang các SP khác (giá trị taxonomy dùng chung toàn store).

### 1.5. GTIN / Barcode
- Hàng **own-brand** không có GTIN → khai **"no identifier"** (Brand + MPN/SKU thay thế). KHÔNG bị từ chối.

### 1.6. SEO meta (title_tag/description_tag)
- Meta title **≤ 60 ký tự**, meta description **~150-160 ký tự** (khác GMC — được dùng từ hấp dẫn hơn).
- Set qua `productUpdate(input:{seo:{title, description}})`.

### 1.7. Inventory
- Set tồn kho hợp lý (vd 100/variant). API mới **`inventorySetQuantities`** cần:
  - field **`changeFromQuantity`** (giá trị hiện tại) — KHÔNG phải `compareQuantity`/`ignoreCompareQuantity` (đã đổi tên ở API 2026-07).
  - directive **`@idempotent(key:"<GUID>")`** đặt trên **field** (không phải operation).

---

## PHẦN 2 — SHIPPING & POLICIES

### 2.1. Markets (Shopify → Settings → Markets)
- Chỉ bật market cho nước target (**US** trước; UK/Canada sau). Tắt market "International"/worldwide.

### 2.2. Shipping zones (Settings → Shipping and delivery)
- Tạo zone gồm nước target. **BẮT BUỘC add shipping option** (không có rate = khách không checkout được + Google không có giá ship).
- Cấu trúc 2-tier khuyến nghị:
  | Option | Giá | Delivery |
  |---|---|---|
  | **Standard Shipping** | FREE | 7–15 business days |
  | **Insured Express Shipping** | $4.99 (flat) | 5–10 business days |
- "Insured" = có bảo hiểm (thất lạc/hư hỏng → hoàn/gửi lại). Tạo cảm giác an toàn + upsell margin.

### 2.3. Policy pages (Settings → Policies)
- Viết **Shipping Policy** KHỚP với shipping zone (processing 1-3 ngày + 2 option trên + mục Insurance/Lost).
- Có đủ: **Refund/Return (30 ngày)**, **Privacy**, **Terms of Service**, **Contact page**, **About page**.
- Dán HTML qua nút `</>` (code view) trong editor để giữ bảng.

### 2.4. Thông tin store (trust signals cho Google)
- Domain + **SSL (HTTPS)** ✓ · Store **công khai** (KHÔNG khóa password).
- Địa chỉ business thật · Email brand (`info@domain.com`) ở Settings → General.

---

## PHẦN 3 — MERCHANT CENTER + FEED (Simprosys)

### 3.1. Feed app
- Dùng **Simprosys Google Shopping Feed** (hoặc Google & YouTube channel). Kết nối Merchant Center.
- Verify + claim domain trong Merchant Center. Link **Google Ads ↔ Merchant Center**.

### 3.2. Simprosys → Settings → Default Settings (fix gender/age/GTIN)
- **Default Gender = Female**, **Default Age Group = Adult**, **Default Product Condition = New** (fallback cho SP thiếu).
- **Unique Identifier** → chọn **"Submit Brand Name and MPN (SKU)"** (không GTIN).
- ⚠️ **QUAN TRỌNG**: sửa metafield qua API **KHÔNG bắn webhook** → Simprosys không biết. Phải bấm **"Re-Sync Meta Fields"** + **Re-sync**. (Hoặc touch product bằng tag để ép webhook.)

### 3.3. Merchant Center → Shipping and returns
- **Shipping policies**: chỉ giữ nước target với giá khớp (Standard Free + Express $4.99). **Xóa** policy nước lạ/giá sai (vd `flat_18.64` cho ~80 nước — thường do config nhầm).
- **Return policies**: khai **30 ngày**.
- Set delivery time: Handling 1-3 ngày + Transit → Total khớp policy (Standard ~7-15, Express ~5-10).

### 3.4. Kiểm feed
- Manage Products: tất cả **xanh/Approved**, 0 disapproved.
- Warning vô hại (không chặn ads): "Automatic updates: Mismatched availability" (Google tự sync sau khi đổi tồn kho), "Image not processed" (đang crawl ảnh) → tự hết.

---

## PHẦN 4 — CONVERSION TRACKING (quan trọng nhất!)

### 4.1. GA4 + Google Tag
- GA4 property gắn đúng domain, data stream đúng, enhanced measurement bật.
- Event **`purchase`** phải bắn đủ: `transaction_id`, `value`, `currency`, `items`.

### 4.2. Cấu trúc goals CHUẨN (Google Ads → Goals → Conversions)
> **Nguyên tắc: CHỈ Purchase là account-default; mỗi loại chỉ 1 Primary action.**

| Goal | Account-default | Primary action |
|---|---|---|
| ✅ **Purchase** | **ON** | **1 cái duy nhất** (khuyên GA4 purchase — có value + khử trùng theo transaction_id) |
| Page view | ❌ OFF | — (bỏ! nếu để Primary → Google tối ưu cho lượt xem = đốt tiền) |
| Add to cart | ❌ OFF | — |
| Begin checkout | ❌ OFF | — |
| Engagement / Other / YouTube | ❌ OFF (để sạch) | — |

- **Fix đếm trùng**: nếu Purchase có nhiều action (GA4 + Google Tag + Shopify App) → giữ **1 Primary**, còn lại **Secondary (observe only)**. 1 đơn = 1 conversion.
- Cách tắt: mỗi goal → **Edit goal** → tắt *"Make this an account-default goal"* → Save.

### 4.3. Test conversion (BẮT BUỘC trước khi chạy ads)
- ❌ KHÔNG test được qua API (tag bắn từ **trình duyệt** trên trang Thank you, order API không kích hoạt).
- ✅ Đặt **1 đơn thật** qua storefront (hoặc mã giảm 100% để $0) → tới trang **Thank you**.
- Verify **GA4 Realtime → Event count → `purchase`** xuất hiện (count 1) + tham số đúng.
- Google Ads → Conversions → Summary: số Purchase tăng sau **vài giờ**.
- Xong nhớ **hủy đơn test** trong Shopify Orders.

---

## PHẦN 5 — TẠO CAMPAIGN (Performance Max)

### 5.1. Điều kiện tiên quyết
- ✅ Feed Approved · ✅ Conversion `purchase` đã test bắn · ✅ **Billing** (thẻ thanh toán, hết dư nợ — không có billing ads không chạy).

### 5.2. Cấu trúc PMax
- Google Ads → **New campaign → Sales → Performance Max**.
- Chọn **Merchant Center account** + feed.
- **Conversion goals** → *"Use these conversion goals for this campaign"* → **chỉ tick Purchase** (override account default).
- **Locations: United States** (chạy US trước) — mở rộng UK/Canada sau khi có data.
- **Bidding**: bắt đầu **Maximize conversions** (chưa có data ROAS); sau đủ ~15-30 đơn chuyển **tROAS**.
- **Budget**: test ~$20-30/ngày.
- **Asset group**: logo, ảnh sản phẩm (nhiều tỷ lệ), 5+ headlines, 5+ descriptions, sitelinks.

### 5.3. Sau khi chạy
- Để **learning phase** ~1-2 tuần (đừng chỉnh liên tục).
- Theo dõi: Impressions → Clicks → Conversions → ROAS. Tối ưu asset/budget dần.

---

## ✅ CHECKLIST TỔNG (thứ tự thực hiện)

**A. Sản phẩm (data feed)**
- [ ] Title chuẩn GMC (front-load, ≤70 ký tự đầu)
- [ ] Description factual, sạch policy
- [ ] Alt text mọi ảnh (xem ảnh thật)
- [ ] Category cụ thể + gender=Female + age=Adult
- [ ] Color/Size = variants · GTIN = "no identifier" (Brand+MPN)
- [ ] SEO meta title/description
- [ ] Inventory hợp lý

**B. Shipping & Policy**
- [ ] Markets: chỉ US (target)
- [ ] Shipping zone + rates (Standard Free + Insured Express $4.99)
- [ ] Shipping/Refund/Privacy/Terms policy + Contact/About page
- [ ] Email brand, SSL, store công khai

**C. Merchant Center**
- [ ] Feed app kết nối, domain verified, Ads linked
- [ ] Simprosys Default gender/age/condition + identifier
- [ ] Re-Sync Meta Fields
- [ ] MC shipping chỉ nước target + return 30 ngày
- [ ] Feed all Approved

**D. Conversion Tracking**
- [ ] GA4 + purchase event bắn
- [ ] CHỈ Purchase account-default, 1 Primary action
- [ ] Tắt account-default: Page view/Add to cart/Begin checkout/...
- [ ] **Test đơn → confirm `purchase` bắn (GA4 Realtime)**

**E. Campaign**
- [ ] Billing (thẻ + hết dư nợ)
- [ ] PMax: feed + Purchase goal + US + budget + assets
- [ ] Learning phase, theo dõi, tối ưu

---

## 🧠 BÀI HỌC / GOTCHAS (kinh nghiệm thực chiến)
1. **Metafield qua API không bắn webhook** → feed app (Simprosys) không cập nhật → phải "Re-Sync Meta Fields" hoặc touch product.
2. **Alt text**: dùng `productUpdateMedia` (không `fileUpdate` — thiếu scope `write_files`).
3. **API 2026-07 inventory**: `changeFromQuantity` + `@idempotent` directive (field-level).
4. **Page view làm Primary conversion** = lỗi kinh điển đốt tiền → luôn kiểm goal nào là account-default.
5. **Đếm trùng Purchase** (nhiều tag cùng bắn) → chỉ 1 Primary, còn lại Secondary.
6. **Shipping lệch 3 nơi** (checkout ↔ policy ↔ MC) = Google treo feed → luôn đồng bộ.
7. **Feed target nhầm ~80 nước** (config sai bên MC/Shopify) → check kỹ Markets + MC shipping trước khi chạy.
8. **Không test được conversion qua API** — bắt buộc đặt đơn thật qua browser.
9. **Warning ≠ Error**: "Mismatched availability", "Image not processed" là ⚠️ vàng, không chặn ads.
10. **Bảo mật**: Client Secret gitignore + rotate khi lộ.
