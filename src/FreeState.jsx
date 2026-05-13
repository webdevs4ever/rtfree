import React, { useState } from "react";

const planHref = `${import.meta.env.BASE_URL}freestate/freestate-business-plan.pdf`;
const addendumHref = `${import.meta.env.BASE_URL}freestate/addendum-a-charmed-life-use-cases.docx`;
const revenueVisualHref = `${import.meta.env.BASE_URL}freestate-review/screenshot-2026-05-12.png`;

const revenueSeries = [
  { year: "Year 1", value: 180000, color: "#e76f51" },
  { year: "Year 2", value: 265000, color: "#f4a261" },
  { year: "Year 3", value: 390000, color: "#e9c46a" },
  { year: "Year 4", value: 540000, color: "#8ab17d" },
  { year: "Year 5", value: 720000, color: "#457b9d" },
];

const useCases = [
  {
    id: "harry",
    title: "Harry, veteran seeking supplemental support",
    image: `${import.meta.env.BASE_URL}freestate/image1.png`,
    alt: "Veteran portrait from Addendum A",
    description:
      "Harry, 68, is a disabled Iraqi War veteran living on a fixed income. Long wait times at the VA and lack of dental care pushed him to look for a Medicare Advantage plan. The use case highlights the need for trust, clarity, and advocacy when helping our veterans who have served this nation honorably.",
  },
  {
    id: "Shanté",
    title: "Shanté, young worker aging out of family coverage",
    image: `${import.meta.env.BASE_URL}freestate/image2.png`,
    alt: "Young waitress portrait from Addendum A",
    description:
      "Shanté, 27, is a freelance graphic designer with unpredictable hours and income who recently aged out of her parents' coverage. She wants affordable co-pays and low maximum out-of-pocket costs plus simple enrollment and flexibility. This use case emphasizes lightweight guidance, speed, and products that meet people where they are financially.",
  },
  {
    id: "Carlos",
    title: "Carlos, maintenance worker planning for family security",
    image: `${import.meta.env.BASE_URL}freestate/image3.png`,
    alt: "Maintenance worker portrait from Addendum A",
    description:
      "Carlos, 55, is a long-time maintenance technician who began thinking seriously about life insurance after losing a coworker unexpectedly. He wants direct, understandable guidance and dependable coverage for his family. The use case centers on straightforward education, trust-building, and matching insurance protection(s) to real-world problems.",
  },
];

const revenueGraphPanels = [
  {
    id: "medicare",
    title: "Medicare enrollees to $1M",
    subtitle: "Year-by-year production model",
    x: "0%",
  },
  {
    id: "life",
    title: "Life cross-sells to $200K",
    subtitle: "Cross-sell ramp to Year 5",
    x: "50%",
  },
  {
    id: "aca",
    title: "ACA enrollees to $100K",
    subtitle: "Show/hide third graph",
    x: "100%",
  },
];

function RevenueGraphPanel({ title, subtitle, x }) {
  return (
    <article className="rounded-[1.75rem] border border-orange-200 bg-white p-4 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)]">
      <div className="mb-3">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
          {subtitle}
        </div>
        <h3 className="font-display mt-2 text-3xl text-slate-900">{title}</h3>
      </div>
      <div className="overflow-hidden rounded-[1.35rem] border border-orange-100 bg-[#f7f0e7]">
        <div
          className="h-[27rem] w-full bg-no-repeat md:h-[29rem]"
          style={{
            backgroundImage: `url("${revenueVisualHref}")`,
            backgroundSize: "308% 208%",
            backgroundPosition: `${x} 100%`,
          }}
        />
      </div>
    </article>
  );
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function shadeColor(hex, percent) {
  const value = hex.replace("#", "");
  const num = parseInt(value, 16);
  const amount = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
}

function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
}

