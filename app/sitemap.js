import { JOURNAL_POSTS } from "@/lib/journalData";

export default function sitemap() {
  const journalUrls = JOURNAL_POSTS.map((post) => ({
    url: `https://www.mindaware.tw/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: "https://www.mindaware.tw", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.mindaware.tw/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.mindaware.tw/journal", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...journalUrls,
    { url: "https://www.mindaware.tw/partnerships", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
