# Policy set — Woolly Wishes (store `2xwptb-f5`)

Bộ policy cho **store len Woolly Wishes**, pháp nhân **JULY E LLC (Nevada)**.

> Bộ ở thư mục cha (`../01`…`../05`) là của **Luminouswand — store activewear**, pháp nhân
> **SELLER SPRINT LLC (California)**. Hai pháp nhân, hai bang khác nhau. Không dùng lẫn.

## ✅ Đã đăng lên store (2026-07-31)

Đăng bằng Shopify CLI (`shopify store execute`) qua app *Claude CLI Full Stack*.

| Mục | Trạng thái |
|---|---|
| Privacy policy | ✅ `/policies/privacy-policy` |
| Refund policy | ✅ `/policies/refund-policy` |
| Shipping policy | ✅ `/policies/shipping-policy` |
| Terms of service | ✅ `/policies/terms-of-service` |
| Trang Contact | ✅ `/pages/contact`, template `contact`, published |
| Footer menu | ✅ 10 mục, xem dưới |

Privacy policy lúc đầu bị Shopify khoá (*Automatic management*); sau khi tắt đã ghi đè được.
Bản này có đoạn **Photos for Custom Orders** mà bản Shopify tự sinh không có — quan trọng vì
store nhận ảnh khách gửi để làm búp bê, gồm cả ảnh trẻ em.

### Kết quả audit (đọc ngược từ Shopify)

Cả 4 policy: đúng pháp nhân **JULY E LLC**, đúng địa chỉ Las Vegas NV, đúng email
`k3.ecmsuport@gmail.com`. Shipping policy có `$49` và `1–3 weeks`. Footer có đủ 5 link bắt
buộc. Theme MAIN: announcement `Free US shipping over $49`, `goal_1_amount: 49`.

## Thông tin doanh nghiệp

| | |
|---|---|
| Pháp nhân | **JULY E LLC** |
| Địa chỉ | 304 S Jones Blvd 3587, Las Vegas, NV 89107, United States |
| Governing law | **State of Nevada** |
| Điện thoại | +1 213-584-2318 |
| Email | k3.ecmsuport@gmail.com |

Điện thoại lấy từ Settings → General → Business details. Email lấy từ `shop.contactEmail`
của chính store — tức là địa chỉ Shopify vốn đã dùng cho store này.

## Nội dung đã chốt

| Hạng mục | Giá trị |
|---|---|
| Thời gian làm | **1–3 tuần** (theo mô tả sản phẩm đang chạy) |
| Thời gian giao | 7–15 ngày làm việc |
| **Tổng** | **~3–6 tuần** — con số khách thực sự đếm |
| Free shipping | **Free từ $49**, dưới đó $4.99 |
| Thị trường | US · UK · Canada |
| Return window | 30 ngày |

## Footer menu hiện tại

| # | Mục | Link |
|---|---|---|
| 1 | About Us | `/pages/about` |
| 2 | FAQ | `/pages/faq` |
| 3 | Contact Us | `/pages/contact` |
| 4 | Shop All | `/collections/shop-all` |
| 5 | Personalized | `/collections/personalized` |
| 6 | Shipping Policy | `/policies/shipping-policy` |
| 7 | Refund Policy | `/policies/refund-policy` |
| 8 | Privacy Policy | `/policies/privacy-policy` |
| 9 | Terms of Service | `/policies/terms-of-service` |
| 10 | Your Privacy Choices | `/pages/data-sharing-opt-out` |

> **Cảnh báo cho lần sau:** `menuUpdate` **thay thế toàn bộ** danh sách items, không phải
> thêm vào. Lần đầu chạy đã xoá mất 6 mục có sẵn; phải đọc menu ra, ghép thêm, rồi mới ghi
> lại. About Us / FAQ / Contact Us trước đây là kiểu `HTTP`, khôi phục lại thành `PAGE` trỏ
> đúng trang đó — link ra giống hệt và bền hơn khi đổi handle.

