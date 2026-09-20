---
name: Trần Minh Đức — Portfolio
description: Portfolio hiện đại, sáng màu, chuyển động mượt cho khách hàng doanh nghiệp
colors:
  bg: "#ffffff"
  bg-soft: "#f6f7f6"
  ink: "#121815"
  ink-secondary: "#4b544e"
  ink-faint: "#838d86"
  border: "#e6e9e6"
  accent: "#0b7a5b"
  accent-strong: "#075f46"
  accent-tint: "#e6f3ee"
typography:
  display:
    fontFamily: "Cal Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.7rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cal Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
rounded:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  sm: "0.75rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-ghost:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  tag:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent-strong}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem"
---

# Design System: Trần Minh Đức — Portfolio

## Overview

**Creative North Star: "Studio Editorial"**

<!-- Thay thế bản "The Reconciled Ledger" (2026-09-10); bản cũ trở thành evidence/anti-reference, không phải thẩm quyền. Lý do thay đổi: brief-pinned 2026-09-17 yêu cầu tone sáng màu, hiện đại, chuyển động nhẹ nhàng, chuyển trang liền mạch — hướng đến khách hàng doanh nghiệp là chính. -->

Trang portfolio này tự thân là bằng chứng cho gu thẩm mỹ và kỹ năng tương tác hiện đại của Đức: khách hàng doanh nghiệp cảm nhận đẳng cấp qua chính cách trang vận hành — chuyển động tinh tế khi cuộn, chuyển trang liền mạch không nhảy trắng — chứ không chỉ qua lời mô tả kinh nghiệm.

Nền trắng/xám rất nhạt, typography lớn tự tin làm chủ đạo thay cho ảnh trang trí, khoảng trắng rộng rãi. Một màu accent emerald duy nhất, dùng có chủ đích (CTA, số liệu nổi bật, thẻ kỹ năng) chứ không rải rác. Độ sâu nhẹ qua shadow mềm, bo góc vừa phải — khác hẳn sự phẳng/sắc cạnh tuyệt đối của hệ thống trước.

**Key Characteristics:**
- Nền sáng, typography lớn làm chủ đạo, nhiều không gian thở
- Một màu accent emerald duy nhất, dùng có chủ đích (không rải rác trang trí)
- Bo góc vừa phải (4–22px tuỳ cấp độ), không sắc cạnh, không quá tròn
- Shadow mềm, nhiều lớp, rất tinh tế — không phẳng tuyệt đối
- Chuyển trang kiểu Smart Animate qua Astro View Transitions: header là lớp "matched" đứng yên tuyệt đối, vạch active của menu trượt từ mục cũ sang mục mới, nội dung là lớp "unmatched" dissolve + trượt lên nhẹ với easing đối xứng — xem mục Components › Chuyển trang
- Nội dung cuộn vào bằng hiệu ứng mờ dần + dịch chuyển nhẹ (an toàn khi JS lỗi — xem Do's and Don'ts)
- Con trỏ chuột mặc định của trình duyệt (đã thử cursor companion dạng vòng tròn theo chuột, bỏ theo yêu cầu 2026-09-18)
- Hình ảnh trên site là **giao diện vẽ bằng CSS** (hero mockup), **minh hoạ SVG nét** (cây ở panel Kinh nghiệm — file do người dùng cung cấp, chèn nguyên bản qua `<img>`, xem mục Minh hoạ "cây"), **icon khái niệm nét 1.5px tự vẽ**, **brand mark đơn sắc** chỉ cho công cụ thật sự dùng (Figma, Photoshop, ChatGPT, Claude), và **ảnh slide dự án thật** (2048×1280, do người dùng cung cấp, chỉ ở trang Dự án / chi tiết / khối Dự án tiêu biểu trang chủ) — không ảnh stock; quy cách ở Components › Iconography, Minh hoạ "cây" và Trang Dự án
- Hero nền trắng phẳng (lưới đo tĩnh đã bỏ theo yêu cầu 2026-09-17); tiêu đề "gõ ra" từng ký tự, mỗi ký tự vào mờ rồi nét — cố ý chậm; nút → KPI chỉ vào sau khi tiêu đề gõ xong (đoạn lede đã chuyển sang trang Kinh nghiệm, xem mục Trang chủ — cấu trúc nội dung)
- Hero trang chủ là mockup giao diện thật liên quan trực tiếp đến nghề UX/UI (không phải ảnh chụp giả hay data-viz trừu tượng), có **hai phương án đổi được bằng một dòng** — xem mục Components

## Colors

Bảng màu sáng, hạn chế: nền trắng/xám nhạt, một mực chữ chính, một accent emerald duy nhất.

### Primary
- **Emerald Accent** (`#0b7a5b`, đậm hơn `#075f46` khi hover): màu tín hiệu duy nhất — CTA, số liệu nổi bật, link, thẻ kỹ năng, dấu mốc "hiện tại" trên timeline.

### Neutral
- **White** (`#ffffff`): nền chính.
- **Soft Gray** (`#f6f7f6`): nền phụ cho khối CTA, plate minh hoạ, nút ghost.
- **Ink** (`#121815`): chữ chính, đen ấm nhẹ (không đen thuần).
- **Ink Secondary** (`#4b544e`): mô tả, đoạn văn dài.
- **Ink Faint** (`#838d86`): nhãn phụ, chú thích.
- **Border** (`#e6e9e6`): mọi đường viền/kẻ phân chia mảnh.

### Named Rules
**The Single Accent Rule.** Toàn hệ thống chỉ một màu accent (emerald). Không thêm màu nhấn thứ hai; biến thể chỉ qua đậm/nhạt của chính accent đó.

