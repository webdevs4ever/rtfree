import React from "react";
import { essays } from "./content";

export default function OneA() {
  return (
    <div
      className="min-h-screen text-slate-900"
      style={{ backgroundColor: "#e5e7eb", fontFamily: "'Source Sans 3', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#e5e7eb]/90 px-6 py-4 backdrop-blur lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">RT Scott-Freeman</div>
            <div className="font-display text-2xl tracking-tight text-amber-600">1a</div>
          </div>
          <a
            href={import.meta.env.BASE_URL}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
          >
            Back home
          </a>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          {essays.map((essay) => (
            <section
              key={essay.id}
              id={essay.sectionId}
              className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.2)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">{essay.sectionId}</div>
              <h2 className="mt-3 font-display text-3xl text-amber-600 md:text-4xl">{essay.title}</h2>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>{essay.category}</span>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <span>{essay.date}</span>
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{essay.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={essay.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-amber-500 hover:text-slate-900"
                >
                  Open PDF
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
                >
                  Top of page
                </a>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
