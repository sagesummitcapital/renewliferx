import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/how-it-works",
    "/treatments",
    "/treatments/trt-hrt-men",
    "/treatments/womens-hormone-optimization",
    "/treatments/medical-weight-loss",
    "/treatments/peptide-therapy",
    "/blood-work",
    "/why-renew-life",
    "/faq",
    "/schedule-a-call",
    "/contact",
    "/privacy",
    "/hipaa",
    "/terms",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.startsWith("/treatments") ? 0.8 : 0.6,
  }));
}
