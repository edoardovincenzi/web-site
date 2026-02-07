import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path+",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
