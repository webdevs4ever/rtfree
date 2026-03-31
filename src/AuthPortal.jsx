import React, { useEffect, useMemo, useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
};

function normalizePhone(value) {
  return value.replace(/[^\d+()\-\s]/g, "");
}

export default function AuthPortal() {
  const [mode, setMode] = useState("register");
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const heading = useMemo(
    () => (mode === "register" ? "Create your access profile" : "Sign in to continue"),
    [mode]
  );

  useEffect(() => {
    document.title = "Login | RT Scott-Freeman";
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: name === "phone" ? normalizePhone(value) : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.fullName.trim() || form.fullName.trim().split(/\s+/).length < 2) {
      nextErrors.fullName = "Enter your full name.";
    }

    if (!form.email.includes("@")) {
      nextErrors.email = "Enter a valid email address with @.";
    }

    if (form.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (form.password.length < 8) {
      nextErrors.password = "Use at least 8 characters.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsProvisioning(true);
    setStatusMessage("Please wait while your credentials are being provisioned.");

    window.setTimeout(() => {
      setIsProvisioning(false);
    }, 1800);
  }

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#f4efe7] text-slate-900"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -12px, 0) scale(1.04); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes pulseRing {
          0% { transform: scale(0.96); opacity: 0.55; }
          70% { transform: scale(1.02); opacity: 0.16; }
          100% { transform: scale(1.03); opacity: 0; }
        }
        .animate-drift { animation: drift 14s ease-in-out infinite; }
        .animate-pulse-ring::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          border: 1px solid rgba(217, 119, 6, 0.26);
          animation: pulseRing 1.4s ease-out infinite;
        }
      `}</style>

      <div className="relative isolate min-h-screen">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-drift absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
          <div className="animate-drift absolute right-[-6rem] top-1/4 h-80 w-80 rounded-full bg-emerald-200/45 blur-3xl [animation-delay:2s]" />
          <div className="animate-drift absolute bottom-[-9rem] left-1/3 h-96 w-96 rounded-full bg-orange-100/80 blur-3xl [animation-delay:4s]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_45%)]" />
        </div>

        <main className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 lg:px-10">
          <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-white/70 bg-[#17313b] px-8 py-10 text-white shadow-[0_30px_90px_-30px_rgba(15,23,42,0.55)] lg:px-12">
              <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
                Secure Registration
              </div>
              <h1 className="font-display mt-6 max-w-xl text-5xl leading-none text-[#f8efe1] sm:text-6xl">
                Secure access with fast onboarding for every visitor.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200/90">
                Welcome to my premium content page! Just need the basics here: name, email, phone number and
                credit card info.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Identity", "Full name required"],
                  ["Email", "@ full email required"],
                  ["Contact", "Phone number required"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                      {title}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-200/85">{copy}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-[1.75rem] border border-amber-200/20 bg-white/5 p-6 backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  International notice
                </div>
                <p className="mt-3 text-base leading-7 text-slate-100/90">
                  For now, registration is restricted to US visitors only.
                </p>
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">
                    Access Portal
                  </div>
                  <h2 className="font-display mt-2 text-4xl text-slate-900">{heading}</h2>
                </div>
                <div className="flex items-center rounded-full bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                      mode === "login" ? "bg-slate-900 text-white" : "text-slate-500"
                    }`}
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("register")}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                      mode === "register" ? "bg-amber-500 text-slate-950" : "text-slate-500"
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Full name</span>
                  <input
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="First and last name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                  />
                  {errors.fullName ? <span className="mt-2 block text-sm text-red-600">{errors.fullName}</span> : null}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                  />
                  {errors.email ? <span className="mt-2 block text-sm text-red-600">{errors.email}</span> : null}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 555-5555"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                  />
                  {errors.phone ? <span className="mt-2 block text-sm text-red-600">{errors.phone}</span> : null}
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Password</span>
                  <input
                    name="password"
                    type="password"
                    autoComplete={mode === "register" ? "new-password" : "current-password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="At least 8 characters"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                  />
                  {errors.password ? <span className="mt-2 block text-sm text-red-600">{errors.password}</span> : null}
                </label>

                <button
                  type="submit"
                  disabled={isProvisioning}
                  className={`relative flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                    isProvisioning
                      ? "animate-pulse-ring bg-amber-400 text-slate-950"
                      : "bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950"
                  }`}
                >
                  {isProvisioning ? "Provisioning" : mode === "register" ? "Register now" : "Sign in"}
                </button>
              </form>

              {statusMessage ? (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-6 text-amber-900">
                  {statusMessage}
                </div>
              ) : null}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
