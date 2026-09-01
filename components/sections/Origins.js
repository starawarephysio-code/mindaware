import { SCENARIOS } from "@/lib/siteData";

export default function Origins() {
  return (
    <section id="origins" className="py-24 md:py-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">04 · ORIGINS</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] max-w-xl">一個按不住的薄膜</h2>
        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-[15px] md:text-base leading-loose text-[hsl(30,12%,38%)] font-light">
            <p>1971 年，美國一間手術室。</p>
            <p>Dr. Upledger 正在協助一台頸椎手術，負責固定術野。但有一樣東西，他怎麼樣都按不住——包覆脊髓的硬腦膜，一直在輕輕地動。不是心跳，不是呼吸。是他從來沒見過的節律。</p>
            <p>Dr. Upledger 發現這個節律從頭顱透過硬腦膜，一路傳導到薦骨，並將它命名為顱薦椎系統（Craniosacral System，CST）。筋膜卡住的地方，節律就會改變，甚至消失。這讓整件事從「頭顱和薦骨的工作」，擴展成全身筋膜網絡的工作。</p>
            <p className="font-heading text-[hsl(30,18%,15%)] text-base md:text-lg font-light italic">從一個按不住的薄膜，到理解全身筋膜的工作方式——花了將近一個世紀。</p>
          </div>
          <div className="lg:col-span-5">
            <p className="font-heading text-xs tracking-[0.3em] text-[hsl(138,23%,39%)] mb-6">一些人帶著這樣的狀態前來</p>
            <div className="space-y-3">
              {SCENARIOS.map((s, i) => (
                <div key={s.title} className="border border-[hsl(36,25%,86%)] rounded-sm bg-[hsl(38,33%,96%)]/50 p-5 md:p-6 hover:border-[hsl(138,23%,39%)]/40 transition-colors duration-300">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-heading text-sm text-[hsl(138,23%,39%)]/50">0{i + 1}</span>
                    <h4 className="font-heading text-base font-medium text-[hsl(30,18%,15%)] tracking-wide">{s.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-[hsl(30,12%,38%)] font-light">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
