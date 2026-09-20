# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (user's explicit choice — nhẹ, tối ưu cho site nội dung tĩnh như portfolio/CV, SEO tốt, dễ host).

**Quản lý nội dung dự án (cập nhật 2026-09-17):** Dữ liệu dự án chuyển từ file JS tĩnh sang Astro Content Collections (`src/content/projects/*.json`), quản lý qua Keystatic (`keystatic.config.ts`) ở **chế độ local** — không cần git/đăng nhập, chỉ hoạt động khi chạy `npm run dev` trên máy, mở tại `/keystatic`. Lý do chọn: người dùng muốn tự thêm/sửa dự án mà không cần sửa code, mỗi dự án được phép khác nhau nhẹ về cấu trúc (role/tools/flows/process là field tuỳ chọn), nhưng **không muốn** thêm server/database — vẫn giữ đúng triết lý "site tĩnh, dễ host" ở trên. Site hiện chưa có git repo và chưa deploy ở đâu; trước khi deploy, đọc ghi chú `SKIP_KEYSTATIC` trong `astro.config.mjs` (guard này ẩn route `/keystatic` khỏi bản production vì chế độ local không có xác thực, cần bật env var đó ở host thật để không lộ endpoint ghi file công khai).

**Đa ngôn ngữ & theme (cập nhật 2026-09-18):** Header bỏ nút "Liên hệ" (trùng mục menu), thay bằng nút đổi ngôn ngữ VI | EN và nút đổi giao diện sáng/tối. Theme **mặc định sáng**, không theo hệ điều hành, nhớ lựa chọn trong trình duyệt. Ngôn ngữ: đã dựng hạ tầng Astro i18n (`/en/*`), nhưng theo quyết định của người dùng **nội dung tiếng Anh sẽ dịch khi web hoàn thiện** — hiện trang `/en/*` hiển thị nội dung tiếng Việt kèm dải thông báo; chuỗi giao diện (menu, footer, nút) đã có bản EN trong `src/i18n/ui.ts`.

## Users

Hai nhóm đối tượng, **không còn ngang nhau** (cập nhật 2026-09-17 — thay cho bản ghi ban đầu):

1. **Khách hàng doanh nghiệp cần thuê ngoài (freelance/vendor)** — đối tượng chính. Founder/product lead ở doanh nghiệp, startup, hoặc tổ chức tài chính đang đánh giá có nên thuê Đức làm dự án thiết kế sản phẩm/design system không. Họ cần bằng chứng đã từng làm với doanh nghiệp tương tự, và cảm nhận được gu thẩm mỹ/kỹ năng tương tác hiện đại ngay từ cách trang web vận hành.
2. **Nhà tuyển dụng / hiring manager** tại công ty công nghệ, fintech tìm Senior UX/UI Designer full-time — đối tượng phụ, ít quan trọng hơn nhóm 1.

## Product Purpose

Trang portfolio cá nhân của Trần Minh Đức, ưu tiên theo thứ tự: (1) thu hút khách hàng doanh nghiệp cần thuê ngoài thiết kế sản phẩm/design system — mục tiêu chính, (2) tìm vị trí Senior UX/UI Designer full-time — mục tiêu phụ, và (3) xây dựng thương hiệu cá nhân/uy tín trong ngành thiết kế. Thành công là khi khách hàng doanh nghiệp cảm nhận được ngay năng lực chuyên môn và sự tinh tế hiện đại trong chính cách trang web được xây dựng — bản thân trải nghiệm là bằng chứng.

## Positioning

15+ năm kinh nghiệm chuyên sâu về thiết kế sản phẩm fintech/chứng khoán và Design System quy mô doanh nghiệp — kết hợp chiều sâu chuyên môn tài chính phức tạp với kỹ năng hệ thống hóa (token, component, pattern) cho cả web và mobile. Chủ động tích hợp AI (ChatGPT, Claude) vào quy trình thiết kế, từ phân tích yêu cầu, khám phá phương án đến tạo prototype.

## Operating Context

Khách xem trang chủ yếu trong ngữ cảnh công việc (rà soát CV, đánh giá nhà cung cấp), có thể trên desktop hoặc mobile. Nội dung quan trọng nhất — kinh nghiệm, kỹ năng, bằng chứng (testimonial, khách hàng đã hợp tác) — cần scan được trong vài giây đầu.

## Capabilities and Constraints

