import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'src'],
    ignoreDuringBuilds: true
  }
}

export default nextConfig
