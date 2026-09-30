# 📦 SOP ĐÓNG GÓI SẢN PHẨM — Chuẩn "Woolly Wishes"

> Mẫu tham chiếu: **Handmade Crochet Alice in Wonderland Dolls**
> `admin.shopify.com/store/2xwptb-f5/products/9770372923637` · handle `crochet-alice-in-wonderland-dolls`
> Cập nhật: 2026-08-02

Tài liệu này bóc tách sản phẩm Alice thành **khuôn**. Mỗi mục có:
**công thức → ví dụ thật → lỗi thường gặp**.

> ### ✅ Đã áp dụng toàn store — 2026-08-02
> SOP này **đã chạy trên cả 25 sản phẩm / 104 variant**. Trạng thái hiện tại:
>
> | Hạng mục | Kết quả |
> |---|---|
> | Vendor = `Woolly Wishes` | 25/25 |
> | SEO title ≤ 60 ký tự | 25/25 (trước đó 23 SP bị cắt cụt ở 70) |
> | Meta description 110–160 | 25/25 |
> | Description ≥ 900 ký tự, đủ 5 khối | 25/25 (trước đó 433–776) |
> | SKU đúng format, không trùng/trống | 104/104 |
> | Compare-at giảm ≥ 40% | 104/104 (trước đó 29–34%) |
> | Tracked + tồn kho 100 | 104/104 |
> | Template trang SP (`standard` / `accessory`) | 25/25 — xem Mục 12b |
> | Hàng licensed dùng tên thương hiệu thật | 8/8 — xem Mục 12 |
>
> **Còn tồn (Mục 11 + 5.2):** weight/xuất xứ/HS code, chuẩn hoá ảnh 2048px, và
> 2 SP chưa có ảnh (`crochet-mouse-friends-dolls`, `crochet-toy-story-dolls`).

Phần ⚠️ còn lại là những chỗ **chưa làm** — làm đúng theo mục "Chuẩn cần đạt".

---

## 0. BẢNG KIỂM 14 TRƯỜNG BẮT BUỘC

Không sản phẩm nào được publish nếu thiếu 1 trong 14 dòng dưới đây.

| # | Trường | Mẫu Alice hiện tại | Trạng thái |
|---|---|---|---|
| 1 | Title | `Handmade Crochet Alice in Wonderland Dolls — Alice, Mad Hatter…` | ✅ |
| 2 | Handle | `crochet-alice-in-wonderland-dolls` | ✅ |
| 3 | Description | 1.311 ký tự, đủ 5 khối | ✅ |
| 4 | SEO title | `Alice in Wonderland Crochet Dolls \| Handmade Amigurumi` (54) | ✅ |
| 5 | Meta description | 128 ký tự | ✅ |
| 6 | Ảnh | 9 ảnh | ⚠️ size lệch (1000/1254/4000) |
| 7 | ALT text | 9/9, mỗi ảnh một câu riêng | ✅ |
| 8 | Options | Size (5) × Character (7) | ✅ |
| 9 | Giá + compare-at 40% | 24.74→37.94 / 41.99→63.99 | ✅ |
| 10 | SKU | `CRO-ALICE-<CHAR>-<SIZE>IN` | ✅ |
| 11 | Tồn kho | tracked, 100/variant | ✅ |
| 12 | Category (taxonomy) | Toys & Games › … › Stuffed Animals | ✅ |
| 13 | Vendor / Product type | `Woolly Wishes` / `Crochet Plush Toy` | ✅ |
| 14 | Cân nặng + xuất xứ + HS code | 0 kg, trống, trống | ❌ thiếu |

---

## 1. TITLE — công thức đặt tên

```
Handmade Crochet <CHỦ ĐỀ> <LOẠI SP> — <3–4 tên/biến thể tiêu biểu> <TỪ KHÓA PHỤ>
```

**Ví dụ thật:**
```
Handmade Crochet Alice in Wonderland Dolls — Alice, Mad Hatter, White Rabbit & Cheshire Cat Amigurumi
```
(104 ký tự)

**Quy tắc:**
- **Front-load từ khóa**: `Handmade Crochet` + chủ đề đứng đầu, vì người Mỹ search
  *"crochet alice in wonderland doll"*, không search tên brand.
- Phần sau dấu `—` là **danh sách nhân vật/biến thể** → ăn thêm long-tail
  (*"crochet cheshire cat"*, *"mad hatter amigurumi"*).