- Nội dung thật (bio, kinh nghiệm, kỹ năng, testimonial, khách hàng đã hợp tác) đã được trích xuất từ portfolio cũ và CV, lưu tại `content-reference/raw-content.md` và `content-reference/ductm-cv.pdf`. Dùng đúng nội dung này, không bịa thêm.
- Phần "Dự án / Case study" (cập nhật 2026-09-18): **đã có 7 case study thật**, thay hoàn toàn các placeholder "Minh hoạ" trước đó. Nguồn là thư mục `project/` do người dùng cung cấp — mỗi dự án là bộ slide trình bày 2048×1280 có sẵn chữ mô tả bên trong ảnh. Ảnh dùng trên site đã copy sang `src/assets/projects/<slug>/NN.jpg` (bỏ slide "Thank you", bỏ file lạ không thuộc dự án); thư mục `project/` giữ làm bản gốc. **Toàn bộ mô tả, vai trò, quy trình, chú thích trên site được viết lại từ chữ có trong ảnh** — không thêm kết quả, số liệu hay tên đối tác không xuất hiện trong ảnh (ví dụ Sàn Xịn Ha không ghi tên công ty vì slide không nêu). Bảy dự án: Tường Ngân (nổi bật), BSC trong BIDV SmartBanking, NHSV PRO, Sàn Xịn Ha, Kiggle, Cấp nước Phú Mỹ (PMW), Website USTH.
- Không bịa thêm testimonial, khách hàng, hay số liệu (số năm kinh nghiệm, số dự án hoàn thành) ngoài những gì đã có trong evidence.
- Không có ràng buộc kỹ thuật đặc biệt nào khác được xác nhận.

## Brand Commitments

**Logo (cập nhật 2026-09-17):** logo dạng khối hộp isometric, bản màu xanh lá `#0E7E5E` là bản được chọn — `public/logo-dt-green.svg`. Đây là ràng buộc thị giác đã chốt: màu accent của site phải cùng hệ với logo. Có tồn tại bản màu xanh dương `#3155DF` nhưng **không dùng** (sẽ tạo màu nhấn thứ hai, và chỉ đạt 2.99:1 trên nền tối — dưới ngưỡng 3:1 cho phần tử đồ hoạ).

Ngoài logo, định hướng thị giác chi tiết (typography, bố cục) nằm ở DESIGN.md, không phải ở đây.

## Evidence on Hand

- `content-reference/raw-content.md` — bio, kỹ năng, kinh nghiệm làm việc (4 công ty: Difisoft, CAIA, Hurasoft, Finalstyle), 4 testimonial nguyên văn, danh sách khách hàng đã hợp tác (BSC, Fubon Life, Phú Mỹ Water, BIACA, FIT, đối tác cấp nước Bà Rịa - Vũng Tàu), 1 tên dự án cụ thể (Tường Ngân — hệ thống quản lý bán hàng/tồn kho/công nợ).
- `content-reference/ductm-cv.pdf` — CV gốc (tiếng Anh), xác nhận 15+ năm kinh nghiệm, 200+ dự án hoàn thành.
- Behance: behance.net/tranducdesign (link tham chiếu, chưa cào nội dung).
- `public/logo-dt-green.svg` — logo chính thức (bản xanh lá). Bản xanh dương do người dùng cung cấp đã được cân nhắc và loại.
- `project/<tên>/1.jpg…N.jpg` — bộ slide trình bày của 7 dự án thật (nguồn cho `src/content/projects/*.json` và `src/assets/projects/`); các file `* Design System.html` trong cùng thư mục là bản export JS không trích được chữ, chưa dùng.
- **Absence cần tôn trọng:** slide không ghi kết quả đo được (KPI, số người dùng, doanh thu) — không tự thêm. Chưa có case study chi tiết cho các khách hàng khác trong danh sách (Fubon Life, BIACA, FIT, Bà Rịa - Vũng Tàu); không bịa dự án cho họ.
- **Logo khách hàng (2026-09-18):** người dùng cung cấp 7 file SVG trong `logo/khach hang/` (bsc, fubon, pmw, bwaco, usth, fit, shinhan) — đã dùng để hiện logo ở khối "Đã đồng hành cùng" trên trang chủ. "USTH" khớp với dự án case study đã có; "Shinhan" là tên/khách hàng **mới, chưa có bằng chứng nào khác** ngoài file logo — cần Đức xác nhận tên đầy đủ và lĩnh vực trước khi coi là dữ liệu chốt.

## Product Principles

1. Bằng chứng đi trước tuyên bố — mọi năng lực nêu ra có testimonial hoặc kinh nghiệm thực tế đi kèm, không dùng ngôn ngữ mơ hồ.
2. Scan được trong vài giây — nhà tuyển dụng và khách hàng đều đang so sánh nhiều lựa chọn; thông tin quan trọng nhất nổi bật ngay từ đầu.
3. Trung thực về giới hạn hiện tại — mô tả case study chỉ nói điều có trong tài liệu dự án (ảnh slide, testimonial); nếu sau này thêm dự án chưa có ảnh thật thì plate trống phải ghi "Ảnh sẽ cập nhật", nội dung minh hoạ phải gắn nhãn "Minh hoạ".
4. Ưu tiên khách hàng doanh nghiệp — nội dung và trải nghiệm phục vụ quyết định "có nên thuê không" trước; nhu cầu xin việc full-time vẫn được phục vụ nhưng không dẫn dắt các quyết định thiết kế khi hai mục tiêu xung đột.

## Accessibility & Inclusion

Chưa có yêu cầu accessibility đặc thù nào được xác nhận; áp dụng baseline WCAG 2.1 AA theo mặc định của Impeccable.
