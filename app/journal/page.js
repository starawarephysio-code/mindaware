import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOURNAL_POSTS } from "@/lib/journalData";

export const metadata = {
  title: "心見筆記｜顱薦椎 × 內臟筋膜 深度文章",
  description: "心見 MIND-AWARE 關於顱薦椎工作、內臟筋膜放鬆的深度文章。費用指南、適合族群、孕期應用——台灣最完整的顱薦椎知識庫。",
  alternates: { canonical: "https://www.mindaware.tw/journal" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
    { "@type": "ListItem", position: 2, name: "心見筆記", item: "https://www.mindaware.tw/journal" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.mindaware.tw/journal#collection",
  url: "https://www.mindaware.tw/journal",
  name: "心見筆記｜顱薦椎 × 內臟筋膜 深度文章",
  inLanguage: "zh-TW",
  about: { "@id": "https://www.mindaware.tw/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: JOURNAL_POSTS.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.mindaware.tw/journal/${post.slug}`,
      name: post.title,
    })),
  },
};

export default function JournalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Navbar />
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-[hsl(38,33%,96%)]">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <nav aria-label="breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-[hsl(30,12%,42%)]">
              <li><Link href="/" className="hover:text-[hsl(138,23%,39%)] transition-colors">心見 MIND-AWARE</Link></li>
              <li>/</li>
              <li className="text-[hsl(30,18%,15%)]">心見筆記</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">心見筆記</span>
            <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
          </div>
          <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
            顱薦椎 × 內臟筋膜<br />深度知識文章
          </h1>
          <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide">
            從費用指南到孕期應用，心見整理台灣最完整的顱薦椎工作知識庫。
          </p>

          <div className="mt-16 space-y-0 border-t border-[hsl(36,25%,86%)]">
            {JOURNAL_POSTS.map((post) => (
              <Link key={post.slug} href={`/journal/${post.slug}`}
                className="group block py-10 border-b border-[hsl(36,25%,86%)] hover:bg-[hsl(36,31%,93%)/30] transition-colors duration-300 -mx-6 px-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-[0.2em] text-[hsl(138,23%,39%)]">{post.category}</span>
                  <span className="text-[hsl(36,25%,86%)]">·</span>
                  <time className="text-xs text-[hsl(30,12%,42%)]" dateTime={post.date}>{post.date}</time>
                  <span className="text-[hsl(36,25%,86%)]">·</span>
                  <span className="text-xs text-[hsl(30,12%,42%)]">{post.readTime}</span>
                </div>
                <h2 className="heading-serif text-xl md:text-2xl text-[hsl(30,18%,15%)] group-hover:text-[hsl(138,23%,39%)] transition-colors duration-300 leading-relaxed">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(30,12%,38%)] font-light max-w-2xl">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