- Kết thúc bằng từ khóa phụ (`Amigurumi`, `Plush`, `Art Doll`) → phủ thêm cách gọi khác.
- Độ dài **90–130 ký tự**. Dài hơn thì Google cắt, ngắn hơn thì phí chỗ.
- Dùng em dash `—` (không phải `-`), dùng `&` thay `and` để tiết kiệm ký tự.

**Không làm:** nhét tên brand vào title, viết HOA toàn bộ, dùng `!!!`, nhồi
`Best Cute Gift Kawaii Soft`.

---

## 2. HANDLE (URL)

```
crochet-<chu-de>-<loai-so-nhieu>
```
Ví dụ: `crochet-alice-in-wonderland-dolls`

- **Bỏ** chữ `handmade` cho URL ngắn.
- **Không bao giờ đổi handle sau khi Google đã index** — mất toàn bộ SEO tích lũy.
- Chỉ chữ thường, gạch ngang, không số thứ tự.

---

## 3. SEO TITLE & META DESCRIPTION

### SEO title
```
<Chủ đề> Crochet <Loại> | Handmade Amigurumi — Woolly Wishes
```
- **≤ 60 ký tự** (Google hiển thị ~580px ≈ 60 ký tự).
- **Đừng để Shopify tự lấy Title sản phẩm làm SEO title.** Title sản phẩm dài 90–130 ký tự,
  bị cắt cụt giữa chừng trên SERP. Mẫu Alice từng dính: 72 ký tự, cắt thành
  `…Alice, Mad Hatter, White ` — treo lơ lửng giữa tên nhân vật.
- Đã sửa thành: `Alice in Wonderland Crochet Dolls | Handmade Amigurumi` (54 ký tự) ✅

### Meta description
```
<Hook cảm xúc 1 câu>. <Chất liệu + made-to-order>. <Đối tượng/dịp tặng>.
```
- **120–155 ký tự**.
- Ví dụ thật (130 ký tự, đạt chuẩn):
  > A whimsical Wonderland-inspired doll set crocheted by hand — soft amigurumi
  > storybook characters for collectors and gift-givers.

Cả 2 trường này lưu ở metafield `global.title_tag` / `global.description_tag`.

---

## 4. DESCRIPTION — blueprint 5 khối

**Chuẩn: 900–1.400 ký tự**, chia 5 khối theo đúng thứ tự đọc lướt.
Mẫu Alice ban đầu chỉ 509 ký tự (thiếu hẳn khối 3 và 5) — đã viết lại thành **1.311 ký tự**.
Bản HTML dưới đây là **nguyên văn description đang chạy trên store**, copy về đổi nội dung
trong `<>` là dùng được cho sản phẩm khác.

```html
<!-- KHỐI 1 — HOOK (1–2 câu, chứa từ khóa chính) -->
<p>A whimsical Wonderland-inspired doll set crocheted by hand — soft amigurumi
storybook characters for collectors and gift-givers.</p>

<!-- KHỐI 2 — BULLET LỢI ÍCH (4–6 dòng, mỗi dòng ≤ 60 ký tự) -->
<ul>
  <li>Handmade amigurumi from soft cotton yarn</li>
  <li>Firmly stuffed and display-ready</li>
  <li>Charming storybook shelf decor</li>
  <li>Thoughtful birthday gift for fans</li>
  <li>Pick one character or collect the whole Wonderland set</li>
  <li>Five sizes, from a 4 in desk buddy to a 12 in cuddle size</li>
</ul>

<!-- KHỐI 3 — THÔNG SỐ (chống hoàn hàng) -->
<p><strong>Details</strong></p>
<ul>
  <li><strong>Material:</strong> 100% cotton yarn with hypoallergenic polyester fiberfill</li>
  <li><strong>Sizes:</strong> 4 in (10 cm), 6 in (15 cm), 8 in (20 cm), 10 in (25 cm), 12 in (30 cm)</li>
  <li><strong>Safety:</strong> embroidered eyes available on request — please ask before ordering for a child under 3</li>
  <li><strong>Care:</strong> spot clean with mild soap and cool water, air dry flat, do not machine wash or tumble dry</li>
</ul>

<!-- KHỐI 4 — MADE-TO-ORDER + KỲ VỌNG GIAO HÀNG (giảm khiếu nại) -->
<p>Every piece is crocheted to order, so please allow <strong>1–3 weeks</strong> for
crafting before your parcel ships. Small variations in stitching and expression are
part of the charm — no two dolls are ever quite identical.</p>

<!-- KHỐI 5 — GÓC QUÀ TẶNG / DỊP (mở rộng intent) -->
<p>A lovely pick for birthdays, baby showers, nursery and bookshelf decor, or as a
keepsake gift for anyone who grew up with the story.</p>
```

