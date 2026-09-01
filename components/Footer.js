import { Mail } from "lucide-react";

const LINE_URL = "https://lin.ee/rqKVgA4";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(30,20%,11%)" }} className="text-white/80">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl font-medium tracking-[0.15em] text-white">心見</span>
              <span className="text-[11px] tracking-[0.4em] text-white/60">MIND-AWARE</span>
            </div>
            <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-white/60">
              顱薦椎工作與內臟筋膜放鬆工作室。在靜謐中，重拾身體的節奏。
            </p>
            <div className="mt-5 space-y-1.5 text-xs text-white/45 font-light">
              <p>據點體驗：2,000 元 / 60 分鐘</p>
              <p>到府服務：2,500 元 / 60 分鐘（台北市、新北市）</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm font-light">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              LINE 預約諮詢
            </a>
            <a href="mailto:starawarephysio@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              starawarephysio@gmail.com
            </a>
            <p className="text-white/50">台北市大安區和平東路二段100號3樓之8</p>
            <p className="text-white/50 text-xs mt-1">北投老爺酒店 × 心見：台北市北投區中和街2號</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-white/45">
          <p>© 2026 心見 MIND-AWARE · All Rights Reserved</p>
          <p className="tracking-wider">starawarephysio@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
