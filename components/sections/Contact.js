import { Mail, ArrowUpRight } from "lucide-react";

const LINE_URL = "https://lin.ee/rqKVgA4";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">08 · CONTACT</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] max-w-2xl">與您的身體，預約一次相遇</h2>
        <p className="mt-8 max-w-2xl text-[15px] md:text-base leading-loose text-[hsl(30,12%,38%)] font-light">
          每一次體驗，都是一段靜謐的旅程。我們建議初次來訪的您，留出充裕的時間，讓身體有足夠的空間，說出它想說的話。
        </p>

        <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-3xl">
          <div className="border-t border-[hsl(36,25%,86%)] pt-6">
            <p className="text-xs tracking-[0.2em] text-[hsl(30,12%,42%)] mb-2">Email</p>
            <a href="mailto:starawarephysio@gmail.com" className="flex items-start gap-2 text-sm text-[hsl(30,18%,15%)] font-light hover:text-[hsl(138,23%,39%)] transition-colors">
              <Mail className="w-4 h-4 mt-0.5 text-[hsl(138,23%,39%)] shrink-0" />
              starawarephysio@gmail.com
            </a>
          </div>
          <div className="border-t border-[hsl(36,25%,86%)] pt-6">
            <p className="text-xs tracking-[0.2em] text-[hsl(30,12%,42%)] mb-2">預約諮詢</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-[hsl(30,18%,15%)] font-light hover:text-[hsl(138,23%,39%)] transition-colors">
              <ArrowUpRight className="w-4 h-4 text-[hsl(138,23%,39%)]" />透過 LINE 預約
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[hsl(138,23%,39%)] px-8 py-4 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-xl">
            LINE 預約諮詢
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <p className="text-sm text-[hsl(30,12%,38%)] font-light max-w-sm">不確定自己的狀況是否適合？歡迎先透過 LINE 與我們聊聊。</p>
        </div>
      </div>
    </section>
  );
}
