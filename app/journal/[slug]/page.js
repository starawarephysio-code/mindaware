import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JOURNAL_POSTS } from "@/lib/journalData";

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.mindaware.tw/journal/${post.slug}`,
      languages: { "zh-TW": `https://www.mindaware.tw/journal/${post.slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://www.mindaware.tw/journal/${post.slug}`,
    },
  };
}

// Minimal markdown-to-html converter (no external deps needed)
function renderContent(content) {
  const lines = content.trim().split("\n");
  let html = "";
  let inTable = false;
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table handling
    if (line.startsWith("|")) {
      if (!inTable) { inTable = true; tableRows = []; }
      tableRows.push(line);
      continue;
    } else if (inTable) {
      inTable = false;
      html += renderTable(tableRows);
      tableRows = [];
    }

    if (line.startsWith("## ")) {
      html += `<h2>${line.slice(3)}</h2>`;
    } else if (line.startsWith("### ")) {
      html += `<h3>${line.slice(4)}</h3>`;
    } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
      html += `<p><strong>${line.slice(2, -2)}</strong></p>`;
    } else if (line.startsWith("- ")) {
      html += `<ul><li>${line.slice(2)}</li></ul>`;
    } else if (line.match(/^\d+\. /)) {
      html += `<ol><li>${line.replace(/^\d+\. /, "")}</li></ol>`;
    } else if (line.startsWith("---")) {
      html += `<hr />`;
    } else if (line.trim() === "") {
      html += "";
    } else {
      // Inline bold
      const processed = line.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      html += `<p>${processed}</p>`;
    }
  }

  // Merge consecutive ul/ol
  html = html.replace(/<\/ul>\s*<ul>/g, "");
  html = html.replace(/<\/ol>\s*<ol>/g, "");

  return html;
}

function renderTable(rows) {
  const filtered = rows.filter((r) => !r.match(/^\|[-\s|]+\|$/));
  if (filtered.length === 0) return "";
  const [header, ...body] = filtered;
  const headerCells = header.split("|").filter((c) => c.trim()).map((c) => `<th>${c.trim()}</th>`).join("");
  const bodyRows = body.map((row) => {
    const cells = row.split("|").filter((c) => c.trim()).map((c) => `<td>${c.trim()}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");
  return `<table><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table>`;
}

export default async function JournalPostPage({ params }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "心見 MIND-AWARE", url: "https://www.mindaware.tw" },
    publisher: {
      "@type": "Organization",
      name: "心見 MIND-AWARE",
      logo: { "@type": "ImageObject", url: "https://www.mindaware.tw/favicon.ico" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.mindaware.tw/journal/${post.slug}` },
    inLanguage: "zh-TW",
    about: ["顱薦椎工作", "Craniosacral Therapy", "內臟筋膜放鬆", "台北"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
      { "@type": "ListItem", position: 2, name: "心見筆記", item: "https://www.mindaware.tw/journal" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.mindaware.tw/journal/${post.slug}` },
    ],
  };

  const htmlContent = renderContent(post.content);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <article className="pt-32 md:pt-40 pb-24 md:pb-32 bg-[hsl(38,33%,96%)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-[hsl(30,12%,42%)]">
              <li><Link href="/" className="hover:text-[hsl(138,23%,39%)] transition-colors">心見</Link></li>
              <li>/</li>
              <li><Link href="/journal" className="hover:text-[hsl(138,23%,39%)] transition-colors">心見筆記</Link></li>
              <li>/</li>
              <li className="text-[hsl(30,18%,15%)] line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] text-[hsl(138,23%,39%)]">{post.category}</span>
            <span className="text-[hsl(36,25%,86%)]">·</span>
            <time className="text-xs text-[hsl(30,12%,42%)]" dateTime={post.date}>{post.date}</time>
            <span className="text-[hsl(36,25%,86%)]">·</span>
            <span className="text-xs text-[hsl(30,12%,42%)]">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-[hsl(30,12%,38%)] font-light leading-relaxed">
            {post.description}
          </p>

          <div className="mt-4 h-px bg-[hsl(36,25%,86%)]" />

          {/* Content */}
          <div
            className="mt-10 journal-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            style={{
              "--table-border": "hsl(36,25%,86%)",
            }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-[hsl(36,31%,93%)] rounded-sm border border-[hsl(36,25%,86%)]">
            <p className="font-heading text-lg text-[hsl(30,18%,15%)] font-light mb-2">想進一步了解？</p>
            <p className="text-sm text-[hsl(30,12%,38%)] font-light mb-6">
              心見 MIND-AWARE 提供台北大安據點體驗（2,000元）與台北市、新北市全區到府服務（2,500元），60 分鐘一對一。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://lin.ee/rqKVgA4" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wider text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "hsl(138,23%,39%)" }}>
                LINE 預約諮詢
              </a>
              <Link href="/faq"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium tracking-wider transition-all hover:bg-[hsl(36,31%,93%)]"
                style={{ borderColor: "hsl(36,25%,86%)", color: "hsl(30,18%,15%)" }}>
                查看常見問題 FAQ
              </Link>
            </div>
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link href="/journal" className="text-sm text-[hsl(30,12%,38%)] font-light hover:text-[hsl(138,23%,39%)] transition-colors">
              ← 返回心見筆記
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
