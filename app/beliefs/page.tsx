import { beliefs } from "@/lib/beliefs-data";
import { BeliefIcon } from "@/components/belief-icon";

export const metadata = {
  title: "What We Believe | Gospel Truth Church Ethiopia",
};

export default function BeliefsPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">What We Believe</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Our Doctrinal Foundation
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Standing on the unchanging truths of Scripture, we hold fast to the
          historic Christian faith.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/5 bg-white p-6 shadow-sm dark:bg-navy-mid dark:border-white/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-gold-pale text-gold dark:bg-gold/15">
                <BeliefIcon name={b.icon} />
              </div>
              <div className="mb-1 font-serif text-base font-semibold">
                {b.en}
              </div>
              <div className="mb-3 font-ethiopic text-sm text-gold">
                {b.am}
              </div>
              <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
