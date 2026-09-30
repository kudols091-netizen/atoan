# 🎯 KẾ HOẠCH v3 — CẤU TRÚC CHẠY GOOGLE ADS (Max Clicks → PMax)

> **Phạm vi:** file này CHỈ nói về **cấu trúc & vận hành chiến dịch**. Phần setup nền (feed, GMC, shipping, conversion tracking) xem `ke_hoach.md` (v1) và `ke_hoach_v2.md` (crochet).
> **Store:** `2xwptb-f5.myshopify.com` · **Market:** US · **Ngành:** crochet handmade, made-to-order
> **Chiến lược chốt:** Giai đoạn 1 chạy **Standard Shopping – Maximize Clicks** → khi đạt **30–50 conversion/tháng** thì chuyển sang **PMax tập trung vào sản phẩm đang ra đơn ổn định**.
> Cập nhật: 2026-08-04

---

## 📌 TÓM TẮT 1 TRANG

| | **GĐ 1 — HỌC** | **GĐ 2 — TẬP TRUNG** | **GĐ 3 — MỞ RỘNG** |
|---|---|---|---|
| **Thời gian** | Tuần 1–6 | Tuần 7–14 | Tuần 15+ |
| **Campaign** | `SHOP \| US \| All Products` | `PMAX \| US \| Winners` + `SHOP \| US \| Discovery` | + `PMAX \| Testing` + `SEARCH \| Brand` |
| **Bidding** | **Maximize Clicks** (CPC cap $0.60) | PMax: **Maximize Conversions** · Shop: Max Clicks | PMax Winners: **tROAS** |
| **Budget/ngày** | $25–30 | $30 (PMax) + $10 (Shop) | $50–70 tổng |
| **Mục tiêu** | Tìm SP thắng + lọc search term rác | Nhân bản SP thắng, hạ CPA | Scale + bảo vệ brand |
| **Cổng thoát** | ≥30 conv/30 ngày + ≥3 SKU winner | ROAS ≥ breakeven, ổn định 3 tuần | — |

**Nguyên tắc bất di bất dịch**
1. Không chạy $1 nào trước khi qua **Gate 0** (mục 1).
2. **1 thay đổi / tuần**. Đánh giá sau **7–14 ngày**, không sớm hơn.
3. Biết **breakeven ROAS** trước khi bật campaign. Dưới ngưỡng = lỗ, không phải "đang học".
4. Không để 2 campaign bid cùng 1 sản phẩm (xem quy tắc tách feed ở GĐ2).
5. Số liệu ra quyết định lấy ở mốc **≥100 clicks** hoặc **≥$30 chi tiêu** cho 1 SKU — dưới ngưỡng đó là nhiễu.

---

## PHẦN 1 — GATE 0: ĐIỀU KIỆN TIÊN QUYẾT (chưa đủ = chưa bật ads)

Tick đủ 10 dòng dưới đây mới được bật campaign. Đây là cửa chặn tốn kém nhất nếu bỏ qua.

| # | Điều kiện | Kiểm tra ở đâu |
|---|---|---|
| 1 | Feed **all Approved**, 0 disapproved | Merchant Center → Products |
| 2 | Hàng licensed **đã loại khỏi feed** (`no-google-feed`) | Simprosys → filter collection |
| 3 | GMC ↔ Google Ads **đã link 2 chiều** | Ads → Tools → Linked accounts |
| 4 | GA4 `purchase` event **đã bắn thật** (đơn test qua browser) | GA4 → Realtime |
| 5 | **Chỉ Purchase** là account-default + Primary | Ads → Goals → Conversions |
| 6 | Page view / Add to cart / Begin checkout = **Secondary** | Ads → Goals |
| 7 | Billing thẻ OK, không dư nợ | Ads → Billing |
| 8 | Shipping khớp 3 nơi (checkout ↔ policy ↔ MC) | Thủ công |
| 9 | Store công khai, SSL, không khoá password | Storefront |
| 10 | **Đã tính breakeven ROAS** (mục 1.1) | File này |

### 1.1. Tính breakeven ROAS (làm ngay, ghi số vào đây)

