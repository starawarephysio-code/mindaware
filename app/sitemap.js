export default function sitemap() {
  return [
    { url: "https://www.mindaware.tw", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.mindaware.tw/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.mindaware.tw/partnerships", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://www.mindaware.tw/journal", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];
}
