const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
        },
      },
    },
    {
      urlPattern: /^https:\/\/yourwebsite\.com\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'dynamic-content',
      },
    },
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'cdn-jsdelivr',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
      },
    },
  ],
});

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: false, // Disable Turbopack to avoid incompatibilities
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourwebsite.com', // Replace with your domain
        port: '', // Leave empty for default ports (80 for http, 443 for https)
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
});