**2 bullet mới thêm vào khối 2** (dòng 5–6) là cố ý, không phải cho dài ra:
- *"Pick one character or collect the whole set"* → gợi mua thêm, đẩy AOV vì SP có 7 nhân vật.
- *"Five sizes, from a 4 in desk buddy to a 12 in cuddle size"* → dịch con số sang **công năng**,
  giúp khách chọn size mà không phải tưởng tượng, giảm chọn nhầm → giảm hoàn hàng.

Với SP 1 option, thay 2 dòng này bằng lợi ích khác — đừng để trống cho đủ số.

**Quy tắc nội dung:**
- Từ khóa chính xuất hiện **1 lần ở câu đầu**, không nhồi.
- Khối 3 (**Material / Sizes / Safety / Care**) là bắt buộc — đây là thứ giảm tỷ lệ hoàn
  hàng và là dữ liệu Google đọc để hiểu sản phẩm.
- Khối 4 phải nêu rõ **1–3 tuần** vì hàng làm theo đơn — không nêu = khiếu nại + chargeback.
- Nếu là hàng cho trẻ em: **luôn** có dòng an toàn (mắt thêu vs mắt nhựa, độ tuổi).

---

## 5. ẢNH — quy chuẩn chi tiết

### 5.1. Cấu trúc bộ ảnh (đúng thứ tự)

| Vị trí | Vai trò | File mẫu Alice | Bắt buộc |
|---|---|---|---|
| 1 | **Featured** — group shot cả bộ, có tên nhân vật in dưới | `crochet-collection-names-above-1000.png` | ✅ |
| 2 | Catalog grid — lưới tổng quan | `crochet-character-catalog-grid-4000.png` | ✅ |
| 3…n | **1 ảnh/nhân vật**, gán vào đúng variant | `Alice.png`, `Cheshire_Cat.png`… | ✅ |
| +1 | Scale reference — đặt cạnh bàn tay/cốc để thấy kích thước thật | *chưa có* | 🔶 nên có |
| +2 | Detail shot — cận cảnh mũi len, mắt, chi tiết | *chưa có* | 🔶 nên có |
| +3 | Gift/packaging — hộp quà, giấy gói | *chưa có* | 🔶 nên có |

Ảnh 1 quyết định CTR trên Google Shopping. Ảnh 3…n quyết định tỷ lệ chọn variant.
Ảnh scale reference là thứ **giảm hoàn hàng nhiều nhất** với đồ handmade (khách hay
tưởng 4 in to hơn thực tế).

### 5.2. Thông số kỹ thuật

| Tiêu chí | Chuẩn | Mẫu Alice |
|---|---|---|
| Tỷ lệ | **1:1 vuông**, đồng nhất toàn bộ | ✅ |
| Kích thước | **2048 × 2048 px** | ⚠️ lệch: 1000, 1254, 4000 |
| Dung lượng | < 400 KB/ảnh (JPG q80 hoặc PNG nén) | ⚠️ ảnh 4000px quá nặng |
| Nền | Đồng nhất cả bộ (gỗ ấm + hoa khô như hiện tại) | ✅ |
| Số lượng | 7–12 ảnh | ✅ 9 |

⚠️ **Lệch kích thước là lỗi thật:** ảnh 1000px **không đủ để Shopify bật zoom**
(cần ≥ 2048px), còn ảnh 4000px làm chậm LCP trên mobile. Chuẩn hóa hết về 2048×2048
bằng `sharp` (folder `scratchpad/imgproc` đã có sẵn từ lần xử lý hero).

### 5.3. Đặt tên file = cơ hội SEO đang bị bỏ phí

⚠️ Mẫu Alice đang để `Alice.png`, `Cheshire_Cat.png` — **không có giá trị SEO nào**,
và Google Image Search là nguồn traffic free đáng kể cho đồ handmade.