function buildPieSlices(data, activeYear = null) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulative = -Math.PI / 2;

  return data.map((item) => {
    const isActive = item.year === activeYear;
    const angle = (item.value / total) * Math.PI * 2;
    const start = cumulative;
    const end = cumulative + angle;
    const mid = start + angle / 2;
    const largeArc = angle > Math.PI ? 1 : 0;
    const cx = 145;
    const cy = 160;
    const radius = isActive ? 108 : 98;
    const explode = isActive ? 28 : 18;
    const depth = 28;
    const shiftX = Math.cos(mid) * explode;
    const shiftY = Math.sin(mid) * explode;
    const centerX = cx + shiftX;
    const centerY = cy + shiftY;
    const topStart = polarToCartesian(centerX, centerY, radius, start);
    const topEnd = polarToCartesian(centerX, centerY, radius, end);
    const bottomStart = { x: topStart.x, y: topStart.y + depth };
    const bottomEnd = { x: topEnd.x, y: topEnd.y + depth };
    const labelX = cx + Math.cos(mid) * (radius + (isActive ? 72 : 64));
    const labelY = cy + Math.sin(mid) * (radius + (isActive ? 78 : 70));
    const topPath = [
      `M ${centerX} ${centerY}`,
      `L ${topStart.x} ${topStart.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${topEnd.x} ${topEnd.y}`,
      "Z",
    ].join(" ");
    const outerSidePath = [
      `M ${topStart.x} ${topStart.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${topEnd.x} ${topEnd.y}`,
      `L ${bottomEnd.x} ${bottomEnd.y}`,
      `A ${radius} ${radius} 0 ${largeArc} 0 ${bottomStart.x} ${bottomStart.y}`,
      "Z",
    ].join(" ");
    const startSidePath = [
      `M ${centerX} ${centerY}`,
      `L ${topStart.x} ${topStart.y}`,
      `L ${bottomStart.x} ${bottomStart.y}`,
      `L ${centerX} ${centerY + depth}`,
      "Z",
    ].join(" ");
    const endSidePath = [
      `M ${centerX} ${centerY}`,
      `L ${topEnd.x} ${topEnd.y}`,
      `L ${bottomEnd.x} ${bottomEnd.y}`,
      `L ${centerX} ${centerY + depth}`,
      "Z",
    ].join(" ");
    const showOuterSide = Math.sin(mid) > -0.18;
    const showStartSide = Math.sin(start) > 0;
    const showEndSide = Math.sin(end) > 0;

    cumulative = end;

    return {
      ...item,
      isActive,
      depth,
      topPath,
      outerSidePath,
      startSidePath,
      endSidePath,
      sideColor: "#050505",
      rimColor: "#111111",
      showOuterSide,
      showStartSide,
      showEndSide,
      labelX,
      labelY,
      textAnchor: labelX >= cx ? "start" : "end",
    };
  });
}

