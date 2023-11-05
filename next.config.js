/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nqzgysouhsyqycwdmpcq.supabase.co', pathname: '/**/*' },
    ],
  },
  poweredByHeader: false,
}

module.exports = config