```
crochet-<chu-de>-<nhan-vat>-amigurumi.jpg
```
```
crochet-alice-in-wonderland-cheshire-cat-amigurumi.jpg
crochet-alice-in-wonderland-mad-hatter-amigurumi.jpg
crochet-alice-in-wonderland-group-set.jpg
```
Chữ thường, gạch ngang, không dấu gạch dưới, không khoảng trắng.

### 5.4. ALT text

Bắt buộc điền. Vừa là SEO (Google Image Search) vừa là yêu cầu tiếp cận (accessibility).

```
<Loại sản phẩm> of <nhân vật> from <chủ đề>, <chi tiết nhận diện>
```
**9 ALT đang chạy trên SP mẫu** (dùng làm khuôn câu chữ):

| Ảnh | ALT | Ký tự |
|---|---|---|
| Group shot | Set of seven handmade crochet Alice in Wonderland amigurumi dolls displayed together with name labels | 101 |
| Catalog grid | Catalog grid of Alice in Wonderland crochet characters including Alice, Cheshire Cat and Mad Hatter | 99 |
| Alice | Handmade crochet Alice doll in a blue dress with white apron and blonde hair, amigurumi plush toy | 97 |
| Caterpillar | Handmade crochet blue Caterpillar amigurumi sitting on a green crochet leaf on a wooden table | 93 |
| Card Soldier | Handmade crochet Card Soldier amigurumi from Alice in Wonderland, playing-card guard plush toy | 94 |
| Cheshire Cat | Handmade crochet Cheshire Cat amigurumi with purple and pink stripes and a wide toothy grin | 91 |
| Mad Hatter | Handmade crochet Mad Hatter amigurumi wearing a tall green top hat, storybook plush doll | 88 |
| Queen of Hearts | Handmade crochet Queen of Hearts amigurumi in a black and red gown with a gold crown | 84 |
| White Rabbit | Handmade crochet White Rabbit amigurumi with long pink-lined ears and a red waistcoat | 85 |

- **80–125 ký tự**, mô tả **cái mắt nhìn thấy** (màu, trang phục, tư thế, nền), không nhồi từ khóa.
- Mỗi ảnh một ALT **khác nhau** — copy y hệt bị Google coi là spam.
- Ảnh tổng thì mô tả *bộ*; ảnh nhân vật thì mô tả *chi tiết nhận diện riêng* của nhân vật đó.
- Mutation dùng: `fileUpdate(files: [{ id, alt }])` — nhận thẳng `gid://shopify/MediaImage/…`.

### 5.5. Gán ảnh vào variant

Mỗi giá trị của option `Character` phải trỏ tới đúng 1 ảnh → khách bấm nhân vật nào,
ảnh đổi theo nhân vật đó. Mẫu Alice **đã làm đúng** (7 ảnh ↔ 7 nhân vật).

---

## 6. OPTIONS & VARIANTS

### Option 1 — `Size` (dùng chung toàn store, không đổi)
```
4 in (10 cm) · 6 in (15 cm) · 8 in (20 cm) · 10 in (25 cm) · 12 in (30 cm)
```
Ghi **cả inch và cm**: inch cho US, cm cho CA/UK.

### Option 2 — `Character` (chỉ thêm khi có ≥ 3 nhân vật)
- Đặt tên option theo **quyết định mua thật sự** của khách: `Character`, `Design`, `Color`.
- **Không** chọn các gợi ý taxonomy vô nghĩa (Battery size, Animal species, Dollhouse scale).
- Giá trị viết **Title Case chuẩn tiếng Anh**: `Queen of Hearts` (chữ *of* thường),
  `Card Soldier` (không phải *Solider*).
- ⚠️ Cứ mỗi option thêm vào, số variant nhân lên: 5 × 7 = **35**. Cân nhắc trước với
  hàng handmade.

### 🚨 BẪY LỚN NHẤT khi thêm option thứ 2
Khi bạn thêm option `Character` vào sản phẩm đã có `Size`, Shopify tạo variant mới
bằng cách **nhân bản variant đầu tiên** → toàn bộ variant mới **kế thừa compare-at price
của size nhỏ nhất**, không theo bậc size.

Ở Alice, 12 variant (6 in và 8 in) bị dính compare-at $34.99 của size 4 in →
PDP hiện *"SAVE 20%"* thay vì 40%. **Luôn chạy lại bước giá ở Mục 7 sau khi thêm option.**

---

