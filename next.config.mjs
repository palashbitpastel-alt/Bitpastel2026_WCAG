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
//import BundleAnalyzer from '@next/bundle-analyzer';


const nextConfig = {
  reactStrictMode: true, // ✅ Helps catch hydration issues in dev
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript-related mismatches during development
  },
  
  //webpack(config) {
  //  config.module.rules.push({
  //    test: /\.(jsx|tsx)$/,
  //    exclude: [/node_modules/],
  //    use: [
  //      {
  //        loader: '@dhiwise/component-tagger/nextLoader',
  //      },
  //    ],
  //  });
  //  // console.log('ANALYZE ENV:', process.env.ANALYZE);

  //  return config;
  //},
};

// const withBundleAnalyzer = BundleAnalyzer({
//   enabled: true,
//   openAnalyzer: true,
// });

export default nextConfig;

//export default withBundleAnalyzer(nextConfig);