```
Breakeven ROAS = 1 ÷ Tỷ lệ lợi nhuận gộp

Tỷ lệ LN gộp = (Giá bán − Giá vốn − Phí ship thực tế − Phí thanh toán ~3%) ÷ Giá bán
```

Ví dụ mẫu cho amigurumi $39, vốn len+công $12, ship US $5, phí TT $1.2:

| Chỉ số | Giá trị |
|---|---|
| Doanh thu | $39.00 |
| Giá vốn (len + công thợ) | $12.00 |
| Ship thực tế | $5.00 |
| Phí Shopify Payments (2.9%+$0.30) | $1.43 |
| **Lợi nhuận gộp** | **$20.57 (52.7%)** |
| **Breakeven ROAS** | **1.90** |
| **Target ROAS thực tế (lãi 20%)** | **≈ 2.6** |

> ⚠️ **Ghi con số thật của bạn vào đây trước khi chạy.** Mọi quyết định "tắt / giữ / scale" ở các giai đoạn sau đều so với con số này. ROAS 1.8 nghe có vẻ ổn nhưng nếu breakeven là 1.9 thì bạn đang **lỗ**.

### 1.2. Ngân sách cần để đạt mục tiêu 30–50 conv/tháng

Đây là bài toán ngược — kiểm tra xem budget bạn định chi có đủ về mặt toán học không:

```
Clicks cần/tháng = Conversion mục tiêu ÷ Conversion rate
Budget/tháng     = Clicks cần × CPC
```

| Kịch bản | CR | CPC | Clicks cần cho 30 conv | Budget/tháng | Budget/ngày |
|---|---|---|---|---|---|
| Xấu | 1.0% | $0.70 | 3,000 | $2,100 | **$70** ❌ quá sức |
| **Thực tế** | **1.8%** | **$0.55** | **1,667** | **$917** | **≈ $30** ✅ |
| Tốt | 2.5% | $0.45 | 1,200 | $540 | $18 |

**Kết luận: $25–30/ngày là mức tối thiểu hợp lý** để đạt cổng 30 conv/tháng trong ~4–6 tuần.
Nếu chỉ chạy được $15/ngày → chấp nhận cổng chuyển giai đoạn kéo dài 8–10 tuần, **đừng ép chuyển PMax sớm**.

---

## PHẦN 2 — CHUẨN BỊ FEED LABELS (làm TRƯỚC khi bật campaign)

Đây là hạ tầng để tách sản phẩm ở GĐ2. **Làm sau sẽ mất data lịch sử** → làm ngay bây giờ.

### 2.1. Bốn nhãn cần gắn (Simprosys → Custom Labels, hoặc Shopify tag → map sang label)

| Label | Ý nghĩa | Giá trị | Ai gán |
|---|---|---|---|
| `custom_label_0` | Nhóm sản phẩm | `plush` / `homeware` / `accessory` / `nursery` | Bạn, ngay bây giờ |
| `custom_label_1` | **Hiệu suất** ⭐ | `winner` / `test` / `loser` | Bạn, cập nhật hàng tuần từ GĐ1 |
| `custom_label_2` | Biên lợi nhuận | `high` (>55%) / `mid` (40–55%) / `low` (<40%) | Bạn, ngay bây giờ |
| `custom_label_3` | Giá | `under25` / `25-50` / `over50` | Bạn, ngay bây giờ |

### 2.2. Trạng thái khởi tạo

- Ngày đầu: **toàn bộ SP** để `custom_label_1 = test`.
- Chưa có `winner` nào — đó là bình thường, GĐ1 sinh ra nó.

### 2.3. Quy tắc phân loại (áp dụng từ tuần 3 trở đi, cập nhật mỗi Thứ Hai)

| Điều kiện (dữ liệu 30 ngày) | → Label |
|---|---|
| ≥2 conversion **và** ROAS ≥ breakeven | `winner` |
| ≥$30 chi tiêu, 0 conversion | `loser` |
| ≥$30 chi tiêu, có conv nhưng ROAS < 60% breakeven | `loser` |
| Chưa đủ $30 chi tiêu | giữ `test` |
| 1 conversion, ROAS ≥ breakeven | giữ `test` (chờ xác nhận) |

