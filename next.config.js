const path = require('path');

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'css')],
  },
  // This tells Next.js to serve the /dark content when the user hits /
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/dark',
      },
    ];
  },
};

module.exports = nextConfig;
