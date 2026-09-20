// Đánh giá khách hàng — NGUYÊN VĂN từ content-reference/raw-content.md, dùng
// chung cho trang chủ và trang Kinh nghiệm (component Testimonials.astro).
// Không thêm/sửa lời; không thêm người mới nếu không có evidence.
export const testimonials = [
  {
    quote:
      "Tôi đánh giá Đức là một designer làm việc rất thông minh, chuyên nghiệp và có tinh thần trách nhiệm cao. Đức có khả năng nắm bắt yêu cầu cũng như hiểu ý đối tác rất nhanh, kể cả với những nội dung nghiệp vụ phức tạp, từ đó đề xuất được các phương án thiết kế phù hợp và có tính ứng dụng cao. Các sản phẩm do Đức thực hiện luôn được đầu tư kỹ lưỡng, có tính thẩm mỹ, hiện đại và thể hiện chuyên môn thiết kế UX/UI rất tốt. Đặc biệt, tốc độ xử lý công việc của Đức rất nhanh nhưng vẫn đảm bảo chất lượng, sự chỉn chu và luôn hoàn thành đúng tiến độ đã cam kết.",
    name: "Chị Hạnh",
    role: "Phó trưởng Phòng Chuyển đổi số, BIDV – BSC",
  },
  {
    quote:
      "Duc consistently puts strong effort into every task assigned to him and approaches his work with a responsible, solution-oriented mindset. He is able to understand project requirements quickly and propose practical, effective design solutions. His work has been well received by our clients, who have expressed a high level of satisfaction with both the quality of his designs and his professional collaboration throughout the projects.",
    name: "Mr. Kim Wonhyung",
    role: "Co-founder, Chief Executive Officer at Difisoft",
  },
  {
    quote:
      "Đức là một designer làm việc chuyên nghiệp, trách nhiệm và luôn đảm bảo đúng tiến độ. Trong quá trình triển khai hệ thống quản lý số liệu và datalogger ngành nước, Đức nắm bắt yêu cầu nghiệp vụ nhanh, chủ động đề xuất các giải pháp thiết kế rõ ràng, phù hợp với thực tế vận hành và dễ sử dụng.",
    name: "Anh Nguyễn Tấn Long",
    role: "GĐKD, Công ty Cổ phần Cấp nước Phú Mỹ",
  },
  {
    quote:
      "Ban đầu, Đức hợp tác với công ty trong vai trò cộng tác viên. Tuy nhiên, bằng sự chuyên nghiệp, chỉn chu và tinh thần hỗ trợ khách hàng tận tâm, Đức đã nhanh chóng tạo được niềm tin trong quá trình làm việc.",
    name: "Anh Trần Vinh",
    role: "Công ty Cổ phần Cấp nước Bà Rịa – Vũng Tàu",
  },
] as const;
