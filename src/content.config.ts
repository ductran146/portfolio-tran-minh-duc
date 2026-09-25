import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Nguồn dữ liệu dự án: các file JSON do Keystatic quản lý tại
// src/content/projects/*.json (xem keystatic.config.ts). Hầu hết field ở
// đây là optional vì mỗi dự án có thể khác cấu trúc nhẹ (dự án một ảnh như
// USTH không có process/flows; dự án hệ thống như Tường Ngân có đủ). Field
// "slug" do Keystatic tự quản lý để đặt tên file, không khai báo ở đây -
// trang dùng entry.id (tên file) làm URL.
//
// Ảnh (cập nhật 2026-09-18): mỗi dự án có `cover` (ảnh tổng quan, dùng cho
// thẻ danh sách, hero chi tiết và trang chủ) và `gallery` (các slide màn hình
// kèm chú thích). Đường dẫn ghi tương đối từ file JSON tới
// src/assets/projects/<slug>/NN.jpg; Astro `image()` sẽ kiểm tra file tồn tại
// lúc build và tối ưu qua sharp.
const projects = defineCollection({
	loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			client: z.string().optional(),
			real: z.boolean().default(false),
			featured: z.boolean().default(false),
			// Tạm ẩn dự án khỏi trang danh sách VÀ không sinh trang chi tiết (loại
			// hẳn khỏi getStaticPaths, không phải chỉ ẩn UI) - dùng khi cần rút một
			// dự án khỏi site mà không xoá dữ liệu, bật lại chỉ cần đổi về false.
			draft: z.boolean().default(false),
			order: z.number().default(1),
			// Chỉ dùng khi dự án chưa có ảnh (nhãn trên plate trống).
			plateLabel: z.string().optional(),
			cover: image().optional(),
			gallery: z
				.array(
					z.object({
						src: image(),
						caption: z.string().optional(),
					}),
				)
				.default([]),
			summary: z.string(),
			tags: z.array(z.string()).default([]),
			role: z.string().optional(),
			tools: z.array(z.string()).default([]),
			// Link tải app thật trên store - chỉ hiện nút khi có giá trị.
			appStoreUrl: z.string().url().optional(),
			// Link website thật đã lên (dự án dạng web, không phải app) - chỉ hiện
			// link khi có giá trị.
			websiteUrl: z.string().url().optional(),
			// Link bản dựng thật (prototype/dashboard) nhúng dạng iframe để xem/thao
			// tác trực tiếp trên trang - chỉ hiện khối khi có giá trị. Nguồn phải
			// cho phép nhúng iframe (không có header X-Frame-Options/CSP chặn).
			prototypeUrl: z.string().url().optional(),
			// Mỗi bước là tên ngắn (string, dự án đơn giản) hoặc { step, detail }
			// khi cần thêm một câu giải thích ngay dưới tên bước (dự án nhiều bước,
			// nghiệp vụ phức tạp - ví dụ Tường Ngân). Union giữ tương thích ngược:
			// dự án cũ chỉ có mảng string vẫn chạy nguyên, không cần sửa lại.
			flows: z
				.array(z.union([z.string(), z.object({ step: z.string(), detail: z.string().optional() })]))
				.default([]),
			// Dòng "hội tụ" dưới sơ đồ luồng - chỉ hiện khi có flows.
			flowHub: z.string().optional(),
			context: z.string().optional(),
			// Mỗi phần tử là MỘT nguyên tắc ngắn (1 câu) - hiện dạng lưới thẻ gọn,
			// không phải nơi kể chi tiết một luồng cụ thể (xem `processExample`).
			process: z
				.array(
					z.object({
						title: z.string(),
						body: z.string(),
					}),
				)
				.default([]),
			// Ví dụ cụ thể minh hoạ cho "Cách tiếp cận" (optional) - tách khỏi lưới
			// nguyên tắc để lưới giữ được gọn/đều nhau; ví dụ có thể dài hơn nhiều
			// (nhiều mini-step) mà không làm lệch layout của các nguyên tắc khác.
			processExample: z
				.object({
					heading: z.string(),
					steps: z.array(
						z.object({
							title: z.string(),
							body: z.string(),
						}),
					),
				})
				.optional(),
			closing: z.string().optional(),
		}),
});

export const collections = { projects };
