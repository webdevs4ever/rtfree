import React, { useState } from "react";

const revenueVisualHref = `${import.meta.env.BASE_URL}freestate-review/screenshot-2026-05-12.png`;

const projectionYears = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

const medicareAssumptions = {
  initialCommission: 781,
  renewalCommission: 391,
  annualNewEnrollments: 427,
};

const medicareProjection = projectionYears.map((year, index) => {
  const yearNumber = index + 1;
  const enrollees = medicareAssumptions.annualNewEnrollments;
  const revenue =
    enrollees *
    (medicareAssumptions.initialCommission +
      medicareAssumptions.renewalCommission * (yearNumber - 1));

  return {
    year,
    count: enrollees,
    revenue,
  };
});

const lifeAssumptions = {
  averageSalePerCrossSell: 1200,
  targetCrossSellsYearFive: 167,
};

const lifeProjection = projectionYears.map((year, index) => {
  const yearNumber = index + 1;
  const count = Math.round((lifeAssumptions.targetCrossSellsYearFive * yearNumber) / 5);
  const revenue = count * lifeAssumptions.averageSalePerCrossSell;

  return {
    year,
    count,
    revenue,
  };
});

const acaAssumptions = {
  annualRevenuePerActiveEnrollee: 240,
  annualNewEnrollments: 84,
};