> ⚠️ Sau mỗi lần sửa label qua API/metafield → **bắt buộc bấm "Re-Sync Meta Fields"** trong Simprosys (bài học #1 của v1: webhook không tự bắn).

> 📌 **Lưu ý riêng cho store này:** feed chỉ có ~17 SP an toàn → nhóm `winner` khả thi là **3–5 SKU**. Đừng kỳ vọng phân nhóm mịn như store 200 SKU. Nếu sau 6 tuần chỉ có 2 winner → vẫn chạy PMax được, nhưng nên bổ sung SP mới vào feed song song.

---

## PHẦN 3 — GIAI ĐOẠN 1: MAXIMIZE CLICKS (Tuần 1–6)

### 3.1. Vì sao Max Clicks trước, không phải PMax ngay

| | Max Clicks (Standard Shopping) | PMax ngay từ đầu |
|---|---|---|
| Thấy được search term | ✅ Có | ❌ Không (hộp đen) |
| Thấy SP nào ra đơn | ✅ Chi tiết theo Item ID | ⚠️ Hạn chế |
| Cần data lịch sử để chạy tốt | ❌ Không | ✅ Có (thiếu → học 2–3 tháng) |
| Kiểm soát traffic rác | ✅ Negative keyword | ❌ Rất hạn chế |
| Chi phí học | Thấp | Cao |

Với niche crochet, lý do #1 là **traffic rác**: rất nhiều người search "crochet…" là **thợ đan tìm pattern miễn phí**, không phải người mua quà. Max Clicks + negative keyword là cách duy nhất lọc được nhóm này. Chạy PMax ngay = trả tiền cho traffic đó suốt 2 tháng mà không biết.

### 3.2. Cấu hình chi tiết campaign GĐ1

**Đường đi:** Google Ads → New campaign → **Sales** → **Shopping** → chọn Merchant Center account → **Standard Shopping** (KHÔNG chọn Performance Max ở màn này).

| Trường | Giá trị | Ghi chú |
|---|---|---|
| Campaign name | `SHOP \| US \| All Products \| MaxClicks` | Đặt tên có quy tắc ngay từ đầu |
| Merchant account | 2xwptb-f5 | Feed đã loại licensed |
| Country of sale | United States | |
| Inventory filter | **All products** | GĐ1 cho chạy hết để lấy data |
| **Bidding** | **Maximize clicks** | |
| **Max CPC bid limit** | **$0.60** ⭐ | **BẮT BUỘC set.** Không set = Google đẩy CPC lên $2+ |
| Budget | $25–30/ngày | |
| Campaign priority | Low | Chỉ 1 campaign nên không quan trọng |
| Networks — Search Partners | **OFF** | Chất lượng thấp, bật sau nếu cần |
| Networks — YouTube/Display/Gmail | **OFF** | Không có ở Standard Shopping |
| **Locations** | United States | |
| **Location options** ⭐ | **"Presence: People in or regularly in your targeted locations"** | **Lỗi kinh điển**: để mặc định "Presence or interest" → tiền chảy sang Ấn Độ/Philippines |
| Languages | English | |
| Ad schedule | All day | Chưa đủ data để cắt khung giờ |
| Devices | All | Xem báo cáo sau 3 tuần rồi mới điều chỉnh |
| Conversion goals | **Chỉ tick Purchase** (override account default) | |
| Ad group | 1 ad group: `All Products` | 1 product group "All products" |

### 3.3. Danh sách negative keyword khởi tạo (thêm ngay ngày 1)

Tạo **Negative keyword list** dùng chung (Tools → Shared library → Negative keyword lists) tên `MASTER - Crochet Junk` rồi apply cho mọi campaign.

**Nhóm A — Người làm nghề, không phải người mua (phrase match):**
```
"pattern"        "patterns"       "free pattern"   "crochet pattern"
"tutorial"       "how to"         "how to crochet" "diy"
"instructions"   "ebook"          "pdf"            "printable"
"ravelry"        "video"          "class"          "course"
"lesson"         "beginner guide"
```

**Nhóm B — Tìm nguyên liệu, không tìm thành phẩm:**
```
"yarn"           "crochet hook"   "hooks"          "supplies"
"kit"            "kits"           "stuffing"       "polyfill"
"safety eyes"    "thread"         "wool skein"
```

**Nhóm C — Sai ý định thương mại:**
```
"free"           "wholesale"      "bulk"           "cheap"
"used"           "second hand"    "job"            "hiring"
"repair"         "how much"       "meaning"        "history"
```

**Nhóm D — Sàn khác (không muốn cạnh tranh trên từ khoá của họ):**
```
"etsy"           "amazon"         "temu"           "aliexpress"
"walmart"        "shein"
```

> ⚠️ **KHÔNG** negative các từ: `handmade`, `gift`, `personalized`, `custom`, `baby shower`, `amigurumi`, `plush`, `stuffed` — đây là túi tiền của bạn.

### 3.4. Lịch vận hành GĐ1

**Hàng ngày (10 phút, mỗi sáng):**
1. Ads → campaign → **Insights & reports → Search terms**
2. Lọc theo 7 ngày gần nhất, sort theo Cost giảm dần
3. Term nào có click mà rõ ràng sai ý định → thêm vào negative list ngay
4. Kiểm tra budget có bị tiêu hết trước 18h không (nếu có → CPC cap có thể đang quá thấp/cao)

**Hàng tuần (Thứ Hai, 30 phút):**
1. Report → Shopping → **Item ID**: xem SKU nào đang ăn tiền
2. Áp quy tắc mục 2.3 → cập nhật `custom_label_1`
3. Re-Sync Simprosys
4. Ghi số vào bảng theo dõi (mục 6)
5. **Chỉ được thay đổi 1 thứ**: hoặc CPC cap, hoặc budget, hoặc loại SKU. Không làm cả 3.

**Điều chỉnh CPC cap:**
| Tình huống | Hành động |
|---|---|
| Impressions rất thấp (<300/ngày) | Tăng cap lên $0.75 |
| Budget cạn trước 12h trưa | Giảm cap xuống $0.45 (lấy nhiều click rẻ hơn) |
| CTR < 0.5% | Vấn đề ở **ảnh + title**, không phải bid → sửa feed |
| CPC trung bình sát cap | Cap đang bó → tăng 20% |

### 3.5. Cổng chuyển sang GĐ2 (phải đủ CẢ 4)

| # | Tiêu chí | Ngưỡng |
|---|---|---|
| 1 | Conversion trong 30 ngày liên tiếp | **≥ 30** |
| 2 | Số SKU đạt chuẩn `winner` | **≥ 3** |
| 3 | ROAS toàn campaign | **≥ 80% breakeven** (vd ≥1.52 nếu breakeven 1.90) |
| 4 | Negative list đã ổn định | Tuần gần nhất thêm < 5 term mới |

**Nếu sau 8 tuần vẫn không qua cổng** → KHÔNG chuyển PMax. Vấn đề nằm ở nơi khác:

| Triệu chứng | Chẩn đoán | Xử lý |
|---|---|---|
| CTR < 0.5% | Ảnh/title/giá không cạnh tranh | Sửa feed: ảnh nền trắng, title front-load, so giá đối thủ |
| CTR ổn, CR < 0.8% | **Lỗi ở website, không phải ads** | Sửa product page, trust badge, shipping time hiển thị rõ, review |
| CPC > $1 | Traffic rác chưa lọc hết | Đào sâu search terms |
| Impressions < 200/ngày | Feed quá ít SP / bid quá thấp | Thêm SP an toàn vào feed, tăng cap |

> 💡 **Dừng lại và sửa web** là quyết định đúng, không phải thất bại. Đổ thêm tiền vào ads khi CR < 0.8% là đốt tiền có kế hoạch.

---

## PHẦN 4 — CHUYỂN GIAI ĐOẠN (Tuần 7, làm trong 1 ngày)

### 4.1. Quy tắc vàng: KHÔNG để 2 campaign bid cùng 1 sản phẩm

PMax luôn thắng Standard Shopping trong đấu giá nội bộ. Nếu để trùng, Standard Shopping sẽ chết đói nhưng vẫn tiêu budget vô ích. Cách tách sạch:

```
┌─────────────────────────────────────┐
│  PMAX | US | Winners                │
│  → CHỈ custom_label_1 = winner      │  ← SP đã chứng minh ra đơn
│  → $30/ngày, Max Conversions        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  SHOP | US | Discovery              │
│  → EXCLUDE custom_label_1 = winner  │  ← SP còn lại, tiếp tục dò
│  → EXCLUDE custom_label_1 = loser   │
│  → $10/ngày, Max Clicks             │
└─────────────────────────────────────┘
```

Không SKU nào nằm ở cả hai. `loser` không nằm ở đâu cả.

### 4.2. Thứ tự thao tác (đúng thứ tự này)

1. **Ngày 1:** Cập nhật `custom_label_1` lần cuối cho toàn bộ feed → Re-Sync Simprosys → chờ feed cập nhật (2–6h)
2. **Ngày 1:** Sửa campaign `SHOP | US | All Products`:
   - Đổi tên → `SHOP | US | Discovery`
   - Product group: exclude `winner` + exclude `loser`
   - Giảm budget xuống $10
3. **Ngày 1:** Tạo mới `PMAX | US | Winners` (cấu hình mục 5.1)
4. **Ngày 2–14:** **KHÔNG ĐỘNG VÀO GÌ CẢ.** PMax learning phase.
5. **Ngày 15:** Đánh giá lần đầu.

> ⚠️ Đừng tắt Standard Shopping hoàn toàn. Nó là "máy dò" liên tục tìm SP thắng mới và là nguồn search term duy nhất bạn còn nhìn thấy được sau khi lên PMax.

---

## PHẦN 5 — GIAI ĐOẠN 2: PMAX WINNERS (Tuần 7–14)

### 5.1. Cấu hình chi tiết PMax

**Đường đi:** New campaign → **Sales** → **Performance Max** → chọn Merchant Center.

| Trường | Giá trị | Ghi chú |
|---|---|---|
| Campaign name | `PMAX \| US \| Winners` | |
| **Conversion goals** | Bỏ tick "Use account-default" → **chỉ tick Purchase** | Quan trọng nhất |
| **Bidding** | **Maximize conversions** | ❌ **KHÔNG set tCPA/tROAS ngay** — bó quá chặt PMax sẽ không tiêu được tiền |
| Budget | $30/ngày | |
| **Locations** | United States, **Presence** | Lại kiểm tra, đừng để mặc định |
| Languages | English | |
| **Listing groups** | Chỉ include `custom_label_1 = winner` | Ở màn Asset group → Listing groups |
| Final URL expansion | **OFF** ở tháng đầu | Bật sau khi ổn định, để tránh PMax đẩy traffic về trang linh tinh |
| Brand exclusions | Thêm brand đối thủ nếu có | |
| **Customer acquisition** | Bật "Bid higher for new customers" | Store mới, ưu tiên khách mới |

### 5.2. Asset group (1 cái duy nhất ở GĐ này)

| Loại asset | Số lượng | Nội dung (angle crochet, lấy từ v2 PHẦN 5) |
|---|---|---|
| **Headlines** (30 ký tự) | 8–10 | `Handmade Crochet Gifts` · `One-of-a-Kind Amigurumi` · `Made to Order with Love` · `Unique Baby Shower Gift` · `Cute Handmade Plush Toys` · `Free US Shipping` · `Crochet Plush & Decor` · `Gifts They'll Keep Forever` |
| **Long headlines** (90) | 3–5 | `Handmade Crochet Plushies & Home Décor — A One-of-a-Kind Gift They'll Keep` |
| **Descriptions** (90) | 4–5 | `Lovingly handmade to order. Free US shipping. Unique crochet gifts for every occasion.` |
| **Images 1:1** | 4+ | Ảnh SP nền sạch |
| **Images 1.91:1** | 4+ | Ảnh lifestyle (bé ôm thú len, coaster trên bàn) |
| **Images 4:5** | 2+ | Dọc, cho mobile feed |
| **Logo 1:1 + 4:1** | 2 | |
| **Video** | 1+ | Nếu không có, để Google auto-generate — có video vẫn tốt hơn không |
| **Sitelinks** | 4 | Shop All · About Our Workshop · Shipping & Returns · Contact |
| **Callouts** | 4+ | `Handmade in USA` · `Free US Shipping` · `Made to Order` · `30-Day Returns` |

**Audience signal** (chỉ là gợi ý cho Google, không phải giới hạn):
- Custom segment — search terms thắng từ GĐ1 (lấy số liệu thật, không đoán): `crochet plush`, `amigurumi doll`, `handmade baby shower gift`, `personalized nursery decor`, `crochet coaster set`
- Custom segment — website: etsy.com, ravelry.com (người mua handmade)
- Your data: danh sách khách đã mua (nếu ≥100 người), website visitors 30/90 ngày
- In-market: Gifts, Baby & Children's Products, Home Decor

### 5.3. Lịch vận hành GĐ2

**Tuần 1–2 (learning):** Không đụng. Chỉ xem có tiêu hết budget không. Nếu tiêu <60% budget → asset yếu hoặc nhóm winner quá hẹp.

**Từ tuần 3, mỗi Thứ Hai (30 phút):**
1. Campaign → **Insights → Search themes / Top search categories** (thứ PMax cho xem)
2. Asset group → **Asset details** → thay asset bị đánh giá **"Low"** (giữ "Best"/"Good")
3. Report → Item ID: có SKU winner nào tụt xuống? Có SKU test nào lên winner? → cập nhật label
4. Ghi số vào bảng theo dõi

**Nâng budget:** +20–30% mỗi lần, cách nhau **tối thiểu 5 ngày**. Nhân đôi đột ngột = reset learning phase.

### 5.4. Khi nào chuyển sang tROAS

Chỉ khi đủ **cả 3**:
- PMax đã chạy ≥3 tuần
- ≥30 conversion trong campaign PMax đó
- ROAS ổn định (dao động <25% giữa các tuần)

Cách set: **tROAS = ROAS trung bình 30 ngày qua** (không cao hơn). Muốn tăng thì tăng từng bước +10%/2 tuần.
> Set tROAS quá cao (vd đang 2.0 mà set 4.0) → PMax gần như ngừng chạy. Đây là lỗi phổ biến thứ hai sau việc để sai conversion goal.

---

## PHẦN 6 — GIAI ĐOẠN 3: MỞ RỘNG (Tuần 15+)

Chỉ mở rộng khi GĐ2 **có lãi ổn định 3 tuần liên tiếp**. Không mở rộng để "cứu" campaign đang lỗ.

| Campaign | Loại | Bidding | Budget | Vai trò |
|---|---|---|---|---|
| `PMAX \| US \| Winners` | PMax | **tROAS** = ROAS thực tế | $40–60 | Cỗ máy chính |
| `PMAX \| US \| Testing` | PMax | Max Conversions | $15 | SP mới + `test` đầy hứa hẹn |
| `SHOP \| US \| Discovery` | Shopping | Max Clicks, cap $0.60 | $10 | Máy dò + nguồn search term |
| `SEARCH \| Brand` | Search | Max Clicks | $5 | Chặn đối thủ đấu tên brand |

**Hướng mở rộng theo thứ tự ưu tiên:**
1. **Tăng budget PMax Winners** (rẻ nhất, an toàn nhất) — cho tới khi ROAS bắt đầu giảm >20%
2. **Thêm SKU mới vào feed** — nguồn tăng trưởng thật của store 17 SP
3. **Mở thị trường**: Canada → UK (mỗi lần 1 nước, campaign riêng, KHÔNG gộp vào campaign US)
4. **Mùa vụ**: tách campaign riêng cho Q4 (Christmas gift) với budget đẩy mạnh từ đầu tháng 10

---

## PHẦN 7 — BẢNG THEO DÕI & NGƯỠNG HÀNH ĐỘNG

### 7.1. KPI chuẩn ngành (US, e-commerce handmade/gift)

| Chỉ số | 🔴 Báo động | 🟡 Chấp nhận | 🟢 Tốt | Ý nghĩa khi đỏ |
|---|---|---|---|---|
| CTR (Shopping) | < 0.6% | 0.6–1.2% | > 1.2% | Ảnh/title/giá yếu → sửa **feed** |
| CPC | > $1.00 | $0.50–1.00 | < $0.50 | Traffic rác → **negative keyword** |
| Conversion rate | < 0.8% | 0.8–2.0% | > 2.0% | Lỗi ở **website**, không phải ads |
| CPA | > LN gộp | 60–100% LN gộp | < 60% LN gộp | |
| ROAS | < breakeven | breakeven–target | > target | |
| Impression share lost (budget) | > 50% | 20–50% | < 20% | Bị giới hạn budget → cân nhắc tăng |

### 7.2. Bảng ghi số hàng tuần (copy vào Sheet)

| Tuần | Chi tiêu | Impr | Clicks | CTR | CPC | Conv | CR | Doanh thu | ROAS | Winner SKU | Ghi chú thay đổi |
|---|---|---|---|---|---|---|---|---|---|---|---|
| W1 | | | | | | | | | | 0 | |
| W2 | | | | | | | | | | | |
| W3 | | | | | | | | | | | |
| … | | | | | | | | | | | |

> Cột **"Ghi chú thay đổi"** là quan trọng nhất. Không ghi = 3 tuần sau không biết vì sao số thay đổi.

### 7.3. Cây quyết định nhanh

```
Chạy 2 tuần, chi $350, 0 conversion?
├─ CTR < 0.6%  → Sửa feed (ảnh, title, giá). KHÔNG tăng budget.
├─ CTR ổn, CR = 0 → Kiểm tra tracking có bắn không (test đơn lại)
│                  → Nếu tracking OK: lỗi website. Dừng ads, sửa web.
└─ CPC > $1     → Search terms report, cắt sạch traffic rác

Có conversion nhưng ROAS < breakeven?
├─ Tập trung ở 1–2 SKU lỗ  → Loại SKU đó (label loser)
├─ Rải đều mọi SKU         → Giá bán quá thấp / vốn quá cao → xem lại pricing
└─ AOV thấp                → Thêm bundle, upsell, free-ship threshold

PMax tiêu không hết budget?
├─ Nhóm winner quá hẹp     → Nới thêm SKU `test` tốt vào
├─ Asset bị "Low"          → Thay asset
└─ tROAS set quá cao       → Hạ về mức ROAS thực tế
```

---

## PHẦN 8 — TIMELINE & NGÂN SÁCH DỰ KIẾN

Mốc bắt đầu: **2026-08-04** (giả định Gate 0 đã xong).

| Tuần | Ngày | Việc chính | Chi tiêu tuần | Luỹ kế |
|---|---|---|---|---|
| W1 | 04/08 – 10/08 | Bật `SHOP MaxClicks` $25/ngày · cắt negative hàng ngày | $175 | $175 |
| W2 | 11/08 – 17/08 | Tiếp tục lọc · **chưa đánh giá SKU** | $175 | $350 |
| W3 | 18/08 – 24/08 | Phân loại SKU lần 1 · loại `loser` | $200 | $550 |
| W4 | 25/08 – 31/08 | Tăng lên $30/ngày nếu CTR ổn | $210 | $760 |
| W5 | 01/09 – 07/09 | Kiểm tra cổng chuyển GĐ2 | $210 | $970 |
| W6 | 08/09 – 14/09 | Chốt danh sách `winner` | $210 | $1,180 |
| **W7** | 15/09 – 21/09 | **Chuyển giai đoạn**: PMax $30 + Shop $10 | $280 | $1,460 |
| W8 | 22/09 – 28/09 | Learning phase — không đụng | $280 | $1,740 |
| W9–10 | 29/09 – 12/10 | Đánh giá PMax lần 1 · tối ưu asset | $560 | $2,300 |
| W11–14 | 13/10 – 09/11 | Chuyển tROAS nếu đủ điều kiện · chuẩn bị Q4 | $1,120 | $3,420 |
| W15+ | 10/11 → | Scale + campaign Q4 Christmas | $350+/tuần | — |

**Ngân sách tối thiểu cần chuẩn bị: ~$1,500 cho 8 tuần đầu.** Đây là học phí + vốn tìm SP thắng. Nếu chỉ có $500 → chạy $10/ngày và chấp nhận timeline dài gấp 3.

---

## PHẦN 9 — 10 SAI LẦM GIẾT TÀI KHOẢN (đọc lại mỗi tháng)

| # | Sai lầm | Hậu quả | Phòng tránh |
|---|---|---|---|
| 1 | Để nhiều conversion action là Primary | Google tối ưu cho add-to-cart, không phải đơn hàng | Chỉ Purchase, kiểm tra lại mỗi tháng |
| 2 | Location để mặc định "presence **or interest**" | Tiền chảy sang nước không target | Đổi thành **Presence** |
| 3 | Không set Max CPC cap ở Max Clicks | CPC vọt $2+, cháy budget trong 2h | Luôn set cap |
| 4 | Chuyển PMax quá sớm (chưa đủ conv) | PMax học 2–3 tháng không xong | Giữ đúng cổng 30 conv |
| 5 | Đổi 3–4 thứ cùng lúc | Không biết cái nào tác động | 1 thay đổi/tuần, ghi log |
| 6 | Tắt/bật campaign liên tục | Mỗi lần bật = learning phase mới | Đã bật thì chạy tối thiểu 14 ngày |
| 7 | Set tROAS quá cao | PMax ngừng chạy | tROAS = ROAS thực tế, tăng +10%/2 tuần |
| 8 | Không loại SP lỗ | 20% SKU nuốt 80% budget | Rà Item ID mỗi tuần |
| 9 | Để PMax và Shopping trùng sản phẩm | Shopping chết đói, tiền lãng phí | Tách bằng `custom_label_1` |
| 10 | Đổ thêm tiền khi CR < 0.8% | Đốt tiền có kế hoạch | Sửa website trước, ads sau |

---

## ✅ CHECKLIST TỔNG v3

**Trước khi chạy (Gate 0)**
- [ ] 10 điều kiện tiên quyết PHẦN 1
- [ ] Tính & ghi breakeven ROAS: `______`
- [ ] Xác nhận budget đủ theo bài toán ngược mục 1.2
- [ ] Gắn 4 custom labels cho toàn bộ feed
- [ ] Tạo negative keyword list `MASTER - Crochet Junk`

**Giai đoạn 1 (Tuần 1–6)**
- [ ] Tạo `SHOP | US | All Products | MaxClicks`, CPC cap $0.60, Presence, Purchase-only
- [ ] Search terms report **mỗi ngày** tuần 1–2
- [ ] Phân loại SKU từ tuần 3, cập nhật `custom_label_1` mỗi Thứ Hai
- [ ] Re-Sync Simprosys sau mỗi lần đổi label
- [ ] Kiểm tra 4 tiêu chí cổng chuyển giai đoạn

**Chuyển giai đoạn (Tuần 7)**
- [ ] Chốt label `winner` cuối cùng → Re-Sync → chờ feed
- [ ] Đổi Shopping thành `Discovery`, exclude winner + loser, hạ $10
- [ ] Tạo `PMAX | US | Winners`, Max Conversions, Purchase-only, listing group = winner
- [ ] Asset group đầy đủ (8+ headlines, 3 tỷ lệ ảnh, sitelinks, callouts, audience signal)
- [ ] **14 ngày không đụng vào**

**Giai đoạn 2–3**
- [ ] Rà asset "Low" mỗi tuần
- [ ] Chuyển tROAS khi đủ 3 điều kiện mục 5.4
- [ ] Tăng budget +20–30%/lần, cách 5 ngày
- [ ] Thêm `SEARCH | Brand` bảo vệ thương hiệu
- [ ] Chuẩn bị campaign Q4 từ đầu tháng 10

---

## 🔗 LIÊN KẾT

- `ke_hoach.md` — setup nền: API, feed, GMC, shipping, conversion tracking (v1 activewear)
- `ke_hoach_v2.md` — điều chỉnh cho crochet: IP licensed, taxonomy, handling time, ad angle
- `ke_hoach_ads_v3.md` — **file này**: cấu trúc & vận hành campaign
