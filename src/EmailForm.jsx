import React, { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb, getFirebaseConfigError } from "./firebase";

const maxMessageLength = 1000;
const maxNameLength = 120;
const maxEmailLength = 200;
const emailPattern = /.+@.+\..+/;

export default function EmailForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const remainingCharacters = useMemo(
    () => maxMessageLength - form.message.length,
    [form.message.length]
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]:
        name === "message"
          ? value.slice(0, maxMessageLength)
          : name === "name"
            ? value.slice(0, maxNameLength)
            : name === "email"
              ? value.slice(0, maxEmailLength)
              : value,
    }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setIsSubmitted(false);
    setSubmitError("");
  }

  function validate() {
    const nextErrors = {};

    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName) {
      nextErrors.name = "Enter your name.";
    } else if (trimmedName.length > maxNameLength) {
      nextErrors.name = `Keep your name under ${maxNameLength} characters.`;
    }

    if (!trimmedEmail) {
      nextErrors.email = "Enter a valid email address.";
    } else if (trimmedEmail.length > maxEmailLength) {
      nextErrors.email = `Keep your email under ${maxEmailLength} characters.`;
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!trimmedMessage) {
      nextErrors.message = "Add a message before sending.";
    } else if (trimmedMessage.length > maxMessageLength) {
      nextErrors.message = `Keep your message under ${maxMessageLength} characters.`;
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const configError = getFirebaseConfigError();

      if (configError) {
        throw new Error(configError);
      }

      await addDoc(collection(getDb(), "contactMessages"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });

      setIsSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setIsSubmitted(false);
      if (error instanceof Error && error.message.startsWith("Missing Firebase config:")) {
        setSubmitError("Add your Firebase environment variables before sending messages from this form.");
      } else {
        setSubmitError("We couldn't send your message right now. Please try again in a moment.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="min-h-screen overflow-hidden bg-[#f4efe7] text-slate-900"
      style={{ fontFamily: "'Source Sans 3', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');
        .font-display { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12 lg:px-10">
        <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.95fr]">
          <section className="rounded-[2rem] border border-white/70 bg-[#17313b] px-8 py-10 text-white shadow-[0_30px_90px_-30px_rgba(15,23,42,0.55)] lg:px-12">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              Contact
            </div>
            <h1 className="font-display mt-6 max-w-xl text-5xl leading-none text-[#f8efe1] sm:text-6xl">
              Send a note directly from the site.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200/90">
              Share your name, your email, and what is on your mind. 
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-amber-200/20 bg-white/5 p-6 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Message rules
              </div>
              <p className="mt-3 text-base leading-7 text-slate-100/90">
                Please keep it concise, clear, and under 1000 characters max... TALK SOON!
              </p>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_24px_70px_-32px_rgba(15,23,42,0.35)] backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Email RT</div>
            <h2 className="font-display mt-2 text-4xl text-slate-900">Start the conversation</h2>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                />
                {errors.name ? <span className="mt-2 block text-sm text-red-600">{errors.name}</span> : null}
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
                <div className="mb-2 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-slate-700">Message</span>
                  <span
                    className={`text-sm font-semibold ${
                      remainingCharacters <= 100 ? "text-amber-600" : "text-slate-400"
                    }`}
                  >
                    {remainingCharacters}
                  </span>
                </div>
                <textarea
                  name="message"
                  rows="8"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-base leading-7 text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                />
                {errors.message ? <span className="mt-2 block text-sm text-red-600">{errors.message}</span> : null}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full items-center justify-center rounded-2xl px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  isSubmitting
                    ? "cursor-wait bg-amber-400 text-slate-950"
                    : "bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>

            {submitError ? (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-red-700">
                {submitError}
              </div>
            ) : null}

            {isSubmitted ? (
              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm leading-6 text-emerald-900">
                Your message was sent successfully.
              </div>
            ) : null}
          </section>
        </div>
      </main>
    </div>
  );
}
