"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check, GraduationCap, Menu, Zap } from "lucide-react";
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
  return (
    <section className="relative mt-3 aspect-[3/2] overflow-hidden rounded-[22px] border border-[#3467eb]/35 bg-white sm:aspect-auto sm:min-h-[620px] lg:mt-8">
      <div className="absolute inset-0">
        <Image src="/hero/go-darslinker-gateway.png" alt="Go Darslinker ilm darvozasi tomon ketayotgan talaba va uni kutib olayotgan professorlar" fill priority sizes="(max-width: 639px) 100vw, (max-width: 1024px) 100vw, 1280px" className="object-cover object-center" />
      </div>
      <div className="relative z-10 w-[56%] px-3 pt-4 sm:w-auto sm:max-w-[560px] sm:px-10 sm:pb-12 sm:pt-12 lg:px-14 lg:pt-16" style={{ fontFamily: "Avenir Next, Avenir, 'Helvetica Neue', Arial, sans-serif" }}>
        <p className="text-[6px] font-bold uppercase tracking-[.18em] text-[#3467eb] sm:text-[10px] sm:tracking-[.22em]">Beginner language campus</p>
        <h1 className="mt-2 text-[clamp(1.45rem,7.1vw,7rem)] font-bold leading-[.89] tracking-[-.06em] sm:mt-4">Gapirishni<br /><span className="text-[#343b46]">bugun</span> boshlang.</h1>
        <p className="mt-2 text-[8px] font-normal leading-[1.35] tracking-[-.01em] text-[#686d76] sm:hidden">Qisqa darslar bilan yangi tilda suhbatni boshlang.</p>
        <p className="mt-5 hidden max-w-md text-lg font-normal leading-8 tracking-[-.01em] text-[#686d76] sm:block">Ilm darvozasidan birinchi qadamni qo‘ying. Qisqa darslar bilan yangi tilda suhbatni boshlang.</p>
        <button onClick={onStart} className="mt-3 flex items-center gap-1.5 rounded-lg border border-[#171a20] bg-[#3467eb] px-3 py-2 text-[8px] font-bold text-white shadow-[2px_2px_0_#171a20] transition hover:-translate-y-0.5 sm:mt-7 sm:gap-3 sm:rounded-2xl sm:border-2 sm:px-7 sm:py-4 sm:text-sm sm:shadow-[4px_4px_0_#171a20]">Bepul boshlash <ArrowRight className="size-3 sm:size-6" /></button>
        <div className="mt-8 hidden flex-wrap gap-4 text-xs font-bold sm:flex">
          <span className="flex items-center gap-2"><i className="grid size-6 place-items-center rounded-full bg-[#dfe3ea] text-[#343b46]"><Check className="size-3" /></i>Birinchi dars ochiq</span>
          <span className="flex items-center gap-2"><i className="grid size-6 place-items-center rounded-full bg-[#dfe3ea] text-[#3467eb]"><Zap className="size-3" /></i>Kuniga 10 daqiqa</span>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return <header><div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6"><div className="flex items-center gap-2"><span className="grid size-9 -rotate-3 place-items-center rounded-xl bg-[#3467eb] text-white shadow-[2px_2px_0_#171a20]"><GraduationCap className="size-5" /></span><b className="text-[15px] tracking-[-.03em]">Go Darslinker</b></div><div className="flex items-center gap-2"><span className="rounded-full bg-white px-3 py-2 text-[10px] font-black"><Zap className="mr-1 inline size-3 text-[#3467eb]" />80 XP</span><button aria-label="Menyuni ochish" className="grid size-9 place-items-center rounded-full border border-black/15"><Menu className="size-4" /></button></div></div></header>;
}

function CourseRail({ onStart }: { onStart: () => void }) {
  return <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-4">{courses.map((course) => <button key={course.name} onClick={() => course.open && onStart()} className="group relative aspect-[4/5] min-w-[78vw] snap-center overflow-hidden rounded-[22px] border border-[#3467eb]/35 text-left sm:min-w-0"><Image src={course.image} alt={course.name} fill sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[9px] font-black text-[#171a20]">{course.open ? "OCHIQ" : "TEZ ORADA"}</span><div className="absolute inset-x-0 bottom-0 p-5 text-white"><small className="font-bold text-white/55">{course.native}</small><h3 className="mt-1 text-[28px] font-black leading-none tracking-[-.04em]">{course.name}</h3><p className="mt-2 max-w-[230px] text-xs leading-5 text-white/65">{course.description}</p>{course.open && <span className="mt-4 flex items-center gap-2 text-xs font-black text-[#ffca45]">Kursni ochish <ArrowRight className="size-3" /></span>}</div></button>)}</div>;
}

function Footer() {
  return <footer className="mt-14 border-t border-black/10 px-4 pb-10 pt-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row"><div><b>Go Darslinker</b><p className="mt-1 text-xs text-[#686d76]">Har kuni 10 daqiqa — yangi imkoniyat.</p></div><p className="text-[10px] font-bold uppercase tracking-wider text-[#686d76]">© 2026 · Bilim bilan oldinga</p></div></footer>;
}
