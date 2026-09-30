# 📋 KẾ HOẠCH v2 — STORE CROCHET THỦ CÔNG → GOOGLE ADS (US Market)

> **Playbook điều chỉnh** từ `ke_hoach.md` (Luminouswand activewear) sang mô hình **đồ crochet (móc len) handmade, made-to-order**.
> Store mới: `2xwptb-f5.myshopify.com` · Thị trường: **US** · Pháp nhân: **công ty US + Shopify Payments (đã có)**.
> Nguồn: nội bộ (xưởng crochet riêng) + 3 shop Etsy của chủ store. Cập nhật: 2026-07-26.

---

## 🔑 KHÁC BIỆT CỐT LÕI SO VỚI v1 (đọc trước)

| Chủ đề | v1 (Luminouswand activewear) | v2 (Crochet handmade) |
|--------|------------------------------|------------------------|
| Loại hàng | Quần áo, variant màu/size sẵn | Đồ len **làm thủ công theo yêu cầu** |
| Cá nhân hóa | Không | **Nhẹ**: variant size + 1 ô nhập text (name banner, tên búp bê). ❌ KHÔNG cần Teeinblue/Customily |
| Handling time | 1–3 ngày | **Made to order: dài (khai 1–3 tuần)** — trung thực để không bị complaint/treo feed |
| Gender/Age feed | Female / Adult | **KHÔNG set Female cứng.** Đồ chơi/gia dụng = Unisex; nhiều món Age = All ages / Kids |
| Category feed | Activewear Pants | **Toys > Stuffed Animals** (amigurumi), **Home > Kitchen > Coasters**, **Toys & Games**, v.v. — set đúng từng nhóm |
| Title | Brand + Women's + Product | Brand + **Occasion/Recipient + Product** (vd "Handmade Crochet Safari Animals Plush — Baby Shower Gift") |
| Rủi ro IP | Không | ⚠️ **CÓ** — nhiều nhân vật Disney/Netflix (xem PHẦN IP) |
| Ad angle | "Squat-proof, tummy control" | **Cảm xúc quà tặng thủ công**: "Handmade with Love", "One-of-a-Kind Gift" |

**Tái dùng NGUYÊN VẸN từ v1:** setup Merchant Center + Simprosys, GTIN "no identifier" (Brand+MPN), shipping khớp 3 nơi, conversion tracking (chỉ Purchase account-default + 1 Primary), cấu trúc PMax (US, Max Conversions → tROAS, ~$20-30/ngày), billing/SSL/email brand.

---

## ⚠️ PHẦN IP — HÀNG NHÂN VẬT CÓ BẢN QUYỀN (quyết định: VẪN BÁN)

**Sản phẩm rủi ro** (nhân vật licensed): Mickey & Friends, Winnie the Pooh, Toy Story, Alice in Wonderland, Sofia the First, Lizzie McGuire (Disney); "Rumi-Mira-Zoey" (KPop Demon Hunters — Netflix/Sony).

Chủ store chấp nhận rủi ro và vẫn bán. Nhưng để **không kéo sập cả tài khoản Google Ads/Merchant Center** (vốn là trục chính của playbook), áp dụng chiến lược tách lớp:

### 🛡️ Nước đi an toàn: "Bán trên store, KHÔNG đẩy vào feed Google"
1. Vẫn **đăng full sản phẩm** (kể cả licensed) lên store Shopify → khách vẫn mua được qua Etsy cross-promo, organic, email, link trực tiếp.
2. **Loại sản phẩm licensed khỏi Google Merchant Center feed** (Simprosys hỗ trợ exclude theo tag/collection): tạo collection `no-google-feed`, gắn tất cả SP licensed vào; trong Simprosys set filter loại collection này.
3. **PMax chỉ quảng bá ~17 SP thiết kế gốc** (an toàn). Google không "nhìn thấy" hàng licensed → giảm mạnh nguy cơ treo tài khoản.
4. Kết quả: vẫn bán được hàng licensed, mà tài sản quảng cáo (công ty US + ads account) được bảo vệ.

