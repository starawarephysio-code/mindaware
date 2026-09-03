"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { MessageCircle, Ear, Hand, Moon, MessageSquare, ArrowRight } from "lucide-react";

const LINE_URL = "https://lin.ee/rqKVgA4";

const STEPS = [
  {
    number: "01",
    english: "Reservation",
    title: "透過 LINE 預約",
    icon: MessageCircle,
    description:
      "告訴我們你目前的身體狀況、希望的服務地點（據點或到府）與期望的時間。工作者會在 24 小時內確認。",
    detail: "不需要填寫複雜表格。一段文字，讓我們先認識你的身體。",
    extra: null,
  },
  {
    number: "02",
    english: "Arrival",
    title: "10 分鐘的初次晤談",
    icon: Ear,
    description:
      "工作者會在開始前與你簡短交流——你的睡眠、壓力狀態、這段時間身體的感受。",
    detail: "這不是病歷填寫。是一段讓工作者真正了解你的對話。",
    extra: null,
  },
  {
    number: "03",
    english: "The Work",
    title: "60 分鐘一對一陪伴",
    icon: Hand,
    description:
      "平躺、穿著衣物、閉上眼睛。工作者以約 5 克的力道輕觸你的頭顱、脊椎與薦骨，感知顱薦律動，陪伴筋膜慢慢鬆開。",
    detail:
      "你可能感覺到溫熱、微微的流動感，或直接睡著——都是正常的。",
    extra: "＊ 全程穿著衣物，不使用精油，不需脫衣。",
  },
  {
    number: "04",
    english: "Integration",
    title: "讓身體慢慢回來",
    icon: Moon,
    description:
      "工作結束後，我們不會立刻請你起身。靜置幾分鐘，讓神經系統慢慢從深度放鬆的狀態回到日常節奏。",
    detail: "這段靜置，往往是整個體驗中最珍貴的部分。",
    extra: null,
  },
  {
    number: "05",
    english: "Reflection",
    title: "你感受到了什麼？",
    icon: MessageSquare,
    description:
      "工作者會與你短暫交流體驗中的感受，並依你的狀況給予後續的建議節奏——不強迫任何結論。",
    detail: "你的感受就是答案。沒有標準的反應，只有屬於你的身體語言。",
    extra: null,
  },
];

const AUTO_ADVANCE_MS = 5000;

