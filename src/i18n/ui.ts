// Hạ tầng đa ngôn ngữ (2026-09-18). Quyết định của người dùng: "tạo sẵn chức
// năng, khi web hoàn thiện dịch sau" — nên ở đây CHỈ có chuỗi của khung trang
// (menu, footer, nút, thông báo). Nội dung từng trang vẫn tiếng Việt; trang
// /en/* render lại cùng component và hiện dải thông báo "English version in
// progress" cho tới khi trang đó truyền `translated` cho BaseLayout.
//
// Routing: Astro i18n, defaultLocale "vi" không prefix (/du-an), "en" có prefix
// (/en/du-an). Cấu hình ở astro.config.mjs; trang EN nằm ở src/pages/en/.
//
// Khi dịch thật: thêm key vào `ui.en`, dùng `t(locale, key)` trong trang, và
// truyền `translated` cho BaseLayout để tắt dải thông báo.

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export const ui = {
	vi: {
		"nav.home": "Trang chủ",
		"nav.projects": "Dự án",
		"nav.experience": "Kinh nghiệm",
		"nav.contact": "Liên hệ",
		"nav.aria": "Điều hướng chính",
		"lang.aria": "Ngôn ngữ",
		"lang.vi": "Tiếng Việt",
		"lang.en": "English",
		"theme.toDark": "Chuyển sang giao diện tối",
		"theme.toLight": "Chuyển sang giao diện sáng",
		"notice.inProgress": "",
	},
	en: {
		"nav.home": "Home",
		"nav.projects": "Work",
		"nav.experience": "Experience",
		"nav.contact": "Contact",
		"nav.aria": "Main navigation",
		"lang.aria": "Language",
		"lang.vi": "Tiếng Việt",
		"lang.en": "English",
		"theme.toDark": "Switch to dark theme",
		"theme.toLight": "Switch to light theme",
		"notice.inProgress":
			"The English version is in progress - page content is shown in Vietnamese for now.",
	},
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)["vi"];

export function isLocale(value: unknown): value is Locale {
	return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Chuẩn hoá giá trị Astro.currentLocale (có thể undefined ở trang không thuộc locale nào). */
export function resolveLocale(value: string | undefined): Locale {
	return isLocale(value) ? value : defaultLocale;
}

export function t(locale: Locale, key: UiKey): string {
	return ui[locale][key] ?? ui[defaultLocale][key];
}

/** Base path của site (astro.config `base`), không có "/" cuối; "" khi site ở gốc.
 *  Site phát ở https://ductran146.github.io/portfolio-tran-minh-duc/ (2026-09-20)
 *  nên MỌI đường dẫn tuyệt đối tự viết (link nội bộ, file trong public/) phải
 *  đi qua withBase(); asset qua astro:assets thì Astro tự thêm base. Dùng được
 *  cả phía server lẫn trong <script> client (Vite thay import.meta.env lúc build). */
export const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** "/clients/bsc.svg" → "/portfolio-tran-minh-duc/clients/bsc.svg". */
export function withBase(path: string): string {
	return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bỏ base khỏi pathname (location.pathname / Astro.url.pathname đều có base). */
export function stripBase(pathname: string): string {
	if (base && (pathname === base || pathname.startsWith(`${base}/`))) return pathname.slice(base.length) || "/";
	return pathname;
}

/** Đường dẫn nội bộ theo locale, ĐÃ kèm base: "/du-an#x" → "/<base>/en/du-an#x" khi en. */
export function localePath(locale: Locale, path: string): string {
	if (locale === defaultLocale) return withBase(path);
	if (path === "/") return withBase(`/${locale}`);
	return withBase(`/${locale}${path}`);
}

/** Tách prefix locale khỏi pathname hiện tại (có hay không có base) → { locale, path gốc }. */
export function splitLocale(rawPathname: string): { locale: Locale; path: string } {
	const pathname = stripBase(rawPathname);
	for (const l of locales) {
		if (l === defaultLocale) continue;
		if (pathname === `/${l}`) return { locale: l, path: "/" };
		if (pathname.startsWith(`/${l}/`)) return { locale: l, path: pathname.slice(l.length + 1) };
	}
	return { locale: defaultLocale, path: pathname };
}

/** Cùng trang, đổi ngôn ngữ (dùng cho nút VI | EN trong header). */
export function switchLocalePath(pathname: string, target: Locale): string {
	const { path } = splitLocale(pathname);
	return localePath(target, path);
}
