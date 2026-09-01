import FaqPageClient from "./FaqPageClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/lib/faqData";

export const metadata = {
  title: "常見問題 FAQ｜心見 MIND-AWARE 顱薦椎 × 內臟筋膜",
  description: "顱薦椎工作與內臟筋膜放鬆常見問題解答。費用：據點 2,000 元、到府 2,500 元 / 60 分鐘。25+ 問題分類整理，含基本認識、體驗流程、適合族群等。",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <FaqPageClient />
      <Footer />
    </>
  );
}
