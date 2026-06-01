// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // ✅ Helps catch hydration issues in dev
//   productionBrowserSourceMaps: true,
//   distDir: process.env.DIST_DIR || '.next',
//   typescript: {
//     ignoreBuildErrors: true, // Ignore TypeScript-related mismatches during development
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(jsx|tsx)$/,
//       exclude: [/node_modules/],
//       use: [
//         {
//           loader: '@dhiwise/component-tagger/nextLoader',
//         },
//       ],
//     });
//     return config;
//   },
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

const nextConfig = {
  reactStrictMode: true, // ✅ Helps catch hydration issues in dev
  productionBrowserSourceMaps: false, // ⚡ Disabled to reduce build size by ~110MB
  distDir: process.env.DIST_DIR || '.next',
  compress: true, // ⚡ Enable Gzip compression
  poweredByHeader: false, // 🔒 Remove X-Powered-By header for security

  typescript: {
    ignoreBuildErrors: false, // ✅ Enable type checking to catch errors
  },

  // ⚡ Experimental optimizations for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-phone-number-input'], // Better tree-shaking
  },

  // 🔁 Permanent redirects (308) for renamed routes
  async redirects() {
    return [
      {
        source: '/horizon',
        destination: '/shopify',
        permanent: true,
      },
      {
        // /home renders the exact same component as /, so it was a duplicate
        // URL flagged by Search Console ("Duplicate without user-selected
        // canonical"). Collapse it into the canonical home URL.
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // 🚀 Cache control headers for static assets
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
