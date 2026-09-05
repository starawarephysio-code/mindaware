import FaqPageClient from "./FaqPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata = {
  title: "台北顱薦椎 FAQ｜常見問題 費用・流程・適合族群",
  description:
    "台北顱薦椎與內臟筋膜放鬆常見問題解答。費用：據點 2,000 元、到府 2,500 元 / 60 分鐘。25+ 問題分類整理，涵蓋基本認識、體驗流程、費用預約、適合族群、服務地點。",
  alternates: { canonical: "https://www.mindaware.tw/faq" },
  openGraph: {
    title: "台北顱薦椎 FAQ｜心見 MIND-AWARE 常見問題",
    description: "顱薦椎費用、流程、適合族群完整解答。台北大安、北投，到府服務台北市、新北市全區。",
    url: "https://www.mindaware.tw/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.mindaware.tw/faq" },
  inLanguage: "zh-TW",
  about: { "@id": "https://www.mindaware.tw/#organization" },
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
    { "@type": "ListItem", position: 2, name: "常見問題 FAQ", item: "https://www.mindaware.tw/faq" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <FaqPageClient />
      <Footer />
    </>
  );
}
