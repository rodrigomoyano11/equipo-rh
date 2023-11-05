/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nqzgysouhsyqycwdmpcq.supabase.co', pathname: '/**/*' },

      // For local development
      { protocol: 'https', hostname: 'avatars.githubusercontent.com', pathname: '/**/*' },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com', pathname: '/ipfs/**/*' },
      { protocol: 'https', hostname: 'loremflickr.com', pathname: '/**/*' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**/*' },
    ],
  },
  poweredByHeader: false,
}

module.exports = config
