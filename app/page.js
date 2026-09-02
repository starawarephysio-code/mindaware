import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Method from "@/components/sections/Method";
import Service from "@/components/sections/Service";
import Pricing from "@/components/sections/Pricing";
import FaqPreview from "@/components/sections/FaqPreview";
import Origins from "@/components/sections/Origins";
import Team from "@/components/sections/Team";
import Voices from "@/components/sections/Voices";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 首頁 BreadcrumbList（首頁本身）
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
  ],
};

// ServiceList Schema — 讓 AI 可以直接引用服務清單
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "心見 MIND-AWARE 服務項目",
  description: "台北顱薦椎與內臟筋膜放鬆工作室服務清單",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "顱薦椎工作 據點體驗",
        description: "在心見大安或北投老爺酒店，全程一對一 60 分鐘顱薦椎與內臟筋膜工作，費用 2,000 元。",
        offers: { "@type": "Offer", price: "2000", priceCurrency: "TWD" },
        provider: { "@type": "LocalBusiness", name: "心見 MIND-AWARE" },
        areaServed: { "@type": "City", name: "台北市" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "顱薦椎工作 到府服務",
        description: "工作者攜帶設備到府，台北市、新北市全區，全程一對一 60 分鐘，費用 2,500 元。",
        offers: { "@type": "Offer", price: "2500", priceCurrency: "TWD" },
        provider: { "@type": "LocalBusiness", name: "心見 MIND-AWARE" },
        areaServed: [
          { "@type": "City", name: "台北市" },
          { "@type": "City", name: "新北市" },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Method />
        <Service />
        <Pricing />
        <FaqPreview />
        <Origins />
        <Team />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
