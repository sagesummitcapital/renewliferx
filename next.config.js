/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Preserve old URLs from the legacy site so SEO + bookmarks survive.
      { source: "/how-does-this-all-work", destination: "/how-it-works", permanent: true },
      { source: "/hrt-for-men", destination: "/treatments/trt-hrt-men", permanent: true },
      { source: "/women", destination: "/treatments/womens-hormone-optimization", permanent: true },
      { source: "/semaglutide", destination: "/treatments/medical-weight-loss", permanent: true },
      { source: "/peptide-therapy", destination: "/treatments/peptide-therapy", permanent: true },
      { source: "/contact-renew-life-rx", destination: "/contact", permanent: true },
    ];
  },
};
module.exports = nextConfig;
