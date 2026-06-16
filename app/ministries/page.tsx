const ministries = [
  { en: "Expository Preaching", am: "ስብከተ ወንጌል" },
  { en: "Youth Ministry", am: "የወጣቶች አገልግሎት" },
  { en: "Church Planting", am: "አጥቢያ ጉባኤዎች" },
  { en: "Bible Studies", am: "የቃሉ ጥናት" },
  { en: "Prayer Ministry", am: "የጸሎት አገልግሎት" },
  { en: "Outreach & Evangelism", am: "ወንጌልን ማስፋፋት" },
  { en: "Choir & Worship", am: "የዘማሪዎች አገልግሎት" },
];

export const metadata = {
  title: "Ministries | Gospel Truth Church Ethiopia",
};

export default function MinistriesPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Ministries</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Serving the Body of Christ
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Our church serves across multiple regions of Ethiopia through
          focused, gospel-centered ministries.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ministries.map((m, i) => (
            <div
              key={i}
              className="rounded-lg border border-black/5 bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-navy">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9A84C"
                  strokeWidth="1.6"
                  width="22"
                  height="22"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="font-serif text-sm font-semibold">{m.en}</div>
              <div className="font-ethiopic text-xs text-neutral-500 dark:text-neutral-400">
                {m.am}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
