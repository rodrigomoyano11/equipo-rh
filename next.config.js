/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nqzgysouhsyqycwdmpcq.supabase.co', pathname: '/**/*' },
    ],
  },
}

module.exports = config