## Ngưỡng free shipping — đã đồng bộ (2026-07-31)

Policy ghi **free từ $49**. Rà theme `shrine-theme-pro-v1-6-1` (MAIN) thì thấy **hai** chỗ
nói khác nhau, đã sửa cả hai qua `themeFilesUpsert`:

| File | Trước | Sau |
|---|---|---|
| `sections/header-group.json` → `ann_2` | `Free shipping across the US` (vô điều kiện) | `Free US shipping over $49` |
| `config/settings_data.json` → `goal_1_amount` | `40` | `49` |

`goal_1` là mốc trên thanh tiến trình giỏ hàng. Trước đây nó hứa free ship từ **$40** trong
khi policy ghi $49 — khách đạt $40 sẽ thấy "đã mở khoá free shipping" rồi bị tính phí ở
checkout.

### ⚠️ Hai mốc còn lại chưa xác minh

Cùng thanh đó còn `goal_2` = **20% OFF từ $60** và `goal_3` = **Free Gift từ $80**, đều đang
bật. Nếu trong Shopify **không có discount tự động** tương ứng thì giỏ hàng đang hứa hai thứ
không tồn tại — tệ hơn cả vụ $40, vì khách cố mua thêm cho đủ mốc rồi không nhận được gì.

Kiểm tra: **Discounts** → có automatic discount 20% từ $60 và quà tặng từ $80 không. Không có
thì tắt `enable_goal_2` / `enable_goal_3` trong Theme Editor.

### ⚠️ Chưa kiểm tra được: shipping rate thật

Phiên đăng nhập không xin scope `read_shipping` nên tôi **không đọc được** biểu phí thật.
Vào **Settings → Shipping and delivery** xác nhận có rate *free từ $49* cho US/UK/CA. Nếu
rate thật khác thì policy, announcement bar và thanh tiến trình đều sai theo.

## Còn phải làm

- [x] ~~Tắt Automatic management cho Privacy policy~~ → đã đăng 2026-07-31
- [ ] **Xác minh shipping rate thật** khớp $49
- [ ] **Kiểm tra goal_2 / goal_3** có discount thật không
- [ ] **Xác nhận 1–3 tuần** có đúng không. Nếu sai phải sửa **cả policy lẫn mô tả sản phẩm**
      cùng lúc — chỗ lệch nhau này chính là thứ gây ra mớ mâu thuẫn ban đầu.
- [ ] **Theme Editor → Footer** kiểm tra block menu đang trỏ vào **Footer**, không phải menu khác
- [ ] Bấm thử 10 link ở footer, không có 404
- [ ] Shipping settings trong Merchant Center khớp với `03`
- [ ] Return policy trong Merchant Center khớp với `02`
- [ ] Ghi độ tuổi khuyến cáo lên từng trang sản phẩm đồ chơi

## Khác gì bộ Luminouswand

Ngoài pháp nhân và thời gian giao, bộ này có thêm phần mà bán đồ len làm tay bắt buộc:

- **Sai khác giữa các sản phẩm** — mũi đan, biểu cảm, lô nhuộm không bao giờ giống hệt. Ghi
  rõ không phải lỗi, nhưng bung chỉ / mắt lỏng / sai hàng thì vẫn bảo hành.
- **Hàng làm từ ảnh khách** — không đổi trả vì đổi ý, vẫn bảo hành nếu lỗi.
- **Huỷ đơn trong 24h** — vì bắt đầu làm ngay sau khi đặt.
- **Ảnh khách gửi** — chỉ dùng để làm đơn, không đăng, không quảng cáo nếu chưa xin phép.
  Có nhắc riêng ảnh trẻ em. *(Phần này nằm trong Privacy — chưa đăng được.)*
- **Đồ chơi có chi tiết nhỏ** — nhắc giám sát trẻ nhỏ.

Đây là **bản mẫu tham khảo, không phải tư vấn pháp lý**.
