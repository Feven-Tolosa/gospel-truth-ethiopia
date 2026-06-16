import { PrayerForm } from "@/components/prayer-form";

export const metadata = {
  title: "Prayer Requests | Gospel Truth Church Ethiopia",
};

export default function PrayerPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Prayer Requests</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          We Pray Together
        </h1>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
              Submit your prayer requests and our elders and congregation
              will lift them before God. You are not alone — we stand with
              you in prayer.
            </p>
            <p className="font-ethiopic text-base leading-loose text-neutral-500 dark:text-neutral-400">
              የጸሎት ጥያቄዎ ያቅርቡ — ሽማግሌዎቹ እና ጉባኤው ከፊት ያቀርቡሉሃቸዋል።
            </p>
          </div>
          <PrayerForm />
        </div>
      </section>
    </main>
  );
}
