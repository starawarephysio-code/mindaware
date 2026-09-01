"use client";
import { MapPin, Home } from "lucide-react";

const LINE_URL = "https://lin.ee/rqKVgA4";
const STUDIO_IMG = "https://media.base44.com/images/public/6a6c994a5052168c0a1481ca/754073548_generated_f9b5e3c4.png";
const P = "hsl(138,23%,39%)";
const A = "hsl(28,24%,44%)";

export default function Service() {
  return (
    <section id="service" className="py-24 md:py-36 bg-[hsl(36,31%,93%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">03 · SERVICE</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] max-w-2xl">
          選擇最適合你的方式，與身體相遇
        </h2>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide">
          無論是走進空間的儀式感，還是在家中深度的安定感，我們都在。
        </p>

        {/* Studio */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[hsl(36,31%,91%)]">
            <img src={STUDIO_IMG} alt="心見空間" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5" style={{ color: P }} />
              <span className="font-heading text-xs tracking-[0.3em]" style={{ color: P }}>STUDIO SESSION</span>
            </div>
            <h3 className="heading-serif text-2xl md:text-3xl text-[hsl(30,18%,15%)]">心見・空間體驗</h3>
            <div className="mt-4 inline-flex items-baseline gap-2 bg-[hsl(138,23%,39%)]/8 border border-[hsl(138,23%,39%)]/20 rounded-sm px-4 py-2.5">
              <span className="font-heading text-3xl font-light" style={{ color: P }}>2,000</span>
              <span className="text-sm text-[hsl(30,12%,38%)] font-light">元 / 60 分鐘</span>
            </div>
            <p className="mt-5 text-sm md:text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light">
              走進一個允許你暫時解除所有身分的容器。在獨立、靜謐的空間裡，讓身體與外界的節奏徹底斷開。
            </p>
            <div className="mt-8 space-y-6">
              <div className="pl-5 border-l-2 border-[hsl(138,23%,39%)]/40">
                <p className="font-heading text-base font-medium text-[hsl(30,18%,15%)]">心見大安</p>
                <p className="mt-1 text-sm text-[hsl(30,12%,38%)] font-light">台北市大安區和平東路二段100號3樓之8</p>
                <p className="mt-2 text-xs text-[hsl(30,12%,42%)] font-light">捷運文湖線大安站步行約 5 分鐘</p>
              </div>
              <div className="pl-5 border-l-2 border-[hsl(28,24%,44%)]/40">
                <p className="font-heading text-base font-medium text-[hsl(30,18%,15%)]">北投老爺酒店 × 心見</p>
                <p className="mt-1 text-sm text-[hsl(30,12%,38%)] font-light">台北市北投區中和街2號 11樓</p>
              </div>
            </div>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: P }}>
              預約空間體驗
            </a>
          </div>
        </div>

        {/* Home Visit */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Home className="w-5 h-5" style={{ color: A }} />
              <span className="font-heading text-xs tracking-[0.3em]" style={{ color: A }}>HOME VISIT</span>
            </div>
            <h3 className="heading-serif text-2xl md:text-3xl text-[hsl(30,18%,15%)]">心見・到府服務</h3>
            <div className="mt-4 inline-flex items-baseline gap-2 bg-[hsl(28,24%,44%)]/8 border border-[hsl(28,24%,44%)]/20 rounded-sm px-4 py-2.5">
              <span className="font-heading text-3xl font-light" style={{ color: A }}>2,500</span>
              <span className="text-sm text-[hsl(30,12%,38%)] font-light">元 / 60 分鐘</span>
            </div>
            <p className="mt-5 text-sm md:text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light">
              工作者帶著專業設備來到你的家，在你最放鬆的環境裡，讓身體真正落地。對於有嬰幼兒、行動不便、或高度需要隱私的個案，到府是最理想的選擇。
            </p>
            <div className="mt-8">
              <p className="font-heading text-sm font-medium text-[hsl(30,18%,15%)] mb-3 tracking-wide">到府準備事項</p>
              <ul className="space-y-2 text-sm text-[hsl(30,12%,38%)] font-light">
                {["提供約 2×2 公尺的平坦空地", "光線調暗，保持空間安靜", "體驗前避免大量飲食", "寵物建議暫時隔離"].map(item => (
                  <li key={item} className="flex gap-3"><span className="mt-1.5" style={{ color: A }}>·</span>{item}</li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-xs text-[hsl(30,12%,42%)] font-light">服務範圍：台北市全區、新北市全區</p>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium tracking-wider transition-all duration-300 hover:text-white"
              style={{ borderColor: A, color: A }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = A; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = A; }}>
              預約到府體驗
            </a>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] overflow-hidden rounded-sm bg-[hsl(36,31%,91%)] relative">
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center">
                <p className="font-heading text-xl md:text-2xl font-light text-[hsl(30,12%,38%)] leading-relaxed">在最熟悉的地方，<br />讓身體真正落地</p>
                <div className="mt-8 mx-auto w-16 h-px" style={{ backgroundColor: `${A}66` }} />
                <p className="mt-6 font-heading text-sm font-light tracking-wider" style={{ color: A }}>台北市 · 新北市 全區到府</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-center text-[hsl(30,12%,42%)] font-light">
          所有服務均為自費，健保不給付。詳細費用與比較說明請見
          <a href="#pricing" className="underline ml-1" style={{ color: P }}>費用說明</a>。
        </p>
      </div>
    </section>
  );
}
