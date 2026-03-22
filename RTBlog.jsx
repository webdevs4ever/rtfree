import React, { useState } from 'react';

// Essay data - replace PDF paths with actual articles when ready
const essays = [
  {
    id: 1,
    title: "Why 'Sales-y' Is the Worst Thing You Can Be",
    category: "Sales",
    date: "March 18, 2026",
    excerpt: "If a client accuses me of being sales-y, I've failed that client. Here's how to make every conversation feel like catching up with a friend.",
    pdf: "/assets/RTF_CV_close.pdf"
  },
  {
    id: 2,
    title: "From Madison Avenue to Medicare: My Pivot Story",
    category: "Career",
    date: "March 12, 2026",
    excerpt: "After 10+ years managing accounts for NYC publishers, I traded ad tech for insurance. Here's why it was the best decision I ever made.",
    pdf: "/assets/RTF_CV_close.pdf"
  },
  {
    id: 3,
    title: "The Cold Call Framework That Got Me to Top 10",
    category: "Insurance",
    date: "March 5, 2026",
    excerpt: "I went from middle-of-the-pack to a top 10 closer company-wide. The secret wasn't working harder—it was rethinking the first 30 seconds.",
    pdf: "/assets/RTF_CV_close.pdf"
  }
];

const featuredSeries = {
  title: "Mastering Needs-Based Selling",
  excerpt: "A 5-part series on conducting financial assessments that actually help people. From term life to final expense, learn to match products to real needs.",
  pdf: "/assets/RTF_CV_close.pdf"
};

export default function RTBlog() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
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
        <header className="sticky top-0 z-50 bg-stone-100 border-b border-stone-900 px-6 lg:px-16 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold tracking-tight">RT Freeman</div>
          <nav className="hidden md:flex gap-8">
            {['Essays', 'Insurance', 'Sales', 'About'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm uppercase tracking-widest text-stone-700 hover:text-amber-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </header>

        {/* Hero */}
        <section className="grid lg:grid-cols-2 min-h-[85vh] border-b border-stone-900">
          {/* Hero Image */}
          <div className="relative overflow-hidden bg-stone-200 h-[50vh] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
              alt="RT Freeman"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-500/10 pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20">
            <span className="animate-fade-up delay-100 opacity-0 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-600 mb-6">
              <span className="w-10 h-px bg-amber-500" />
              Welcome to my corner
            </span>
            
            <h1 className="animate-fade-up delay-200 opacity-0 font-display text-5xl lg:text-7xl font-normal leading-tight tracking-tight mb-6">
              Rasheim T.<br />Freeman
            </h1>
            
            <p className="animate-fade-up delay-300 opacity-0 text-xl text-stone-500 font-light max-w-md mb-6">
              Insurance specialist obsessed with the sales process—from cold call to close. 
              Writing about what I've learned in 15+ years of sales.
            </p>
            
            <div className="animate-fade-up delay-400 opacity-0 flex flex-wrap gap-6 text-sm text-stone-500 mb-8">
              <span className="flex items-center gap-2">📍 Maryland</span>
              <span className="flex items-center gap-2">🎓 Morgan State</span>
              <span className="flex items-center gap-2">🏢 Gerber Life</span>
            </div>

            <a 
              href={essays[0].pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up delay-500 opacity-0 inline-flex items-center gap-3 bg-stone-900 text-stone-100 px-8 py-4 text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-stone-900 hover:translate-x-1 transition-all w-fit group"
            >
              Read Latest Post
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Section Header */}
        <div className="flex justify-between items-baseline px-6 lg:px-16 py-8 border-b border-stone-200">
          <h2 className="font-display text-2xl">Recent Essays</h2>
          <a href="#" className="text-xs uppercase tracking-widest text-stone-400 hover:text-amber-600 transition-colors">
            View all →
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 border-b border-stone-900">
          {essays.map((essay, index) => (
            <a
              key={essay.id}
              href={essay.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-8 border-r border-stone-200 last:border-r-0 transition-colors cursor-pointer overflow-hidden
                ${hoveredCard === index ? 'bg-stone-200' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Accent bar */}
              <span 
                className={`absolute top-0 left-0 w-1 bg-amber-500 transition-all duration-300
                  ${hoveredCard === index ? 'h-full' : 'h-0'}`}
              />
              
              <span className="text-xs uppercase tracking-[0.15em] text-amber-600 block mb-4">
                {essay.category}
              </span>
              
              <h3 className="font-display text-xl leading-snug mb-4">
                {essay.title}
              </h3>
              
              <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                {essay.excerpt}
              </p>
              
              <span className="text-xs uppercase tracking-widest text-stone-400">
                {essay.date}
              </span>
            </a>
          ))}
        </div>

        {/* Featured Section */}
        <section className="grid lg:grid-cols-5 border-b border-stone-900">
          <div className="lg:col-span-3 h-[400px] lg:h-[450px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
              alt="Featured"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-12 border-l border-stone-200">
            <span className="font-display text-8xl text-stone-200 leading-none mb-4">01</span>
            <span className="text-xs uppercase tracking-[0.15em] text-amber-600 mb-4">Featured Series</span>
            <h3 className="font-display text-2xl mb-4">{featuredSeries.title}</h3>
            <p className="text-stone-500 font-light mb-6">{featuredSeries.excerpt}</p>
            <a 
              href={featuredSeries.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-stone-900 text-stone-100 px-6 py-3 text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-stone-900 transition-all w-fit group"
            >
              Start Reading
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 lg:px-16 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="font-display text-3xl mb-4">RT</div>
              <p className="text-stone-500 font-light max-w-sm leading-relaxed">
                Sales professional and insurance specialist with 15+ years of experience. 
                I write about the craft of selling without being "sales-y."
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] mb-6">Connect</h4>
              {['LinkedIn', 'Twitter', 'Email'].map((link) => (
                <a key={link} href="#" className="block text-stone-500 hover:text-amber-600 transition-colors mb-3">
                  {link}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] mb-6">Explore</h4>
              {['All Essays', 'Insurance Tips', 'Sales Strategy', 'About Me'].map((link) => (
                <a key={link} href="#" className="block text-stone-500 hover:text-amber-600 transition-colors mb-3">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between text-sm text-stone-400">
            <span>© 2026 Rasheim T. Freeman. All rights reserved.</span>
            <span>Built with intention.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
