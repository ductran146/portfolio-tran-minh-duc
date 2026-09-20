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
	// Site nằm trong thư mục con (người dùng muốn giữ link
	// https://ductran146.github.io/portfolio-tran-minh-duc/, 2026-09-20). Mọi
	// đường dẫn nội bộ/asset public PHẢI đi qua withBase()/localePath() trong
	// src/i18n/ui.ts (import.meta.env.BASE_URL); asset qua astro:assets tự có base.
	// Dev server vì thế cũng chạy ở http://localhost:4321/portfolio-tran-minh-duc/.
	base: "/portfolio-tran-minh-duc",
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
	// Keystatic chỉ có ở `astro dev` trên máy. Bỏ khi SKIP_KEYSTATIC=1 HOẶC khi chạy
	// trên CI (GitHub Actions đặt sẵn CI=true) — lớp bảo hiểm thứ hai: build trên
	// GitHub từng lỗi NoAdapterInstalled vì workflow không truyền được biến
	// SKIP_KEYSTATIC (2026-09-20).
	integrations: [react(), markdoc(), ...(process.env.SKIP_KEYSTATIC || process.env.CI ? [] : [keystatic()])],
	// Tắt dev toolbar (2026-09-19): toolbar quét các <img> lúc dev khiến Safari/
	// WebKit tải lại ảnh SVG lần hai và ĐÓNG BĂNG CSS animation bên trong SVG
	// (cây ở trang Kinh nghiệm chỉ vẽ một đoạn ngắn rồi dừng). Chỉ ảnh hưởng
	// `astro dev`; bản build không có toolbar nên không bị. Đã đo bằng WebKit:
	// chặn toolbar → animation chạy, ảnh chỉ tải một lần. Bật lại nếu cần tool.
	devToolbar: { enabled: false },
});