**Bề mặt trên nền tối** (chỉ mảng tối "Cách tôi làm việc" ở trang Kinh nghiệm — trước là dải công cụ, 2026-09-18; thêm `--band-accent` #3fc296 cả hai theme 2026-09-20 vì `--accent` theme sáng chìm trên nền tối): `--on-ink` #ffffff (chữ chính), `--on-ink-secondary` rgba(255,255,255,.68) (chữ phụ), `--ink-surface-faint` rgba(255,255,255,.035) (ô kính khi nghỉ), `--ink-surface` rgba(255,255,255,.06) (ô hover, viền ô kính), `--ink-surface-hover` rgba(255,255,255,.10) (viền hover, nền mark). Nền là `--ink`. Không tạo màu tối mới; mọi mảng tối sau này dùng đúng bộ này.

**Dark mode (2026-09-18) — `html[data-theme="dark"]`, mặc định LUÔN light.** Bật bằng nút trong header, lưu `localStorage("theme")`; cố ý **không** theo `prefers-color-scheme` (yêu cầu người dùng). Token đảo: `--bg` #0f1412, `--bg-soft` #161c19, `--surface` #1a211d, `--ink` #eef2ef, `--ink-secondary` #b4bdb7, `--ink-faint` #7f8a83, `--border` #283129, `--accent` #3fc296 (sáng hơn một bậc để giữ ≥ 4.5:1 trên nền tối), `--accent-strong` #6ad4ad, `--accent-tint` rgba(63,194,150,.14); shadow chuyển sang đen mờ (.35–.55) vì bóng xám vô hình trên nền tối. Ảnh slide dự án (nền sáng) hạ `brightness(.9)`. **Token mới để không hard-code màu:** `--inverse-bg`/`--inverse-ink`/`--inverse-ink-secondary` cho khối "đảo màu" (nút primary, thẻ liên hệ chính, nút trong mockup) — light = nền ink/chữ trắng, dark = ngược lại; `--header-bg` (trắng 86% / tối 86%); `--band-bg` cho dải công cụ **luôn tối** ở cả hai theme (#121815 / #090c0b) — bộ `--on-ink*` vẫn dùng trên nó. Cấm `color: #fff` / `background: #fff` trần trong component: dùng `--surface`, `--inverse-*`. Đổi theme: lớp `.theme-switching` bật transition màu 0.3s chỉ trong lúc đổi.

**Neo vào logo.** Accent được chọn để khớp logo chính thức (`public/logo-dt-green.svg`, `#0E7E5E`) — lệch nhau 3–4 điểm RGB nên mắt thường không phân biệt. Đổi accent sang hệ màu khác thì phải đổi logo cùng lúc, không làm lẻ một bên.

## Typography

**Display Font:** Cal Sans (self-hosted qua `@fontsource/cal-sans`, gồm subset tiếng Việt) — tiêu đề, số liệu lớn, tên thương hiệu, testimonial lớn.
**Body Font:** system font stack (`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`, cộng dải emoji hệ thống) — đoạn văn, nhãn, nút. Đổi từ Plus Jakarta Sans sang system stack theo yêu cầu 2026-09-17; không còn self-host font nội dung, chỉ Cal Sans là web font.

**Character:** Cal Sans là một display face hình học, bo mềm, có cá tính rõ cho tiêu đề lớn; system stack giữ vai trò đọc thoải mái cho nội dung dài, hiển thị đúng font mặc định của từng hệ điều hành (San Francisco trên Apple, Segoe UI trên Windows...) và không tốn thêm tải font — cặp đôi có cá tính ở tiêu đề, quen thuộc/native ở phần đọc.

**Cal Sans chỉ có một weight (400).** Mọi phần tử dùng `--display` phải đặt `font-weight: 400`; để nguyên bold mặc định của `h1/h2/h3` sẽ khiến trình duyệt *giả lập* nét đậm và chữ bị nhoè. `h1, h2, h3` trong `global.css` đã đặt sẵn `font-weight: 400`; các heading dùng font nội dung (`var(--sans)`) thì tự khai báo lại weight của mình.

### Hierarchy
- **Display** (Cal Sans 400, `clamp(2.25rem, 4.6vw, 3.7rem)`, line-height 1.08): tiêu đề hero mỗi trang.
- **Headline** (Cal Sans 400, `1.5–2.6rem`): tiêu đề section, tên dự án.
- **Body** (400, `17px`/1.6): đoạn mô tả, testimonial. Đo tối đa `66ch`.
- **Label** (600, `0.78–0.94rem`): nút, thẻ kỹ năng, nhãn phụ, ngày tháng.

## Layout

Site nhiều trang (`/`, `/du-an`, `/kinh-nghiem`, `/lien-he`), cột nội dung tối đa 1160px căn giữa (trang Liên hệ hẹp hơn có chủ đích: 900px). Footer dùng cùng 1160px để canh lề thẳng với nội dung. Header **sticky** (`position: sticky; top: 0`), trong suốt-mờ (backdrop-blur), tồn tại xuyên suốt điều hướng (`transition:persist="site-header"` — id **phải tường minh**, id tự sinh khác nhau giữa các trang nên Astro không ghép được và header bị render lại; xem mục Chuyển trang) — không render lại khi chuyển trang. **Lưu ý:** `html`/`body` phải dùng `overflow-x: clip`, **không** dùng `hidden` — `hidden` biến chúng thành scroll container và làm sticky mất tác dụng (đã từng mắc lỗi này). (Thanh tiến trình cuộn 2px từng neo dưới header đã **bỏ** 2026-09-19 theo yêu cầu người dùng — markup `.progress-rail`, JS `updateRail` và listener scroll đều đã gỡ.) Nhịp section rộng rãi (`padding-block` 2.5–4.5rem), phân chia bằng đường viền `border` mảnh. Responsive gãy chính ở `640px` và `720px`/`780px` tuỳ layout (grid 2 cột → 1 cột; ≤720px ẩn nav ngang trong header → menu chuyển xuống **bottom nav** cố định đáy, xem Components › Bottom nav).

**Base path (2026-09-20):** site phát ở `https://ductran146.github.io/portfolio-tran-minh-duc/` (người dùng giữ link này thay vì đổi tên repo) → `astro.config.mjs` có `base`. Quy tắc: **không viết đường dẫn tuyệt đối `/...` trần** cho link nội bộ hay file trong `public/` — dùng `localePath()` (đã kèm base) cho link, `withBase()` cho `public/` (logo, favicon, `/clients/*`, `/images/*`); asset qua `astro:assets` tự có base. Script client đọc `import.meta.env.BASE_URL` và bỏ base khỏi `location.pathname` trước khi xét locale (`stripBase`). Dev server chạy ở `http://localhost:4321/portfolio-tran-minh-duc/`.

**Đa ngôn ngữ (hạ tầng, 2026-09-18):** Astro i18n `defaultLocale: vi` (không prefix) + `en` (prefix `/en`). Trang EN ở `src/pages/en/*` chỉ là wrapper render lại component trang VI (`import Page from "../index.astro"`, `[slug]` re-export `getStaticPaths`); BaseLayout đọc `Astro.currentLocale` để đổi `<html lang>`, menu, footer, nhãn nút (chuỗi trong `src/i18n/ui.ts`) và hiện dải `.lang-notice` "English version in progress" (accent-tint, 0.85rem, canh giữa, ngay dưới header) cho tới khi trang truyền prop `translated`. Link nội bộ trong trang đi qua `l(path)` = `localePath(locale, path)` để /en/* trỏ sang /en/…. `hreflang` chỉ phát khi có `site` trong config. **Quyết định người dùng:** dịch nội dung sau khi web hoàn thiện — không dịch nội dung trang lúc này.

## Elevation & Depth

Có shadow mềm, nhiều lớp — khác với hệ thống phẳng tuyệt đối trước đó. Ba cấp: `shadow-sm` (viền tinh tế cho nút/thẻ ở trạng thái nghỉ), `shadow-md` (thẻ dự án, nút khi hover), `shadow-lg` (khối nổi bật). Không dùng bóng cứng/offset lớn kiểu neobrutalist.

### Shadow Vocabulary
- **shadow-sm** (`0 1px 2px rgba(18,24,21,.04)`): trạng thái nghỉ của thẻ, nút.
- **shadow-md** (`0 8px 24px rgba(18,24,21,.06), 0 2px 6px rgba(18,24,21,.04)`): hover, thẻ dự án.
- **shadow-lg** (`0 24px 48px rgba(18,24,21,.08), 0 4px 12px rgba(18,24,21,.04)`): khối nổi bật, dùng dè sẻn.

### Named Rules
**The Soft Depth Rule.** Shadow luôn mềm, nhiều lớp, không bao giờ cứng/offset lớn. Dùng để gợi ý tương tác (hover) nhiều hơn là trang trí tĩnh.

## Shapes

Bo góc vừa phải, nhất quán theo 4 cấp: `xs` (4px, chi tiết nhỏ bên trong mockup hero — thẻ số liệu, nút, icon tab, đầu cột chart), `sm` (8px, nút nhỏ/nav CTA), `md` (14px, thẻ/plate/input), `lg` (22px, khối nổi bật/CTA band). Thẻ kỹ năng và pill trạng thái dùng bo góc tối đa (999px).

### Named Rules
**The Moderate Radius Rule.** Không góc vuông tuyệt đối (như hệ thống cũ), không bo tròn quá mức kiểu đồ chơi. Bo góc luôn theo 1 trong 4 cấp đã định nghĩa (4/8/14/22px).

## Components

### Buttons
- **Primary:** nền `ink`, chữ trắng, bo góc `md` (14px); hover **chỉ đổi màu** nền sang `accent-strong` (transition 0.25s background/color) — **không nâng, không đổi bóng** (bỏ `translateY(-2px)` + `shadow-md` hover 2026-09-20 theo yêu cầu "button không động khi hover, chỉ animate chuyển màu"). Thẻ/card (featured plate, project card, contact card) vẫn được nổi nhẹ khi hover — quy tắc này chỉ áp cho nút.
- **Ghost:** nền `bg-soft`, chữ `ink`; hover chuyển nền sang `accent-tint`.
- **Nav CTA (trong header) — đã bỏ 2026-09-18** (trùng mục menu "Liên hệ"). Header giờ kết bằng hai điều khiển công cụ, xem *Header tools* dưới.

### Bottom nav — menu đáy cho mobile (2026-09-20)
- **Vì sao:** ≤720px nav ngang trong header bị ẩn (chỉ còn logo + VI/EN + theme) → người dùng mobile không chọn được mục. Thay vì hamburger, dùng **tab bar kiểu app**: `nav.bottom-nav` cố định đáy, 4 mục = cùng `navItems` với header (Trang chủ `home` · Dự án `briefcase` · Kinh nghiệm `user` · Liên hệ `mail` — 4 icon nét thêm 2026-09-20), mỗi mục icon 22px + nhãn 0.68rem, lưới 4 cột đều, nền `--header-bg` + blur 10px, viền trên `--border`, `padding-bottom` cộng `env(safe-area-inset-bottom)`. Active: `--accent` + 600 (chỉ đổi màu, không dịch chuyển). Desktop `display: none`. `body` chừa `padding-bottom: 66px + safe-area` ở ≤720px để footer/CTA không bị che.
- **Kỹ thuật:** `transition:persist` với id mang locale (như header) → `aria-current` do `updateNavActive()` cập nhật qua hàm chung `markActive(nav)` cho cả hai nav; `view-transition-name: bottom-nav` + cùng bộ rule đứng yên với `site-header` trong global.css để không mờ/trượt theo nội dung khi chuyển trang.

### Header tools — đổi ngôn ngữ + đổi theme (2026-09-18)
Nằm phải header, `.header-tools` gap 0.5rem, cùng chiều cao 36px, kiểu **ghost/công cụ** — không nổi như CTA (hành động chính của site nằm trong nội dung).
- **`.lang-switch` VI | EN:** segmented pill viền hairline `border`, nền `surface`; mỗi mục là **`<a>` thật** (href = cùng trang ở ngôn ngữ kia, `hreflang`, `lang`), chữ 0.72rem/600/tracking .06em, mục đang chọn (`aria-current="true"`) nền `bg-soft` chữ `ink`, mục kia `ink-faint`. Header persist nên href **được JS đặt lại ở `astro:after-swap`** theo `location.pathname`.
- **`.theme-toggle`:** button tròn 36px viền `border`, nền `surface`, icon `sun` (light) / `moon` (dark) 20px xếp cùng ô grid; đổi theme thì icon cũ xoay 90° + thu 0.6 và tan, icon mới hiện (chỉ transform/opacity). `aria-pressed` + `aria-label` đổi theo trạng thái ("Chuyển sang giao diện tối/sáng", EN tương ứng). Bind một lần (`data-bound`) vì header persist; sau swap gọi `restoreTheme()` vì Astro chép lại attribute `<html>`.
- **Persist theo locale:** `transition:persist={`site-header-${locale}`}` — đổi VI↔EN thì header render lại để menu/nhãn đúng ngôn ngữ (id giống nhau sẽ giữ DOM cũ tiếng Việt, đo 2026-09-18); cùng locale vẫn persist.
- **Mobile ≤720px:** nav ẩn, còn logo + hai điều khiển. Chưa có menu mobile (trước đây CTA là lối duy nhất tới Liên hệ) — việc cần làm tiếp nếu người dùng muốn.

### Brand Mark (logo trong header)
- **Asset:** `public/logo-dt-green.svg` (khối hộp isometric, tỷ lệ 377:434, một màu `#0E7E5E`).
- **Kích thước:** `height: 52px` (40px dưới 560px), bề rộng tự suy ra theo tỷ lệ; tên thương hiệu 1.2rem (1.05rem trên mobile) để cân với logo; khoảng cách logo–tên `0.6rem`. Header cao 72px trên desktop, 61px trên mobile.
- **Accessibility:** `alt=""` vì tên thương hiệu nằm ngay bên cạnh trong cùng link — tránh screen reader đọc trùng.
- **Favicon:** `public/favicon.svg` dựng lại từ chính logo, bọc trong viewBox vuông 434×434 (dịch ngang 28.5) để không bị letterbox trong tab. Favicon Astro mặc định đã xoá. Mark đọc được từ 16px trở lên; dưới 32px chi tiết bên trong hơi nhoè — bình thường với mark nhiều lớp.

### Tags / Pills
- **Style:** nền `accent-tint`, chữ `accent-strong`, bo góc pill, không viền.
- **Biến thể "Minh hoạ":** viền `ink-faint` 1px, nền trong suốt, chữ `ink-faint` — đánh dấu nội dung placeholder một cách trung thực.

### Progress Rail (thành phần đặc trưng nhất — persist xuyên suốt site)
- **Style:** dải 2px dưới header, nền `accent`, `transform: scaleX()` theo % cuộn trang (không animate `width` — tránh layout thrash).
- **Hành vi:** cùng một phần tử DOM tồn tại qua mọi lần chuyển trang (`transition:persist`), không bị reset/animate lại — đây là tín hiệu "liền mạch" rõ ràng nhất của hệ thống.

### Hero background — trắng phẳng
- Hero **không có** nền lưới/hoa văn. Lưới đo tĩnh (đã thử ngày 2026-09-17, kèm waiver `codex-grid-background`) bị bỏ theo yêu cầu người dùng cùng ngày; chỉ còn nền `--bg`. Nếu muốn thêm nền lại, quay về nguyên tắc: tĩnh, ≤5% opacity, và phải nêu lại waiver trong file.

### Hero title — "gõ ra" từng ký tự + mờ → nét
- **Lựa chọn:** người dùng chọn phương án H trong bản so sánh `content-reference/text-effects-demo.html` (A mask-wipe, B từng từ, C tracking, D blur, E gạch chân, G wipe ngang, H typing+blur), yêu cầu **chậm hơn bản thử 3×**. File demo giữ lại làm tài liệu tham chiếu, không thuộc build.
- **Cấu trúc (tách lúc build, không JS client):** frontmatter `index.astro` tách 4 dòng tiêu đề bằng `Intl.Segmenter('vi', grapheme)` → `<span class="line"><span class="wd"><span class="c" style="--i: n">k</span>…</span> …</span>`. Tách theo grapheme để dấu xếp tầng (ẩ, ệ) không vỡ; `.wd` `white-space: nowrap` để chỉ ngắt ở khoảng trắng; 4 `.line` là block để điểm ngắt desktop cố định. `--n` (tổng ký tự, hiện 49) đặt trên `.hero-copy`.
- **Nhịp:** `--type-base 140ms`, `--type-step 102ms`/ký tự, `--type-blur 1.35s` (mỗi ký tự: opacity đục ở 12% thời gian, blur 8px→0 và `translateY(.12em)`→0 suốt 1.35s, `--ease-smooth`). Gõ xong ký tự cuối ở `--type-end ≈ 5.1s`; mờ tan hoàn toàn ≈ 6.5s.
- **Con trỏ:** `box-shadow: .08em 0 0 var(--accent)` bên phải ký tự (không đổi layout), keyframe `type-caret` chạy trong đúng một slot với fill-mode **`none`**, và chạy ở slot của ký tự **kế tiếp** (`delay = base + (i+1)×step`) vì ở slot của chính nó ký tự còn trong suốt. `none` thay `forwards` để main thread nghẽn cũng không để lại con trỏ kẹt (đã thấy khi chụp ảnh bằng Playwright).
- **Dàn nhịp hero:** lede `--type-end + 150ms`, nút `+300ms`, KPI `+450ms`; khung thiết bị vào sớm ở 320ms để cột phải không trống trong lúc gõ. Đây là đánh đổi có chủ ý: CTA xuất hiện muộn (~5.4s) — nếu thấy khách doanh nghiệp bỏ đi sớm, giảm `--type-step` trước, giữ cấu trúc.
- **An toàn khi JS lỗi / reduced-motion:** trạng thái ẩn chỉ có dưới `.js-reveal`; `prefers-reduced-motion` tắt animation, ký tự hiện đủ, các delay về 0.
- **Chưa làm (đề xuất):** chỉ gõ ở lần vào site đầu tiên; quay lại trang chủ qua ClientRouter thì hiện tĩnh (cần cờ `sessionStorage` + class trên `<html>`).
- **Cạm bẫy Astro (đã mắc):** `<style>` của component được **scope mọi compound selector**. Viết `.js-reveal .hero …` trong `index.astro` bị biên dịch thành `.js-reveal[data-astro-cid-…] .hero[…]`, mà `<html class="js-reveal">` do BaseLayout render không mang cid đó → rule **không bao giờ khớp**, và hỏng im lặng (không lỗi, chỉ không animate). Mọi selector tham chiếu class nằm ngoài component phải bọc `:global(.js-reveal)`. Đã kiểm chứng bằng đo transform trong-trang trước/sau.

### Chuyển trang (Astro View Transitions) — theo tinh thần Smart Animate
Mô hình: lớp **giống nhau** giữa hai trang thì đứng yên hoặc di chuyển tới vị trí mới; lớp **khác nhau** thì dissolve. Đã kiểm chứng bằng screencast từng khung hình (CDP `Page.startScreencast`) + đọc tiến độ animation qua `document.getAnimations()` (2026-09-18).

- **Header** = group riêng đứng yên. Tên đặt bằng CSS theo class (`.site-header { view-transition-name: site-header }`), rule tĩnh trong `global.css` (`animation: none` cho group/old/new, ẩn ảnh cũ, `mix-blend-mode: normal`, `isolation: auto`). **Không** dùng `transition:name` cho phần tử persist: rule của Astro bám theo `data-astro-transition-scope` sinh riêng từng trang (`astro-…-1/-4/-2`), còn DOM persist là phần tử cũ mang sang → sang trang mới mất tên, rơi lại vào root và hiện hai bản lệch nhau.
- **Id persist tường minh** `transition:persist="site-header"`: id tự sinh có hậu tố phụ thuộc số directive transition trên từng trang, khác nhau thì Astro không ghép được phần tử cũ/mới và header bị render lại (mất luôn hiệu ứng trượt của vạch menu).
- **Vạch active menu** `.nav-indicator`: một phần tử duy nhất, `view-transition-name: nav-indicator`, JS đặt `translateX + scaleX` (bề rộng gốc 100px, chỉ transform). Vị trí mới đặt ở **`astro:after-swap`** (trong callback của `startViewTransition`, trước khi chụp trạng thái mới) để trình duyệt morph từ ảnh cũ sang ảnh mới cùng nhịp cả trang. **Không** dùng CSS transition khi có View Transition: trong lúc VT chạy màn hình là ảnh chụp tĩnh, transition sống không ai thấy và ảnh mới bị bắt giữa chừng → vạch nhảy nốt đoạn còn lại khi VT kết thúc. Trình duyệt không có VT mới bật transition CSS (`.is-ready`). Trang con `/du-an/<slug>` tính là mục "Dự án" (`startsWith`).
- **Nội dung (root)**: `page-out` (opacity 1→0, `translateY(0 → -10px)`) và `page-in` (0→1, `translateY(10px → 0)`) — cùng một hướng trượt lên để đọc như một dòng liên tục. `--dur-page 0.5s`, easing **`--ease-page` = cubic-bezier(0.4, 0, 0.2, 1)** (đối xứng). Không dùng `--ease-smooth` cho chuyển trang: curve đó dồn ~70% quãng đường vào 60ms đầu → cảm giác "nhảy nhanh một lần rồi mới chuyển" (đây là lỗi người dùng báo).
- **Blend**: ghi đè `animation` của `::view-transition-old/new(root)` làm rơi animation `-ua-mix-blend-mode-plus-lighter` của Chrome → giữa crossfade hai lớp 50%/50% chồng lên nền tối thành **xám**. Phải đặt lại `mix-blend-mode: plus-lighter` cho old/new và `isolation: isolate` cho `::view-transition-image-pair(root)`.
- **Mọi group khác** (shared-element morph ảnh thẻ dự án → hero trang chi tiết qua `transition:name`) dùng chung `--dur-page`/`--ease-page` qua `::view-transition-group(*)`.
- **Số đo tham chiếu** (Chrome, 1280×800, dev): tiến độ root 0 → 0.5 → 1 đều theo thời gian, không gap rAF > 41ms; header cùng một node DOM qua mọi lần chuyển; vạch menu kết thúc đúng toạ độ link active (±0px).

### Reveal-on-scroll (nội dung mờ dần khi cuộn)
- **Style:** `opacity 0→1`, `translateY(16px→0)`, easing `cubic-bezier(0.16,1,0.3,1)`, 0.7s.
- **An toàn khi JS lỗi:** trạng thái ẩn chỉ áp dụng khi `<html>` có class `js-reveal` (gắn bằng script đồng bộ ngay khi JS chạy được). Không có JS = nội dung hiển thị đầy đủ ngay lập tức. Tôn trọng `prefers-reduced-motion`.
- **Cạm bẫy Astro (đã mắc, sửa 2026-09-18):** khi chuyển trang bằng ClientRouter, Astro **chép lại attribute của `<html>`** từ trang mới → class `js-reveal` (chỉ gắn bằng script lúc tải cứng) **bị mất**, mọi reveal và timeline im lặng không chạy sau khi đi bằng menu. `BaseLayout` gắn lại class ở `astro:after-swap` (trước khi chụp trạng thái mới), đồng thời đánh dấu `.is-visible` cho `[data-reveal]` đang nằm trong viewport để ảnh chụp trang mới đầy đủ trong crossfade — chỉ phần dưới màn hình mới chờ cuộn tới. Mọi hiệu ứng lệ thuộc `.js-reveal` phải khởi tạo được ở `after-swap` lẫn `page-load` (idempotent).

### Con trỏ chuột
- Mặc định của trình duyệt trên mọi trang. Từng thử một "cursor companion" — vòng tròn viền `accent` theo con trỏ (lerp), phóng to khi hờ trên link/nút — bỏ theo yêu cầu 2026-09-18 (`initCursorRing`, div `#cursor-ring`, và CSS `.cursor-ring*` trong `BaseLayout.astro` đã gỡ hoàn toàn). Nếu làm lại hiệu ứng con trỏ tuỳ chỉnh sau này, nhớ tôn trọng `pointer: fine` và `prefers-reduced-motion` như bản cũ.

### Hero visual: hai phương án có thể đổi qua lại

Trang chủ giữ **hai** phương án hero visual dưới dạng component; đổi bằng đúng một dòng trong `src/pages/index.astro` (`const heroVariant = "browser" | "responsive"`).

- **Phương án A — `browser`** (`src/components/HeroMockBrowser.astro`): một khung Safari 16:10 duy nhất, con trỏ inspect chạy qua từng component. Chi tiết ở mục dưới.
- **Phương án B — `responsive`** (`src/components/HeroMockResponsive.astro`, đang bật): **một khung duy nhất morph qua lại** giữa mobile (tỷ lệ iPhone **375:812**, có dynamic island + home bar) và desktop **16:10** — kiểu Smart Animate của Figma / Morph của PowerPoint, chạy cả hai chiều, morph 1.4s, mỗi trạng thái giữ khoảng 4.6s (chu kỳ 6s).
  - **Cách morph:** cả hai trạng thái dùng **đúng một cây DOM**; mọi khác biệt bố cục được biểu đạt bằng **giá trị hình học chuyển tiếp được**. Mọi khối bên trong định vị tuyệt đối theo phần trăm của màn hình, nên khi khung co giãn thì từng khối trượt và đổi kích thước liên tục thay vì nhảy sang bố cục mới: tab bar dưới đáy trượt thành sidebar bên trái, thẻ số liệu 2+1 dàn thành 3 cột, chart từ trên list chuyển sang cạnh list, button từ full-width co lại thành inline.
  - **Tiết tấu có hướng:** transition khai báo ở trạng thái nào thì áp dụng khi chuyển VÀO trạng thái đó. Nhờ vậy chrome của thiết bị cũ biến mất ngay (0.25s), hình học morph 1.4s `cubic-bezier(0.5,0,0.2,1)`, rồi chrome của thiết bị đích mới xuất hiện ở cuối (0.6s, delay 0.7s). Bezel đổi màu ở nửa sau (delay 0.5s) để khung giữ chất liệu thiết bị cũ trong lúc đang biến hình.
  - **Ngoại lệ animate layout có chủ đích:** đây là chỗ **duy nhất** trong hệ thống được phép transition `width/height/top/left`. Lý do: chính chuyển động hình học là nội dung cần thể hiện (responsive), không phải hiệu ứng trang trí. Phạm vi reflow được giới hạn bằng `contain: layout` trên stage, và stage giữ `aspect-ratio: 1/1.3` nên trang không nhảy layout mỗi lần morph. Miễn trừ được khai báo bằng marker `impeccable-disable layout-transition` **ngay trong file component** (không phải config toàn dự án) nên luật vẫn bắt lỗi ở mọi file khác.
  - **Kích thước & canh giữa:** stage cao 1.3× bề rộng cột để khung mobile lớn (chiếm 60% bề rộng cột, full chiều cao stage); khung desktop rộng 100% cột. Grid của hero canh giữa theo cả cột trái (gồm dải KPI dưới đường kẻ) nên khung trông thấp hơn khối chữ — `.hero-visual` được nhấc lên `5.2rem` bằng `transform` để tâm khung trùng tâm khối chữ (eyebrow → nút). Độ dịch nằm ở lớp ngoài, `data-reveal` ở lớp trong: đặt cùng một phần tử thì transform của reveal sẽ ghi đè độ dịch.
  - **Lịch sử:** bản trước hiển thị hai thiết bị cạnh nhau kèm thước đo bề rộng và nhãn mô tả; đã bỏ theo yêu cầu — một thiết bị tại một thời điểm, khung lớn hơn, không còn phần mô tả dưới khung.

### Hero Safari Mockup — phương án A (chi tiết)
- **Ý tưởng:** khung trình duyệt Safari tỷ lệ **16:10** (nút traffic light đỏ/vàng/xanh + thanh địa chỉ có khoá + tên miền + nút reload + share) bao quanh một giao diện sản phẩm mẫu (sidebar nav, header, 3 stat card, 1 chart card, 1 nút Primary) — hình ảnh thật liên quan trực tiếp đến nghề UX/UI (xem sản phẩm đã lên web thật), không phải data-viz trừu tượng hay ảnh chụp giả.
- **Chart sống:** 6 cột chart pulse liên tục bằng `transform: scaleY()` (không animate `height`), mỗi cột một chu kỳ 2.8–4s với `animation-delay` âm để không bao giờ đập cùng nhịp — đọc như dữ liệu đang chạy thật.
- **Khung 16:10 và nội dung:** vì tỷ lệ cố định, chiều cao khung co nhanh hơn nội dung ở màn hình nhỏ; dưới 480px mọi kích thước bên trong (sidebar icon, stat card, chart, nút, nhãn) được thu nhỏ theo để nút Primary không bị cắt.
- **Tương tác:** một con trỏ "inspect" (giống chế độ inspect của công cụ thiết kế) tự động di chuyển qua từng thành phần theo chu kỳ ~2.4s, vẽ khung nét đứt quanh phần tử đang chọn kèm nhãn nổi ghi tên/kích thước (ví dụ "Header · avatar 32px", "Button/Primary · radius 8px").
- **An toàn:** `prefers-reduced-motion` → dừng vòng lặp, ẩn khung chọn/nhãn, chỉ hiện mockup tĩnh.
- **Đường viền chọn:** chỉ animate `transform`/`opacity`; `width`/`height` đổi tức thời (JS set trực tiếp, không transition) để tránh layout thrash.
- **Ngoại lệ màu có chủ đích:** 3 nút traffic light dùng đúng màu hệ điều hành macOS thật (`#ff5f57` đỏ, `#febc2e` vàng, `#28c840` xanh lá), và dynamic island trên khung phone dùng `#000` — đều là màu thiết bị/hệ điều hành thật, không phải màu thương hiệu, không đổi sang accent. Đổi màu sẽ phá vỡ việc nhận diện "đây là Safari / đây là iPhone".

### Magnetic Buttons — ĐÃ BỎ (2026-09-20)
- Trước đây `.btn` dịch nhẹ theo con trỏ (`initMagnetic` trong BaseLayout) và `will-change: transform`. Bỏ theo yêu cầu "button không động khi hover, chỉ đổi màu": đã gỡ hàm, listener, `will-change`, và `transform` khỏi hover/transition của mọi `.btn` (index, du-an, du-an/[slug]).

### Count-up Stat
- **Trạng thái:** hiện **không còn chỗ nào dùng** — dải KPI trang chủ (15+ / 200+) đã bỏ theo yêu cầu 2026-09-18. Tiện ích `initCounts()`/`[data-count-to]` vẫn nằm trong `BaseLayout.astro` để tái dùng; không có phần tử thì tự bỏ qua.
- **Style:** số liệu đếm từ 0 lên giá trị thật khi cuộn tới, easing ease-out-cubic, ~1.1s.
- **An toàn:** giá trị thật luôn nằm sẵn trong HTML; chỉ đổi thành "0" rồi đếm lên khi xác nhận JS/`IntersectionObserver` chạy được — không JS vẫn thấy đúng số liệu ngay lập tức.

### Timeline (kinh nghiệm làm việc) — đọc theo cuộn
- **Style:** đường ray dọc mảnh (`border`) + một đường `accent` tô dần đè lên (`.timeline-fill`, `transform: scaleY()`); mỗi mốc là một chấm tròn nhỏ. Chấm đổi sang `accent` kèm vòng `accent-tint` khi đường tô đi qua.
- **Hành vi (JS, `kinh-nghiem.astro`):** "đường ngang hiện tại" đặt ở 60% chiều cao viewport (đủ thấp để mốc đầu hiện ngay khi mới tải trang, không để trống dưới tiêu đề). Mốc nào có đầu mốc nằm trên đường đó là đã đọc tới → `.is-reached`: chấm sáng, nội dung fade-up (`opacity` + `translateY 14px → 0`, 0.6s). Bốn mốc nằm cùng viewport vẫn hiện lần lượt theo cuộn — đó là lý do **không** dùng `data-reveal` chung (IO bật một lần khi lọt 15% viewport).
- **Panel bên phải (`.era-panel`):** `position: sticky; top: 6rem` — chỉ lo việc sticky, **không còn thẻ nền/shadow bọc ngoài** (2026-09-18, theo yêu cầu "bỏ phần background có shadow"; `.era-panel-inner` cùng CSS `surface`/`shadow-md` của nó đã xoá). Gồm **minh hoạ "cây"** (`<picture>`/`<img>` trỏ thẳng file SVG có sẵn animation, xem mục Minh hoạ "cây") và **câu chú thích `.tree-caption`** (người dùng soạn, có hiệu ứng hiện theo từ) — đã bỏ hẳn chỉ số `01/04` và năm lớn từng đổi theo mốc đang đọc, theo yêu cầu "không cần thể hiện mốc thời gian". `.era-year`/`.era-kicker` và CSS liên quan đã xoá; `initTimeline()` vẫn còn đoạn cập nhật các phần tử đó nhưng vô hại (querySelector trả rỗng/null, code đã guard từ trước) — không cần sửa JS. `<aside>` KHÔNG `aria-hidden` (câu chú thích mang nghĩa thật); chỉ ảnh cây `alt=""`. Ẩn dưới 900px để nhường chỗ nội dung.
- **An toàn:** không JS → nội dung hiện đủ, chấm "hiện tại" vẫn sáng, panel hiện mốc đầu. `prefers-reduced-motion` → đường tô đầy, mọi mốc `.is-reached` ngay.
- **Tái dùng:** script gắn một listener `scroll`/`resize` duy nhất (`window.__timelineBound`), hàm cập nhật gán lại mỗi `astro:page-load` (`window.__timelineUpdate`) và xoá khi trang không có timeline — không rò listener khi chuyển trang.

### Iconography (biểu tượng) — hai họ
**Nguồn duy nhất:** component `src/components/Icon.astro`, map `ICONS` (mỗi entry có `kind: "stroke" | "mark"`). Không kéo bộ icon ngoài vào runtime.

**Họ 1 — icon khái niệm (`stroke`):** tự vẽ. viewBox `24×24`, `stroke-width 1.5`, `stroke-linecap/linejoin: round`, màu `currentColor`. Mỗi icon tối đa **một** mảng tô đặc làm điểm nhấn (`fill="currentColor" stroke="none"`), phần còn lại là nét — "chữ ký" chung để icon vẽ sau vẫn cùng họ. Từng bộ phận mang class `.p .p1 .p2…` để animation chạy theo bộ phận. Hiện có: `tokens` (design system), `chart` (dashboard/dữ liệu), `sparkle` (AI), `mobile`, `responsive`, `check-circle`, `chevron-left/right`, `arrow-left/right`, `sun` / `moon` (nút đổi theme trong header — không part animate, chuyển động là xoay/tan cả icon). Thêm 2026-09-20: `search` (kính lúp, tâm tô đặc), `flow` (ba nút luồng nối nhau, nút cuối tô đặc), `code` (`</>`), `layers` (ba lớp, lớp trên tô đặc) — cho section quy trình và Chuyên môn.

**Họ 2 — brand mark (`mark`):** mark của **công cụ thật sự dùng**, chỉ trong dải *Công cụ* (nền tối). viewBox 24, `fill="currentColor"`, không biến dạng, không ghép thành logo mới. **Trạng thái nghỉ đơn sắc trắng; hover đổi sang màu thương hiệu.** Đây là **ngoại lệ có chủ đích duy nhất** của quy tắc "một màu accent": màu hãng chỉ xuất hiện trên mark, chỉ khi hover (host có `.brand-hover-host`), không lan ra nền/chữ/viền. Cách tô từng mark (quyết định 2026-09-18, sau khi đo trên nền `ink`):
  - `figma`: **hai lớp chồng khít**. Khi nghỉ: path **outline của Simple Icons** tô `currentColor` (bản đầu, chuẩn). Hover: outline tan, **5 khối đặc** `.b1–.b5` tô 5 màu hãng `#F24E1E · #FF7262 · #A259FF · #1ABCFE · #0ACF83` nổi lên. Để khối màu nằm đúng bên trong outline, 5 khối được dựng theo **đường tâm nét** của path Simple Icons (cell 7.61×7.51, bo 3.755, cột chia tại x=12, hàng tại y=8.245/15.755, tròn tâm (15.803, 12)) — không dùng lưới 8×8 "đẹp" vì lệch với outline. Bản vẽ outline bằng `stroke` trên khối đặc (2026-09-18) bị to, mất nét ở mép viewBox và lệch khối màu → đã bỏ. Đây là mark duy nhất đổi *dạng* (outline → đặc) khi hover; các mark khác chỉ đổi màu. Không dùng path đơn sắc của Simple Icons vì một màu cam không đủ "bold" và không phải diện mạo thật của logo.
  - `photoshop`: path Simple Icons v16.31.0 (CC0) + một rect `.ps-bg` phía sau; hover → ô navy `#001E36`, chữ Ps xanh `#31A8FF` lộ qua chỗ khoét — đúng icon ứng dụng thật. (Chỉ tô `#31A8FF` lên path cho ra ô xanh chữ tối — ngược diện mạo, đã bỏ.)
  - `chatgpt` (mark OpenAI, Simple Icons): hover **xanh ChatGPT `#10A37F`**, không dùng hex Simple Icons `#412991` vì tím đậm chìm trên nền `ink`.
  - `claude` (Simple Icons): hover `#D97757`.
  Nhãn hiệu thuộc chủ sở hữu; dùng để chỉ đúng công cụ (nominative use), không dùng để gợi ý hợp tác/chứng nhận. Thêm mark mới: ưu tiên Simple Icons (ghi version, giữ nguyên path); hex hover phải **đạt tương phản trên `ink`** — kiểm tra thật trước khi chọn; mark nhiều màu chỉ khi đó là diện mạo chính thức và vẽ được bằng hình học đơn giản.

- **Cỡ (`size` prop):** `20` cạnh chữ · `24` trong `.icon-tile` 48px · `28` trong `.icon-tile-lg` 64px · `32` trong `.tool-mark` 64px.
- **Icon tile** (`.icon-tile`, `-lg`): bo `radius-md`, nền `accent-tint`, icon `accent-strong`. **Tool mark** (`.tool-mark`): 64px, nền `surface` + `shadow-sm` trên ô `bg-soft`, icon `ink`; hover ô → icon màu `--brand`, nổi 4px, **không xoay**, nền giữ trắng để màu hãng không chọi với tint.
- **Chuyển động icon (global style trong `Icon.astro`, chỉ transform/opacity):** icon có class `.icon-anim` chạy khi khối chứa lộ ra (`.is-visible`), lệch theo `--i` của khối để đi sau đúng nhịp thẻ. **Mặc định** mọi icon khái niệm: từng bộ phận `.pN` pop lần lượt (90ms) — icon mới chỉ cần gắn `.p .pN` là có chuyển động. Kiểu riêng: `chart` ba cột mọc từ đáy (`transform-origin: bottom`, 110ms), `sparkle` sao lớn xoay vào + sao nhỏ lấp lánh chậm 2.6s vô hạn (nhỏ, chậm — không kéo mắt). Hover khối có `.icon-hover-host` → chạy lại: mặc định shuffle (co-nở lần lượt), `chart` regrow, `sparkle` tilt. `prefers-reduced-motion` do global.css ép về 0. Hiện có icon khái niệm: `tokens`, `chart`, `sparkle`, `mobile` (thân máy, loa, nút home tô đặc), `responsive` (màn hình + chân đế, điện thoại tô đặc chồng góc).
- **Accessibility:** mặc định `aria-hidden="true"` (trang trí, đã có tên bên cạnh). Truyền `label` khi icon đứng một mình → `role="img"` + `<title>`.
- **Thêm icon khái niệm:** thêm key (tên theo khái niệm, không theo nơi dùng), vẽ trong 24×24 với padding ~2–3px, gắn `.p .pN` cho bộ phận muốn animate, kiểm tra ở 20px còn đọc được; nếu cần animation riêng, thêm rule `[data-icon="<key>"]` trong global style của `Icon.astro`.

### Minh hoạ quy trình ở hero trang Kinh nghiệm — `ProcessStack.astro` (2026-09-19)
- **Bố cục:** `.page-head` của `kinh-nghiem.astro` thành lưới hai cột `minmax(0,1.15fr) minmax(0,1fr)` như hero trang chủ — chữ trái (`.page-head-copy`, `max-width: 60ch`), minh hoạ phải; ≤900px một cột, minh hoạ nằm DƯỚI chữ (khác trang chủ) để tiêu đề trang đọc trước, `max-width: 480px`. **Căn giữa chữ theo sân khấu ảnh** (2026-09-19): cột phải gồm sân khấu + chú giải nên `align-items: center` đẩy tâm chữ thấp hơn tâm ảnh nửa chiều cao chú giải → `.page-head-copy { margin-bottom: var(--ps-legend-h, 4.75rem) }` (≥901px), với `--ps-legend-h` do JS trong ProcessStack đo thật (offsetHeight + margin-top, ResizeObserver) và đặt trên `<html>`; chú giải luôn 2 cột (yêu cầu "để ngang"), nhãn dài xuống dòng trong ô, chỉ ≤400px viewport mới 1 cột. Đã đo: tâm chữ = tâm sân khấu chính xác ở 1400/1180/1100/940px.
- **Nguồn ảnh:** 4 render 3D người dùng cung cấp `images/images 3D/01–04.png` (1536×1024, RGBA) copy y nguyên sang `src/assets/process/`, qua `astro:assets` → webp giữ alpha, 3 cỡ (480/720/960), `loading="eager"` vì ở hero. `Template.png` là mẫu bố cục (stack bung tầng + 3 đường nối dọc có chấm) — không dùng trực tiếp. **Phát hiện quan trọng:** PNG có kênh alpha THẬT (nền trong suốt); quầng sáng trắng thấy trong trình xem ảnh chỉ nằm ở RGB với alpha 0 nên trình duyệt KHÔNG hiện → không cần `mix-blend-mode`, các tầng che nhau đúng thứ tự; quầng dựng lại bằng `filter: drop-shadow` (2 lớp) trên từng ảnh. **Không thẻ nền/shadow bọc ngoài** (bỏ 2026-09-19 theo yêu cầu "bỏ background và shadow") — stack nằm thẳng trên nền trang; theme sáng giữ một `drop-shadow` mềm rất nhẹ dưới tấm (tấm trắng trên nền trắng cần đường nét), theme tối dùng quầng sáng mờ như bản render.
- **Hình học:** sân khấu `aspect-ratio: 1/1.05` (= 1.575 khung 3:2, mỗi khung cao 63.49% sân khấu). Vị trí `top` từng tầng tính từ bbox tấm trong ảnh gốc (đo PIL, tâm tấm 01/02/03/04 ở 0.71/0.54/0.53/0.24 chiều cao khung) để tâm tấm rơi ở 80/60/42/22% chiều cao sân khấu → `top` 34.9/25.7/8.3/6.8%. Tầng dưới → trên = quy trình: 01 luồng nghiệp vụ → 02 wireframe → 03 design system → 04 UI hoàn thiện. **Đường nối (sửa 2026-09-19 "đặt đúng vị trí trên hình, không lệch ra ngoài"):** 3 cột x theo mẫu 26.7/48/70.5%; tại mỗi cột, điểm nối trên MỖI tầng = trung điểm dải alpha>200 của tấm ở cột đó (đo PIL trên từng ảnh, quy về % sân khấu) → nằm đúng trên bề mặt tấm: cột 1 y = 72.5/53.0/34.1/19.3, cột 2 = 79.0/57.7/39.7/19.9, cột 3 = 86.5/64.9/46.1/24.8 (tầng 01→04). Đường chạy từ y1 lên y4 (`top: y4; height: y1−y4`), chấm 7px tại cả 4 giao điểm (`.ps-node`, hiện cùng tầng); `scaleY` vươn theo tỉ lệ khoảng cách thật `--f2/--f3` (var() trong giá trị keyframe hợp lệ). Lý do bản đầu lệch: dùng 22%→80% chung cho cả 3 cột trong khi tấm nghiêng isometric — cùng một tầng, cột phải thấp hơn cột trái ~14% sân khấu.
- **Cách kể (đổi 2026-09-19 sau tư vấn, thay vòng lặp mờ-dựng-lại 12s — hero không được trống, cả quy trình phải đọc được ngay):**
  - *Pha dựng, một lần (CSS, chỉ khi `.is-visible`):* tầng i HẠ XUỐNG từ trên (`translateY −36px` + `scale 1.03` → 0/1, 0.9s ease-smooth, trễ i×1.2s — thứ tự 01→04 theo quy trình); chấm giao điểm hiện lúc tầng chạm (+0.75s); đường nối vươn tới giao điểm tầng vừa tới (`ps-grow` 4.5s: 0→f2 ở 46.7%, →f3 ở 73.3%, →1 ở 100%); bước tương ứng trong chú giải sáng lên (+0.45s). Tất cả `fill: both` → xong ~4.5s rồi GIỮ NGUYÊN.
  - *Chú giải 4 bước* (`<ol class="ps-legend">`, lưới 2×2, ≤480px một cột) là NỘI DUNG THẬT đọc được (chỉ `.ps-stage` ảnh là `aria-hidden`): "01 Phân tích nghiệp vụ & luồng · 02 Wireframe & cấu trúc · 03 Design system & component · 04 UI hoàn thiện & prototype". Bước chưa tới 35%, đã dựng 100% màu phụ, đang soi: `--ink` đậm + tam giác accent nhỏ chỉ sang phải bên trái (góc bo nhẹ — mask SVG path `stroke-linejoin: round`, thay gạch dọc 2026-09-19 theo yêu cầu), trượt vào 4px. Mỗi bước là `<button>` (focus-visible outline accent).
  - *Chu kỳ soi (JS nhỏ trong component, guard `data-ps-bound` qua `astro:page-load`):* 300ms sau khi dựng xong JS thêm `.is-built` (bỏ animation dựng — fill forwards sẽ chặn transition — đặt cứng trạng thái đủ, bật transition 0.6s), rồi cứ 3s đặt `data-focus="N"`: tầng N `translateY −6px` opacity 1, tầng khác 0.55, chấm khác 0.35, bước N đậm, `aria-current="true"`. Rê chuột/focus/chạm vào bước → soi tầng đó và dừng chu kỳ; rời ra → chạy tiếp sau 1.5s. IntersectionObserver (0.2) dừng chu kỳ khi khối ra khỏi viewport. Reduced-motion → `.is-built` ngay, không chu kỳ, không transition. Không JS → animation dựng vẫn chạy và giữ (fill), không soi.
  - *Chiều sâu trên nền sáng:* `.ps-stage::before` vệt `radial-gradient` `--accent-tint` rất nhạt phía sau stack (không thẻ, không viền).
- **Đã đo:** 0.6s tầng 01 · 2s tầng 02 đủ, 03 đang xuống, đường 0.42 · 3.5s tầng 04 0.96, đường 0.85 · 5s `.is-built`, focus 1 · 9.5s focus 2 · 12.5s focus 3 · hover bước 2 → focus 2 và giữ nguyên sau 3.5s → rời chuột → tiếp tục sang 3 · SPA nav qua lại: 1 khối, bound 1 lần, chu kỳ chạy lại · reduced-motion: đủ 4 tầng, không focus. Light/dark, không lỗi console.

### Minh hoạ "cây" — `<img>` trỏ thẳng file SVG có sẵn animation (2026-09-19; component `TreeIllustration.astro` đã xoá)
- **Nguồn:** `public/images/tree-stroke-8-animated.svg` — bản sao Y NGUYÊN của `images/tree-stroke-8-animated.svg` người dùng cung cấp (copy sang `public/` để phục vụ tĩnh, cùng cách `public/clients/*.svg`; KHÔNG sửa nội dung file). 8 `<path>` nét (`pathLength="1"`), mỗi path một `animation-delay` cách nhau 0.9s, `@keyframes draw-window` 15s lặp vô hạn (dashoffset 1→0→−1: nét hiện dần rồi rút đi như một cửa sổ vẽ chạy dọc cây), màu nét cố định `#0e7e5e`. Toàn bộ chuyển động nằm TRONG file — trang không viết lại animation, không JS, không component (yêu cầu người dùng). Đổi hình sau này = thay file trong `public/images/`, không đụng code.
- **Cách chèn (`kinh-nghiem.astro`, trong `.era-panel`):** `<picture>` gồm `<source media="(prefers-reduced-motion: reduce)" srcset="/images/tree-stroke-8.svg">` + `<img class="tree-figure" src="/images/tree-stroke-8-animated.svg" width="585" height="586" alt="">`. `width`/`height` = viewBox để giữ chỗ, không nhảy layout; `.tree-figure { width: 100%; height: auto }`. `alt=""` vì trang trí — câu chú thích bên dưới mới mang nghĩa nên `<aside>` không `aria-hidden`.
- **Reduced-motion:** file tĩnh `public/images/tree-stroke-8.svg` (cùng 8 path — đã diff, path data giống hệt — không animation, cũng copy y nguyên) được chọn qua `<source media>` ở tầng trang. Lý do không chỉ trông vào `@media` trong SVG: đã đo Chromium — media query TRONG SVG-as-image chỉ nhận cài đặt cấp trình duyệt/OS (`--force-prefers-reduced-motion` → ảnh đứng yên) nhưng KHÔNG nhận emulation cấp trang (Playwright `reducedMotion: "reduce"` → ảnh vẫn chạy); `<source media>` do document trang đánh giá nên chắc chắn ở mọi nguồn cài đặt và mọi trình duyệt.
- **Safari + `astro dev` (2026-09-19, người dùng thấy "chỉ vẽ đoạn ngắn rồi dừng"):** WebKit CÓ chạy CSS animation trong SVG-as-image (đã đo trên bản build tĩnh: chạy đúng), nhưng ở `astro dev` toolbar quét `<img>` khiến WebKit tải ảnh lần hai (đo được 2 response) và SVG image bị đóng băng ở khung đầu. Chặn `dev-toolbar/entrypoint.js` → chạy lại, 1 lần tải. Vì vậy `astro.config.mjs` đặt `devToolbar: { enabled: false }` — chỉ ảnh hưởng dev. Lưu ý khi test: dev server trả 403 cho ảnh nếu gọi từ origin khác (Vite chặn cross-site) và trả 404 HTML nếu Accept là text/html — test SVG phải mở cùng origin hoặc dùng server tĩnh trên `dist/`.
- **Hệ quả của `<img>` (chấp nhận có chủ đích):** (1) màu nét không nhận `var(--accent)` → dark mode sáng nét lên bằng `filter: brightness(1.6)` trên `.tree-figure` (`#0e7e5e`×1.6 ≈ rgb(22,202,150), sát `--accent` dark `#3fc296`) — không đụng file; (2) không dừng animation khi cuộn khỏi viewport như bản component cũ — trình duyệt tự tiết chế animation của ảnh ngoài màn hình.
- **Câu dưới cây (`.tree-caption`, người dùng soạn):** "Cây luôn hướng tới ánh sáng và phát triển, / tôi luôn tìm cách học hỏi và hoàn thiện." Hai vế xếp hai dòng (`0.875rem` / `1rem`), cả câu **weight thường, `--ink-secondary`**; chỉ 5 cụm từ khoá `.tc-k` (Cây · phát triển · tôi · học hỏi · hoàn thiện) ở trạng thái cuối là `600` + `--ink`. Từ khoá đánh dấu bằng `*...*` trong `treeCaptionLines` (frontmatter, dấu câu ngay sau `*` đóng dính vào từ), parse lúc build thành `--i` (thứ tự từ), `--k` (thứ tự cụm) và `--kf` (vị trí tâm cụm trong dòng theo tỉ lệ ký tự 0..1 — CSS không đo được toạ độ chữ; trên font tỉ lệ, sai số đo được ≤0.02 so với vị trí thật). Dấu mở ngoặc kép mờ `.tc-quote` (“, font display 2.75rem, `--ink-faint` 55%) đứng ngay trên câu — cùng họ `.tm-mark` ở Testimonials nhưng nhỏ, báo "đây là câu nói"; thay cho gạch accent trước đó. Mỗi `.tc-line` `width: fit-content; margin-inline: auto` để vệt sáng chạy đúng trên bề rộng chữ. `max-width: 32ch`, canh giữa, nhỏ hơn nội dung chính để không cạnh tranh với cột timeline.
- **Hiệu ứng câu (CSS thuần, dùng `data-reveal` sẵn có; nhịp lần 3 2026-09-19 — thêm vệt sáng + dấu ngoặc):** hai pha nối tiếp, mọi mốc là biến trên `.tree-caption` (`--tc-start 400ms`, `--tc-step 180ms`, `--tc-in 1.2s`, `--tc-n` = số từ đặt inline, `--tc-end` tự tính, `--tc-sweep-dur 2.4s`, `--tc-bold-in 0.8s`):
  - *Pha 1 — hiện:* dấu ngoặc mờ fade lên 0.9s trước; từng từ mờ→nét (`opacity` + `blur 6px` + `translateY 0.3em`, 1.2s, trễ `400ms + i×180ms`), TẤT CẢ trông như weight thường → câu hiện xong ≈4.7s.
  - *Pha 2 — vệt sáng trong chữ + nhấn:* sau `--tc-end + 300ms`, một vệt sáng chạy trái→phải qua dòng 1 rồi dòng 2, **chỉ hiện bên trong nét chữ** (yêu cầu "mask trong text"). Cách làm — không dùng `background-clip: text` (các span con tự có màu + lớp phủ từ khoá nên không clip được): `.tc-line::after` là dải gradient nằm TRÊN chữ (`z-index 1`) với `mix-blend-mode: lighten` (theme sáng, `--tc-shine` = accent pha 45% trắng) / `darken` (theme tối, `--tc-shine` = accent) — kênh-max/min với nền trả về đúng nền (vô hình), với nét chữ trả về màu vệt. Hai điều kiện bắt buộc, đều đã vấp: (1) nền phải nằm TRONG nhóm blend → `.tc-line` tự tô `background: var(--bg)` + `isolation: isolate` (`width: fit-content` nên không thấy khác nền trang); (2) hộp dải sáng KHÔNG được thò ra ngoài hộp dòng (phần thò ra blend với "không gì" → hiện nguyên màu, đã thấy ở theme tối khi dùng `translateX`) → hộp `inset: 0` cố định, vệt di chuyển bằng `background-position-x 100%→0%` trên ảnh gradient `background-size: 300%` (vệt ở giữa ảnh → tâm vệt đi từ −0.5W tới +1.5W, qua bề rộng chữ trong nửa giữa hành trình 25%→75%, vệt rộng 30% dòng). `@keyframes tc-sweep` mỗi dòng 2.4s, `--l` = chỉ số dòng → `--tc-sweep-delay`. Mỗi cụm từ khoá **crossfade** thường→đậm 0.8s `ease-in-out` với mốc `--tc-bold-delay = sweep-delay + (0.25 + 0.5·kf)·dur − bold-in/2`, tức ôm đúng lúc tâm vệt đi tới nó → thứ tự tự nhiên theo chiều đọc Cây → phát triển → tôi → học hỏi → hoàn thiện, xong ≈9.5s. Đã đo tâm vệt so với tâm cụm: 5.6s vệt 0.06/"Cây" 0.05 (crossfade 0.44) · 6.6s vệt 0.89/"phát triển" 0.80–0.94 (0.43) · 8.0s vệt 0.06/"tôi" 0.03 · 8.5s vệt 0.48/"học hỏi" 0.48–0.58 (0.64) · 9.0s vệt 0.90/"hoàn thiện" 0.77–0.93 (0.41).
  - *Vì sao crossfade chứ không transition `font-weight`:* `font-weight` chỉ nội suy trên variable font (SF Pro có, Segoe UI/Roboto tĩnh không) và với ease nhanh vẫn trông như nhảy — người dùng đã thấy "bold đậm luôn". Cách làm: mỗi `.tc-k` là HAI lớp chồng khít — chữ thật trong span **đậm + `--ink`** (giữ layout ở bề rộng đậm từ đầu → khi đậm lên KHÔNG đẩy chữ bên cạnh, đã đo width từng từ khoá không đổi suốt hiệu ứng) và `::before { content: attr(data-w) }` **thường + `--ink-secondary`** phủ lên, canh giữa. Trước mốc: span `color: transparent`, phủ `opacity: 1`; sau mốc: span hiện màu, phủ ẩn, cùng một nhịp → mượt trên mọi font. `data-w` đặt lúc build cho từ khoá.
  - Khối `<p>` tự nó không fade (ghi đè `[data-reveal]` chung như hero). `.tc-k` phải khai báo lại CẢ cụm `transition` (shorthand ghi đè toàn bộ) — 3 thuộc tính hiện dùng `--tc-delay`, `color` dùng `--tc-bold-delay`; `::before` có transition `opacity` riêng cùng delay. Reduced-motion → chữ hiện ngay, dấu ngoặc đứng sẵn, từ khoá đậm sẵn, phủ ẩn, vệt sáng `animation: none` (global `*{animation-duration:.001ms}` cũng đã snap về keyframe cuối = ẩn). Không JS (không `.js-reveal`) → trạng thái cuối, không vệt sáng.
  - Lưu ý đo: dev server sau `npm i` từng phục vụ CSS cũ qua HMR — phải restart (xoá `.vite`/`.astro`) mới đo đúng. Sau SPA nav câu nằm dưới fold (top ≈1124px ở viewport 1000) và hiện đúng khi cuộn tới.
- **Lịch sử (để khỏi làm lại):** bản 2026-09-18/19 là component `TreeIllustration.astro` inline SVG với animation tự tính (63 path `tree-stroke-2.svg`, rồi 28 path `tree-animated-ok.svg`) + IntersectionObserver play/pause — đã XOÁ theo yêu cầu "dùng trực tiếp file, không component, không JS". Bài học kỹ thuật vẫn đúng nếu có ngày quay lại inline: không gộp nhiều subpath vào một `d` (trình duyệt reset pha dash ở mỗi `M`); `@keyframes` không nhận `var()` ở mốc %; QA timing animation nhiều phần tử bằng Web Animations API `currentTime` thay vì `waitForTimeout`; global `*{animation-duration:.001ms!important}` cần ghi đè `animation: none` khi keyframe 100% là trạng thái vô hình.

### Cách tôi làm việc — section quy trình 4 bước (nền tối, thay dải công cụ 2026-09-20)
- **Vị trí & vai trò:** `section.process-band` ở trang Kinh nghiệm, sau "Kinh nghiệm làm việc", trước "Chuyên môn" — **thay hẳn** dải công cụ cũ (không thêm section bên cạnh). Vẫn là **mảng tối duy nhất** của site: nền `--band-bg` (luôn tối ở cả hai theme), chữ `--on-ink*`, `width: 100vw; margin-left: calc(50% - 50vw)` tràn hai mép; `padding-block` 3.5–5.5rem. Khối `.block-after-band` ngay sau không có `border-top`. `aria-labelledby` tiêu đề.
- **Đã bỏ sticky + rèm che (`.curtain`)** cùng lúc: section giờ cao hơn một màn hình ở tablet/mobile — sticky sẽ ghim phần trên và phần dưới không bao giờ lộ. Mọi khối dưới trở lại luồng bình thường trong `main`.
- **Token mới `--band-accent` (#3fc296, cả hai theme, global.css):** `--accent` theme sáng (#0b7a5b) chìm trên nền tối, nên node, đường nối, icon bước trên dải dùng mint của theme tối. Không hex trần trong section.
- **Nội dung (nguyên văn người dùng, rút gọn lần 2 2026-09-20 để 4 bước cân chiều cao):** nhãn "Cách tôi làm việc" · h2 "Cách tôi đưa thiết kế đến gần sản phẩm" · lede "Tôi kết nối nghiệp vụ, trải nghiệm người dùng và khả năng triển khai…" · 4 bước: 01 Làm rõ bài toán (`search`) · 02 Tổ chức trải nghiệm (`flow`) · 03 Xây dựng hệ thống giao diện (`tokens`) · 04 Kiểm chứng và triển khai (`check-circle`), mỗi mô tả một câu ~15–18 từ. Mỗi bước: số `--display` **2rem** (giảm 17% từ 2.4rem) **16%**, icon tile 40px nền `ink-surface` màu `band-accent`, h3 1.15rem `on-ink` (có `.sr-only` "Bước 0N:" cho screen reader; số hiện là `aria-hidden`), mô tả 0.92rem `on-ink-secondary`. Intro cách timeline `clamp(1.5rem, 3vw, 2rem)` (từ 2.5–3.5rem); box **kết thúc ngay sau bước 04** (padding-bottom 2.5–3.5rem, đo 56px dưới mô tả bước 04). **Không còn hàng công cụ trong box** — tách thành section riêng (dưới). Logo DT canh giữa dọc box, sát mép phải gần bước 04 (`right: -5%; top: 50%; translateY(-50%)`, cao 92%, yêu cầu 2026-09-20); ≤900px cao 46%.
- **Đường nối liên tục — cách dựng không cần đo bằng JS:** mỗi `.pstep` mang **node** (14px, `top:0;left:0`) và **một đoạn nối tới bước kế** `.pstep-seg` (hộp 14px dày, `overflow: hidden`, bắt đầu từ TÂM node của mình, dài `calc(100% + gap)` = đúng tới tâm node bước kế vì node cùng toạ độ trong ô). Bước cuối không có đoạn. Trong hộp: `.pstep-seg-line` (2px, `band-accent` 55%, `scaleX/Y` từ gốc) và `.pstep-seg-head` (hộp `inset:0`, nền `radial-gradient` chấm 3px + `drop-shadow` ở **cuối** hộp, **trượt** `translate(-100%) → 0` cùng nhịp với line → đầu sáng bám mép đang vẽ, không scale nên chấm không méo, tắt ở 88–100%). Đổi lưới chỉ cần đổi **hướng** đoạn:
  - Desktop: 4 cột, đoạn ngang phải.
  - Tablet ≤900px: lưới 2×2, DOM vẫn 01→04 nhưng **03 đặt dưới 02, 04 dưới 01** (`grid-column/row`) để đường ziczac 01 → 02 ↓ 03 ← 04: đoạn của 02 quay dọc (`height: calc(100% + gap)`, hai ô cùng hàng cao bằng nhau nên chạm đúng node 03), đoạn của 03 chạy ngược trái (`right: calc(100% - 7px)`, gốc phải, đầu sáng ở mép trái, keyframes `-rev`).
  - Mobile ≤600px: timeline dọc, node cách mép trên 0.3rem, nội dung `padding-left: 2.25rem`; mọi đoạn dọc `height: calc(100% + gap)` — chạm đúng node ô sau dù ô cao khác nhau. Selector mobile dùng `:nth-child(n)` để đủ specificity ghi đè rule `nth-child(2)/(3)` của tablet (cùng match). Logo DT thu về góc dưới-phải nhỏ, chữ không đè lên.
  - Đã đo: desktop tâm node cách đều 274px = đúng bề rộng đoạn; tablet node 03 thẳng dưới 02, đoạn dọc dài đúng 278px; mobile các đoạn 249/225/249px = đúng khoảng cách node.
- **Chuỗi xuất hiện (CSS thuần, mở khoá bởi `.is-visible` của `<ol>` — cơ chế `data-reveal` chung; không listener riêng):** intro (nhãn/h2/lede) reveal chung 0.7s lệch 0/80/160ms → node 01 sáng ở `--p0` 0.5s (transition 0.35s: scale .7→1, viền xám → tô `band-accent` + quầng 4px 22%) và nội dung 01 hiện (0.6s, `translateY 10px→0`) → đoạn 1 vẽ 0.5–1.4s (`--pseg` 0.9s, **linear**, đầu sáng bám mép) → nội dung 02 hiện ở 1.25s (mốc node trừ 0.15s: ngay trước khi đường chạm), node 02 sáng 1.4s, đoạn 2 vẽ ngay 1.4–2.3s → … → node 04 sáng 3.2s → hàng công cụ 3.65s (`transition-delay` p0 + 3·pseg + 0.45s). **Tổng ≈ 4.2s, chạy MỘT lần** (transition/`fill: both`), không lặp. Đường đã đi qua giữ 55%, node đã xong giữ sáng + quầng nhẹ. Đã scrub bằng Web Animations API: 0.6s line1 0.11 · 1.0s 0.56 · 1.3s 0.89 + body02 0.43 · 1.45s line2 bắt đầu · 2.2s line2 0.89 + body03 0.43 · 3.3s body04 0.95 · 3.7s công cụ 0.38 · 4.2s xong.
- **Không JS / giảm chuyển động:** mọi trạng thái ẩn chỉ áp khi `html.js-reveal` → không JS thì HTML/CSS hiện đủ (đã đo `javaScriptEnabled: false`: nội dung 1, node tô sẵn, đường đủ). `prefers-reduced-motion`: đường, node, nội dung, công cụ hiện ngay (`animation/transition: none`), vệt sáng logo dừng. `<ol>` tự nó không fade (ghi đè `[data-reveal]` chung).
- **Logo DT nét + vệt sáng (T8) giữ lại, vai trò thu nhỏ:** `svg.band-logo` mép phải, canh giữa dọc box (`right: -5%; top: 50%; translateY(-50%)`, cao 92%, tối đa 560px — yêu cầu 2026-09-20 "lên chính giữa theo chiều dọc, gần nội dung cuối"), nét nền 0.07 (từ 0.1), vệt sáng ×0.7; ≤900px cao 46% (`right: -18%`), ≤600px cao 30% + opacity .6. Cách dựng vệt sáng (glintLayers 14 + 6 lớp cộng dồn, `pathLength=1000`, `dt-glint` 8s) giữ nguyên như mô tả cũ: đổi dáng vệt = đổi hằng số `GLINT_*` trong frontmatter. **Không thêm lớp nền thứ hai** vào dải này.
- Token nền tối ở `global.css`: `--on-ink`, `--on-ink-secondary`, `--ink-surface*`, `--band-bg`, `--band-accent`. `--header-h` vẫn còn (header sticky dùng).

### Công cụ hỗ trợ — section riêng ngay sau mảng tối (tách 2026-09-20)
- **Lý do tách:** box tối chứa cả 4 bước lẫn công cụ quá dài, hai nhóm không có phân cấp. Giờ `section.tools-section` đứng riêng giữa "Cách tôi làm việc" và "Chuyên môn", tràn hai mép, padding 3–4.5rem. **Nền đổi chỗ với Chuyên môn 2026-09-20 (yêu cầu):** công cụ nằm trên nền trang `--bg` (card trắng + shadow-md như quy tắc Cards), còn **Chuyên môn mang nền `--bg-soft` tràn hai mép** qua `.block-after-band::before` (pseudo-element `left: calc(50% - 50vw); width: 100vw; z-index: -1` + `isolation: isolate` để nội dung vẫn trong cột 1160px). Khối Chuyên môn không `border-top`. **Quy tắc đường kẻ giữa khối (người dùng chốt 2026-09-20):** chỉ kẻ `border-top` khi hai khối kề nhau **cùng nền** (đầu trang → Kinh nghiệm làm việc; Nền tảng → Đánh giá); khác nền thì đổi nền đã là ranh giới → `.block-flush` bỏ kẻ (Nền tảng sau Chuyên môn). Đệm `.block` siết từ 3–4.5rem xuống `clamp(2.5rem, 6vw, 3.5rem)`, `.tools-section` cũng 2.5–3.5rem.
- **Nội dung:** **rút gọn 2026-09-20 (yêu cầu "không cần quá to"): chỉ còn 4 card, bỏ nhãn "Năng lực triển khai", h2, lede và dòng kết**; section mang `aria-label="Công cụ hỗ trợ"`, padding 2–3rem, card vào từ 0ms (i×110). 4 card: Figma · HTML/CSS · Photoshop · AI-assisted workflow, mỗi card icon lớn (`.icon-tile-lg` 64px, icon 28) + tên 1.15rem + mô tả 0.92rem một câu · dòng kết `.tools-note` (viền trên `border`, `ink-secondary`): "Công cụ giúp tăng tốc quá trình; quyết định thiết kế vẫn dựa trên người dùng, nghiệp vụ và khả năng triển khai."
- **Card:** `--surface` + `shadow-md`, bo `radius-lg`, lưới 4 cột **cùng chiều cao** (grid stretch; đo 257px cả 4) → 2×2 ≤900px → 1 cột ≤600px, gap 1.25rem. **Mặc định trung tính:** tile nền `bg-soft`, icon `ink-secondary` (không dùng màu hãng trên cả card). **Hover:** card nâng 3px + `shadow-lg`, tile `accent-tint`, icon nét (`code`, `sparkle`) sang `accent`; card là `.brand-hover-host` nên mark Figma tô 5 màu hãng, Photoshop tô ô navy/chữ xanh (Icon.astro). Không xoay/nảy.
- **Hiệu ứng vào:** `data-reveal` chung — nhãn/h2/lede lệch 0/80/160ms, card lần lượt trái→phải `240ms + i×110ms`, dòng kết 720ms; icon `.icon-anim` pop từng bộ phận khi card lộ ra (mark Figma/Photoshop không có part nên đứng yên). Chạy một lần. Reduced-motion: global.css tắt transition/animation → hiện ngay.

### Chuyên môn (3 thẻ riêng)
- **Đúng 3 mục**, lưới 3 cột (`repeat(3,1fr)` → 2 cột ≤900px → 1 cột ≤640px), **đổi 2026-09-20** để nói "có gì" (lĩnh vực/loại sản phẩm), không trùng "cách làm" ở section quy trình: Fintech & sản phẩm nhiều dữ liệu (`chart`) · Hệ thống vận hành doanh nghiệp (`layers`) · Design System đa nền tảng (`tokens`). Nội dung là **bản người dùng cung cấp** (2026-09-20) — không rút gọn lại. Mục "AI-Assisted Design & Prototyping" cũ đã hoà vào hàng "Công cụ hỗ trợ" của section quy trình. Không có dải nền chung, không chip lĩnh vực: **không gộp nhiều dịch vụ vào một hộp**.
- Thẻ trắng `shadow-md` (nằm trên nền trắng nên cần shadow-md ngay khi nghỉ), hover `shadow-lg` + nổi 3px, không viền, bo `radius-lg`. Mở đầu bằng `.icon-tile-lg` 64px có **chuyển động** (xem Iconography), tiêu đề Cal Sans 1.3rem, thân `ink-secondary` 0.95rem. Vào so le 90ms; thẻ là `.icon-hover-host` nên hover chạy lại animation icon.

### Nền tảng (2 hộp ngang — tách riêng khỏi Chuyên môn)
- Mobile App Design · Web Responsive Design lấy từ danh sách kỹ năng trong CV; mô tả ghép từ các dòng kinh nghiệm đã có — không thêm năng lực mới. Đứng thành **khối riêng có tiêu đề "Nền tảng"**, ngay sau Chuyên môn. Mục Web Responsive viết lại 2026-09-20 (bố cục, lưới, trạng thái tương tác cho desktop/tablet, nối liền bản mobile) để không lặp nguyên văn "token, component dùng chung cho web và mobile" của "Design System đa nền tảng".
- **Cố ý khác dáng** với 3 thẻ chuyên môn để hai nhóm không đọc nhầm thành một: lưới 2 cột (→ 1 cột ≤640px), hộp **ngang** (icon tile 64px bên trái, chữ bên phải), nền `bg-soft`, hover → trắng + `shadow-md` + nổi 3px. Cùng cỡ chữ với thẻ chuyên môn. Hộp là `.icon-hover-host`.

### Đánh giá từ khách hàng — component `Testimonials.astro` (hiện chỉ đặt ở Kinh nghiệm, `#danh-gia`; trang chủ trỏ link tới)
- **Dữ liệu:** `src/data/testimonials.ts` — 4 nhận xét **nguyên văn**, một nguồn duy nhất; không lặp lại trong trang.
- **Bố cục (mẫu người dùng chọn 2026-09-18):** tiêu đề canh giữa; **dấu ngoặc kép khổ lớn** (Cal Sans `”` 8rem, màu `border`) nằm sau góc trên-trái khối chữ; quote **cỡ chữ thường 1rem/1.7**, màu `ink-secondary`, ≤62ch canh giữa — *không* phóng to kiểu pull-quote; tên đậm `ink` + vai trò `ink-faint` 0.85rem canh giữa; hai **chevron accent trần** (`chevron-left/right`, 28px trong hit-area 44px, không vòng tròn, hover `accent-tint`) neo giữa hai mép. Không hiện số đếm — đếm chỉ tồn tại cho screen reader (`aria-live`, ẩn thị giác).
- **Cơ chế:** các slide **xếp chồng cùng một ô grid** → chiều cao = nhận xét dài nhất, không nhảy layout. Chuyển động chỉ `opacity` + `translateX(28px)` theo hướng bấm (`data-dir`), 0.45s `--ease-page`; `visibility` trễ để slide ẩn không nhận focus. Không autoplay.
- **Điều khiển:** nút, phím ←/→ khi focus stage, vuốt ngang ≥40px. Slide ẩn `aria-hidden`. Script bind theo `.tm-carousel[data-bound]`, nhiều instance/trang được. **Không JS:** xếp dọc, hiện đủ, ẩn mũi tên.
- **CTA cuối trang Kinh nghiệm đã bỏ** (2026-09-18) — trang kết bằng khối đánh giá; CTA vẫn còn ở Trang chủ, Dự án.

### Phân vai Trang chủ ↔ Kinh nghiệm — mỗi nội dung chỉ sống ở một chỗ (2026-09-18)
Sau khi dựng trang chủ theo Persuade, hai trang lặp nhau (carousel đánh giá, danh sách khách hàng, tiêu đề). Quy tắc chốt:
| Nội dung | Trang chủ | Kinh nghiệm |
|---|---|---|
| Đánh giá | **chỉ trích đoạn** trong "Vì sao chọn" + link `Đọc 4 đánh giá đầy đủ →` tới `/kinh-nghiem#danh-gia` | **carousel nguyên văn** (`Testimonials`), section `id="danh-gia"` |
| Khách hàng | danh sách theo lĩnh vực | **không lặp** (tên tổ chức đã có trong đánh giá) |
| Năng lực | *cách làm* — 3 việc tôi giúp được | *cách làm* chi tiết — 4 bước "Cách tôi làm việc" (+ công cụ phụ); *có gì* — Chuyên môn, Nền tảng |
| Lịch sử | không | timeline 4 công ty |
| Tiêu đề | "Thiết kế sản phẩm doanh nghiệp rõ ràng, đáng tin, dễ mở rộng." | "15+ năm kinh nghiệm thiết kế sản phẩm số" (người dùng đặt 2026-09-19; lede: "Với kinh nghiệm chuyên sâu trong fintech, tôi giúp đội ngũ đi từ phân tích nghiệp vụ đến UI, design system và prototype để tạo ra sản phẩm dễ sử dụng, nhất quán và sẵn sàng phát triển.") — tiêu đề nêu bề dày, lede nêu chuyên môn + cách làm; không lặp lời hứa trang chủ |
Thêm nội dung mới: hỏi "nó là *lời hứa/bằng chứng tóm tắt* (Trang chủ) hay *hồ sơ chi tiết* (Kinh nghiệm)?" rồi đặt đúng một nơi, trang kia trỏ link.

### Trang chủ — cấu trúc nội dung (đề xuất duyệt 2026-09-18, rút còn 6 khối sau khi phân vai)
Nhịp Persuade: hứa → chứng minh → cách làm → ai đã tin → hành động. Sáu khối, thứ tự cố định:
1. **Hero** — dòng nhỏ là *tên + làm gì cho ai* ("Trần Minh Đức - thiết kế sản phẩm cho doanh nghiệp tài chính & vận hành"), **không** dùng chức danh (phục vụ nhà tuyển dụng — đối tượng phụ). Tiêu đề gõ chữ giữ nguyên, đi thẳng xuống hai nút hành động (2026-09-18: bỏ đoạn lede "15 năm..." khỏi trang chủ — chuyển sang mở đầu trang Kinh nghiệm, ngay dưới `h1`, vì đó là câu diễn giải "làm việc thế nào", hợp với trang hồ sơ chi tiết hơn trang chủ; xem class `.lede` trong `kinh-nghiem.astro`).
2. **Vì sao chọn tôi** (`.reasons`, nội dung do người dùng cung cấp 2026-09-18 — đổi tên từ "Vì sao doanh nghiệp chọn tôi"; đã bỏ link `Đọc 4 đánh giá đầy đủ →` cuối khối theo yêu cầu — bằng chứng đầy đủ vẫn ở mục Đánh giá của Kinh nghiệm, chỉ không còn lối tắt riêng từ đây): tiêu đề + một câu giới thiệu (`.reasons-head`, layout giống `.process-head` — **xếp dọc**: tiêu đề `clamp(1.8rem, 3.2vw, 2.25rem)` ở trên, mô tả `13px` ngay dưới, không còn kiểu hàng ngang title/mô tả song song của bản trước) rồi **4 thẻ `bg-soft` lưới 2×2** (`repeat(2, 1fr)`, ≤900px rơi 1 cột), mỗi thẻ = câu khẳng định (Cal Sans 1.25rem) + một đoạn tự mô tả ngắn. **Đã bỏ trích dẫn nguyên văn theo từng thẻ** — ngoại lệ có chủ đích của quy tắc "không có bằng chứng thì không có luận điểm"; bằng chứng thật (testimonial) vẫn đứng ngay sau qua link `Đọc 4 đánh giá đầy đủ →` (đánh giá đầy đủ chỉ ở Kinh nghiệm).
3. **Tôi có thể giúp doanh nghiệp** (`.process`, **đưa lên trước Dự án tiêu biểu + mảng tối tràn hai mép 2026-09-20** theo yêu cầu: nền `--band-bg`, chữ `--on-ink*`, thẻ bước = ô kính `ink-surface-faint` + viền `ink-surface` + **`backdrop-filter: blur(12px)`** (vệt sáng logo đi sau ô thành quầng mờ; hover `ink-surface`/`ink-surface-hover`), icon tile nền `ink-surface` màu `--band-accent`, số bước `on-ink` 18% — cùng ngôn ngữ với "Cách tôi làm việc" ở Kinh nghiệm; không kẻ trên vì khác nền; **có cùng logo DT nét + vệt sáng** (svg inline, cùng vị trí/thông số: `right: -5%`, canh giữa dọc, nét nền 0.07, vệt ×0.7; dữ liệu path + lớp vệt sáng tách ra `src/data/dt-glint.ts` dùng chung cho hai trang, 2026-09-20), đổi tên từ "Cách tôi làm việc" 2026-09-18, nội dung do người dùng cung cấp): tiêu đề + mô tả xếp dọc như `.reasons-head` (tiêu đề `clamp(1.8rem, 3.2vw, 2.25rem)`, mô tả `13px` ngay dưới). Khung đổi từ "quy trình tôi theo" sang "3 việc tôi giúp được" — không còn ngụ ý tuần tự bắt buộc. Nội dung đổi 2026-09-20 (người dùng cung cấp): mô tả "Từ một bài toán chưa rõ ràng đến sản phẩm hoàn chỉnh trên web và mobile…"; 3 mục: Thiết kế website & mobile app (`responsive`) · Sản phẩm nghiệp vụ phức tạp (`layers`) · Design system & prototype (`tokens`). Thẻ trắng `shadow-md`, icon tile 48px có chuyển động + số bước mờ 18%. Đã bỏ dòng "Bạn nhận:" (nội dung mới không tách riêng phần deliverable — body tự nói kết quả). **Trùng có chủ đích** với "Chuyên môn" ở Kinh nghiệm (từ 2026-09-20: Fintech & sản phẩm nhiều dữ liệu / Hệ thống vận hành doanh nghiệp / Design System đa nền tảng — và với 4 bước "Cách tôi làm việc" cùng trang) — chấp nhận vì trang chủ cần lời hứa ngắn ngay từ đầu, Kinh nghiệm là bản đầy đủ hơn (có nêu rõ AI). Đây là ngoại lệ của nguyên tắc "mỗi nội dung chỉ sống ở một chỗ".
4. **Dự án tiêu biểu** (`.featured`, đứng sau mảng tối → bỏ `border-top` 2026-09-20): kể theo `dl.case-facts` Bài toán / Cách giải / Giao lại; tiêu đề **"BSC - BIDV Securities JSC"** + dòng nhỏ `.featured-sub` **"Ứng dụng GDCK tích hợp trong app BIDV SmartBanking"** sát dưới (0.95rem, `--ink-faint`, h2 margin-bottom 0.15rem — đổi lần 2 2026-09-20 theo yêu cầu; trang chi tiết `/du-an/bsc-smartbanking` vẫn giữ title "BSC trong BIDV SmartBanking") (dự án đổi từ Tường Ngân 2026-09-18 theo yêu cầu — fintech là câu chuyện chính cho khách tài chính; trang `/du-an` vẫn mở đầu bằng Tường Ngân qua field `featured`). Slug đặt ở hằng `FEATURED_SLUG` trong `index.astro`; đổi dự án phải viết lại tay 3 dòng case-facts. Plate bên phải là **ảnh cover thật** (16/10, `shadow-md`, cả plate là link tới trang chi tiết, hover nâng nhẹ) — lấy từ content collection, không nhúng đường dẫn riêng.
5. **Đã đồng hành cùng** (`.client-row`) — **lưới khung logo trải kín chiều ngang, khung bằng nhau, không nhãn lĩnh vực/tên chữ** (2026-09-18, theo yêu cầu — bản đầu xếp theo lĩnh vực kèm tên, bản kế chỉ còn hàng flex dồn trái độ rộng khung theo tỉ lệ logo; giờ là CSS grid `repeat(auto-fit, minmax(110px,1fr))` để cột luôn lấp đầy hết `main` 1160px và tự giảm số cột trên màn hẹp mà không cần đặt breakpoint cứng). Chỉ ở trang chủ. **Logo khách hàng (2026-09-18, người dùng cung cấp):** SVG tĩnh copy từ `logo/khach hang/` vào `public/clients/<slug>.svg`, phục vụ bằng thẻ `<img>` như `public/logo-dt-green.svg`, **không** qua `astro:assets` (chỉ dùng cho ảnh raster cần tối ưu). Mỗi logo nằm trong `.client-logo-chip` — khung cố định cao 64px, rộng 100% cột (nên mọi khung bằng nhau bất kể tỉ lệ gốc từng logo, từ 40:25 đến 397:182), nền trắng cố định (`#fff`, không đổi theo theme — vì nhiều logo màu đậm như Fubon Life mất tương phản trên nền tối), `box-shadow: shadow-sm` thay viền cứng. `<img>` dùng `max-height`/`max-width` + `object-fit: contain` (không phải `height` cố định) để logo tự thu nhỏ giữ đúng tỉ lệ, không tràn khung và không bị ép méo; mặc định `filter: grayscale(1) opacity(.75)`, hover → màu thật — cùng tinh thần "màu hãng chỉ hiện khi tương tác" với brand mark công cụ ở Kinh nghiệm, áp dụng cho logo nhiều màu bằng CSS filter thay vì layer riêng. `alt` trên `<img>` giờ mang tên khách hàng (không còn `alt=""`) vì không còn chữ hiển thị bên cạnh để screen reader đọc thay. Dữ liệu vẫn giữ cấu trúc theo lĩnh vực trong `clientGroups` (frontmatter `index.astro`) làm evidence, chỉ `clientLogos` (dàn phẳng, lọc client có logo) mới render. **Thiếu logo (BIACA) → không hiện trong hàng này nữa** (không dựng mark thay thế, không còn chỗ cho text-only) — vẫn còn trong `clientGroups`, cần Đức bổ sung logo nếu muốn BIACA xuất hiện lại. **Chưa xác nhận:** tên/lĩnh vực chính xác của "Shinhan" — chỉ có bằng chứng là file logo, chưa có trong `raw-content.md` hay dự án nào; cần Đức xác nhận lại.
6. **CTA** (`.cta-band`, nội dung đổi 2026-09-20 người dùng cung cấp): h2 "Bạn đang có một sản phẩm cần làm rõ hoặc cải tiến?" (max 24ch) · mô tả `.cta-desc` "Hãy gửi cho tôi bài toán hiện tại… Chưa cần một brief hoàn chỉnh…" (1rem `ink-secondary`, khối chữ max 58ch) · nút primary "Trao đổi dự án →" · dòng phụ `.cta-sub` "Tôi nhận dự án thiết kế thuê ngoài và sẵn sàng trao đổi về những vị trí Senior phù hợp." (0.88rem `ink-faint` — giữ nhóm tuyển dụng nhưng nhỏ/nhạt hơn một bậc để không lấn trọng tâm khách doanh nghiệp). Không còn nhắc "24 giờ" ở đây (vẫn có ở trang Liên hệ).
(Carousel đánh giá từng là khối 6 — chuyển hẳn sang Kinh nghiệm để không lặp.)
Giọng: ngôi "tôi", câu ngắn, danh từ nghiệp vụ cụ thể; số liệu chỉ 15+/200+ và chỉ trong ngữ cảnh câu; gạch ngang dùng `-`.

### Trang Dự án & chi tiết dự án — ảnh thật (2026-09-18)
Ảnh dự án là **nhân vật chính**; giao diện lùi lại (mode Experience trong case study, danh sách vẫn Persuade).
- **Nguồn & schema:** `cover` (ảnh tổng quan) + `gallery[{src, caption}]` trong `src/content/projects/*.json`, đường dẫn tương đối `../../assets/projects/<slug>/NN.jpg`; Astro `image()` kiểm tra file lúc build, `<Image>` xuất webp nhiều cỡ (`widths` + `sizes`, quality 80–82). Trang chủ lấy cover qua `getEntry("projects","tuong-ngan")` — một nguồn ảnh cho ba nơi (thẻ danh sách, hero chi tiết, trang chủ).
- **Tỉ lệ:** mọi plate/cover `aspect-ratio: 16/10` — đúng khổ slide 2048×1280 nên không crop; `img{width:100%;height:100%;object-fit:cover}` bên trong `overflow:hidden` để bo góc theo plate. Không đặt số thứ tự lên ảnh (che nội dung slide); số thứ tự chỉ còn ở watermark thân thẻ nổi bật và dòng tag trang chi tiết.
- **Shared-element morph** giữ nguyên: `transition:name="project-plate-<slug>"` trên plate danh sách và `.hero-plate` chi tiết — ảnh bay từ thẻ sang hero.
- **Thẻ danh sách:** tóm tắt thật dài 2–3 câu → `-webkit-line-clamp: 4`, đọc đủ ở trang chi tiết. Ảnh 2 thẻ đầu `loading="eager"`, còn lại lazy.
- **Meta strip chi tiết:** 2–4 mục (Khách hàng / Vai trò / Luồng hoặc Lĩnh vực / Công cụ), `repeat(auto-fit, minmax(9rem,1fr))`; mục trống tự ẩn. Quy trình `repeat(auto-fit, minmax(13rem,1fr))` vì có dự án 2 bước (PMW), 4 bước (NHSV).
- **Sơ đồ luồng:** dòng hội tụ đọc từ field `flowHub`, không hard-code; không có `flowHub` thì chỉ hiện các chip.
- **Khối "Màn hình & ghi chú"** (`.gallery`): ảnh khổ lớn xếp dọc, cách nhau `clamp(2rem,5vw,3.25rem)`, bo `radius-lg` + `shadow-md`; `figcaption` = số thứ tự Cal Sans màu accent + 1–2 câu `ink-secondary` 0.95rem, ≤ `--measure`. Chú thích **tóm lược lại chữ có trong slide** (slide đã tự giải thích), không viết thêm kết quả. Bỏ slide "Thank you".
- **Plate trống** (dự án chưa có ảnh) vẫn hỗ trợ: `plateLabel` optional, mặc định "Ảnh sẽ cập nhật"; biến thể tag "Minh hoạ" giữ trong CSS cho `real: false`.
- **Dev server:** đổi `content.config.ts` (thêm `image()`) hoặc xoá file JSON phải **khởi động lại `astro dev`** — content layer không tự đồng bộ, trang chi tiết trả TypeError và danh sách vẫn hiện file đã xoá.

### Cards (dự án, chuyên môn, testimonial, liên hệ)
- **Corner Style:** `radius-md`/`radius-lg` tuỳ kích thước.
- **Background:** trắng hoặc `bg-soft`; thẻ dự án nổi bật dùng `accent-tint`.
- **Shadow:** `shadow-sm` mặc định, `shadow-md` khi hover (thẻ tương tác được); thẻ tĩnh nằm trên nền trắng (panel năm ở timeline) dùng thẳng `shadow-md` để tách nền.
- **Border:** không viền — phân biệt bằng nền + shadow, không bằng đường viền cứng. (Viền 1px `border` chỉ dùng cho **hộp wireframe bên trong minh hoạ CSS**, vì đó là nét vẽ, không phải thẻ.)

## Do's and Don'ts

### Do:
- **Do** dùng đúng 1 màu accent (emerald) cho mọi điểm nhấn — CTA, số liệu, thẻ, mốc thời gian.
- **Do** giữ bo góc trong 4 cấp đã định nghĩa (4/8/14/22px), nhất quán toàn site.
- **Do** dùng shadow mềm nhiều lớp để gợi ý tương tác, không dùng shadow cứng/offset lớn.
- **Do** giữ nội dung `data-reveal` hiển thị mặc định khi không có class `js-reveal` trên `<html>` — never để JS lỗi làm mất nội dung thật.
- **Do** animate `transform`/`opacity` cho mọi hiệu ứng cuộn/chuyển trang, không animate `width`/`height`/`padding`.
- **Do** gắn nhãn "Minh hoạ" rõ ràng cho mọi nội dung placeholder.

### Don't:
- **Don't** thêm màu nhấn thứ hai ngoài emerald.
- **Don't** dùng góc vuông tuyệt đối hoặc bo tròn quá mức (pill) ngoài phạm vi tag/nút nhỏ.
- **Don't** animate `width`/`height` cho thanh tiến trình hay bất kỳ chuyển động nào khác — dùng `transform: scaleX()`/`scaleY()`.
- **Don't** ẩn nội dung mặc định bằng CSS tĩnh (`opacity:0` không điều kiện) — luôn gate sau xác nhận JS chạy được.
- **Don't** dùng easing bounce/elastic — chỉ dùng ease-out mượt (`cubic-bezier(0.16,1,0.3,1)`).
