export default function Team() {
  return (
    <section id="team" className="py-24 md:py-36 bg-[hsl(36,31%,93%)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">05 · THE TEAM</span>
          <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
        </div>
        <h2 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">心見團隊</h2>
        <p className="mt-4 max-w-2xl font-heading text-base md:text-lg font-light text-[hsl(30,12%,38%)] leading-relaxed">
          每一位工作者，都帶著不同的質地與溫度，以共同的信念陪伴您的身體找回平衡。
        </p>
        <div className="mt-20 text-center">
          <blockquote className="font-heading text-xl md:text-3xl font-light text-[hsl(30,18%,15%)] leading-relaxed">「最棒的工作，就是幫助身體自我調節。」</blockquote>
          <div className="mt-6 mx-auto w-12 h-px bg-[hsl(138,23%,39%)]/40" />
          <p className="mt-6 font-heading text-sm md:text-base font-light italic text-[hsl(30,12%,38%)]">"The best doctor is one who can help Nature cure itself."</p>
          <p className="mt-2 text-xs tracking-[0.2em] text-[hsl(30,12%,42%)]">— A.T. Still · 骨病學之父</p>
        </div>
      </div>
    </section>
  );
}
