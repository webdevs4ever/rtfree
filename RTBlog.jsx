import React, { useState } from 'react';

const resumePdf = `${import.meta.env.BASE_URL}assets/RTF_CV_close.pdf`;
const coverImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80";
const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80";

// Essay data - replace PDF paths with actual articles when ready
const essays = [
  {
    id: 1,
    title: "Why 'Sales-y' Is the Worst Thing You Can Be",
    category: "Sales",
    date: "March 18, 2026",
    excerpt: "If a client accuses me of being sales-y, I've failed that client. Here's how to make every conversation feel like catching up with a friend.",
    pdf: resumePdf
  },
  {
    id: 2,
    title: "From Madison Avenue to Medicare: My Pivot Story",
    category: "Career",
    date: "March 12, 2026",
    excerpt: "After 10+ years managing accounts for NYC publishers, I traded ad tech for insurance. Here's why it was the best decision I ever made.",
    pdf: resumePdf
  },
  {
    id: 3,
    title: "The Cold Call Framework That Got Me to Top 10",
    category: "Insurance",
    date: "March 5, 2026",
    excerpt: "I went from middle-of-the-pack to a top 10 closer company-wide. The secret wasn't working harder—it was rethinking the first 30 seconds.",
    pdf: resumePdf
  }
];

const featuredSeries = {
  title: "Mastering Needs-Based Selling",
  excerpt: "A 5-part series on conducting financial assessments that actually help people. From term life to final expense, learn to match products to real needs.",
  pdf: resumePdf
};

const affiliations = [
  {
    title: "Gerber Life",
    subtitle: "Insurance Sales",
    mark: "G"
  },
  {
    title: "Morgan State University",
    subtitle: "B.A. Communication Studies",
    mark: "M"
  }
];

export default function RTBlog() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">RT Freeman</div>
              <div className="font-display text-2xl tracking-tight text-amber-600">Sales journal</div>
            </div>
          <nav className="hidden md:flex gap-8">
            {['Essays', 'Insurance', 'Sales', 'About'].map((item) => (
              <a 
                key={item}
                href="#" 
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
                    alt="RT Freeman profile"
                    className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
                  />
                </div>
              </div>

              <div className="pt-20 md:pt-24">
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
                  <div>
                    <div className="animate-fade-up delay-100 opacity-0 mb-4 inline-flex items-center rounded-full bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                      Welcome to my corner
                    </div>

                    <div className="animate-fade-up delay-200 opacity-0 flex flex-wrap items-end gap-x-3 gap-y-2">
                      <h1 className="font-display text-4xl tracking-tight text-amber-600 md:text-5xl">
                        RT Scott-Freeman
                      </h1>
                      <span className="pb-1 text-2xl font-light text-slate-500">He/Him</span>
                    </div>

                    <p className="animate-fade-up delay-300 opacity-0 mt-4 max-w-2xl text-2xl text-slate-700">
                      Ad sales and account executive turned insurance specialist, writing about trust, process, and the craft of selling well.
                    </p>

                    <div className="animate-fade-up delay-400 opacity-0 mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-slate-500">
                      <span>New York City Metropolitan Area</span>
                      <span className="hidden text-slate-300 sm:inline">•</span>
                      <a href="#contact" className="font-semibold text-amber-600 hover:text-amber-700">Contact info</a>
                    </div>

                    <div className="animate-fade-up delay-500 opacity-0 mt-8 flex flex-wrap gap-3">
                      <a
                        href={essays[0].pdf}
                        target="_blank"
                        rel="noopener noreferrer"
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

                  <div className="grid gap-4">
                    {affiliations.map((item) => (
                      <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white">
                          {item.mark}
                        </div>
                        <div>
                          <div className="text-xl font-semibold text-slate-900">{item.title}</div>
                          <div className="text-sm uppercase tracking-[0.14em] text-slate-500">{item.subtitle}</div>
                        </div>
                      </div>
                    ))}
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
                  <h2 className="mt-2 font-display text-3xl text-amber-600">Recent essays</h2>
                </div>
                <a href="#" className="text-sm font-semibold text-slate-500 transition hover:text-amber-600">
                  View all
                </a>
              </div>

              <div className="grid gap-px bg-slate-200 md:grid-cols-3">
                {essays.map((essay, index) => (
                  <a
                    key={essay.id}
                    href={essay.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
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
                      href={featuredSeries.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
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
                  If you want to talk sales, insurance, or the transition from account management to closing, this is the place.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <a href="#" className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">LinkedIn</a>
                  <a href="#" className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">Email</a>
                  <a href="#" className="block rounded-2xl bg-slate-50 px-4 py-3 transition hover:bg-amber-50 hover:text-amber-600">Speaking requests</a>
                </div>
              </section>
            </aside>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-16 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.2)] md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="font-display text-3xl mb-4 text-amber-600">RT</div>
              <p className="max-w-sm leading-relaxed text-slate-600">
                Sales professional and insurance specialist with 15+ years of experience. 
                I write about the craft of selling without being "sales-y."
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Connect</h4>
              {['LinkedIn', 'Twitter', 'Email'].map((link) => (
                <a key={link} href="#" className="mb-3 block text-slate-500 transition-colors hover:text-amber-600">
                  {link}
                </a>
              ))}
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">Explore</h4>
              {['All Essays', 'Insurance Tips', 'Sales Strategy', 'About Me'].map((link) => (
                <a key={link} href="#" className="mb-3 block text-slate-500 transition-colors hover:text-amber-600">
                  {link}
                </a>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-8 text-sm text-slate-400 md:col-span-4 md:flex md:flex-row md:justify-between">
              <span>© 2026 Rasheim T. Freeman. All rights reserved.</span>
              <span>Built with intention.</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
