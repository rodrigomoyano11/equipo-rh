/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'],
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: 'equiporh.com.ar/**' },
      { hostname: 'upload.wikimedia.org/**' },
      { protocol: 'https', hostname: 'nqzgysouhsyqycwdmpcq.supabase.co', pathname: '/**/*' },

      // For local development
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**/*' },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com', pathname: '/ipfs/**/*' },
      { protocol: 'https', hostname: 'loremflickr.com', pathname: '/**/*' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**/*' },
    ],
  },
}

export default nextConfig
