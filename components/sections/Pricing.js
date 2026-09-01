import { MapPin, Home, Check, ArrowUpRight } from "lucide-react";
import { PRICE_PLANS, COMPARISON_TABLE } from "@/lib/priceData";

const LINE_URL = "https://lin.ee/rqKVgA4";
const P = "hsl(138,23%,39%)";
const A = "hsl(28,24%,44%)";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">03 · 費用說明</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] max-w-2xl">透明收費，無隱藏費用</h2>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide max-w-2xl">選擇最適合你的方式，與身體相遇。全程一對一，固定 60 分鐘，自費服務。</p>

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
          {PRICE_PLANS.map((plan) => {
            const isAccent = plan.accentColor === "accent";
            const color = isAccent ? A : P;
            return (
              <div key={plan.id} className={`relative rounded-sm border p-8 md:p-10 flex flex-col ${plan.featured ? "shadow-lg" : ""}`}
                style={{ borderColor: plan.featured ? `${A}80` : "hsl(36,25%,86%)", backgroundColor: plan.featured ? "hsl(36,31%,93%)" : "hsl(38,33%,96%)" }}>
                {plan.featured && <span className="absolute top-4 right-4 text-[10px] tracking-[0.3em] font-medium" style={{ color: A }}>RECOMMENDED</span>}
                <div className="flex items-center gap-3 mb-2">
                  {isAccent ? <Home className="w-5 h-5" style={{ color }} /> : <MapPin className="w-5 h-5" style={{ color }} />}
                  <span className="font-heading text-xs tracking-[0.3em]" style={{ color }}>{plan.label}</span>
                </div>
                <h3 className="heading-serif text-2xl md:text-3xl text-[hsl(30,18%,15%)]">{plan.title}</h3>
                <p className="mt-1 text-sm text-[hsl(30,12%,38%)] font-light">{plan.subtitle}</p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-light" style={{ color }}>{plan.price.toLocaleString()}</span>
                  <span className="text-[hsl(30,12%,38%)] font-light">{plan.unit}</span>
                  <span className="text-sm text-[hsl(30,12%,42%)] font-light ml-1">/ {plan.duration}</span>
                </div>
                <p className="mt-3 text-sm text-[hsl(30,12%,38%)] font-light italic leading-relaxed">{plan.tagline}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[hsl(30,12%,38%)] font-light">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color }} />{item}
                    </li>
                  ))}
                </ul>
                {plan.locations && (
                  <div className="mt-8 space-y-3">
                    {plan.locations.map((loc) => (
                      <div key={loc.name} className="pl-4 border-l-2" style={{ borderColor: `${color}4D` }}>
                        <p className="font-heading text-sm font-medium text-[hsl(30,18%,15%)]">{loc.name}</p>
                        <p className="text-xs text-[hsl(30,12%,38%)] font-light mt-0.5">{loc.address}</p>
                        {loc.note && <p className="text-xs text-[hsl(30,12%,42%)] font-light mt-0.5">{loc.note}</p>}
                      </div>
                    ))}
                  </div>
                )}
                {plan.idealFor && (
                  <div className="mt-6">
                    <p className="text-xs tracking-[0.2em] text-[hsl(30,12%,42%)] mb-2">特別適合</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.idealFor.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full border font-light" style={{ borderColor: `${A}4D`, color: A }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
                {plan.note && <p className="mt-4 text-xs text-[hsl(30,12%,42%)] font-light">* {plan.note}</p>}
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: color }}>
                  立即預約 <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-xs text-[hsl(30,12%,42%)] font-light">* 所有服務均為自費，健保不給付。無需事先繳費，體驗當天現場付款。</p>

        {/* Comparison Table */}
        <div className="mt-24">
          <h3 className="heading-serif text-xl md:text-2xl text-[hsl(30,18%,15%)] mb-2">{COMPARISON_TABLE.title}</h3>
          <p className="text-xs tracking-[0.2em] text-[hsl(30,12%,42%)] mb-8">{COMPARISON_TABLE.updatedAt}</p>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="border-b border-[hsl(36,25%,86%)]">
                  <th className="text-left py-4 pr-6 font-heading font-medium text-xs tracking-[0.2em] text-[hsl(30,12%,42%)] w-28">比較維度</th>
                  {COMPARISON_TABLE.sources.map((src, i) => (
                    <th key={src} className="text-left py-4 px-4 font-heading font-medium text-sm" style={{ color: i < 2 ? P : "hsl(30,12%,38%)" }}>{src}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.dimensions.map((row, rowIdx) => (
                  <tr key={row.label} className="border-b border-[hsl(36,25%,86%)]/60" style={{ backgroundColor: rowIdx % 2 === 0 ? "hsl(38,33%,96%)" : "hsl(36,31%,93%)" }}>
                    <td className="py-4 pr-6 font-heading text-xs font-medium text-[hsl(30,12%,42%)] tracking-wider align-top">{row.label}</td>
                    <td className="py-4 px-4 text-[hsl(30,18%,15%)] font-light leading-relaxed align-top">{row.studio}</td>
                    <td className="py-4 px-4 text-[hsl(30,18%,15%)] font-light leading-relaxed align-top">{row.home}</td>
                    <td className="py-4 px-4 text-[hsl(30,12%,38%)] font-light leading-relaxed align-top">{row.clinic}</td>
                    <td className="py-4 px-4 text-[hsl(30,12%,38%)] font-light leading-relaxed align-top">{row.massage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-[hsl(30,12%,42%)] font-light">以上為 2026 年雙北地區服務市場整理，資料來源：心見 MIND-AWARE。</p>
        </div>
      </div>
    </section>
  );
}
