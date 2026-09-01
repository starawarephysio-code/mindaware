"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { FAQ_FEATURED } from "@/lib/faqData";

const PREVIEW = FAQ_FEATURED.slice(0, 6);

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[hsl(36,25%,86%)]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-6 text-left group">
        <span className="font-heading text-[19px] font-medium text-[hsl(30,18%,15%)] leading-snug group-hover:text-[hsl(138,23%,39%)] transition-colors duration-300">{item.question}</span>
        <Plus className={`shrink-0 w-5 h-5 text-[hsl(138,23%,39%)] transition-transform duration-300 ${open ? "rotate-45" : ""}`} strokeWidth={1.5} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className="overflow-hidden text-[16px] leading-[1.9] text-[hsl(30,12%,38%)] font-light pb-6 whitespace-pre-line">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FaqPreview() {
  return (
    <section id="faq-preview" className="py-24 md:py-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">常見問題</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] mb-4">顱薦椎 × 內臟筋膜 FAQ</h2>
        <p className="font-heading text-base font-light text-[hsl(30,12%,38%)] tracking-wide mb-12">最多人詢問的問題，直接回答。</p>
        <div className="border-t border-[hsl(36,25%,86%)]">
          {PREVIEW.map((item) => <FaqItem key={item.id} item={item} />)}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <Link href="/faq" className="group inline-flex items-center gap-2 text-sm font-medium tracking-wider text-[hsl(138,23%,39%)] hover:opacity-80 transition-opacity">
            查看全部 25+ 個問題
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span className="hidden sm:block text-[hsl(36,25%,86%)]">|</span>
          <a href="#pricing" className="text-sm font-light text-[hsl(30,12%,38%)] hover:text-[hsl(138,23%,39%)] transition-colors">
            想知道費用？→ 費用說明
          </a>
        </div>
      </div>
    </section>
  );
}
