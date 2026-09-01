"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "心見理念", to: "/#philosophy" },
  { label: "手法介紹", to: "/#method" },
  { label: "服務 & 費用", to: "/#pricing" },
  { label: "常見問題", to: "/faq" },
  { label: "心見團隊", to: "/#team" },
  { label: "心見回饋", to: "/#voices" },
  { label: "單位合作", to: "/partnerships" },
  { label: "心見筆記", to: "/journal" },
  { label: "聯絡我們", to: "/#contact" },
];

const LINE_URL = "https://lin.ee/rqKVgA4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[hsl(38,33%,96%)]/85 backdrop-blur-md border-b border-[hsl(36,25%,86%)]/60" : "bg-transparent border-b border-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-heading text-xl md:text-2xl font-medium tracking-[0.15em] text-foreground">心見</span>
            <span className="hidden sm:inline text-[10px] md:text-[11px] tracking-[0.4em] text-foreground-soft">MIND-AWARE</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.to} className="text-sm font-light tracking-wider text-[hsl(30,12%,38%)] hover:text-[hsl(138,23%,39%)] transition-colors duration-300">
                {link.label}
              </Link>
            ))}
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[hsl(138,23%,39%)] px-5 py-2.5 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg">
              預約諮詢
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="開啟選單">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-[hsl(38,33%,96%)]/95 backdrop-blur-md border-b border-[hsl(36,25%,86%)] ${open ? "max-h-[28rem]" : "max-h-0"}`}>
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.to} onClick={() => setOpen(false)} className="py-3 text-base font-light tracking-wider text-[hsl(30,18%,15%)] border-b border-[hsl(36,25%,86%)]/50">
              {link.label}
            </Link>
          ))}
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full bg-[hsl(138,23%,39%)] px-5 py-3 text-center text-sm font-medium tracking-wider text-white">
            預約諮詢
          </a>
        </div>
      </div>
    </header>
  );
}
