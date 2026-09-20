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
			flows: z.array(z.string()).default([]),
			// Dòng "hội tụ" dưới sơ đồ luồng - chỉ hiện khi có flows.
			flowHub: z.string().optional(),
			context: z.string().optional(),
			process: z
				.array(
					z.object({
						title: z.string(),
						body: z.string(),
					}),
				)
				.default([]),
			closing: z.string().optional(),
		}),
});

export const collections = { projects };