const acaProjection = projectionYears.map((year, index) => {
  const yearNumber = index + 1;
  const count = acaAssumptions.annualNewEnrollments * yearNumber;
  const revenue = count * acaAssumptions.annualRevenuePerActiveEnrollee;

  return {
    year,
    count,
    revenue,
  };
});

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function ProjectionBarChart({ title, subtitle, color, data }) {
  const maxRevenue = Math.max(...data.map((item) => item.revenue));

  return (
    <section className="rounded-[1.75rem] border border-orange-200 bg-white p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)]">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
        Projection model
      </div>
      <h3 className="font-display mt-3 text-3xl text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>

      <div className="mt-6">
        <div className="flex h-64 items-end gap-3">
          {data.map((item) => {
            const height = Math.max(22, Math.round((item.revenue / maxRevenue) * 220));
            return (
              <div key={item.year} className="flex min-w-0 flex-1 flex-col items-center gap-3">
                <div className="text-center text-[11px] font-semibold text-slate-500">
                  {formatCurrency(item.revenue)}
                </div>
                <div
                  className="w-full rounded-t-[1.25rem] border border-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                  style={{
                    height: `${height}px`,
                    background: `linear-gradient(180deg, ${color} 0%, ${color}dd 100%)`,
                  }}
                />
                <div className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-700">
                  {item.year}
                </div>
                <div className="text-center text-xs text-slate-500">{item.count.toLocaleString()}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const reviewSections = [
  {
    title: "Executive Summary",
    original: `Free State Life and Health services is a sole proprietorship insurance advisory business specializing in Medicare Advantage (Part C), senior health insurance, and life insurance solutions for families and individuals across the Washington, D.C., Maryland, and Virginia (DMV) region. The business focuses on helping seniors—including many veterans—navigate Medicare plan options while also providing life insurance protection for both adults and children.

The company serves two complementary markets: Medicare-eligible seniors seeking guidance on health coverage, and families seeking life insurance solutions such as term life, whole life, and final expense policies. Many clients require education and personalized consultation to understand their options, and the company addresses this need through clear explanations, compliant enrollment support, and long-term client service.

With a 9/11 veteran serving in an advisory role, Free State will maintain strong connections to veteran communities. Outreach through homeless shelters, churches, and back-to-work programs will provide education about health and life insurance options while also serving as a meaningful community resource.

Since launching operations, the business has demonstrated consistent year-over-year growth driven primarily through relationship-based sales and referrals. Revenue has grown from approximately $5,000 in 2023 to $17,000 in 2024 to $57,000 in 2025, with projected production of $103,000 in 2027 as the client base expands and renewal commissions accumulate.`,
    revised: `FreeState Life and Health Services is a Baltimore-based sole proprietorship focused on Medicare Advantage, senior health coverage, and life insurance solutions for individuals and families across the broader DMV and Delaware market. The business helps Medicare-eligible seniors, including veterans, compare plan options while also serving households seeking term life, whole life, and final expense protection.

The model combines education-first consultations, compliant enrollment support, and long-term relationship management. It is designed for clients who need practical guidance rather than product-heavy sales language, especially older adults, working families, and community-based referral networks.

Business-provided revenue figures show growth from about $5,000 in 2023 to $17,000 in 2024 and $57,000 in 2025, with projected production of about $103,000 by 2027. Proposed revisions keep those business-specific numbers intact while tightening wording, removing unsupported generalizations, and making the summary easier to review and defend.`,
  },
  {
    title: "Market Analysis",
    original: `The primary market for Free State consists of Medicare-eligible seniors, veterans, individuals seeking life insurance coverage in the DMV region (Washington, D.C., Maryland, and Virginia).

The United States has approximately 65 million Medicare beneficiaries, with enrollment expected to continue rising as the population ages. The DMV region represents a particularly strong market due to its large population of federal retirees, military veterans, and aging residents approaching Medicare eligibility.

Medicare Advantage enrollment continues to grow nationwide as seniors seek plans that provide additional benefits such as prescription drug coverage, dental, vision, and lower out-of-pocket costs. At the same time, demand for final expense and term life insurance remains strong among older adults seeking financial protection for families and end-of-life expenses.`,
    revised: `The primary market includes Medicare-eligible seniors, veterans, and households seeking life insurance across DC, Maryland, Virginia, and Delaware. Baltimore is already included within the Maryland market and should not be counted separately.

Current public data suggests that Medicare now covers about 69 million people nationally, and the broader regional household opportunity is better described as more than 6.3 million households across DC, Maryland, Virginia, and Delaware rather than “over 10 million eligible households.” Public Census data also supports a defensible regional veteran audience of more than 1 million veterans across those same jurisdictions.

This revision keeps the market thesis intact while aligning population language more closely with public data and avoiding overstatement.`,
  },
  {
    title: "Financial Projections",
    original: `Free State operates on a commission-based revenue model derived from Medicare Advantage enrollments, health insurance placements, and life insurance policy sales. The business generates both initial commissions from new enrollments and recurring renewal commissions from policies that remain active in subsequent years. This structure allows the company to build a compounding revenue base as the client portfolio grows.

The business has demonstrated consistent growth since inception, increasing annual revenue from approximately $5,000 in 2023 to $17,000 in 2024, and to $57,000 in 2025. With additional marketing resources and increased lead generation, Free State projects revenue of approximately $103,000 by 2027, driven by a combination of new policy enrollments and renewal income from previously enrolled clients.`,
    revised: `FreeState operates on a commission-based revenue model tied to Medicare Advantage enrollments, health insurance placements, life insurance sales, and recurring policy renewals. The revised version keeps the business-provided production figures unchanged while clarifying the model in simpler language.

Revenue is described as growing from about $5,000 in 2023 to $17,000 in 2024 and $57,000 in 2025, with about $103,000 projected by 2027. The explanation of growth focuses on three practical drivers: new client acquisition, renewal commissions, and cross-selling into existing relationships.`,
  },
  {
    title: "Use of Funds",
    original: `Free State is seeking a $25,000 loan to support growth initiatives that will accelerate client acquisition and expand the company’s insurance portfolio.

Lead Generation and Marketing → $15,000
Technology and CRM Systems → $4,000
Licensing, Certifications, and Professional Development → $3,000
Working Capital → $3,000`,
    revised: `FreeState is seeking a $50,000 loan to support growth initiatives that accelerate client acquisition and expand the company’s insurance portfolio.

For review purposes, this mock page updates the headline loan request to $50,000 while leaving the category structure visible. If approved, the underlying category allocations should also be reworked so the line items add up cleanly to the new total before the final plan is published.`,
  },
  {
    title: "Owner Bio",
    original: `Nearly 27 million Americans lack health insurance, and roughly 100 million adults have little or no life insurance coverage—gaps that Freeman believes can be addressed through a modern version of the traditional kitchen-table conversation: clear education, trusted guidance, and solutions tailored to everyday households.`,
    revised: `Recent public data supports a cleaner version of this positioning: about 27.2 million Americans were uninsured in 2024, and LIMRA has reported that close to 100 million adults believe they need more life insurance coverage. The revised copy keeps the mission-driven message while using more defensible phrasing and avoiding claims that overstate certainty.`,
  },
];

function ReviewCard({ title, body, tone }) {
  return (
    <section
      className={`rounded-[1.75rem] border p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.25)] ${
        tone === "original"
          ? "border-slate-200 bg-white"
          : "border-orange-200 bg-orange-50/60"
      }`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "original" ? "text-slate-500" : "text-orange-600"
        }`}
      >
        {tone === "original" ? "Original plan text" : "Proposed revision"}
      </div>
      <h3
        className={`font-display mt-3 text-3xl ${
          tone === "original" ? "text-slate-900" : "text-orange-900"
        }`}
      >
        {title}
      </h3>
      <div className="mt-4 whitespace-pre-line text-base leading-8 text-slate-700">{body}</div>
    </section>
  );
}

export default function FreeStateReview() {
  const [showAcaDetails, setShowAcaDetails] = useState(false);

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
              href={`${import.meta.env.BASE_URL}freestate/`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-orange-400 hover:text-orange-700"
            >
              Back to freeState
            </a>
            <div className="rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              Mock review page
            </div>
          </div>

          <section className="rounded-[2.2rem] border border-orange-200/70 bg-gradient-to-br from-[#fffaf3] via-[#fff5ea] to-[#fde9d5] p-8 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.35)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Side-by-side review
            </div>
            <h1 className="font-display mt-3 text-5xl leading-none text-slate-900">
              freeState business plan review mock
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              This page is for review only. The left side shows the original plan language you
              provided, and the right side shows proposed revisions so you can approve, reject, or
              refine changes before anything is applied to the live page copy.
            </p>
          </section>

          <section className="mt-8 rounded-[2.2rem] border border-orange-200/70 bg-white/90 p-8 shadow-[0_28px_80px_-36px_rgba(15,23,42,0.28)]">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
              Review-only projection model
            </div>
            <h2 className="font-display mt-3 text-4xl text-slate-900">Year-over-year production targets</h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              This section now uses your screenshot mock as the primary review visual. The ACA
              assumptions and supporting copy can be expanded below if you want more room while
              reviewing the first two graphics.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.9rem] border border-orange-200 bg-white shadow-[0_18px_50px_-28px_rgba(15,23,42,0.22)]">
              <img
                src={revenueVisualHref}
                alt="Revenue target mock showing Medicare, life cross-sell, and ACA bar-chart projections"
                className="block h-auto w-full"
              />
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-orange-200 bg-orange-50/55 p-5">
              <button
                type="button"
                onClick={() => setShowAcaDetails((current) => !current)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                    ACA review details
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    Show or hide the ACA third graph assumptions and supporting copy
                  </div>
                </div>
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange-200 bg-white text-xl text-orange-700 transition-transform"
                  style={{ transform: showAcaDetails ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  ↓
                </span>
              </button>

              {showAcaDetails ? (
                <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.4rem] border border-orange-200 bg-white px-5 py-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                      ACA target assumptions
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                      <div>
                        <span className="font-semibold text-slate-900">Target:</span> roughly{" "}
                        {formatCurrency(acaProjection[4].revenue)} in annual revenue by Year 5
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Model:</span> 84 new ACA
                        enrollees per year
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Revenue assumption:</span>{" "}
                        $240 annual revenue per active enrollee
                      </div>
                      <div>
                        <span className="font-semibold text-slate-900">Year 5 active book:</span>{" "}
                        {acaProjection[4].count.toLocaleString()} cumulative enrollees
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.4rem] border border-orange-200 bg-white px-5 py-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
                      Year-by-year ACA projection
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                      {acaProjection.map((item) => (
                        <div key={item.year} className="flex items-center justify-between gap-4">
                          <span className="font-semibold text-slate-900">{item.year}</span>
                          <span>{item.count.toLocaleString()} enrollees</span>
                          <span>{formatCurrency(item.revenue)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </section>

          <div className="mt-8 space-y-8">
            {reviewSections.map((section) => (
              <div key={section.title} className="grid gap-6 xl:grid-cols-2">
                <ReviewCard title={section.title} body={section.original} tone="original" />
                <ReviewCard title={section.title} body={section.revised} tone="revised" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
