/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ["da"], defaultLocale: "da" },
  images: { domains: ["www.datocms-assets.com"] },
};

module.exports = nextConfig;
