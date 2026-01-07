import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 정적 배포 설정
  output: 'export',

  // GitHub Pages basePath 설정
  // 저장소 이름이 '-'인 경우 basePath 설정
  basePath: '/-',

  // 이미지 최적화 비활성화 (static export에서는 지원 안 됨)
  images: {
    unoptimized: true,
  },

  // 후행 슬래시 추가 (GitHub Pages 호환성)
  trailingSlash: true,
};

export default nextConfig;
