// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')
const linguiConfig = require('./lingui.config.js')
const { locales, sourceLocale } = linguiConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        resourceQuery: /raw-lingui/,
        type: 'javascript/auto',
      },
    ]

    return config
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    localeDetection: true,
    locales,
    defaultLocale: sourceLocale,
  },
}

module.exports = nextConfig
