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
				flows: fields.array(
					fields.text({ label: 'Luồng nghiệp vụ' }),
					{
						label: 'Luồng nghiệp vụ - hiện sơ đồ hội tụ nếu có từ 2 mục trở lên (để trống nếu dự án không cần sơ đồ này)',
						itemLabel: (props) => props.value || '(chưa đặt tên)',
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
						body: fields.text({ label: 'Mô tả bước', multiline: true }),
					}),
					{
						label: 'Quy trình tiếp cận - để trống nếu dự án chưa có quy trình cụ thể',
						itemLabel: (props) => props.fields.title.value || '(chưa đặt tên bước)',
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