export default function ExperienceClient() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const progressRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setVisible(true);
    }, 180);
  }, []);

  const handleManualSelect = (idx) => {
    setPaused(true);
    clearTimeout(pauseTimeoutRef.current);
    goTo(idx);
    pauseTimeoutRef.current = setTimeout(() => setPaused(false), 8000);
  };

  // Auto-advance + progress bar
  useEffect(() => {
    if (prefersReduced.current || paused || active >= STEPS.length - 1) return;

    setProgress(0);
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        goTo(active + 1);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [active, paused, goTo]);

  useEffect(() => () => clearTimeout(pauseTimeoutRef.current), []);

  const step = STEPS[active];
  const Icon = step.icon;

  return (
    <main
      style={{ backgroundColor: "#F7F3EE", color: "#2C2820" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setPaused(false), 2000);
      }}
    >
      {/* ── Page Header ──────────────────────────────── */}
      <section style={{ paddingTop: "140px", paddingBottom: "64px" }} className="px-6 lg:px-10 max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-10" aria-label="breadcrumb">
          <ol className="flex items-center gap-2 text-xs" style={{ color: "#8B6A50" }}>
            <li><Link href="/" style={{ color: "#8B6A50" }} className="hover:opacity-70 transition-opacity">心見 MIND-AWARE</Link></li>
            <li>/</li>
            <li style={{ color: "#2C2820" }}>體驗流程</li>
          </ol>
        </nav>

        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#8B6A50", letterSpacing: "0.3em", fontSize: "12px", marginBottom: "20px" }}>
          01 · Experience
        </p>

        <h1
          style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 200,
            color: "#2C2820",
            lineHeight: 1.5,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          }}
        >
          台北顱薦椎體驗流程
          <br />
          <span style={{ fontWeight: 200, opacity: 0.7, fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}>
            心見 MIND-AWARE 預約到完成全指南
          </span>
        </h1>

        <p
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 300,
            color: "#8B6A50",
            lineHeight: 2,
            marginTop: "16px",
            maxWidth: "560px",
            fontSize: "15px",
          }}
        >
          從第一次 LINE 諮詢到工作結束後靜置，完整 5 個步驟。
          <br />每一步都是陪伴，不是程序。
        </p>

        {/* Pricing pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginTop: "24px",
            border: "1px solid #DDD5C8",
            backgroundColor: "#F9F7F2",
            color: "#4E7A5E",
            fontSize: "11px",
            letterSpacing: "0.15em",
            padding: "8px 16px",
            borderRadius: "2px",
          }}
        >
          據點體驗 2,000 元・到府服務 2,500 元・60 分鐘・全程一對一
        </div>

        <div style={{ height: "1px", backgroundColor: "#DDD5C8", marginTop: "48px" }} />
      </section>

      {/* ── Step Flow ────────────────────────────────── */}
      <section
        className="px-6 lg:px-10 max-w-5xl mx-auto pb-24"
        itemScope
        itemType="https://schema.org/HowTo"
        aria-label="體驗流程步驟"
      >
        <meta itemProp="name" content="心見 MIND-AWARE 台北顱薦椎體驗流程" />
        <meta itemProp="totalTime" content="PT90M" />

        {/* Progress bar */}
        <div
          role="progressbar"
          aria-label="體驗流程進度"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ height: "2px", backgroundColor: "#DDD5C8", marginBottom: "40px", borderRadius: "1px", overflow: "hidden" }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "#4E7A5E",
              width: `${((active) / (STEPS.length - 1)) * 100 + (progress / (STEPS.length - 1))}%`,
              transition: "width 0.1s linear",
            }}
          />
        </div>

        {/* Desktop stepper (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-0 mb-12" style={{ position: "relative" }}>
          {STEPS.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                  {i > 0 && (
                    <div style={{ flex: 1, height: "1px", backgroundColor: isDone || isActive ? "#4E7A5E" : "#DDD5C8", transition: "background-color 0.3s" }} />
                  )}
                  <button
                    onClick={() => handleManualSelect(i)}
                    aria-pressed={isActive}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: `1px solid ${isActive ? "#4E7A5E" : isDone ? "#4E7A5E" : "#DDD5C8"}`,
                      backgroundColor: isActive ? "#4E7A5E" : isDone ? "#F9F7F2" : "#F7F3EE",
                      color: isActive ? "white" : isDone ? "#4E7A5E" : "#8B6A50",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      flexShrink: 0,
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "13px",
                    }}
                  >
                    {s.number}
                  </button>
                  {i < STEPS.length - 1 && (
                    <div style={{ flex: 1, height: "1px", backgroundColor: isDone ? "#4E7A5E" : "#DDD5C8", transition: "background-color 0.3s" }} />
                  )}
                </div>
                <button
                  onClick={() => handleManualSelect(i)}
                  style={{
                    marginTop: "10px",
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontWeight: 300,
                    fontSize: "11px",
                    color: isActive ? "#4E7A5E" : "#8B6A50",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    opacity: isActive ? 1 : 0.7,
                    transition: "all 0.3s",
                    textAlign: "center",
                    maxWidth: "80px",
                  }}
                >
                  {s.title.slice(0, 8)}
                </button>
              </div>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          style={{
            borderLeft: "3px solid #4E7A5E",
            paddingLeft: "32px",
            minHeight: "300px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          itemProp="step"
          itemScope
          itemType="https://schema.org/HowToStep"
        >
          <meta itemProp="position" content={String(active + 1)} />

          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <Icon size={20} strokeWidth={1} color="#4E7A5E" aria-hidden="true" />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                color: "#8B6A50",
                fontSize: "13px",
                letterSpacing: "0.25em",
              }}
            >
              {step.english}
            </p>
          </div>

          <h2
            itemProp="name"
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontWeight: 300,
              color: "#2C2820",
              fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                color: "#8B6A50",
                fontSize: "1rem",
                marginRight: "12px",
              }}
            >
              {step.number}
            </span>
            {step.title}
          </h2>

          <p
            itemProp="text"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 300,
              color: "#2C2820",
              lineHeight: 2,
              fontSize: "15px",
              maxWidth: "600px",
              marginBottom: "24px",
            }}
          >
            {step.description}
          </p>

          {/* Detail / quote block */}
          <blockquote
            style={{
              borderLeft: "3px solid #4E7A5E",
              backgroundColor: "#F9F7F2",
              padding: "20px 24px",
              marginLeft: 0,
              maxWidth: "560px",
            }}
          >
            <p
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 300,
                color: "#2C2820",
                lineHeight: 2,
                fontSize: "14px",
                fontStyle: "italic",
                opacity: 0.85,
              }}
            >
              {step.detail}
            </p>
          </blockquote>

          {step.extra && (
            <p style={{ marginTop: "16px", fontSize: "12px", color: "#8B6A50", fontFamily: "'Noto Sans TC', sans-serif", fontWeight: 300 }}>
              {step.extra}
            </p>
          )}

          {/* Mobile step navigation */}
          <div className="flex lg:hidden items-center gap-6 mt-10">
            <button
              onClick={() => active > 0 && handleManualSelect(active - 1)}
              disabled={active === 0}
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: active === 0 ? "#DDD5C8" : "#8B6A50",
                background: "none",
                border: "none",
                cursor: active === 0 ? "default" : "pointer",
              }}
            >
              ← 上一步
            </button>
            <div style={{ display: "flex", gap: "6px" }}>
              {STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManualSelect(i)}
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: i === active ? "#4E7A5E" : "#DDD5C8",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  aria-label={`步驟 ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => active < STEPS.length - 1 && handleManualSelect(active + 1)}
              disabled={active === STEPS.length - 1}
              style={{
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 300,
                fontSize: "13px",
                color: active === STEPS.length - 1 ? "#DDD5C8" : "#4E7A5E",
                background: "none",
                border: "none",
                cursor: active === STEPS.length - 1 ? "default" : "pointer",
              }}
            >
              下一步 →
            </button>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────── */}
      <section
        style={{ backgroundColor: "#211E19", padding: "96px 24px" }}
        className="text-center"
      >
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: "#8B6A50",
              fontSize: "13px",
              letterSpacing: "0.3em",
              marginBottom: "20px",
            }}
          >
            Are you ready?
          </p>

          <h2
            style={{
              fontFamily: "'Noto Serif TC', serif",
              fontWeight: 200,
              color: "white",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              lineHeight: 1.6,
              marginBottom: "20px",
            }}
          >
            準備好了嗎？
          </h2>

          <p
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 2,
              fontSize: "15px",
              marginBottom: "40px",
            }}
          >
            不需要確定自己的狀況是否適合。
            <br />帶著你的好奇心，讓身體告訴你答案。
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#4E7A5E",
                color: "white",
                padding: "14px 32px",
                fontSize: "13px",
                letterSpacing: "0.2em",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 300,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              LINE 預約諮詢
              <ArrowRight size={14} strokeWidth={1} />
            </a>

            <Link
              href="/faq"
              style={{
                border: "1px solid rgba(221,213,200,0.4)",
                color: "rgba(255,255,255,0.7)",
                padding: "14px 32px",
                fontSize: "13px",
                letterSpacing: "0.2em",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "'Noto Sans TC', sans-serif",
                fontWeight: 300,
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(221,213,200,0.4)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
            >
              查看常見問題 FAQ
            </Link>
          </div>

          <p
            style={{
              marginTop: "48px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 300,
              lineHeight: 2,
            }}
          >
            ＊ 個別體驗感受因人而異，非任何形式之效果保證。
            <br />心見 MIND-AWARE 提供之服務為身心放鬆之陪伴，非醫療行為。
          </p>
        </div>
      </section>
    </main>
  );
}