## 7. GIÁ — bậc thang + compare-at tự động 40%

### 7.1. Bậc giá bán theo size
Giá gốc size nhỏ nhất `P₁`, mỗi bậc **+$3.30**:

| Size | Công thức | Alice |
|---|---|---|
| 4 in | `P₁` | $24.74 |
| 6 in | `P₁ + 3.30` | $28.04 |
| 8 in | `P₁ + 6.60` | $31.34 |
| 10 in | `P₁ + 9.90` | $34.64 |
| 12 in | `P₁ + 13.20` | $37.94 |

### 7.2. Compare-at price — luôn giảm ≥ 40%
```
compare_at = làm tròn LÊN số .99 gần nhất của (giá bán ÷ 0.6)
```

| Giá bán | ÷ 0.6 | Compare-at | Badge |
|---|---|---|---|
| $24.74 | 41.23 | **$41.99** | SAVE 41% |
| $28.04 | 46.73 | **$46.99** | SAVE 40% |
| $31.34 | 52.23 | **$52.99** | SAVE 41% |
| $34.64 | 57.73 | **$57.99** | SAVE 40% |
| $37.94 | 63.23 | **$63.99** | SAVE 41% |

Làm tròn **lên** để mức giảm luôn ≥ 40% (làm tròn xuống sẽ ra 39.x%, badge tụt xuống 39%).
Đuôi `.99` cho giá gốc trông như MSRP thật.

⚠️ **Compare-at phải đồng nhất theo TỪNG BẬC SIZE, không phải toàn sản phẩm.**
Mọi nhân vật cùng size dùng chung 1 compare-at.

---

## 8. SKU

Ba dạng, tuỳ số option — **size LUÔN là token cuối cùng**:

```
1 option  (size)            CRO-<CHỦ ĐỀ>-<SIZE>
2 option  (size + nhân vật) CRO-<CHỦ ĐỀ>-<NHÂN VẬT>-<SIZE>
1 variant (không option)    CRO-<CHỦ ĐỀ>-OS          ← OS = One Size
```

| Thành phần | Quy tắc | Ví dụ |
|---|---|---|
| `CRO` | Cố định (Crochet) | `CRO` |
| Chủ đề | Viết hoa, **viết liền — KHÔNG gạch ngang bên trong** | `ALICE` `SAFARI` `AUTUMNGIRL` `BABYDRAGON` |
| Nhân vật | 4–6 ký tự, bỏ nếu SP không có option nhân vật | `CHESH` `HATTER` `QUEEN` |
| Size | Số inch + `IN`, hoặc kích thước, hoặc `OS` | `4IN` `12IN` `9X20` `OS` |

```
CRO-ALICE-CHESH-10IN      ← 2 option
CRO-AUTUMNGIRL-4IN        ← 1 option
CRO-MESHFLORAL-9X20       ← 1 option, size không phải inch
CRO-BABYMOBILE-OS         ← 1 variant
```

**Vì sao dạng này:** tách cột bằng dấu `-` trong Google Sheets là ra ngay các chiều
**chủ đề / nhân vật / size** để pivot → biết con nào bán chạy, size nào bán chạy, mà không
cần tra bảng mã.

**Hai quy tắc dễ quên, cả hai đều để pivot không vỡ:**
- **Chủ đề phải viết liền.** `CRO-AUTUMN-GIRL-1` tách ra thành 4 cột, `CRO-AUTUMNGIRL-4IN`
  thành 3 — trộn lẫn hai kiểu thì công thức tách cột sai hết.
- **SP 1 variant vẫn phải có `-OS`.** Không có thì `CRO-LIZARD-COASTER` bị đọc nhầm
  "COASTER" là size.

Nhờ 2 quy tắc này, **token cuối luôn là size** trên toàn bộ store → một công thức duy nhất
tách được cả 104 SKU.

---

## 9. TỒN KHO

| Trường | Giá trị |
|---|---|
| Track quantity | ✅ **Bật** (`inventoryItem.tracked = true`) |
| Quantity | **100** mỗi variant |
| Continue selling when out of stock | ✅ Bật (made-to-order, không bao giờ chặn đơn) |
| Location | Shop location (`gid://shopify/Location/89513165045`) |

Phải bật tracking mới set được số. Không bật thì Shopify không lưu số lượng nào cả.

---

## 10. PHÂN LOẠI, VENDOR, TAGS

