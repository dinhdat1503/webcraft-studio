/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tạo output standalone để chạy production gọn trong Docker
  output: 'standalone',
  eslint: {
    // Disable ESLint during builds – dùng `npm run lint` riêng để check
    ignoreDuringBuilds: true,
  },
  images: {
    // Cho phép serve ảnh local trong /public
    unoptimized: false,
  },
};

export default nextConfig;
