/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains : ['cdn.mos.cms.futurecdn.net', 'lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