| Trường | Giá trị Alice | Ghi chú |
|---|---|---|
| **Category** (taxonomy) | `Toys & Games › Toys › Dolls, Playsets & Toy Figures › Stuffed Animals` | Quyết định Google product category trong feed |
| **Product type** | `Crochet Plush Toy` | Tự do, dùng để lọc nội bộ + smart collection |
| **Vendor** | `Woolly Wishes` | ⚠️ SP tạo mới mặc định là `My Store` — **luôn phải đổi**, vì vendor hiện ra trong feed GMC và trên PDP |

### Schema tag — 3 nhóm

```
[LOẠI]      crochet · handmade · amigurumi · plush-toy · character-doll
[DỊP/NGƯỜI] birthday-gift · storybook · baby-shower · christmas-gift · nursery-decor
[VẬN HÀNH]  made-to-order · licensed-character · no-google-feed
```

Nhóm **LOẠI** và **DỊP** là thứ smart collection bắt theo. Nhóm **VẬN HÀNH** là cờ nội bộ.
Luôn viết chữ thường, gạch ngang.

### Collections (smart, tự động theo tag)
Alice đang thuộc: `Amigurumi & Plush Toys` · `Shop All` · `Licensed Characters (no Google feed)`.
Gắn đúng tag là collection tự nhận, không cần thêm tay.

---

## 11. ⚠️ TRƯỜNG VẬN CHUYỂN — ĐANG THIẾU HOÀN TOÀN

Đây là lỗ hổng nghiêm trọng nhất của sản phẩm mẫu, và chắc chắn 24 SP kia cũng dính.

| Trường | Hiện tại | Cần điền | Vì sao |
|---|---|---|---|
| **Weight** | `0 kg` | 4 in ≈ 0.05 kg → 12 in ≈ 0.35 kg | Rate shipping tính sai → lỗ phí ship hoặc mất đơn |
| **Country of origin** | trống | `VN` | Bắt buộc cho hải quan CA/UK |
| **HS code** | trống | `950300` (nhóm đồ chơi nhồi bông) | Thiếu → hàng kẹt hải quan, khách bị thu phí bất ngờ |

Weight = 0 nghĩa là mọi rate theo cân nặng đều tính bằng 0. Hiện store đang dùng
flat rate nên chưa vỡ, nhưng đổi sang carrier-calculated là sai ngay lập tức.

Gợi ý bậc cân nặng: `4in 0.05 · 6in 0.10 · 8in 0.18 · 10in 0.26 · 12in 0.35` (kg) —
cân thử 1 mẫu thật rồi chốt lại.

---

## 12. XỬ LÝ HÀNG LICENSED (Google feed)

Nếu sản phẩm là nhân vật có bản quyền (Disney, Netflix, Sony…):

1. Gắn tag `licensed-character` **và** `no-google-feed`
2. Smart collection `Licensed Characters (no Google feed)` tự nhận
3. Trong Simprosys → **loại collection này khỏi feed**
4. Vẫn bán bình thường trên store

Alice, Mickey, Pooh, Toy Story, Sofia, Lizzie McGuire, KPop Demon Hunters (8 SP) đều
thuộc nhóm này. **Không bao giờ để lọt vào feed** — 1 lần disapproval có thể kéo theo
suspension cả tài khoản Ads.

### Quy ước câu chữ cho hàng licensed — **CHỐT: dùng tên thật ở mọi trường**

| Trường | Dùng tên thương hiệu? |
|---|---|
| Product title · Handle · SEO title · Meta description · Description body | ✅ **Có, tất cả** |

Ví dụ đang chạy:
```
Crochet Mickey Mouse & Friends Dolls | Handmade
Crochet Winnie the Pooh & Friends Dolls | Handmade
Crochet Toy Story Dolls | Woody, Buzz & Jessie Plush
Crochet Rumi, Mira & Zoey Dolls | KPop Amigurumi
```

**Quyết định của chủ store (2026-08-02):** ưu tiên traffic tìm kiếm. Bản dựng trước đó
từng né tên thương hiệu ở SEO title/meta — **đã bỏ**, nay dùng tên thật ở tất cả các trường
để ăn đúng từ khoá khách gõ.

Hai điều vẫn giữ nguyên và **không được bỏ**:
1. Tag `no-google-feed` → loại khỏi feed GMC. Đây mới là thứ bảo vệ tài khoản Ads.
2. Không dùng logo, artwork chính thức, hay chữ "official/licensed" ở bất kỳ đâu.

