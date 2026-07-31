# Policy set — Woolly Wishes (store `2xwptb-f5`)

Bộ policy riêng cho **store len Woolly Wishes**, pháp nhân **JULY E LLC (Nevada)**.

> Bộ ở thư mục cha (`../01`…`../05`) là của **Luminouswand — store activewear**, pháp nhân
> **SELLER SPRINT LLC (California)**. Hai pháp nhân khác nhau, hai bang khác nhau.
> Không dùng lẫn, không ghi đè lên nhau.

## Thông tin doanh nghiệp (đã điền vào cả 5 file)

| | |
|---|---|
| Pháp nhân | **JULY E LLC** |
| Địa chỉ | 304 S Jones Blvd 3587, Las Vegas, NV 89107, United States |
| Governing law | **State of Nevada** |
| Điện thoại | +1 213-584-2318 |
| Email | ⚠️ `[ADD YOUR SUPPORT EMAIL]` — chưa có |

Số điện thoại lấy từ **Settings → General → Business details** của chính store này, không
phải số của Luminouswand. Có phone rồi thì Google Ads đã có một kênh liên hệ hoạt động,
nhưng vẫn nên bổ sung email.

## Nếu muốn tôi tự đăng lên store

Cần một **Admin API access token**: Settings → Apps and sales channels → **Develop apps** →
Create an app → Configuration → Admin API scopes, tick đúng 3 scope dưới → Install app →
copy token `shpat_...` → dán vào `.env` dòng `SHOPIFY_ACCESS_TOKEN=`.

| Việc | Mutation | Scope cần tick |
|---|---|---|
| Dán 4 policy | `shopPolicyUpdate` | `write_legal_policies` |
| Tạo trang Contact | `pageCreate` | `write_content` |
| Dựng Footer menu | `menuCreate` / `menuUpdate` | `write_online_store_navigation` |

Chỉ 3 scope này, không cần cấp thêm. Token đó đọc/ghi được store nên đừng dán vào chat hay
commit lên git — `.env` nằm ngoài repo nên an toàn.

## 3 chỗ đã chốt

| Hạng mục | Giá trị | Căn cứ |
|---|---|---|
| Thời gian làm | **1–3 tuần** | Theo mô tả sản phẩm đang chạy |
| Thời gian giao | 7–15 ngày làm việc | |
| **Tổng** | **~3–6 tuần** | Ghi rõ vì đây là con số khách thực sự đếm |
| Free shipping | **Free từ $49**, dưới đó $4.99 | |
| Thị trường | US · UK · Canada | |
| Return window | 30 ngày | |

## ⚠️ 2 việc PHẢI làm trước khi chạy Ads

1. **Điền email hỗ trợ.** Cả 5 file đang để `[ADD YOUR SUPPORT EMAIL]`. Tôi cố tình không
   tự điền: email cũ `info@luminouswand.com` là hòm thư của **SELLER SPRINT LLC**, một pháp
   nhân khác — đặt nó lên trang của JULY E LLC là sai. Điền địa chỉ bạn thật sự đọc được.
   Google Ads bắt buộc có **ít nhất một kênh liên hệ hoạt động**; form Contact của Shopify
   cũng tính, nhưng có email vẫn tốt hơn.

2. **Announcement bar đang sai.** `ke_hoach_website.md` ghi *"Free US shipping"* không điều
   kiện, policy ghi *free từ $49*. Sửa thành **"Free US shipping over $49"**. Ngưỡng $49 còn
   có lợi: sản phẩm ~$25 nên khách có lý do mua 2.

Và một chỗ cần bạn tự xác nhận: **1–3 tuần làm tay có đúng không.** Tôi lấy theo mô tả sản
phẩm. Nếu sai, sửa **cả hai chỗ cùng lúc** — policy và mô tả sản phẩm phải luôn khớp, chính
chỗ lệch nhau này là thứ đã gây ra mớ mâu thuẫn ban đầu.

## Cách đăng lên site + footer

Policy (01–04) **không phải Pages** — Shopify có chỗ riêng, và nó tự sinh link
`/policies/...` dùng được cả ở checkout.

1. **Settings → Policies** → dán 4 file:
   - Privacy policy ← `01-privacy-policy.md`
   - Refund policy ← `02-refund-return-policy.md`
   - Shipping policy ← `03-shipping-policy.md`
   - Terms of service ← `04-terms-of-service.md`
   → **Save**
2. **Online Store → Pages → Add page** → tiêu đề `Contact`, dán `05-contact-page.md`.
   Bên phải chọn template `page.contact` để có sẵn form gửi mail → **Save**.
3. **Online Store → Navigation → Footer menu → Add menu item** (5 mục):

   | Name | Link |
   |---|---|
   | Contact | Pages → Contact |
   | Shipping Policy | Policies → Shipping policy |
   | Refund Policy | Policies → Refund policy |
   | Privacy Policy | Policies → Privacy policy |
   | Terms of Service | Policies → Terms of service |

   → **Save menu**
4. **Theme Editor → Footer** → kiểm tra block menu đang trỏ vào **Footer menu**.
   Shrine Pro có thể đang trỏ vào menu khác.
5. Mở thử trang chủ, bấm từng link ở footer xem có 404 không.

## Khác gì so với bộ Luminouswand

Ngoài pháp nhân và thời gian giao, bộ này thêm phần mà bán đồ len làm tay bắt buộc phải có:

- **Sai khác giữa các sản phẩm** — mũi đan, biểu cảm, lô nhuộm không bao giờ giống hệt.
  Ghi rõ không phải lỗi, nhưng bung chỉ / mắt lỏng / sai hàng thì vẫn bảo hành.
- **Hàng làm từ ảnh khách** — không đổi trả vì đổi ý, vẫn bảo hành nếu lỗi.
- **Huỷ đơn trong 24h** — vì bắt đầu làm ngay sau khi đặt.
- **Ảnh khách gửi** (Privacy + Terms) — chỉ dùng để làm đơn, không đăng, không quảng cáo
  nếu chưa xin phép bằng văn bản. Có nhắc riêng trường hợp ảnh trẻ em.
- **Đồ chơi có chi tiết nhỏ** — nhắc giám sát trẻ nhỏ, xem độ tuổi ở trang sản phẩm.

## Checklist

- [ ] Điền email hỗ trợ vào cả 5 file
- [ ] Sửa announcement bar → "Free US shipping over $49"
- [ ] Xác nhận 1–3 tuần là con số thật
- [ ] Dán 01–04 vào Settings → Policies
- [ ] Tạo trang Contact từ 05 (template `page.contact`)
- [ ] Thêm 5 mục vào Footer menu
- [ ] Theme Editor → Footer trỏ đúng vào Footer menu
- [ ] Bấm thử từng link, không có 404
- [ ] Shipping settings trong Merchant Center khớp với 03
- [ ] Return policy trong Merchant Center khớp với 02
- [ ] Ghi độ tuổi khuyến cáo lên từng trang sản phẩm đồ chơi

Đây là **bản mẫu tham khảo, không phải tư vấn pháp lý**. Rà lại theo nghĩa vụ thật của bạn
trước khi công bố.
