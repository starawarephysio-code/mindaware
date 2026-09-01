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
          顱薦椎工作（Craniosacral Therapy, CST）
        </h2>
        <p className="mt-4 font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] tracking-wide">
          使用創始人美國 Upledger 系統，以最輕柔的方式，與身體深層對話。
        </p>
        <div className="mt-14 max-w-3xl space-y-6 text-[15px] md:text-base leading-loose text-[hsl(30,12%,38%)] font-light">
          <p>你有沒有剝過橘子？橘子裡每一瓣之間，有一層薄薄的白色薄膜，把每一瓣包起來、隔開來，又把它們連在一起。你的身體裡有一模一樣的東西，叫做筋膜（Fascia）。它包裹你的肌肉、器官、神經、骨骼——全身上下每一個結構之間，都有筋膜。</p>
          <p>筋膜正常的時候，是有彈性的。但當壓力累積、情緒積壓、長期姿勢不良——筋膜會開始緊繃、失去彈性。顱薦椎有一個很細微的節律，從頭顱傳到薦骨，透過筋膜在傳導。工作者藉由觸診感知筋膜的張力，透過極輕的接觸，陪伴筋膜慢慢鬆開，讓節律重新流通。</p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(36,25%,86%)] border border-[hsl(36,25%,86%)] rounded-sm overflow-hidden">
          {METHOD_CARDS.map((card) => (
            <div key={card.no} className="group bg-[hsl(38,33%,96%)] p-8 md:p-10 transition-colors duration-500 hover:bg-[hsl(36,31%,93%)]">
              <span className="font-heading text-2xl font-light text-[hsl(138,23%,39%)]/40 group-hover:text-[hsl(138,23%,39%)] transition-colors duration-500">{card.no}</span>
              <h3 className="mt-4 font-heading text-lg font-medium text-[hsl(30,18%,15%)] tracking-wide">{card.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(30,12%,38%)] font-light">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
