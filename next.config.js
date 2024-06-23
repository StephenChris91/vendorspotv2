/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  //set image domain
  images: {
    domains: [
      "https://via.placeholder.com",
      "https://via.placeholder.com/150/771796",
      "via.placeholder.com",
      "mukoxyechbobgdvpbirs.supabase.co",
      "https://vendorspot-marketplace.s3.eu-north-1.amazonaws.com",
      "vendorspot-marketplace.s3.eu-north-1.amazonaws.com",
      // "https://mukoxyechbobgdvpbirs.supabase.co",
    ],
  },
};

module.exports = nextConfig;
