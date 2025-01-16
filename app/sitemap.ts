// import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://blenton.io";

export default async function sitemap() {
  let routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
