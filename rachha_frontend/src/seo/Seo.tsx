import { useEffect } from "react";
import { SITE_NAME, SITE_URL } from "./siteConfig";

export interface SeoProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: object;
}

const MANAGED_ATTR = "data-seo-managed";

function clearManagedTags() {
  document.head
    .querySelectorAll(`[${MANAGED_ATTR}]`)
    .forEach((el) => el.remove());
}

function appendManagedTag(tag: HTMLElement) {
  tag.setAttribute(MANAGED_ATTR, "true");
  document.head.appendChild(tag);
}

function setMeta(attr: string, key: string, content: string) {
  if (!content) return;
  const existing = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (existing) {
    existing.setAttribute("content", content);
    return;
  }
  const el = document.createElement("meta");
  el.setAttribute(attr, key);
  el.setAttribute("content", content);
  appendManagedTag(el);
}

function setCanonical(href: string) {
  const existing = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (existing) {
    existing.setAttribute("href", href);
    return;
  }
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = href;
  appendManagedTag(link);
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage,
  noindex = false,
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    clearManagedTags();

    document.title = title;

    setMeta("name", "description", description ?? "");
    setMeta("name", "keywords", keywords?.join(", ") ?? "");
    setMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
    setMeta("name", "author", SITE_NAME);
    setMeta("property", "og:title", title);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonical ?? SITE_URL);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:description", description ?? "");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description ?? "");

    if (ogImage) {
      setMeta("property", "og:image", ogImage);
      setMeta("name", "twitter:image", ogImage);
    }

    if (canonical) {
      setCanonical(canonical);
    }

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      appendManagedTag(script);
    }

    return clearManagedTags;
  }, [
    title,
    description,
    keywords,
    canonical,
    ogType,
    ogImage,
    noindex,
    jsonLd,
  ]);

  return null;
}
