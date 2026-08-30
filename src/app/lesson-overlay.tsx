"use client";

import { useState } from "react";
import { ArrowRight, Check, Heart, Headphones, Trophy, Volume2, X, Zap } from "lucide-react";

const questions = [
  { uz: "Salom", en: "Hello", phonetic: "/həˈləʊ/", options: ["Hello", "Goodbye", "Please", "Thanks"], answer: 0 },
  { uz: "Xayr", en: "Goodbye", phonetic: "/ˌɡʊdˈbaɪ/", options: ["Sorry", "Yes", "Goodbye", "Hello"], answer: 2 },
  { uz: "Rahmat", en: "Thank you", phonetic: "/ˈθæŋk juː/", options: ["Please", "Thank you", "No", "Sorry"], answer: 1 },
];

export function LessonOverlay({ onClose }: { onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const question = questions[index];

  if (done) {
    return (
      <div className="fixed inset-0 z-[150] grid place-items-center bg-[#eef0f3] p-5">
        <div className="w-full max-w-xl rounded-[30px] bg-white p-10 text-center shadow-2xl">
          <span className="mx-auto grid size-24 place-items-center rounded-full bg-[#3467eb]/10 text-[#3467eb]"><Trophy className="size-11" /></span>
          <p className="mt-6 text-xs font-black uppercase tracking-[.2em] text-[#3467eb]">Birinchi dars tugadi</p>
          <h2 className="mt-2 text-5xl font-semibold text-[#171a20]">Barakalla!</h2>
          <p className="mt-3 text-sm text-black/50">3 ta yangi ibora va +30 XP bilim sandig‘ingizga qo‘shildi.</p>
          <button onClick={onClose} className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#3467eb] px-7 py-4 font-black text-white">Davom etish <ArrowRight /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[150] overflow-y-auto bg-[#eef0f3] p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-4 text-[#171a20]">
          <button onClick={onClose} aria-label="Darsni yopish" className="grid size-10 place-items-center rounded-full border border-current/15"><X /></button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/10"><div className="h-full bg-[#3467eb]" style={{ width: `${((index + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }} /></div>
          <Heart className="fill-current text-[#3467eb]" />
        </div>
        <div className="grid overflow-hidden rounded-[30px] bg-white shadow-2xl md:grid-cols-[.8fr_1.2fr]">
          <aside className="flex min-h-64 flex-col justify-between bg-[#171a20] p-8 text-white md:min-h-[520px]">
            <span className="text-xs font-black uppercase tracking-[.2em] opacity-40">Expression 0{index + 1}</span>
            <div><button aria-label="Talaffuzni eshitish" className="mb-5 grid size-12 place-items-center rounded-full bg-[#3467eb]"><Volume2 /></button><h1 className="text-6xl font-semibold italic">{question.en}</h1><p className="mt-3 opacity-45">{question.phonetic}</p></div>
            <p className="flex items-center gap-2 text-xs font-bold opacity-40"><Headphones className="size-4" /> Eshiting va takrorlang</p>
          </aside>
          <section className="p-7 text-[#171a20] sm:p-10">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-wider opacity-40"><span>Tarjimani toping</span><span><Zap className="inline size-3" /> +10 XP</span></div>
            <h2 className="mt-5 text-3xl font-black">“{question.uz}” inglizchada qanday?</h2>
            <div className="mt-7 grid gap-3">
              {question.options.map((option, optionIndex) => {
                const revealed = selected !== null;
                const correct = optionIndex === question.answer;
                const picked = optionIndex === selected;
                const stateClass = !revealed ? "border-black/10 hover:border-black" : correct ? "border-emerald-500 bg-emerald-50 text-emerald-700" : picked ? "border-rose-500 bg-rose-50 text-rose-700" : "border-black/10 opacity-30";
                return <button key={option} onClick={() => setSelected(optionIndex)} disabled={revealed} className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left font-bold ${stateClass}`}><span className="grid size-7 place-items-center rounded-lg border border-current/20 text-xs">{revealed && correct ? <Check className="size-4" /> : String.fromCharCode(65 + optionIndex)}</span>{option}</button>;
              })}
            </div>
            <button disabled={selected === null} onClick={() => { if (index === questions.length - 1) setDone(true); else { setIndex((current) => current + 1); setSelected(null); } }} className="mt-6 w-full rounded-2xl bg-[#3467eb] p-4 font-black text-white disabled:opacity-20">Davom etish</button>
          </section>
        </div>
      </div>
    </div>
  );
}
