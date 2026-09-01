import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LINE_URL = "https://lin.ee/rqKVgA4";
const HERO_IMG = "https://media.base44.com/images/public/6a6c994a5052168c0a1481ca/ec364c5a3_generated_465d06c5.png";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="section-label mb-6">心見 · MIND-AWARE</p>
            <h1 className="heading-serif text-3xl sm:text-4xl md:text-5xl leading-[1.4] text-[hsl(30,18%,15%)]">
              在靜謐中，<br />重拾身體的節奏
            </h1>
            <p className="mt-6 font-heading text-lg md:text-xl font-light text-[hsl(30,12%,38%)] tracking-wide">
              由心看見，身體的內在智慧。
            </p>
            <div className="mt-8 max-w-xl">
              <p className="text-sm md:text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light">
                身體並非零散的部件，而是一個流動的整體（Holism）。在「心見」，我們以顱薦椎（Craniosacral）的微幅律動為起點，溫柔地梳理內臟筋膜（Visceral Fascia）、淋巴與神經間的緊繃張力。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[hsl(138,23%,39%)] px-7 py-3.5 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg">
                開始探索身體
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link href="/#philosophy"
                className="inline-flex items-center gap-2 text-sm font-light tracking-wider text-[hsl(30,18%,15%)] hover:text-[hsl(138,23%,39%)] transition-colors duration-300 border-b border-[hsl(30,18%,15%)]/30 hover:border-[hsl(138,23%,39%)] pb-0.5">
                了解心見
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="inline-flex items-center gap-3">
                <span className="font-heading text-3xl md:text-4xl font-light text-[hsl(138,23%,39%)]">10</span>
                <span className="text-xs leading-relaxed text-[hsl(30,12%,38%)] tracking-wider">年專業<br />經驗</span>
              </div>
              <div className="h-8 w-px bg-[hsl(36,25%,86%)] hidden sm:block" />
              <div className="text-xs leading-relaxed text-[hsl(30,12%,38%)] font-light">
                <p className="font-heading font-medium text-[hsl(30,18%,15%)] text-sm">透明定價</p>
                <p className="mt-0.5">據點 2,000 · 到府 2,500 元 / 60 分鐘</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-sm bg-[hsl(36,31%,91%)]">
                <img src={HERO_IMG} alt="靜謐的侘寂意象" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden sm:block">
                <div className="bg-[hsl(38,33%,96%)]/90 backdrop-blur px-5 py-4 rounded-sm shadow-sm border border-[hsl(36,25%,86%)]/50">
                  <p className="font-heading text-sm tracking-wider text-[hsl(30,18%,15%)]">Craniosacral Therapy</p>
                  <p className="text-[11px] tracking-[0.3em] text-[hsl(30,12%,38%)] mt-1">顱薦椎工作</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
