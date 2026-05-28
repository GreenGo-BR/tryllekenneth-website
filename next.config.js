/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        // Rewrite /api/contact requests to /{locale}/api/contact
        {
          source: '/api/contact',
          destination: '/da/api/contact', // Default to Danish, or dynamically determine
        },
      ],
    };
  },
};

export default nextConfig;
