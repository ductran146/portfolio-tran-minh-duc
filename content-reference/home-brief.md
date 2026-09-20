## Scope

Toàn bộ site (multi-page): Trang chủ (`/`), Dự án (`/du-an`), Kinh nghiệm (`/kinh-nghiem`), Liên hệ (`/lien-he`) — chuyển từ single-page sang multi-page để phục vụ yêu cầu chuyển trang liền mạch.

## Mode

Persuade — thành công của khách xem là quyết định liên hệ/thuê.

## Audience / Job / Action

**Cập nhật 2026-09-17:** Khách hàng doanh nghiệp cần thuê ngoài là đối tượng chính (không còn ngang hàng với nhà tuyển dụng). Job: đánh giá nhanh gu thẩm mỹ + độ tin cậy trước khi quyết định thuê. Action: điền form/gửi email liên hệ.

## Proof / Content

`content-reference/raw-content.md` (bio, 4 kinh nghiệm làm việc, 4 testimonial nguyên văn, danh sách khách hàng đã hợp tác). Case study thật duy nhất: "Tường Ngân"; phần còn lại dùng placeholder demo có gắn nhãn rõ ràng.

## Constraints

Không bịa thêm testimonial/khách hàng/số liệu ngoài evidence đã có. Case study placeholder phải gắn nhãn là minh hoạ. Build code-led (không có công cụ tạo ảnh AI trên máy này). **Brief-pinned (2026-09-17):** tone sáng màu (light theme), phong cách hiện đại, hiệu ứng chuyển động nhẹ nhàng, chuyển trang phải liền mạch/mượt mà (không nhảy trang trắng) — dùng Astro View Transitions.

## Direction contract (v2 — thay thế bản "Sổ cái kiểm toán" ngày 2026-09-10; bản cũ trở thành evidence/anti-reference, không phải thẩm quyền)

THESIS: Trang portfolio này tự thân là bằng chứng cho gu thẩm mỹ và kỹ năng tương tác hiện đại của Đức — khách hàng doanh nghiệp cảm nhận đẳng cấp qua chính cách trang vận hành (chuyển động, nhịp điệu, độ mượt khi chuyển trang), không chỉ qua lời mô tả kinh nghiệm.

OWN-WORLD: Nền trắng/xám rất nhạt sáng; typography lớn, tự tin làm chủ đạo; một màu accent hiện đại duy nhất; khoảng trắng rộng rãi, không nhồi nhét; bo góc nhẹ-vừa (không sắc cạnh tuyệt đối, không quá tròn kiểu đồ chơi); độ sâu nhẹ qua shadow mềm rất tinh tế (không phẳng tuyệt đối như bản cũ).

STORY: Khách hàng doanh nghiệp mở trang, thấy ngay trải nghiệm mượt — cuộn xuống, nội dung hiện ra bằng chuyển động tinh tế; khi chuyển sang trang Dự án/Kinh nghiệm/Liên hệ, tiêu đề và các phần tử chung "trôi" liền mạch sang vị trí mới (shared-element/view-transition) thay vì nhảy trắng trang; cảm giác tổng thể: một sản phẩm số được chăm chút kỹ — đúng thứ họ đang muốn thuê người làm ra.

FIRST VIEWPORT: Tên/chức danh lớn, tự tin, nhiều không gian thở; một câu định vị ngắn nhấn mạnh giá trị cho doanh nghiệp; CTA chính rõ ràng dạng nút mềm bo góc vừa phải (không phải text link ẩn như bản cũ); một dải điều hướng/tiến trình mỏng neo cố định, luôn cho biết đang ở trang/phần nào.

FORM: Hướng được gán (Studio Editorial / agency reel), hạng 3/7 trong danh sách grounded, seed key 7caad55c. Đối thủ cạnh tranh "Mặt cắt ánh sáng kiến trúc" (competitive, không thắng) đóng góp ý tưởng dải ánh sáng liên tục đánh dấu "hiện tại". Đối thủ bị loại đóng góp: drum-machine (progress rail cố định luôn hiển thị vị trí hiện tại), gravity-rain-garden (easing tự nhiên kiểu quán tính cho mọi transition, không robot/linear), star-atlas (kích thước phần tử mã hoá độ quan trọng — dự án nổi bật hiển thị lớn hơn thay vì lưới đồng đều).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

- Case study thật sẽ thay placeholder khi có dữ liệu.
- Đích đến của form liên hệ (email trực tiếp hay dịch vụ form) chưa quyết định — tạm dùng `mailto:` hoặc form tĩnh không backend.
- Màu accent chính xác (hex) sẽ chốt trong lúc build dựa trên kiểm tra tương phản trên nền sáng.
