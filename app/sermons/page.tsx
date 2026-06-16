const sermons = [
  { ref: "2 Corinthians 4:1–18", title: "Therefore We Do Not Lose Heart", tag: "Series" },
  { ref: "John 1:1–14", title: "In the Word Was Life", tag: "Doctrine" },
  { ref: "Romans 3:21–26", title: "The Gospel of Grace", tag: "Gospel" },
  { ref: "Ephesians 2:1–10", title: "Saved by Grace Alone", tag: "Doctrine" },
  { ref: "Matthew 5:1–12", title: "The Beatitudes", tag: "Series" },
  { ref: "1 Corinthians 15:1–11", title: "The Resurrection Gospel", tag: "Gospel" },
];

export const metadata = {
  title: "Sermons | Gospel Truth Church Ethiopia",
};

export default function SermonsPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Sermons</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Hear the Word of God
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Expository teaching from the Scriptures — available on YouTube and
          Telegram.
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@DawitFassilOfficial"
              target="_blank"
              className="btn-primary"
            >
              Video Sermons on YouTube
            </a>
            <a
              href="https://t.me/DawitFassilMinistries"
              target="_blank"
              className="btn-outline border-black/15 dark:border-white/20"
            >
              Audio Sermons on Telegram
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sermons.map((s, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-navy-mid dark:border-white/10"
              >
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                  <span className="absolute left-3 top-3 rounded-sm border border-gold/40 bg-gold/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                    {s.tag}
                  </span>
                  <a
                    href="https://www.youtube.com/@DawitFassilOfficial"
                    target="_blank"
                    aria-label="Play sermon"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gold transition hover:scale-105"
                  >
                    <svg viewBox="0 0 24 24" fill="#0D1B2A" width="20" height="20">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </a>
                </div>
                <div className="p-5">
                  <div className="mb-1.5 text-xs font-semibold text-gold">
                    {s.ref}
                  </div>
                  <h3 className="font-serif text-base font-semibold leading-snug">
                    {s.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
