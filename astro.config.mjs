// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
	// Địa chỉ site khi phát qua GitHub Pages (2026-09-20): repo đặt tên
	// `ductran146.github.io` nên site ở gốc domain, không cần `base`. Có `site`
	// thì BaseLayout mới phát thẻ hreflang tuyệt đối. Đổi domain riêng sau này
	// = đổi đúng dòng này.
	site: "https://ductran146.github.io",
	// Đa ngôn ngữ (2026-09-18): tiếng Việt là mặc định, KHÔNG prefix (/du-an);
	// tiếng Anh có prefix (/en/du-an), trang nằm ở src/pages/en/. Nội dung EN
	// dịch sau — hiện các trang /en/* render lại cùng component tiếng Việt kèm
	// dải thông báo (xem src/i18n/ui.ts).
	i18n: {
		defaultLocale: 'vi',
		locales: ['vi', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	// React + Markdoc là peer dependency của tích hợp Keystatic. Keystatic tự
	// mount admin UI tại /keystatic khi chạy `astro dev` (không cần đăng nhập -
	// chế độ "local", chỉ dùng khi phát triển trên máy). SKIP_KEYSTATIC cho
	// phép loại bỏ hẳn route /keystatic khỏi bản build khi triển khai lên
	// hosting sau này, để không lộ giao diện chỉnh sửa không có xác thực.
	integrations: [react(), markdoc(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],
	// Tắt dev toolbar (2026-09-19): toolbar quét các <img> lúc dev khiến Safari/
	// WebKit tải lại ảnh SVG lần hai và ĐÓNG BĂNG CSS animation bên trong SVG
	// (cây ở trang Kinh nghiệm chỉ vẽ một đoạn ngắn rồi dừng). Chỉ ảnh hưởng
	// `astro dev`; bản build không có toolbar nên không bị. Đã đo bằng WebKit:
	// chặn toolbar → animation chạy, ảnh chỉ tải một lần. Bật lại nếu cần tool.
	devToolbar: { enabled: false },
});
