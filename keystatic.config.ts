import { config, fields, collection } from '@keystatic/core';

// Chế độ "local": Keystatic đọc/ghi trực tiếp file trên máy, không cần
// GitHub/đăng nhập. Chỉ dùng khi chạy `npm run dev` trên máy của Đức - xem
// ghi chú SKIP_KEYSTATIC trong astro.config.mjs trước khi deploy site.
export default config({
	storage: { kind: 'local' },
	collections: {
		projects: collection({
			label: 'Dự án',
			slugField: 'slug',
			path: 'src/content/projects/*',
			format: 'json',
			entryLayout: 'form',
			schema: {
				// Trường bắt buộc duy nhất dùng để đặt tên file (quyết định URL
				// /du-an/<slug>). Đổi slug ở đây = đổi URL của dự án.
				slug: fields.slug({
					name: { label: 'Tên file / slug URL' },
				}),
				title: fields.text({
					label: 'Tên dự án (hiển thị)',
				}),
				real: fields.checkbox({
					label: 'Đây là dự án thật (bỏ trống nếu là minh hoạ)',
					defaultValue: false,
				}),
				featured: fields.checkbox({
					label: 'Dự án nổi bật (mở đầu trang Dự án)',
					defaultValue: false,
				}),
				draft: fields.checkbox({
					label: 'Tạm ẩn (bỏ khỏi danh sách và không sinh trang chi tiết)',
					defaultValue: false,
				}),
				order: fields.integer({
					label: 'Thứ tự hiển thị (số nhỏ hơn hiện trước; không áp dụng cho dự án nổi bật)',
					defaultValue: 1,
				}),
				client: fields.text({
					label: 'Khách hàng / đơn vị (để trống nếu không cần hiện)',
				}),
				plateLabel: fields.text({
					label: 'Nhãn trên plate khi CHƯA có ảnh (vd: "Ảnh sẽ cập nhật") - bỏ trống khi đã có ảnh cover',
				}),
				// Ảnh lưu trong src/assets/projects/<slug>/; đường dẫn ghi vào JSON là
				// tương đối từ file JSON (../../assets/projects/...) để Astro image()
				// kiểm tra và tối ưu lúc build.
				cover: fields.image({
					label: 'Ảnh tổng quan (cover) - 2048×1280, dùng cho thẻ danh sách, hero chi tiết, trang chủ',
					directory: 'src/assets/projects',
					publicPath: '../../assets/projects/',
				}),
				gallery: fields.array(
					fields.object({
						src: fields.image({
							label: 'Ảnh màn hình',
							directory: 'src/assets/projects',
							publicPath: '../../assets/projects/',
						}),
						caption: fields.text({ label: 'Chú thích (1-2 câu, nói ảnh này thể hiện gì)', multiline: true }),
					}),
					{
						label: 'Bộ ảnh màn hình (theo thứ tự kể chuyện; bỏ slide "Thank you")',
						itemLabel: (props) => props.fields.caption.value || '(chưa có chú thích)',
					},
				),
				summary: fields.text({
					label: 'Tóm tắt ngắn (hiện ở thẻ danh sách /du-an)',
					multiline: true,
				}),
				tags: fields.array(
					fields.text({ label: 'Tag' }),
					{ label: 'Tags', itemLabel: (props) => props.value || '(chưa đặt tên)' },
				),
				role: fields.text({
					label: 'Vai trò trong dự án (để trống nếu không cần hiện)',
				}),
				tools: fields.array(
					fields.text({ label: 'Công cụ' }),
					{ label: 'Công cụ (để trống nếu không cần hiện)', itemLabel: (props) => props.value || '(chưa đặt tên)' },
				),
				appStoreUrl: fields.url({
					label: 'Link App Store (để trống nếu app chưa phát hành)',
				}),
				websiteUrl: fields.url({
					label: 'Link website thật (để trống nếu dự án không phải website)',
				}),
				prototypeUrl: fields.url({
					label: 'Link prototype/dashboard nhúng iframe (để trống nếu không có bản dựng để thử trực tiếp)',
				}),
				flows: fields.array(
					fields.object({
						step: fields.text({ label: 'Tên bước' }),
						detail: fields.text({ label: 'Mô tả ngắn dưới tên bước (để trống nếu chỉ cần tên)', multiline: true }),
					}),
					{
						label: 'Luồng nghiệp vụ - hiện sơ đồ hội tụ nếu có từ 2 mục trở lên (để trống nếu dự án không cần sơ đồ này)',
						itemLabel: (props) => props.fields.step.value || '(chưa đặt tên)',
					},
				),
				flowHub: fields.text({
					label: 'Dòng hội tụ dưới sơ đồ luồng (vd: "Đối chiếu số liệu · đúng theo từng vai trò") - chỉ hiện khi có luồng',
				}),
				context: fields.text({
					label: 'Bối cảnh / bài toán (để trống nếu không cần)',
					multiline: true,
				}),
				process: fields.array(
					fields.object({
						title: fields.text({ label: 'Tên bước' }),
						body: fields.text({ label: 'Mô tả bước - 1 câu ngắn gọn', multiline: true }),
					}),
					{
						label: 'Quy trình tiếp cận - để trống nếu dự án chưa có quy trình cụ thể',
						itemLabel: (props) => props.fields.title.value || '(chưa đặt tên bước)',
					},
				),
				processExample: fields.object({
					heading: fields.text({ label: 'Tiêu đề ví dụ (để trống nếu không cần khối ví dụ cụ thể)' }),
					steps: fields.array(
						fields.object({
							title: fields.text({ label: 'Tên mini-step' }),
							body: fields.text({ label: 'Mô tả mini-step', multiline: true }),
						}),
						{
							label: 'Các bước của ví dụ',
							itemLabel: (props) => props.fields.title.value || '(chưa đặt tên)',
						},
					),
				}),
				userFlows: fields.array(
					fields.object({
						slug: fields.text({ label: 'Tên file SVG trong src/assets/diagrams (không gồm .svg), vd: bsc-order' }),
						title: fields.text({ label: 'Tiêu đề sơ đồ' }),
						label: fields.text({ label: 'Nhãn ngắn cho thanh anchor (để trống thì dùng tiêu đề)' }),
						caption: fields.text({ label: 'Mô tả ngắn 1-2 câu (để trống nếu không cần)', multiline: true }),
					}),
					{
						label: 'Sơ đồ user flow - để trống nếu dự án chưa có',
						itemLabel: (props) => props.fields.title.value || '(chưa đặt tên sơ đồ)',
					},
				),
				themeCompare: fields.array(
					fields.object({
						label: fields.text({ label: 'Tên màn hình (hiện trong danh sách chọn)' }),
						kind: fields.select({
							label: 'Loại khung',
							options: [
								{ label: 'Web (rộng)', value: 'web' },
								{ label: 'Mobile (đứng)', value: 'mobile' },
							],
							defaultValue: 'web',
						}),
						light: fields.image({ label: 'Ảnh Light', directory: 'src/assets/projects', publicPath: '../../assets/projects/' }),
						dark: fields.image({ label: 'Ảnh Dark (cùng kích thước, căn khớp ảnh Light)', directory: 'src/assets/projects', publicPath: '../../assets/projects/' }),
						caption: fields.text({ label: 'Chú thích (để trống nếu không cần)', multiline: true }),
					}),
					{
						label: 'So sánh Light / Dark - để trống nếu dự án không có hai chế độ',
						itemLabel: (props) => props.fields.label.value || '(chưa đặt tên màn hình)',
					},
				),
				closing: fields.text({
					label: 'Ghi chú cuối trang (để trống nếu không cần)',
					multiline: true,
				}),
			},
		}),
	},
});
