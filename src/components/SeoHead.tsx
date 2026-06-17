import { useEffect } from "react";
import { seo, jsonLdGraph } from "../data/seo";

function setMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SeoHead() {
  useEffect(() => {
    document.title = seo.title;

    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords.join(", "));
    setMeta("author", seo.author);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("googlebot", "index, follow");
    setMeta("language", "Indonesian");
    setMeta("geo.region", seo.geo.region);
    setMeta("geo.placename", seo.geo.placename);
    setMeta("geo.position", seo.geo.position);
    setMeta("ICBM", seo.geo.position.replace(";", ", "));

    setLink("canonical", seo.canonical);

    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", seo.canonical, true);
    setMeta("og:image", seo.ogImage, true);
    setMeta("og:image:alt", seo.ogImageAlt, true);
    setMeta("og:locale", seo.locale, true);
    setMeta("og:site_name", "Alphacsoft", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", seo.ogImage);
    setMeta("twitter:image:alt", seo.ogImageAlt);

    let script = document.getElementById("json-ld-graph") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "json-ld-graph";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLdGraph);
  }, []);

  return null;
}
