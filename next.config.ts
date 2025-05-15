import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "home.iitd.ac.in" },
      { protocol: "https", hostname: "www.iitr.ac.in" },
      { protocol: "https", hostname: "images.shiksha.com" },
      { protocol: "https", hostname: "ir.iitism.ac.in" },
      { protocol: "https", hostname: "conf.manit.ac.in" },
      { protocol: "https", hostname: "vnit.ac.in" },
      { protocol: "https", hostname: "www.iiitnr.ac.in" },
      { protocol: "https", hostname: "jadavpuruniversity.in" },
      { protocol: "https", hostname: "cgu-odisha.ac.in" },
    ],
  },
  output: "standalone"
};

export default nextConfig;
