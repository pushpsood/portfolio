import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/success", "/api/", "/sentry-fault-check-page/"],
    },
    sitemap: "https://www.pushpsood.com/sitemap.xml",
  };
}
