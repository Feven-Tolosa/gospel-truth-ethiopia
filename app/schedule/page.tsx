import { weeklySchedule } from "@/lib/schedule-data";

export const metadata = {
  title: "Service Schedule | Gospel Truth Church Ethiopia",
};

export default function SchedulePage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Service Schedule</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Join Us Throughout the Week
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          ለማንኛውም አምልኮ፣ ጸሎት፣ ወይም ጥናት ይቀላቀሉን — All are welcome at every
          gathering.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4">
            {weeklySchedule.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-4 rounded-lg border border-black/5 bg-white p-6 shadow-sm sm:grid-cols-[140px_1fr_auto] sm:items-center dark:bg-navy-mid dark:border-white/10"
              >
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gold">
                    {item.day}
                  </div>
                  <div className="font-ethiopic text-sm text-neutral-500 dark:text-neutral-400">
                    {item.dayAm}
                  </div>
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold">
                    {item.name}
                  </div>
                  <div className="font-ethiopic text-sm text-neutral-500 dark:text-neutral-400">
                    {item.nameAm}
                  </div>
                  {item.note && (
                    <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {item.note}
                      {item.noteAm && (
                        <span className="font-ethiopic"> · {item.noteAm}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-base font-semibold text-navy dark:text-gold-light sm:justify-end">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    width="18"
                    height="18"
                    className="opacity-50"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {item.time}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-gold/30 bg-gold-pale p-6 text-sm leading-relaxed text-neutral-700 dark:bg-navy-mid dark:border-gold/20 dark:text-neutral-300">
            <strong className="text-navy dark:text-gold-light">Note:</strong>{" "}
            Sunday evening Bible teaching is preceded by a choir worship
            beginning at 5:00 PM. Saturday&apos;s Youth Fellowship includes
            worship, preaching, and a solo song.
          </div>
        </div>
      </section>
    </main>
  );
}
