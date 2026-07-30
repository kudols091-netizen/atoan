# Design — Section "Before / After Showcase" (trang chủ)

> Duyệt 2026-07-30. Store `2xwptb-f5` · Theme **Shrine Pro** (OS 2.0) · Brand Woolly Wishes.
> Tham chiếu: [[ke_hoach_website.md]] (section #7 "Personalized feature").

## 1. Mục tiêu

Section trang chủ giới thiệu dịch vụ đặt làm búp bê len từ ảnh khách gửi. Cột trái là
carousel 2 slide Before/After, cột phải là heading + mô tả + CTA dẫn tới trang sản phẩm
custom doll. Layout bám sát 4 ảnh tham khảo user cung cấp (2 desktop, 2 mobile) từ site
đối thủ.

## 2. Phạm vi

**Trong phạm vi:** một file section tự chứa, cài bằng cách paste qua Shopify Admin.

**Ngoài phạm vi:** tạo product "Custom Crochet Doll from Photo", upload ảnh thật,
form upload ảnh của khách, đặt section vào template trang chủ (user tự kéo trong
Theme Editor).

## 3. Bàn giao

Một file duy nhất, không phụ thuộc thư viện ngoài (CSS + JS + schema inline):

```
theme/sections/before-after-showcase.liquid
```

Repo này không chứa theme code (theme sửa qua Admin). Thư mục `theme/` chỉ là nơi lưu
bản gốc để version-control; nguồn chân lý khi chạy là file trong theme trên Shopify.

Cài đặt: Admin → Online Store → Themes (Shrine Pro) → Edit code → Sections →
Add a new section → tên `before-after-showcase` → xoá code mẫu → paste toàn bộ file →
Save. Sau đó Theme Editor → Add section → "Before / After Showcase".

## 4. Cấu trúc DOM

```
section.ba-showcase[data-ba-showcase]
└── .ba__inner                    grid 1 cột (mobile) / 2 cột (≥990px)
    ├── .ba__media                position: relative, overflow visible
    │   ├── .ba__viewport         overflow: hidden, border-radius 12px,
    │   │   │                     aspect-ratio 1/1, tabindex=0, role=group
    │   │   ├── .ba__track        flex, transform: translateX()
    │   │   │   ├── .ba__slide    flex: 0 0 100%  (Before)
    │   │   │   └── .ba__slide    flex: 0 0 100%  (After)
    │   │   ├── .ba__badge--before  absolute top-left
    │   │   └── .ba__badge--after   absolute top-right
    │   ├── button.ba__nav--prev  absolute, đè lên mép trái viewport
    │   ├── button.ba__nav--next  absolute, đè lên mép phải viewport
    │   └── p.ba__sr[aria-live]   thông báo slide hiện tại cho screen reader
    └── .ba__content
        ├── h2.ba__heading
        ├── .ba__text (richtext)
        └── a.ba__button
```

Arrows nằm **ngoài** `.ba__viewport` để không bị `overflow: hidden` cắt — đây là lý do
tách `.ba__media` và `.ba__viewport` thành hai lớp.

## 5. Spec hình ảnh

| Thành phần | Giá trị |
|---|---|
| Container | max-width 1400px, padding ngang 20px |
| Grid desktop | `minmax(0,1fr) minmax(0,1fr)`, gap 48px, align-items center |
| Khung ảnh | aspect-ratio mặc định **1/1**, radius 12px |
| Badge | nền `#000`, chữ trắng 13px/700, padding 10px 16px, radius 8px, inset 20px |
| Badge không active | opacity 0.4 (tắt được bằng toggle → về 1.0 giống hệt ảnh gốc) |
| Nút mũi tên | tròn 40px, nền trắng, shadow `0 2px 10px rgba(0,0,0,.18)` |
| Vị trí mũi tên | desktop `±-20px` (đè nửa trong nửa ngoài mép), mobile `±-10px` |
| Chuyển slide | `transform: translateX(-100% * index)`, 400ms `cubic-bezier(.4,0,.2,1)` |
| Heading | 40px desktop / 26px mobile, weight 700, line-height 1.15 |
| Mô tả | 17px, line-height 1.6 |
| CTA | nền đen, chữ trắng 15px/700, padding 18px 30px, radius 6px |
| Mobile | 1 cột, `.ba__content` căn giữa, gap 28px |

## 6. Hành vi

- **Không loop.** Ở slide 0 (Before) chỉ hiện nút `next`; ở slide 1 (After) chỉ hiện
  nút `prev`. Nút không dùng được bị gỡ khỏi accessibility tree bằng thuộc tính `hidden`.
  Khớp đúng 2 ảnh desktop tham khảo.
- **Swipe** trái/phải trên touch, ngưỡng 40px.
- **Bàn phím** `←` / `→` khi `.ba__viewport` đang focus.
- **`prefers-reduced-motion: reduce`** → bỏ transition.
- **Theme Editor**: script inline chạy lại khi section reload; guard `data-ba-init`
  chống bind trùng.

## 7. Settings (schema)

| id | type | mặc định |
|---|---|---|
| `image_before` | image_picker | — (placeholder SVG nếu trống) |
| `image_after` | image_picker | — |
| `label_before` | text | `Before` |
| `label_after` | text | `After` |
| `image_ratio` | select | `1 / 1` (thêm 4/5, 3/4, 16/10) |
| `dim_inactive_label` | checkbox | `true` |
| `media_position` | select | `left` (hoặc `right`) |
| `heading` | text | xem §8 |
| `body` | richtext | xem §8 |
| `button_label` | text | `Start Your Custom Doll` |
| `button_link` | url | trống — user trỏ tới product custom doll |
| `bg_color` | color | `#ffffff` |
| `text_color` | color | `#111111` |
| `button_bg` | color | `#000000` |
| `button_text_color` | color | `#ffffff` |
| `padding_top` | range 0–120 | `60` |
| `padding_bottom` | range 0–120 | `60` |

Có `presets` để section xuất hiện trong "Add section".

## 8. Nội dung mặc định

Viết riêng cho Woolly Wishes, không trùng đối thủ (store sắp chạy Google Ads/GMC —
duplicate content là rủi ro thật).

- **Heading:** From a Photo to a Doll They'll Keep
- **Body:** Send us the photo you love most. Our makers study every detail — the hair,
  the smile, the favorite outfit — then crochet it stitch by stitch into a doll made
  only for them. One of a kind, and built to be held for years.
- **Button:** Start Your Custom Doll

## 9. Sai khác có chủ ý so với ảnh tham khảo

1. **Badge mờ.** Ảnh gốc để cả hai badge đen đậm cùng lúc, không phân biệt được slide
   đang xem. Đã đổi thành badge active đậm / badge kia mờ 40%, kèm toggle để quay về
   đúng ảnh gốc.
2. **Mũi tên trên mobile.** Ảnh gốc để mũi tên tràn ra ngoài viewport và bị cắt mất một
   nửa. Đã giảm offset xuống `-10px` để nút luôn hiện đủ trong padding 20px của container.

Không có sai khác nào khác.