*Ghi chú thực tế: "đồ thủ công" không phải ngoại lệ của luật bản quyền/nhãn hiệu — rủi ro
là takedown listing chứ không phải rủi ro kỹ thuật. Chủ store đã cân nhắc và chấp nhận.*

---

## 12b. TEMPLATE TRANG SẢN PHẨM

Store dùng **2 template**, cả hai cùng một layout 8 section, dựng từ `product.alice-in`:

| Template | Dùng cho | Số SP |
|---|---|---|
| `product.standard` | Dòng búp bê / plush có 5 size 4–12 in | 11 |
| `product.accessory` | Lót ly, hacky sack, móc khoá, túi lưới, banner tên, mobile, treo xe | 14 |

### Cấu trúc 8 section (giống hệt nhau ở cả 2)
```
main (13 block: title · rating · price · variant picker · quantity/bundle ·
      buy buttons · sticky ATC · description · 5 collapsible row)
video-testimonials  →  related-products  →  how-it-works
image-row  →  why-choose-us  →  customer-reviews  →  faq
```
Toàn bộ chữ trong template là **cấp brand**, không phải cấp sản phẩm — FAQ ship/đổi trả,
6 review thật, 5 video, "Crafted with Love, One Stitch at a Time". Vì vậy một template
phục vụ được nhiều SP mà không phải sửa gì.

### Vì sao phải tách 2 template
`product.alice-in` có **4 câu chỉ đúng với búp bê**. Nếu bê nguyên sang lót ly hay móc khoá
thì trang sẽ nói sai:

| Chỗ | Bản `standard` (búp bê) | Bản `accessory` |
|---|---|---|
| Collapsible **DIMENSIONS** | *"Pick your height… measured standing"* + bảng 4/6/8/10/12 in | Trỏ về mục **Details** trong description |
| How it works, bước 1 | *"Pick your size and upload your photo"* | *"Pick your options and place your order"* |
| Why choose us — Made to Order | *"We start your **doll**…"* | *"We start your **piece**…"* |
| Why choose us — Talk to the Makers | *"…who crochet the **dolls**"* | *"…who crochet **every piece**"* |

Móc khoá không có tuỳ chọn chiều cao, lót ly không "đứng" để đo — để nguyên là trang tự
mâu thuẫn với chính nó.

### Khi thêm sản phẩm mới
Chỉ cần đặt `templateSuffix` = `standard` hoặc `accessory`, **không tạo template mới**.
Sửa 1 template là 11 hoặc 14 trang đổi theo — đó là lý do gom về 2 file thay vì mỗi SP một file.

```graphql
productUpdate(product: { id: "...", templateSuffix: "accessory" }) { ... }
```

⚠️ `templates/product.alice-in.json` giờ **không SP nào dùng**. Giữ lại làm bản gốc đối chiếu,
đừng sửa — sửa thì sửa `product.standard` / `product.accessory`.

---

## 13. CHECKLIST QA TRƯỚC KHI PUBLISH

```
CONTENT
[ ] Title 90–130 ký tự, từ khóa đứng đầu, có em dash
[ ] Handle dạng crochet-<chu-de>-<loai>, chưa từng đổi
[ ] Description ≥ 900 ký tự, đủ 5 khối (Hook/Bullet/Details/MTO/Gift)
[ ] Có dòng Material + Sizes + Safety + Care
[ ] Có dòng "allow 1–3 weeks"
[ ] SEO title ≤ 60 ký tự, KHÔNG cắt giữa từ
[ ] Meta description 120–155 ký tự

ẢNH
[ ] 7–12 ảnh, tất cả 1:1 và 2048×2048, < 400 KB
[ ] Ảnh 1 = group shot; ảnh 2 = catalog grid
[ ] Mỗi nhân vật 1 ảnh, đã gán đúng variant
[ ] Tên file dạng crochet-<chu-de>-<nhan-vat>-amigurumi.jpg
[ ] ALT text điền 100%, mỗi ảnh một câu khác nhau, 80–125 ký tự
[ ] Có ảnh scale reference

VARIANT & GIÁ
[ ] Option Size dùng đúng 5 mốc chuẩn
[ ] Giá trị option viết Title Case chuẩn (of/the viết thường)
[ ] Bậc giá +$3.30/size
[ ] Compare-at = ceil(giá ÷ 0.6) về .99 — KIỂM TRA LẠI SAU KHI THÊM OPTION
[ ] Badge hiển thị 40–41% ở mọi variant
[ ] SKU đủ 100%, không trùng, đúng format
[ ] Tracked = true, qty = 100, continue selling = on

PHÂN LOẠI
[ ] Category taxonomy đúng nhánh
[ ] Vendor = Woolly Wishes (KHÔNG để "My Store")
[ ] Product type điền
[ ] Tag đủ 3 nhóm
[ ] Nếu licensed: có no-google-feed
[ ] templateSuffix = standard (búp bê 5 size) hoặc accessory (còn lại)

VẬN CHUYỂN
[ ] Weight từng size (không để 0)
[ ] Country of origin = VN
[ ] HS code = 950300
```

