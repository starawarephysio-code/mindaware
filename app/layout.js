import "./globals.css";

export const metadata = {
  title: {
    default: "心見 MIND-AWARE｜顱薦椎 × 內臟筋膜 | 台北大安 · 到府服務",
    template: "%s｜心見 MIND-AWARE",
  },
  description:
    "心見 MIND-AWARE，台北顱薦椎（Craniosacral Therapy）與內臟筋膜放鬆工作室。空間體驗 2,000 元 / 60 分鐘；到府服務 2,500 元 / 60 分鐘，台北市、新北市全區。Upledger 系統，10 年專業。",
  keywords: ["顱薦椎", "Craniosacral Therapy", "內臟筋膜", "台北顱薦椎", "到府顱薦椎", "心見", "MIND-AWARE", "大安顱薦椎", "北投顱薦椎", "自費物理治療台北"],
  openGraph: {
    title: "心見 MIND-AWARE｜顱薦椎 × 內臟筋膜 台北",
    description: "台北顱薦椎與內臟筋膜工作室。空間體驗 2,000元；到府服務 2,500元，台北市、新北市全區。",
    type: "website",
    url: "https://www.mindaware.tw",
    locale: "zh_TW",
    siteName: "心見 MIND-AWARE",
  },
  twitter: {
    card: "summary_large_image",
    title: "心見 MIND-AWARE｜顱薦椎 × 內臟筋膜 台北",
    description: "台北顱薦椎工作室。據點 2,000元；到府 2,500元 / 60 分鐘。",
  },
  alternates: { canonical: "https://www.mindaware.tw" },
  robots: { index: true, follow: true },
};

// ── Schema.org structured data ─────────────────────────────────────
const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": "https://www.mindaware.tw/#organization",
  name: "心見 MIND-AWARE",
  alternateName: "Mind-Aware Craniosacral Therapy",
  description:
    "台北頂尖顱薦椎（Craniosacral Therapy）與內臟筋膜放鬆工作室，採用 Upledger 系統，提供深度身心放鬆的一對一陪伴服務。",
  url: "https://www.mindaware.tw",
  email: "starawarephysio@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "和平東路二段100號3樓之8",
    addressLocality: "大安區",
    addressRegion: "台北市",
    postalCode: "10681",
    addressCountry: "TW",
  },
  geo: { "@type": "GeoCoordinates", latitude: 25.0263, longitude: 121.5381 },
  areaServed: [
    { "@type": "City", name: "台北市" },
    { "@type": "City", name: "新北市" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "匿名來訪者" },
      reviewBody: "在心見，我第一次感覺到身體真正鬆下來了。工作者的手非常輕，但每一次觸碰都讓我感覺被看見。",
      datePublished: "2026-01-15",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "S.C." },
      reviewBody: "長期肩頸緊繃，試過很多方式都只是短暫緩解。第一次做完顱薦椎之後，睡眠明顯改善了。",
      datePublished: "2026-02-20",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "心見服務項目",
    itemListElement: [
      {
        "@type": "Offer",
        name: "顱薦椎 × 內臟筋膜 據點體驗",
        description: "心見大安或北投老爺酒店，全程一對一 60 分鐘",
        price: "2000",
        priceCurrency: "TWD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "顱薦椎 × 內臟筋膜 到府服務",
        description: "台北市、新北市全區到府，全程一對一 60 分鐘",
        price: "2500",
        priceCurrency: "TWD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  sameAs: ["https://lin.ee/rqKVgA4"],
};

const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "星見物理治療所 心見團隊",
  jobTitle: "顱薦椎工作者",
  worksFor: { "@type": "Organization", name: "心見 MIND-AWARE" },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Upledger Institute CranioSacral Therapy Level 1 (CST1)",
      credentialCategory: "Professional Certification",
      recognizedBy: { "@type": "Organization", name: "Upledger Institute International" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Upledger Institute CranioSacral Therapy Level 2 (CST2)",
      credentialCategory: "Professional Certification",
      recognizedBy: { "@type": "Organization", name: "Upledger Institute International" },
    },
  ],
  knowsAbout: ["顱薦椎工作", "Craniosacral Therapy", "內臟筋膜放鬆", "Visceral Fascial Release", "筋膜系統", "自律神經調節"],
};

const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mindaware.tw/#website",
  name: "心見 MIND-AWARE",
  url: "https://www.mindaware.tw",
  inLanguage: "zh-TW",
  publisher: { "@id": "https://www.mindaware.tw/#organization" },
};

const schemas = [LocalBusinessSchema, PersonSchema, WebSiteSchema];

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&family=Noto+Serif+TC:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}
