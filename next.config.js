/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.thenounproject.com",
      "www.svgrepo.com",
      "res.cloudinary.com",
      "mobilecity-live.s3.ap-southeast-2.amazonaws.com",
      "images.remotePatterns",
      "images.pexels.com",
      "media.tenor.com",
    ],
  },
};

module.exports = nextConfig;
