/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_HOST: process.env.NEXT_APP_HOST,
    FLASK_APP_HOST: process.env.FLASK_APP_HOST,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this with your actual origin if necessary
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
  images: {
    domains: [
      'images.squarespace-cdn.com',
      'www.injohnnyskitchen.com',
      'images.pexels.com',
      'images.unsplash.com',
      'i.pinimg.com',
      'dslrcameraa.com',
      'via.placeholder.com',
      'placehold.co'
    ],
  },
};

export default nextConfig;
