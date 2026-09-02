"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowUpRight } from "lucide-react";
import { FAQ_ITEMS, FAQ_CATEGORIES, FAQ_DISCLAIMER } from "@/lib/faqData";

const LINE_URL = "https://lin.ee/rqKVgA4";
const P = "hsl(138,23%,39%)";

function FaqAccordionItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[hsl(36,25%,86%)]" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-6 text-left group" aria-expanded={open}>
        <span className="font-heading text-base md:text-lg font-light text-[hsl(30,18%,15%)] group-hover:text-[hsl(138,23%,39%)] transition-colors duration-300 leading-relaxed" itemProp="name">
          {item.question}
        </span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 mt-1 ${open ? "rotate-180" : ""}`} style={{ color: P }} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[800px] pb-6" : "max-h-0"}`}
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <div className="text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light whitespace-pre-line" itemProp="text">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqPageClient() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["全部", ...FAQ_CATEGORIES];

  const filtered = useMemo(() => {
    let items = FAQ_ITEMS;
    if (activeCategory !== "全部") items = items.filter((i) => i.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter((i) => i.question.toLowerCase().includes(q) || i.answer.toLowerCase().includes(q));
    }
    return items;
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs text-[hsl(30,12%,42%)]">
            <li><Link href="/" className="hover:text-[hsl(138,23%,39%)] transition-colors">心見 MIND-AWARE</Link></li>
            <li>/</li>
            <li className="text-[hsl(30,18%,15%)]">常見問題 FAQ</li>
          </ol>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">常見問題</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>

        {/* h1 加入地名 — GEO 關鍵 */}
        <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
          台北顱薦椎工作 × 內臟筋膜放鬆<br />常見問題完整解答
        </h1>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide max-w-2xl">
          從費用、手法到適合族群，25+ 個問題分類整理。心見 MIND-AWARE，台北大安 · 北投 · 到府全區。
        </p>

        {/* Quick price anchor — GEO 直答 */}
        <div className="mt-8 inline-flex items-center gap-6 px-5 py-3 bg-[hsl(36,31%,93%)] rounded-sm border border-[hsl(36,25%,86%)] text-sm font-light text-[hsl(30,12%,38%)]">
          <span>🏠 據點體驗：<strong className="text-[hsl(30,18%,15%)]">2,000 元</strong> / 60 分鐘</span>
          <span className="text-[hsl(36,25%,86%)]">|</span>
          <span>🚗 到府服務：<strong className="text-[hsl(30,18%,15%)]">2,500 元</strong> / 60 分鐘</span>
        </div>

        {/* Search */}
        <div className="mt-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,12%,42%)]" />
          <input type="text" placeholder="搜尋關鍵字，例如：費用、孕婦、到府、健保…"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-sm border border-[hsl(36,25%,86%)] bg-[hsl(38,33%,96%)] text-sm text-[hsl(30,18%,15%)] placeholder:text-[hsl(30,12%,42%)] focus:outline-none focus:ring-2 focus:ring-[hsl(138,23%,39%)]/30 font-light" />
        </div>

        {/* Category tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? P : "transparent",
                color: activeCategory === cat ? "white" : "hsl(30,12%,38%)",
                border: `1px solid ${activeCategory === cat ? P : "hsl(36,25%,86%)"}`,
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="mt-12 border-t border-[hsl(36,25%,86%)]" itemScope itemType="https://schema.org/FAQPage">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[hsl(30,12%,38%)] font-light">找不到相關問題，歡迎透過 LINE 直接詢問。</p>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: P }}>
                LINE 聯絡心見
              </a>
            </div>
          ) : (
            filtered.map((item, idx) => <FaqAccordionItem key={item.id} item={item} defaultOpen={idx === 0 && !searchQuery} />)
          )}
        </div>

        {filtered.length > 0 && (
          <p className="mt-6 text-xs text-[hsl(30,12%,42%)] font-light">
            共 {filtered.length} 個問題{activeCategory !== "全部" && ` · ${activeCategory}`}
          </p>
        )}

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-[hsl(36,31%,93%)] rounded-sm border border-[hsl(36,25%,86%)]">
          <p className="text-xs leading-relaxed text-[hsl(30,12%,42%)] font-light">{FAQ_DISCLAIMER}</p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="font-heading text-xl md:text-2xl font-light text-[hsl(30,18%,15%)] leading-relaxed mb-8">還有其他問題嗎？</p>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wider text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: P }}>
            LINE 諮詢心見 <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-sm text-[hsl(30,12%,38%)] font-light">不確定自己的狀況是否適合？我們會以最誠懇的方式陪您評估。</p>
        </div>
      </div>
    </div>
  );
}
