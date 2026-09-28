import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "隱私權政策｜心見 MIND-AWARE",
  description:
    "心見 MIND-AWARE 隱私權政策：依個人資料保護法第 8 條說明蒐集者、目的、類別、利用方式、當事人權利與聯絡方式。",
  alternates: { canonical: "https://www.mindaware.tw/privacy" },
  openGraph: {
    title: "隱私權政策｜心見 MIND-AWARE",
    description: "心見 MIND-AWARE 隱私權政策，依個資法第 8 條說明。",
    url: "https://www.mindaware.tw/privacy",
  },
};

const SECTIONS = [
  {
    no: "一",
    title: "蒐集者",
    body: "心見空間｜到府（心見 MIND-AWARE）。",
  },
  {
    no: "二",
    title: "蒐集目的",
    body: "預約安排、服務聯繫、客戶管理。",
  },
  {
    no: "三",
    title: "個資類別",
    body: "姓名、聯絡電話、LINE 顯示名稱、Email、預約時段、到府地址。",
  },
  {
    no: "四",
    title: "利用期間、地區、對象與方式",
    body: "服務期間及結束後依法保存期間；台灣地區；僅限心見內部人員；不提供第三方，法令要求除外。",
  },
  {
    no: "五",
    title: "當事人權利",
    body: "您得依個人資料保護法第 3 條規定，就您的個人資料行使查詢、閱覽、製給複本、補充更正、停止蒐集處理利用、刪除之權利。",
  },
  {
    no: "六",
    title: "不提供個資的影響",
    body: "若您不提供預約所需之個人資料，可能無法完成預約。",
  },
  {
    no: "七",
    title: "Cookie 與流量分析",
    body: "本網站使用 Cookie 與流量分析工具，以了解網站使用情形並改善服務品質。您可透過瀏覽器設定拒絕 Cookie，但部分功能可能受到影響。",
  },
  {
    no: "八",
    title: "聯絡方式",
    body: "若您對本政策或個人資料相關事項有疑問，請透過 Email（starawarephysio@gmail.com）或 LINE（https://lin.ee/rqKVgA4）與我們聯繫。",
  },
  {
    no: "九",
    title: "最後更新日",
    body: "2026-09-27。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen bg-[hsl(38,33%,96%)]">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-label">隱私權政策</span>
            <span className="h-px flex-1 bg-[hsl(36,25%,86%)]" />
          </div>
          <h1 className="heading-serif text-2xl md:text-4xl leading-relaxed text-[hsl(30,18%,15%)]">
            隱私權政策
          </h1>
          <p className="mt-4 font-heading text-base font-light text-[hsl(30,12%,38%)] tracking-wide">
            心見 MIND-AWARE 依個人資料保護法第 8 條，向您告知以下事項。
          </p>
          <div className="mt-12 space-y-8">
            {SECTIONS.map((s) => (
              <div
                key={s.no}
                className="border-t border-[hsl(36,25%,86%)] pt-6"
              >
                <h2 className="font-heading text-lg font-medium text-[hsl(30,18%,15%)] tracking-wide">
                  {s.no}、{s.title}
                </h2>
                <p className="mt-3 text-[15px] leading-loose text-[hsl(30,12%,38%)] font-light">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
