"use client";

import { useState } from "react";

export function PrayerForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your backend or a service like Formspree.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold-pale p-8 text-center dark:bg-navy-mid">
        <p className="font-serif text-lg font-semibold text-navy dark:text-gold-light">
          Thank you. Your prayer request has been received.
        </p>
        <p className="mt-1 font-ethiopic text-sm text-neutral-500 dark:text-neutral-400">
          አመስግናለሁ — የጸሎት ጥያቄዎ ደርሷል።
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Your Name
        </label>
        <input
          type="text"
          required
          placeholder="ስምዎ"
          className="rounded border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:bg-navy dark:border-white/15"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Phone / WhatsApp
        </label>
        <input
          type="tel"
          placeholder="+251..."
          className="rounded border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:bg-navy dark:border-white/15"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Prayer Request
        </label>
        <textarea
          required
          placeholder="Share your prayer request... / የጸሎት ጥያቄዎ ይጻፉ"
          className="min-h-[110px] resize-y rounded border border-black/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-gold dark:bg-navy dark:border-white/15"
        />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        Submit Prayer Request
      </button>
    </form>
  );
}
