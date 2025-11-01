import { useEffect } from "react";

export default function useSEO({
  title,
  description,
  keywords,
  image,
  url,
}) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta: description
    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Meta: og tags
    const setOG = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);

    setOG("og:title", title);
    setOG("og:description", description);
    setOG("og:image", image);
    setOG("og:url", url);
  }, [title, description, keywords, image, url]);
}
