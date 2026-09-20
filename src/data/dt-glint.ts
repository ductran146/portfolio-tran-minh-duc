// Logo DT dạng nét + vệt sáng chạy theo nét (phương án T8, 2026-09-18) — dùng
// chung cho mảng tối ở trang Kinh nghiệm ("Cách tôi làm việc") và trang chủ
// ("Tôi có thể giúp doanh nghiệp", 2026-09-20). Mỗi trang render <svg> inline
// (defs + <use>) và tự đặt vị trí/CSS; dữ liệu và công thức vệt sáng nằm ở đây
// để không có hai bản lệch nhau.
//
// Path lấy từ public/logo-dt-green.svg, bỏ fill; pathLength="1000" chuẩn hoá
// để vệt sáng cùng nhịp trên mọi path.
export const dtOutlinePaths = [
  "M74 283.97C73.84 283.88 73.75 283.71 73.75 283.53V154.9L0 112.32V326.41L185.41 433.45V348.29L74.01 283.97H74Z",
  "M376.9 112.32L303.15 154.9V283.54C303.15 283.72 303.05 283.89 302.9 283.98L191.5 348.3V433.46L376.91 326.41V112.32H376.9Z",
  "M185.41 299.22L157.9 283.34V235.36C157.9 235.29 157.86 235.23 157.81 235.2L116.26 211.21V179.45L185.41 219.38V299.23V299.22Z",
  "M191.5 299.22L219.01 283.34V235.36C219.01 235.29 219.05 235.23 219.1 235.2L260.65 211.21V179.45L191.5 219.38V299.23V299.22Z",
  "M257.58 174.12L230.06 158.25L188.52 182.26C188.46 182.29 188.39 182.29 188.33 182.26L146.76 158.29L119.26 174.19L188.44 214.07L257.57 174.1L257.58 174.12Z",
  "M3.04004 107.05L76.8 149.63L114.6 127.8L40.85 85.22L3.04004 107.05Z",
  "M188.45 0L114.6 42.64L188.43 85.27H188.47V85.31C188.55 85.31 188.63 85.27 188.7 85.31L300.1 149.63L373.85 107.05L188.45 0Z",
];

// Vệt sáng chạy theo nét. SVG không có gradient dọc theo path, nên "hai đầu mờ,
// giữa sáng nhất" được dựng bằng CỘNG DỒN nhiều lớp dash cùng tâm, đầu cắt phẳng
// (butt): mỗi lớp rất mảnh và rất mờ, chiều dài giảm đều; chỗ nào nhiều lớp chồng
// thì sáng → opacity đi lên mượt về giữa như một gradient, không còn bậc. Blur
// nhẹ trên từng lớp xoá nốt vết ghép. `len` theo phần nghìn chiều dài path;
// `s0` canh tâm về giữa lớp dài nhất.
// Ngưỡng để không lộ lớp (đo thật 2026-09-18): Δopacity ≤ 0.03, Δwidth ≤ 0.03
// giữa hai lớp kề nhau, blur ≥ ~1px ở lớp dài; các lớp quầng phải cùng độ dày.
// Đổi dáng vệt sáng = đổi các hằng số dưới, không sửa CSS.
const GLINT_MAX = 380;
const GLINT_STEPS = 14;
const glintWhite = Array.from({ length: GLINT_STEPS }, (_, i) => {
  const t = i / (GLINT_STEPS - 1); // 0 = lớp dài nhất, 1 = lõi
  return {
    len: Math.round(GLINT_MAX - t * (GLINT_MAX - 30)),
    w: +(0.4 + t * 0.3).toFixed(2),
    o: +(0.07 + t * 0.04).toFixed(3),
    blur: +(1.2 - t * 0.5).toFixed(2),
    accent: false,
  };
});
// Quầng accent: cùng cách cộng dồn, 6 lớp cùng độ dày, mỗi lớp 6%, blur 5.
const GLINT_ACCENT_STEPS = 6;
const glintAccent = Array.from({ length: GLINT_ACCENT_STEPS }, (_, i) => {
  const t = i / (GLINT_ACCENT_STEPS - 1);
  return { len: Math.round(300 - t * 220), w: 2.6, o: 0.06, blur: 5, accent: true };
});
export const glintLayers = [...glintAccent, ...glintWhite].map((l) => ({ ...l, s0: -(GLINT_MAX - l.len) / 2 }));
