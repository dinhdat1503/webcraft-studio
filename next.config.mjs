/** @type {import('next').NextConfig} */
const nextConfig = {
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
