# Design — Section "Shoppable Lookbook" (trang chủ)

> Duyệt 2026-07-30. Store `2xwptb-f5` · Theme **Shrine Pro** (OS 2.0) · Brand Woolly Wishes.
> Anh em với [[2026-07-30-before-after-showcase-design]].

## 1. Mục tiêu

Lưới ảnh lifestyle, mỗi ảnh gắn chấm (+). Bấm chấm mở popup hiện ảnh thumbnail, tên,
giá và link sang trang sản phẩm. Biến ảnh lifestyle từ ngõ cụt thành lối vào sản phẩm.

Bám theo 5 ảnh tham khảo user cung cấp (2 desktop, 3 mobile) từ site đối thủ.

## 2. Bàn giao

```
theme/sections/shoppable-lookbook.liquid
```

Cài giống section before/after: Admin → Themes → Edit code → Sections → Add a new
section → tên `shoppable-lookbook` → paste → Save → Theme Editor → Add section.

## 3. Cấu trúc DOM

```
.sl                            overflow-x: clip  (chốt chặn tràn ngang, xem §7)
└── .sl__inner                 max-width 1440, padding 0 20px
    ├── h2.sl__heading         tuỳ chọn, mặc định trống
    └── .sl__grid              1 cột mobile / N cột desktop, gap 16px
        └── .sl__item          = 1 block, position: relative
            ├── .sl__media     aspect-ratio 1/1, radius 8px, overflow hidden
            └── .sl__hotspot   × tối đa 3, điểm neo 0×0 tại left:X% / top:Y%
                ├── .sl__pulse vòng nhịp, nằm sau chấm
                ├── button.sl__dot   30px, translate(-50%,-50%) quanh điểm neo
                └── .sl__card        250px, bung lên trên điểm neo
```

Hotspot là điểm neo **0×0** để chấm và popup cùng canh theo một toạ độ duy nhất.
Popup nằm ngoài `.sl__media` nên không bị `overflow:hidden` cắt.

## 4. Spec hình ảnh

| Thành phần | Giá trị |
|---|---|
| Lưới | `repeat(var(--sl-cols), minmax(0,1fr))` ≥750px, 1 cột dưới đó, gap 16px |
| Ảnh | aspect-ratio 1/1 mặc định, radius 8px |
| Chấm (+) | tròn 30px nền trắng, icon 14px, shadow `0 2px 8px rgba(0,0,0,.25)` |
| Pulse | scale 1 → 2.2, opacity .55 → 0, 2200ms, lặp vô hạn |
| Popup | 250px (max 80vw), padding 16px, radius 12px, shadow `0 6px 24px rgba(0,0,0,.15)` |
| Popup — vị trí | `bottom: 26px` so với điểm neo, canh giữa theo chấm |
| Thumbnail | 70×70, radius 6px, nền `#f4f4f4`, `object-fit: contain` |
| Tên SP | 15px/700, line-height 1.3 |
| Giá | 15px; giá gạch 13px màu `#8a8a8a` |
| Link | 14px, gạch chân, offset 2px |

## 5. Dữ liệu — product picker

| Trường popup | Nguồn |
|---|---|
| Thumbnail | `product.featured_image` (placeholder nếu SP chưa có ảnh) |
| Tên | `product.title` |
| Giá | `product.price \| money`; nhiều biến thể → `From {price_min}` |
| Giá gạch | `compare_at_price` khi lớn hơn `price` |
| Link | `product.url` |

- Slot chưa chọn sản phẩm → `{% continue %}`, không render chấm.
- Hết hàng → hiện "Sold out" thay giá; toggle `hide_sold_out` để ẩn hẳn chấm.

## 6. Hành vi

- Bấm chấm → mở popup; `closeEverything()` quét toàn `document` nên popup ở section
  khác cũng đóng. Luôn chỉ 1 popup mở.
- Đóng: nút ✕ · bấm ra ngoài · `Esc`.
- `aria-expanded` trên chấm, `aria-controls` trỏ tới popup, focus nhảy vào nút ✕ khi
  mở và trả về chấm khi đóng.
- `auto_open_first`: IntersectionObserver mở popup đầu tiên một lần khi section lọt
  màn hình, KHÔNG cướp focus. Mặc định tắt.
- `prefers-reduced-motion: reduce` → tắt pulse và mọi transition.

## 7. Định vị popup — `place()`

Đây là phần dễ sai nhất, cần ghi rõ.

**Kẹp ngang.** Popup phải nằm trong `.sl__item`, chừa 8px mỗi bên. Vị trí gốc (chưa
kẹp) được tính **thuần hình học** từ điểm neo:

```
left  = anchor.left - card.width / 2      // do left:50% trên neo 0×0 + translateX(-50%)
right = left + card.width
```

**KHÔNG được** ghi `--sl-shift: 0px` rồi đo lại. `--sl-shift` chỉ dùng trong
`transform`, mà transform không làm mất hiệu lực layout — Chromium trả về rect cũ, dẫn
tới hai lỗi đã gặp khi test:
1. clamp im lặng không chạy (đo ra vị trí cũ nên tưởng đã nằm trong khung);
2. gọi `place()` lần hai thì shift bị cộng dồn (−110px → −220px).

Cách tính hiện tại **idempotent** — chạy bao nhiêu lần cũng ra một kết quả.

**Lật dọc.** Cũng tính từ điểm neo, không đo lại:

```
topIfAbove = anchor.top - 26 - card.height
is-below   = topIfAbove < item.top + 8
```

**Chạy khi nào.** `placeAll()` khi khởi tạo, khi `load`, khi resize, và `place(spot)`
khi mở. Card đang đóng vẫn tham gia layout (`visibility: hidden` chứ không phải
`display: none`), nên nếu không kẹp từ đầu thì một card ở `x=95%` sẽ tự đẩy rộng trang.

**Chốt chặn.** `.sl` có `overflow-x: clip` phòng frame đầu tiên trước khi JS chạy.
Dùng `clip` chứ không phải `hidden` để không tạo scroll container (không phá
`position: sticky` của header theme).

## 8. Settings

**Section:** `heading` (trống) · `columns_desktop` (2/3/4, mặc định 3) · `image_ratio`
(1:1) · `link_label` ("Show Details") · `enable_pulse` (bật) · `auto_open_first` (tắt) ·
`hide_sold_out` (tắt) · `bg_color` · `text_color` · `padding_top`/`padding_bottom` (40).

**Block `lookbook_image`** (tối đa 12): `image` + 3 nhóm `product_N` / `pos_x_N` /
`pos_y_N`. Preset dựng sẵn 3 block.

## 9. Kiểm chứng

Shopify Theme Check: pass.

Harness Playwright (Chromium 1228) dựng lại đúng markup/CSS/JS của cả hai section,
39/39 check pass ở 1440×2200 và 390×844 — gồm các ca biên `x=95%`, `x=5%`, `y=8%`,
tính idempotent của `place()`, và không tràn ngang ở cả hai khổ.

## 10. Rủi ro nội dung

Ảnh lifestyle hiện tại là ảnh AI, món đồ len trong ảnh không phải sản phẩm thật đang
bán. Popup gắn tên + giá thật lên món đồ không có thật là điểm dễ mất tin và là thứ
Google Ads soi khi review landing page. Cần thay dần bằng ảnh chụp sản phẩm thật.
