# Policy set — Woolly Wishes (store `2xwptb-f5`)

Bộ policy cho **store len Woolly Wishes**, pháp nhân **JULY E LLC (Nevada)**.

> Bộ ở thư mục cha (`../01`…`../05`) là của **Luminouswand — store activewear**, pháp nhân
> **SELLER SPRINT LLC (California)**. Hai pháp nhân, hai bang khác nhau. Không dùng lẫn.

## ✅ Đã đăng lên store (2026-07-31)

Đăng bằng Shopify CLI (`shopify store execute`) qua app *Claude CLI Full Stack*.

| Mục | Trạng thái |
|---|---|
| Refund policy | ✅ đã ghi đè `/policies/refund-policy` |
| Shipping policy | ✅ đã ghi đè `/policies/shipping-policy` |
| Terms of service | ✅ đã ghi đè `/policies/terms-of-service` |
| **Privacy policy** | ❌ **chưa** — xem mục dưới |
| Trang Contact | ✅ `/pages/contact`, template `page.contact` |
| Footer menu | ✅ 10 mục, xem dưới |

### ⚠️ Privacy policy chưa đăng được

Shopify trả về:

> *Automatic management for Privacy Policy must be turned off in order to make changes.*

Store đang bật **tự động quản lý** privacy policy — Shopify tự sinh nội dung và khoá không
cho ghi đè. Muốn dùng bản trong `01-privacy-policy.md`:

**Settings → Policies → Privacy policy → tắt "Automatic management"** → rồi báo tôi, hoặc
tự dán nội dung file vào.

Cân nhắc: bản Shopify tự sinh cũng hợp lệ và tự cập nhật theo luật. Nhưng nó **không có**
đoạn về **ảnh khách gửi cho đơn hàng làm từ ảnh** — mà đó là dữ liệu nhạy cảm nhất store này
thu thập, và có cả ảnh trẻ em. Nếu bán dịch vụ làm búp bê từ ảnh thì nên tắt tự động và dùng
bản riêng.

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

## Còn phải làm

- [ ] **Tắt Automatic management** cho Privacy policy rồi đăng `01-privacy-policy.md`
- [ ] **Sửa announcement bar** → `Free US shipping over $49`. Hiện `ke_hoach_website.md` ghi
      free không điều kiện, đá nhau với policy vừa đăng.
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