function RevenuePieChart() {
  const [showAcaGraph, setShowAcaGraph] = useState(false);

  return (
    <section className="rounded-[2rem] border border-orange-200/70 bg-white/88 p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.28)] backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
        Revenue Visual
      </div>
      <h2 className="font-display mt-2 text-3xl text-slate-900">Revenue growth model</h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
        Revenue growth review visuals for Medicare, life cross-sell, and ACA projections.
      </p>

      <div className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
        Projection review strip
      </div>

      <div className="mt-5 grid gap-6 xl:grid-cols-2">
        <RevenueGraphPanel
          title={revenueGraphPanels[0].title}
          subtitle={revenueGraphPanels[0].subtitle}
          x={revenueGraphPanels[0].x}
        />
        <RevenueGraphPanel
          title={revenueGraphPanels[1].title}
          subtitle={revenueGraphPanels[1].subtitle}
          x={revenueGraphPanels[1].x}
        />
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
            ACA graph
          </div>
          <button
            type="button"
            onClick={() => setShowAcaGraph((current) => !current)}
            aria-label={showAcaGraph ? "Hide ACA graph" : "Show ACA graph"}
            className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-orange-50/80 p-3 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.16)]"
          >
            <span
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-white text-2xl text-orange-700 transition-transform"
              style={{ transform: showAcaGraph ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              ↓
            </span>
          </button>
        </div>
      </div>

      {showAcaGraph ? (
        <div className="mt-6">
          <RevenueGraphPanel
            title={revenueGraphPanels[2].title}
            subtitle={revenueGraphPanels[2].subtitle}
            x={revenueGraphPanels[2].x}
          />
        </div>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {revenueSeries.map((item) => (
          <div key={item.year} className="rounded-2xl bg-orange-50/70 px-4 py-3">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                {item.year}
              </span>
            </div>
            <div className="mt-2 text-sm text-slate-500">{formatCurrency(item.value)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FreeState() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div
      className="min-h-screen text-slate-900"
      style={{ backgroundColor: "#f5efe6", fontFamily: "'Source Sans 3', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <main className="px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <a
              href={import.meta.env.BASE_URL}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-orange-400 hover:text-orange-700"
            >
              Back home
            </a>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              freeState 2027 forecast
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
            <section className="rounded-[2.2rem] border border-orange-200/70 bg-gradient-to-br from-[#fffaf3] via-[#fff5ea] to-[#fde9d5] p-7 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.35)]">
              <div className="inline-flex items-end">
                <div className="font-display text-5xl leading-none text-slate-900">
                  free<span className="text-orange-600">State</span>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-base leading-7 text-slate-600">
                A clean, downloadable hub for the FreeState business-plan materials highlighting how nimble, independent agencies can serve more than 
                1 million veterans and over 6.3 million households across DC, Maryland, Virginia, and Delaware.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={planHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[1.75rem] border border-orange-200 bg-white/85 px-5 py-5 transition hover:border-orange-400 hover:bg-white"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                    PDF download
                  </div>
                  <div className="mt-2 font-display text-3xl leading-tight text-slate-900">
                    freeState business plan <br />
                    (download full plan here)
                  </div>
                </a>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-orange-200/60 bg-white/70 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Plan snapshot
                </div>
                <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
                  <div>
                    <span className="font-semibold text-slate-900">Business:</span> FreeState
                    Life and Health Services
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Industry:</span> Life and
                    health insurance
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Location:</span> Baltimore,
                    Maryland with online and rented office operations
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Business type:</span> Sole
                    proprietorship
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Current revenue:</span>{" "}
                    $57,000
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Loan request:</span> $50,000
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-orange-200/60 bg-white/70 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Included assets
                </div>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <div>Bundled PDF business plan for direct browser download.</div>
                  <div>Three extracted use-case visuals embedded below in the second tab.</div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <RevenuePieChart />

              <section className="rounded-[2rem] border border-orange-200/70 bg-white/88 p-6 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.28)] backdrop-blur">
                <div className="flex flex-wrap gap-3 border-b border-orange-100 pb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("summary")}
                    className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                      activeTab === "summary"
                        ? "bg-slate-900 text-white"
                        : "bg-orange-50 text-slate-600 hover:bg-orange-100 hover:text-orange-700"
                    }`}
                  >
                    Tab 1: Plan summary
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("use-cases")}
                    className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                      activeTab === "use-cases"
                        ? "bg-slate-900 text-white"
                        : "bg-orange-50 text-slate-600 hover:bg-orange-100 hover:text-orange-700"
                    }`}
                  >
                    Tab 2: Use cases
                  </button>
                </div>

                {activeTab === "summary" ? (
                  <div className="pt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                      Why freeState life and health?
                    </div>
                    <div className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                      FreeState Life and Health Services is a Baltimore-based sole proprietorship
                      focused on Medicare Advantage, senior health coverage, and life insurance
                      solutions for individuals and families across the broader DMV and Delaware
                      market. The business serves Medicare-eligible seniors, including veterans
                      who need plan guidance, as well as households seeking term, whole life, and
                      final expense coverage. The model is built around education-first
                      consultations, compliant enrollment support, and long-term relationships
                      driven by referrals and repeat service. Based on business-provided figures,
                      revenue has grown from about $5,000 in 2023 to $17,000 in 2024 and $57,000
                      in 2025, with future growth tied to new enrollments, life-insurance
                      cross-sales, and recurring renewal income. External market references have
                      been normalized to current public data where possible: Medicare covers about
                      69 million people nationally, roughly 27.2 million Americans were uninsured
                      in 2024, and LIMRA reports that close to 100 million adults believe they
                      need more life insurance coverage. The requested $50,000 loan supports lead
                      generation, marketing, technology, licensing, and working capital to expand
                      reach while maintaining a lean operating model.
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-5 pt-6">
                    {useCases.map((useCase) => (
                      <article
                        key={useCase.id}
                        className="grid gap-5 rounded-[1.75rem] border border-orange-100 bg-orange-50/50 p-5 lg:grid-cols-[210px_minmax(0,1fr)]"
                      >
                        <div className="overflow-hidden rounded-[1.4rem] bg-white">
                          <img
                            src={useCase.image}
                            alt={useCase.alt}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                            Addendum A
                          </div>
                          <h3 className="font-display mt-2 text-3xl leading-tight text-slate-900">
                            {useCase.title}
                          </h3>
                          <p className="mt-4 text-base leading-7 text-slate-700">
                            {useCase.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