---

## 14. TỰ ĐỘNG HÓA — recipe đã kiểm chứng

Sửa tay 35 variant trong Admin UI là bất khả thi. Dùng Shopify CLI.

```powershell
shopify store execute -s 2xwptb-f5.myshopify.com `
  --query-file q.graphql --variable-file v.json `
  --output-file out.json --allow-mutations
```

### Mutation dùng cho từng việc

| Việc | Mutation |
|---|---|
| SKU + compare-at + bật tracking | `productVariantsBulkUpdate` |
| Set số lượng kho | `inventorySetQuantities` |
| Sửa tên giá trị option | `productOptionUpdate` |
| Title/description/SEO/vendor/tags | `productUpdate` |
| ALT text ảnh | `fileUpdate` (KHÔNG phải `productUpdateMedia` — đã deprecated) |

### 🪤 5 cái bẫy đã trả giá để biết

1. **BOM** — PowerShell `Out-File -Encoding utf8` ghi kèm BOM → CLI báo *"Invalid JSON"*.
   Phải dùng:
   ```powershell
   [System.IO.File]::WriteAllText($path, $json, (New-Object System.Text.UTF8Encoding($false)))
   ```
2. **SKU không phải field phẳng** — nằm trong `inventoryItem`:
   ```graphql
   { id: "...", compareAtPrice: "41.99", inventoryItem: { sku: "...", tracked: true } }
   ```
3. **`inventorySetQuantities` cần `changeFromQuantity`** trong từng phần tử → phải query
   số lượng `available` hiện tại trước. Field `ignoreCompareQuantity` đã bị bỏ.
4. **`inventorySetQuantities` bắt buộc directive** `@idempotent(key: "...")` ngay sau tên
   mutation, nếu không sẽ lỗi `BAD_REQUEST`.
5. **`productOptionUpdate` với `variantStrategy: LEAVE_AS_IS`** — sửa tên giá trị option
   sẽ tự lan sang mọi variant, KHÔNG cần đụng từng variant.

Script mẫu đầy đủ (build biến từ dữ liệu query + map size/nhân vật) đã dùng cho Alice,
chỉ cần đổi `$sizeMap` / `$charMap` là chạy được cho sản phẩm khác.

---

## 15. THỨ TỰ THI CÔNG CHO SẢN PHẨM MỚI

```
1. Chuẩn bị ảnh    → resize 2048, đặt tên SEO, chuẩn bị sẵn câu ALT
2. Tạo SP nháp     → title, handle, description 5 khối, SEO title/meta
3. Upload ảnh      → đúng thứ tự, điền ALT ngay lúc upload
4. Category+vendor → taxonomy, product type, vendor, tags 3 nhóm
5. Option 1 Size   → 5 mốc chuẩn
6. Option 2        → chỉ khi ≥3 biến thể; gán ảnh vào từng variant
7. GIÁ (bằng CLI)  → bậc +3.30, compare-at ceil(÷0.6)→.99  ⚠️ SAU khi xong option
8. SKU (bằng CLI)  → CRO-<CHỦ ĐỀ>-<NHÂN VẬT>-<SIZE>IN
9. Kho (bằng CLI)  → tracked, 100, continue selling
10. Vận chuyển     → weight từng size, origin VN, HS 950300
11. Chạy checklist Mục 13
12. Publish        → kiểm tra PDP thật: đổi size/nhân vật xem ảnh + badge % đúng chưa
```

Bước **7 phải nằm sau bước 6** — đây chính là chỗ sinh ra lỗi compare-at ở Alice.
