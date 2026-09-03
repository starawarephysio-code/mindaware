import ExperienceClient from "@/components/ExperienceClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "台北顱薦椎體驗流程｜心見 MIND-AWARE 預約到完成全指南",
  description:
    "心見 MIND-AWARE 顱薦椎工作完整體驗流程。預約 → 晤談 → 60 分鐘工作 → 靜置 → 回饋，共 5 步驟。據點 2,000 元・到府 2,500 元，台北市、新北市全區。",
  alternates: { canonical: "https://www.mindaware.tw/experience" },
  openGraph: {
    title: "台北顱薦椎體驗流程｜心見 MIND-AWARE",
    description: "從 LINE 預約到完成回饋，5 個步驟完整解析。",
    url: "https://www.mindaware.tw/experience",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "心見 MIND-AWARE 台北顱薦椎體驗流程",
  description:
    "台北顱薦椎工作完整體驗流程：從 LINE 預約到工作結束回饋，共 5 個步驟，全程約 90 分鐘。",
  totalTime: "PT90M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "TWD",
    value: "2000",
  },
  supply: [
    { "@type": "HowToSupply", name: "寬鬆舒適的衣物" },
    { "@type": "HowToSupply", name: "體驗後 30 分鐘無需高度專注的緩衝時間" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "透過 LINE 預約",
      text: "告訴工作者目前的身體狀況、希望的服務地點（據點或到府）與期望時間。工作者在 24 小時內確認。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "10 分鐘的初次晤談",
      text: "工作者在開始前與你簡短交流睡眠、壓力狀態與身體感受，了解當天的工作方向。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "60 分鐘一對一顱薦椎工作",
      text: "平躺、穿著衣物。工作者以約 5 克力道輕觸頭顱、脊椎與薦骨，感知顱薦律動，陪伴筋膜慢慢鬆開。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "靜置整合",
      text: "工作結束後靜置幾分鐘，讓神經系統從深度放鬆的狀態慢慢回到日常節奏。",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "回饋交流",
      text: "工作者與你短暫交流體驗中的感受，依你的狀況建議後續節奏。",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "心見 MIND-AWARE", item: "https://www.mindaware.tw" },
    { "@type": "ListItem", position: 2, name: "體驗流程", item: "https://www.mindaware.tw/experience" },
  ],
};

export default function ExperiencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <ExperienceClient />
      <Footer />
    </>
  );
}