### Giảm rủi ro thêm (nếu vẫn muốn hiện licensed rộng hơn)
- **Title/description KHÔNG dùng tên thương hiệu trực tiếp** trong feed/SEO (vd tránh "Disney", "Mickey Mouse" ở title feed) — mô tả chung "cartoon mouse character crochet".
- Chấp nhận rằng ngay cả vậy, hàng licensed vẫn có thể bị takedown; **đừng bao giờ để nó là trụ doanh thu chính**.
- Cân nhắc **1 store phụ riêng** cho hàng licensed (tách khỏi store ads chính) nếu muốn đẩy mạnh.

> 📌 Nhóm SP an toàn (đẩy feed/ads thoải mái): Safari animals, Baby dragon, Autumn girl doll, các loại Hacky sack (Earth/Solar/Sports/Boho), Coaster/Mug rug (lizard/pumpkin), Keychain Halloween generic, Mesh bottle bag, Name banner, Car charm hoa, Baby mobile.

---

## PHẦN 0 — TRUY CẬP API / MCP
✅ **Đã xong** cho store này: custom app "Claude CLI" (client credentials), MCP `shopify` đã kết nối (14 tools), `.env` + `.mcp.json` cấu hình xong. (Quy trình chi tiết xem `ke_hoach.md` PHẦN 0.)

---

## PHẦN 1 — DỮ LIỆU SẢN PHẨM (dọn từ Google Sheet trước khi import)

