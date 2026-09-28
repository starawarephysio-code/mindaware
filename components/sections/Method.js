import { METHOD_CARDS } from "@/lib/siteData";

export default function Method() {
  return (
    <section id="method" className="py-24 md:py-36 bg-[hsl(38,33%,96%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">02 · METHOD</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
          顱薦椎工作（Craniosacral, CST）
        </h2>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide">
          採用 Upledger 顱薦椎系統，以極輕柔的方式，與身體安靜地對話。
        </p>
        <div className="mt-14 max-w-3xl space-y-6 text-[15px] md:text-base leading-loose text-[hsl(30,12%,38%)] font-light">
          <p>
            你有沒有剝過橘子？橘子裡每一瓣之間，有一層薄薄的白色薄膜，把每一瓣包起來、隔開來，又把它們連在一起。你的身體裡有一模一樣的東西，叫做筋膜（Fascia）。它包裹你的肌肉、器官、神經、骨骼——全身上下每一個結構之間，都有筋膜。
          </p>
          <p>
            生活的壓力、長時間的姿勢、說不出口的情緒，常常讓身體不自覺地收緊。顱薦椎工作者以極輕的接觸，感知從頭顱到薦骨的細微節律與筋膜的張力，在那裡停留、等待，陪伴身體慢慢放鬆。
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(36,25%,86%)] border border-[hsl(36,25%,86%)] rounded-sm overflow-hidden">
          {METHOD_CARDS.map((card) => (
            <div
              key={card.no}
              className="group bg-[hsl(38,33%,96%)] p-8 md:p-10 transition-colors duration-500 hover:bg-[hsl(36,31%,93%)]"
            >
              <span className="font-heading text-2xl font-light text-[hsl(138,23%,39%)]/40 group-hover:text-[hsl(138,23%,39%)] transition-colors duration-500">
                {card.no}
              </span>
              <h3 className="mt-4 font-heading text-lg font-medium text-[hsl(30,18%,15%)] tracking-wide">
                {card.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(30,12%,38%)] font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
