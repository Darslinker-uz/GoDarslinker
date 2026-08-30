"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, Menu, Zap } from "lucide-react";
import { LessonOverlay } from "./lesson-overlay";

const courses = [
  { name: "Ingliz tili", native: "English", description: "Kundalik suhbatlarni noldan boshlang.", image: "/courses/english.png", open: true },
  { name: "Rus tili", native: "Русский", description: "Oddiy va ravon muloqotga birinchi qadam.", image: "/courses/russian.png" },
  { name: "Arab tili", native: "العربية", description: "Yozuv, tovush va kundalik iboralar.", image: "/courses/arabic.png" },
  { name: "Koreys tili", native: "한국어", description: "Madaniyat orqali jonli suhbatlarni o‘rganing.", image: "/courses/korean.png" },
];

export function GoDarslinkerHome() {
  const [lessonOpen, setLessonOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#eef0f3] text-[#171a20]">
      {lessonOpen && <LessonOverlay onClose={() => setLessonOpen(false)} />}
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Hero onStart={() => setLessonOpen(true)} />
        <section className="mt-12 sm:mt-16">
          <div className="mb-4 flex items-end justify-between">
            <div><p className="text-[10px] font-black uppercase tracking-[.16em] text-[#3467eb]">Tilni tanlang</p><h2 className="mt-1 text-2xl font-black sm:text-3xl">Qayerdan boshlaymiz?</h2></div>
            <span className="hidden text-xs font-bold text-[#686d76] sm:block">4 ta yo‘nalish</span>
          </div>
          <CourseRail onStart={() => setLessonOpen(true)} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Hero({ onStart }: { onStart: () => void }) {
  const fontFamily = "Avenir Next, Avenir, 'Helvetica Neue', Arial, sans-serif";
  return (
    <section className="mt-3 lg:mt-8">
      <div className="relative aspect-[2/3] overflow-hidden rounded-[22px] border border-[#3467eb]/35 sm:hidden" style={{ fontFamily }}>
        <Image
          src="/hero/go-darslinker-gateway-mobile-v2.png"
          alt="Chapdagi Go Darslinker ilm darvozasi tomon ketayotgan talaba va uni kutib olayotgan professorlar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 z-10 px-5 pt-6">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#3467eb]">Beginner language campus</p>
          <h1 className="mt-2 text-[2.35rem] font-bold leading-[.95] tracking-[-.03em]">
            Gapirishni<br /><span className="text-[#343b46]">bugun</span> boshlang.
          </h1>
          <p className="mt-3 text-[14px] leading-[1.45] tracking-[-.01em] text-[#686d76]">
            Ilm darvozasidan birinchi qadamni qo‘ying. Qisqa darslar bilan yangi tilda suhbatni boshlang.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-[11px] font-bold">
            <span className="flex items-center gap-1.5"><i className="grid size-5 place-items-center rounded-full bg-[#eef0f3] text-[#343b46]"><Check className="size-2.5" /></i>Birinchi dars ochiq</span>
            <span className="flex items-center gap-1.5"><i className="grid size-5 place-items-center rounded-full bg-[#eef0f3] text-[#3467eb]"><Zap className="size-2.5" /></i>Kuniga 10 daqiqa</span>
          </div>
        </div>
        <button
          onClick={onStart}
          className="hero-cta absolute right-[4%] top-[51%] z-10 flex min-h-11 items-center gap-1.5 rounded-xl border border-[#3d4148]/35 bg-[#eeeae1]/95 px-3.5 py-2.5 text-[11px] font-bold text-[#252930] backdrop-blur-sm transition hover:border-[#3d4148]/55 hover:bg-[#f5f1e8] active:scale-[.98]"
        >
          <span aria-hidden="true" className="mobile-step"><ArrowRight className="size-3.5 rotate-180" /></span> Bepul boshlash
        </button>
      </div>

      <div className="relative hidden min-h-[620px] overflow-hidden rounded-[22px] border border-[#3467eb]/35 bg-white sm:block">
        <div className="absolute inset-0">
          <Image src="/hero/go-darslinker-gateway.png" alt="Go Darslinker ilm darvozasi tomon ketayotgan talaba va uni kutib olayotgan professorlar" fill priority sizes="(max-width: 1024px) 100vw, 1280px" className="object-cover object-center" />
        </div>
        <div className="absolute inset-y-0 left-0 z-[5] w-[70%] bg-gradient-to-r from-white from-40% via-white/85 to-transparent lg:w-[58%]" />
        <div className="relative z-10 max-w-[480px] px-8 pb-12 pt-12 lg:max-w-[520px] lg:px-12 lg:pt-16" style={{ fontFamily }}>
          <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#3467eb]">Beginner language campus</p>
          <h1 className="mt-4 text-[clamp(2.4rem,4.6vw,4.4rem)] font-bold leading-[.92] tracking-[-.04em]">Gapirishni<br /><span className="text-[#343b46]">bugun</span> boshlang.</h1>
          <p className="mt-5 max-w-md text-lg font-normal leading-8 tracking-[-.01em] text-[#686d76]">Ilm darvozasidan birinchi qadamni qo‘ying. Qisqa darslar bilan yangi tilda suhbatni boshlang.</p>
          <button onClick={onStart} className="hero-cta relative mt-7 flex items-center gap-3 rounded-2xl border border-[#3d4148]/35 bg-[#eeeae1]/95 px-7 py-4 text-sm font-bold text-[#252930] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#3d4148]/55 hover:bg-[#f5f1e8] active:scale-[.98]">Bepul boshlash <span aria-hidden="true" className="desktop-step"><ArrowRight className="size-5" /></span></button>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold">
            <span className="flex items-center gap-2"><i className="grid size-6 place-items-center rounded-full bg-[#dfe3ea] text-[#343b46]"><Check className="size-3" /></i>Birinchi dars ochiq</span>
            <span className="flex items-center gap-2"><i className="grid size-6 place-items-center rounded-full bg-[#dfe3ea] text-[#3467eb]"><Zap className="size-3" /></i>Kuniga 10 daqiqa</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes learning-glow {
          0%, 62%, 100% { border-color: rgba(61, 65, 72, .35); }
          76% { border-color: rgba(52, 103, 235, .65); }
        }
        @keyframes step-left {
          0%, 58%, 100% { transform: translateX(0); }
          72% { transform: translateX(-5px); }
        }
        @keyframes step-right {
          0%, 58%, 100% { transform: translateX(0); }
          72% { transform: translateX(5px); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-cta { animation: learning-glow 2.8s ease-in-out infinite; }
          .mobile-step { animation: step-left 2.8s ease-in-out infinite; }
          .desktop-step { animation: step-right 2.8s ease-in-out infinite; }
        }
        .mobile-step, .desktop-step { display: inline-flex; }
      `}</style>
    </section>
  );
}

function Header() {
  return <header className="sticky top-0 z-50 border-b border-[#3467eb]/15 bg-[#eef0f3]/80 pt-[env(safe-area-inset-top)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#eef0f3]/65"><div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6"><div className="flex items-center"><Image src="/brand/go-darslinker-logo.svg" alt="Go Darslinker" width={53} height={53} priority className="size-[53px]" /><b className="-ml-2 text-[15px] font-bold tracking-[-.03em]" style={{ fontFamily: "Avenir Next, Avenir, 'Helvetica Neue', Arial, sans-serif" }}>Go Darslinker</b></div><div className="flex items-center gap-2"><span className="rounded-full border border-white/70 bg-white/65 px-3 py-2 text-[10px] font-black backdrop-blur-md"><Zap className="mr-1 inline size-3 text-[#3467eb]" />80 XP</span><button aria-label="Menyuni ochish" className="grid size-9 place-items-center rounded-full border border-black/15 bg-white/35 backdrop-blur-md transition hover:bg-white/65"><Menu className="size-4" /></button></div></div></header>;
}

function CourseRail({ onStart }: { onStart: () => void }) {
  return <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">{courses.map((course) => <button key={course.name} onClick={() => course.open && onStart()} className="group relative aspect-[4/5] min-w-[78vw] snap-center overflow-hidden rounded-[22px] border border-[#3467eb]/35 text-left sm:min-w-0"><Image src={course.image} alt={course.name} fill sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[9px] font-black text-[#171a20]">{course.open ? "OCHIQ" : "TEZ ORADA"}</span><div className="absolute inset-x-0 bottom-0 p-5 text-white"><small className="font-bold text-white/55">{course.native}</small><h3 className="mt-1 text-[28px] font-black leading-none tracking-[-.04em]">{course.name}</h3><p className="mt-2 max-w-[230px] text-xs leading-5 text-white/65">{course.description}</p>{course.open && <span className="mt-4 flex items-center gap-2 text-xs font-black text-[#ffca45]">Kursni ochish <ArrowRight className="size-3" /></span>}</div></button>)}</div>;
}

function Footer() {
  return <footer className="mt-14 border-t border-black/10 px-4 pb-10 pt-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row"><div><b>Go Darslinker</b><p className="mt-1 text-xs text-[#686d76]">Har kuni 10 daqiqa — yangi imkoniyat.</p></div><p className="text-[10px] font-bold uppercase tracking-wider text-[#686d76]">© 2026 · Bilim bilan oldinga</p></div></footer>;
}