### 1.1. Vấn đề dữ liệu cần fix
- [ ] **Ảnh Google Drive `/view`** (#2 Mickey, #16 Toy Story): đổi sang link ảnh trực tiếp hoặc tải về up thẳng lên Shopify. Link `drive.google.com/file/d/ID/view` không dùng làm ảnh sản phẩm được.
- [ ] **Giá theo size** đang nằm trong ô nhiều dòng → tách thành **variants** (option "Size": 4"/6"/8"/10"/12" với giá tương ứng).
- [ ] **Thiếu description** → viết mới, chuẩn GMC (xem 1.2).
- [ ] **Thiếu SKU/MPN** → tạo (vd `CRO-SAFARI-06`) để dùng cho GTIN "no identifier".
- [ ] Gán **collection** (xem PHẦN taxonomy) + tag `no-google-feed` cho hàng licensed.

### 1.2. Title & Description chuẩn GMC (điều chỉnh cho crochet)
- **Title**: `Brand + [Handmade/Crochet] + Product Type + Recipient/Occasion`.
  VD: `Handmade Crochet Safari Animals Plush Set — Baby Shower & Toddler Birthday Gift`
- **Description**: 500 ký tự đầu factual — chất liệu (cotton yarn), kích thước, **"made to order / handmade"**, dịp tặng. ❌ Cấm link, "free shipping", "% off", VIẾT HOA cả câu (giống v1).
- **Nhấn "handmade / made to order"** rõ ràng để set kỳ vọng thời gian giao.

### 1.3. Taxonomy feed (khác v1)
| Nhóm SP | Google Category | Gender | Age |
|---------|-----------------|--------|-----|
| Amigurumi/búp bê len | Toys & Games > Toys > Stuffed Animals | Unisex | Kids/All ages |
| Coaster / Mug rug | Home & Garden > Kitchen & Dining > ... Coasters | Unisex | Adult |
| Hacky sack / footbag | Toys & Games > ... | Unisex | All ages |
| Keychain / bag charm | Luggage & Bags > ... Accessories | Unisex | Adult |
| Name banner / baby mobile | Baby & Toddler > Nursery Decor | Unisex | Kids |

- GTIN → **"no identifier" (Brand + MPN/SKU)** như v1 (hàng handmade không có barcode).

---

## PHẦN 2 — SHIPPING & POLICIES (điều chỉnh thời gian)

- **Markets**: chỉ US trước (giống v1).
- **Shipping zones**: bắt buộc có rate. Gợi ý:
  | Option | Giá | Delivery |
  |--------|-----|----------|
  | Standard | FREE | **2–4 tuần** (gồm made-to-order + transit) |
  | Express | $8.99 (như sheet) | 1–2 tuần |
- **⚠️ Handling/processing = "1–3 tuần (made to order)"** khai đúng ở Shipping Policy + Merchant Center. Đây là điểm sống còn cho hàng thủ công.
- **Return policy**: 30 ngày cho lỗi/hư; **hàng custom (name banner, custom doll) = final sale** — khai rõ, minh bạch (Google chấp nhận).
- Đủ: Shipping / Refund / Privacy / Terms + Contact + About (About nên kể chuyện "handmade by artisans" — tăng trust & chuyển đổi).

---

## PHẦN 3 — MERCHANT CENTER + FEED
- Simprosys (giống v1) **+ exclude collection `no-google-feed`** (hàng licensed).
- Default: **Gender = Unisex, Age tùy nhóm, Condition = New**, Identifier = Brand + MPN.
- MC Shipping chỉ US, delivery time khớp policy (made-to-order dài). Return 30 ngày.
- Nhớ **Re-Sync Meta Fields** sau khi sửa metafield qua API (webhook không tự bắn — bài học v1).

---

## PHẦN 4 — CONVERSION TRACKING
Y hệt v1: GA4 + `purchase` event, **chỉ Purchase account-default + 1 Primary**, tắt account-default cho Page view/Add to cart/Begin checkout, **test đơn thật** trước khi chạy ads.

---

## PHẦN 5 — PMAX & AD ASSETS (angle mới cho crochet)

- Cấu trúc PMax giống v1 (US, Max Conversions → tROAS sau ~15-30 đơn, ~$20-30/ngày, feed chỉ SP an toàn).
- **Asset angle** (thay cho activewear):
  - Headlines: "Handmade Crochet Gifts", "One-of-a-Kind Amigurumi", "Made to Order with Love", "Unique Baby Shower Gift", "Cute Handmade Plush Toys".
  - Long headlines: "Handmade Crochet Plushies & Home Décor — A One-of-a-Kind Gift They'll Keep".
  - Descriptions: "Lovingly handmade to order. Free US shipping. Unique crochet gifts for every occasion."
  - Callouts: "Handmade in USA workshop / Free US Shipping / Made to Order / One-of-a-Kind / 30-Day Returns".
- **Audience signal**: người tìm "crochet plush", "amigurumi doll", "handmade baby shower gift", "personalized nursery decor"; sở thích: handmade/craft, Etsy shoppers, new parents, gift shoppers.

---

## ✅ CHECKLIST v2 (thứ tự)

**A. Dữ liệu**
- [ ] Fix ảnh Drive → link/upload thật
- [ ] Tách giá theo size thành variants
- [ ] Viết title/description chuẩn GMC (nhấn handmade/made-to-order)
- [ ] SKU/MPN + Category + Gender=Unisex + Age đúng nhóm
- [ ] Tag `no-google-feed` cho hàng licensed

**B. Shipping/Policy**
- [ ] Markets US · rates (Standard Free 2-4 tuần + Express $8.99)
- [ ] Handling "made to order 1-3 tuần" khớp 3 nơi
- [ ] Policies + About "handmade story"

**C. Merchant Center**
- [ ] Simprosys exclude `no-google-feed`
- [ ] Default Unisex/Age/Identifier · Re-Sync · Return 30 ngày
- [ ] Feed (chỉ SP an toàn) all Approved

**D. Conversion** — như v1 (test đơn bắt buộc)

**E. Campaign** — PMax feed SP an toàn + Purchase goal + US + assets crochet

---

## 🧠 GOTCHAS BỔ SUNG (ngoài 10 bài học v1)
11. **IP licensed**: loại khỏi feed Google (tag `no-google-feed`) để bảo vệ tài khoản ads — vẫn bán trên store.
12. **Handling time**: hàng thủ công LÂU → khai trung thực, đừng để Google/khách nghĩ giao nhanh.
13. **Ảnh Drive `/view`** không phải ảnh trực tiếp → luôn upload thẳng lên Shopify.
14. **Đừng phí tiền app cá nhân hóa nặng** — hàng handmade chỉ cần variant + ô text.
15. **Category/Gender**: đồ chơi/gia dụng KHÔNG để Female/Adult mặc định như store activewear.
