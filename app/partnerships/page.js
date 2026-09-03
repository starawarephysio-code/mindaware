import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PARTNERS } from "@/lib/siteData";
import { Mail, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "單位合作｜心見 MIND-AWARE",
  description: "心見 MIND-AWARE 與各領域夥伴合作，包含醫院診所、物理治療所、飯店SPA等。台北顱薦椎工作室，為企業、醫療院所、飯店提供專業合作方案。",
  alternates: { canonical: "https://www.mindaware.tw/partnerships" },
  openGraph: {
    title: "單位合作｜心見 MIND-AWARE",
    description: "心見為醫療院所、飯店SPA、月子中心提供顱薦椎工作專業合作。",
    url: "https://www.mindaware.tw/partnerships",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
    { "@type": "ListItem", position: 2, name: "單位合作", item: "https://www.mindaware.tw/partnerships" },
  ],
};

const LINE_URL = "https://lin.ee/rqKVgA4";

export default function Partnerships() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-[hsl(38,33%,96%)]">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">COLLABORATION</span>
            <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
          </div>
          <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)] max-w-2xl">與各領域夥伴，共同深化陪伴</h1>
          <p className="mt-8 max-w-2xl text-[15px] md:text-base leading-loose text-[hsl(30,12%,38%)] font-light">
            心見為星見物理治療所針對顱薦椎工作研究發展的一個專項團隊，目前已經有許多單位與我們合作，從醫療院所到健康促進，顱薦椎工作都可以增加合作單位的品牌價值。
          </p>
          <div className="mt-16 border-t border-[hsl(36,25%,86%)]">
            {PARTNERS.map((p, i) => (
              <div key={p.type} className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-[hsl(36,25%,86%)] items-start">
                <div className="md:col-span-1"><span className="font-heading text-sm text-[hsl(138,23%,39%)]/40">0{i + 1}</span></div>
                <div className="md:col-span-3"><h3 className="heading-serif text-lg md:text-xl font-medium text-[hsl(30,18%,15%)] tracking-wide">{p.type}</h3></div>
                <div className="md:col-span-8">
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {p.orgs.map((org, idx) => (
                      <span key={idx} className="text-sm md:text-[15px] text-[hsl(30,12%,38%)] font-light">
                        {org}{idx < p.orgs.length - 1 && <span className="text-[hsl(138,23%,39%)]/40 ml-3">·</span>}
                      </span>
                    ))}
                  </div>
                  {p.note && <p className="mt-3 text-sm leading-relaxed text-[hsl(30,12%,42%)] font-light">{p.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-5">
            <a href="mailto:starawarephysio@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-[hsl(28,24%,44%)] px-7 py-3.5 text-sm font-medium tracking-wider text-[hsl(28,24%,44%)] hover:bg-[hsl(28,24%,44%)] hover:text-white transition-all">
              <Mail className="w-4 h-4" />寄信洽詢合作
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[hsl(138,23%,39%)] px-7 py-3.5 text-sm font-medium tracking-wider text-white hover:opacity-90 transition-opacity">
              LINE 聯繫我們 <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
