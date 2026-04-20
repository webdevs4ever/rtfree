import React, { useState } from 'react';
import { articleArchivePath, coverImage, essays, featuredSeries, profileImage } from './src/content';

export default function RTBlog() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const loginPath = `${import.meta.env.BASE_URL}login`;
  const emailPath = `${import.meta.env.BASE_URL}email`;

  return (
    <div className="min-h-screen text-slate-900" style={{ backgroundColor: "#e5e7eb", fontFamily: "'Source Sans 3', sans-serif" }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;600&display=swap');
        
        .font-display {
          font-family: 'Playfair Display', serif;
        }
        
        .grain-overlay::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 1000;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      <div className="grain-overlay">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#e5e7eb]/90 px-6 py-4 backdrop-blur lg:px-16">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">RT Scott-Freeman</div>
              <div className="font-display text-2xl tracking-tight text-amber-600">Sales journal</div>
            </div>
          <nav className="hidden md:flex gap-8">
            {['Essays','Sales'].map((item) => (
              <a 
                key={item}
                href={item === 'Sales' ? loginPath : articleArchivePath}
                  className="group relative text-sm uppercase tracking-[0.18em] text-slate-600 transition-colors hover:text-amber-600"
              >
                {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          </div>
        </header>

        <section className="px-4 py-8 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)]">
            <div className="relative h-60 overflow-hidden bg-slate-300 md:h-72 lg:h-80">
              <img 
                src={coverImage}
                alt="LinkedIn-inspired cover"
                className="h-full w-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-slate-900/5 to-white/15" />
            </div>

            <div className="relative px-6 pb-8 pt-0 md:px-10 lg:px-12">
              <div className="absolute -top-20 left-6 md:-top-24 md:left-10 lg:left-12">
                <div className="rounded-full bg-white p-1.5 shadow-xl">
                  <img
                    src={profileImage}
                    alt="RT Scott-Freeman profile"
                    className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
                  />
                </div>
              </div>

              <div className="pt-20 md:pt-24">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)] lg:items-end">
                  <div>
                    <div className="animate-fade-up delay-100 opacity-0 mb-4 inline-flex items-center rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                      Welcome to my corner of the 'Net
                    </div>

                    <div className="animate-fade-up delay-200 opacity-0 flex flex-wrap items-end gap-x-3 gap-y-2">
                      <h1 className="font-display text-4xl tracking-tight text-amber-600 md:text-5xl">
                        RT Scott-Freeman
                      </h1>
                      <span className="pb-1 text-2xl font-light text-slate-500">He/Him</span>
                    </div>

                    <p className="animate-fade-up delay-300 opacity-0 mt-4 max-w-2xl text-2xl text-slate-700">
                      Ad sales and account executive turned insurance specialist, writing about the sales process, end-to-end from cold call to the close.
                    </p>

                    <div className="animate-fade-up delay-400 opacity-0 mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-slate-500">
                      <span>Maryland</span>
                      <span className="hidden text-slate-300 sm:inline">•</span>
                      <a href="#contact" className="font-semibold text-amber-600 hover:text-amber-700">Contact info</a>
                    </div>

                    <div className="animate-fade-up delay-500 opacity-0 mt-8 flex flex-wrap gap-3">
                      <a
                        href={`${articleArchivePath}#${essays[0].sectionId}`}
                        className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-amber-500 hover:text-slate-900"
                      >
                        Read latest post
                      </a>
                      <a
                        href="#essays"
                        className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-amber-500 hover:text-amber-600"
                      >
                        Explore essays
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="px-4 pb-16 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.9fr)]">
            <section id="essays" className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.25)]">
              <div className="flex items-end justify-between border-b border-slate-200 px-6 py-7 md:px-8">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Writing</div>
                  <h2 className="mt-2 font-display text-3xl text-amber-600">Published articles</h2>
                </div>
                
              </div>

              <div className="grid gap-px bg-slate-200 md:grid-cols-3">
                {essays.map((essay, index) => (
                  <a
                    key={essay.id}
                    href={`${articleArchivePath}#${essay.sectionId}`}
                    className={`relative overflow-hidden bg-white p-8 transition-colors ${
                      hoveredCard === index ? 'bg-amber-50' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <span 
                      className={`absolute left-0 top-0 w-1 bg-amber-500 transition-all duration-300 ${
                        hoveredCard === index ? 'h-full' : 'h-0'
                      }`}
                    />

                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                      {essay.category}
                    </span>

                    <h3 className="font-display mt-4 text-2xl leading-snug text-amber-600">
                      {essay.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {essay.excerpt}
                    </p>

                    <span className="mt-8 block text-xs uppercase tracking-[0.16em] text-slate-400">
                      {essay.date}
                    </span>
                  </a>
                ))}
              </div>

            </section>

            <aside className="space-y-8">
              <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-32px_rgba(15,23,42,0.25)]">
                <div className="border-b border-slate-200 px-6 py-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Featured</div>
                  <h2 className="mt-2 font-display text-3xl text-amber-600">Series spotlight</h2>
                </div>
                <div className="p-6">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <img 
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                      alt="Featured"
                      className="h-52 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 rounded-[1.5rem] bg-slate-50 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Featured series</span>
                    <h3 className="font-display mt-3 text-2xl text-amber-600">{featuredSeries.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{featuredSeries.excerpt}</p>
                    <a 
                      href={loginPath}
                      className="mt-6 inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-amber-500 hover:text-slate-900"
                    >
                      Start reading
                    </a>
                  </div>
                </div>
              </section>

              <section id="contact" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.25)]">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Contact</div>
                <h2 className="mt-2 font-display text-3xl text-amber-600">Let&apos;s connect</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  If you want to talk sales or insurance or if you're passionate about all the weird quirks of group sales, B2B or 1:1 consultations. 
                  Pls reach out below.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <a href="https://www.linkedin.com/in/rt-free/" target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">LinkedIn</a>
                  <a href={emailPath} className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">Email</a>
                  <a href={loginPath} className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">Speaking requests</a>
                </div>
              </section>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-16 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.2)] md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-display text-3xl mb-4 text-amber-600">Free Quotes</div>
              <p className="max-w-sm leading-relaxed text-slate-600">
                "A wise man once said say nothing at all...<br /> (just write it down)"{" "}<br />
                <span className="relative -top-[2px] inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 align-middle text-[1.35rem] leading-none text-amber-600">
                  🎯
                </span>{" "}
                Poet Audrey Drake Graham <br />
                (Ok parenthetical thoughts are mine)"
                #FreeQuotes | Former Balt Sun and Fort Myers News-Press
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Connect</h4>
              <a
                href="https://www.linkedin.com/in/rt-free/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-3 block text-slate-500 transition-colors hover:text-amber-600"
              >
                LinkedIn
              </a>
              <a href={emailPath} className="mb-3 block text-slate-500 transition-colors hover:text-amber-600">
                Email
              </a>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Explore</h4>
              {['All Essays','About Me'].map((link) => (
                <a key={link} href="#" className="mb-3 block text-slate-500 transition-colors hover:text-amber-600">
                  {link}
                </a>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-8 text-sm text-slate-400 md:col-span-4 md:flex md:flex-row md:justify-between">
              <span>© 2026 RT Scott-Freeman. All rights reserved.</span>
              <span>Built with intention.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
