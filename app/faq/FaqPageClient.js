"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, Search, ArrowUpRight } from "lucide-react";
import { FAQ_ITEMS, FAQ_CATEGORIES, FAQ_DISCLAIMER } from "@/lib/faqData";

const LINE_URL = "https://lin.ee/rqKVgA4";

function FaqAccordionItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[hsl(36,25%,86%)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-6 text-left group" aria-expanded={open}>
        <span className="font-heading text-base md:text-lg font-light text-[hsl(30,18%,15%)] group-hover:text-[hsl(138,23%,39%)] transition-colors duration-300 leading-relaxed">{item.question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-[hsl(138,23%,39%)] transition-transform duration-300 mt-1 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[800px] pb-6" : "max-h-0"}`}>
        <div className="text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light whitespace-pre-line">{item.answer}</div>
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
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">常見問題</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
          顱薦椎 × 內臟筋膜<br />常見問題解答
        </h1>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide max-w-2xl">
          從費用到手法、從初次體驗到適合族群，以下整理了最常被詢問的問題。
        </p>

        <div className="mt-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,12%,42%)]" />
          <input type="text" placeholder="搜尋問題關鍵字，例如：費用、孕婦、到府…"
            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-sm border border-[hsl(36,25%,86%)] bg-[hsl(38,33%,96%)] text-sm text-[hsl(30,18%,15%)] placeholder:text-[hsl(30,12%,42%)] focus:outline-none focus:ring-2 focus:ring-[hsl(138,23%,39%)]/30 font-light" />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-200"
              style={{ backgroundColor: activeCategory === cat ? "hsl(138,23%,39%)" : "transparent", color: activeCategory === cat ? "white" : "hsl(30,12%,38%)", border: `1px solid ${activeCategory === cat ? "hsl(138,23%,39%)" : "hsl(36,25%,86%)"}` }}>
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 border-t border-[hsl(36,25%,86%)]">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-[hsl(30,12%,38%)] font-light">找不到相關問題，歡迎透過 LINE 直接詢問。</p>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(138,23%,39%)] px-6 py-3 text-sm font-medium text-white">LINE 聯絡心見</a>
            </div>
          ) : (
            filtered.map((item, idx) => <FaqAccordionItem key={item.id} item={item} defaultOpen={idx === 0 && !searchQuery} />)
          )}
        </div>

        {filtered.length > 0 && (
          <p className="mt-6 text-xs text-[hsl(30,12%,42%)] font-light">共 {filtered.length} 個問題{activeCategory !== "全部" && ` · ${activeCategory}`}</p>
        )}

        <div className="mt-16 p-6 bg-[hsl(36,31%,93%)] rounded-sm border border-[hsl(36,25%,86%)]">
          <p className="text-xs leading-relaxed text-[hsl(30,12%,42%)] font-light">{FAQ_DISCLAIMER}</p>
        </div>

        <div className="mt-16 text-center">
          <p className="font-heading text-xl md:text-2xl font-light text-[hsl(30,18%,15%)] leading-relaxed mb-8">還有其他問題嗎？</p>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(138,23%,39%)] px-8 py-4 text-sm font-medium tracking-wider text-white hover:opacity-90 transition-opacity">
            LINE 諮詢心見 <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-sm text-[hsl(30,12%,38%)] font-light">不確定自己的狀況是否適合？我們會以最誠懇的方式陪您評估。</p>
        </div>
      </div>
    </div>
  );
}
