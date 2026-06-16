export const metadata = {
  title: "Contact | Gospel Truth Church Ethiopia",
};

export default function ContactPage() {
  return (
    <main className="pt-[70px]">
      <section className="bg-navy px-6 py-16 text-center">
        <div className="section-label justify-center">Contact</div>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-ethiopic text-white/60">
          ለማንኛውም አይነት ጥያቄ ያቅርቡ
        </p>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <a
            href="tel:+251917804407"
            className="rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Phone
            </div>
            <div className="font-serif text-lg font-semibold">
              +251 917 804 407
            </div>
          </a>
          <a
            href="tel:+251906202626"
            className="rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Phone (Alt)
            </div>
            <div className="font-serif text-lg font-semibold">
              +251 906 202 626
            </div>
          </a>
          <a
            href="https://t.me/DawitFassilMinistries"
            target="_blank"
            className="rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Telegram
            </div>
            <div className="font-serif text-lg font-semibold">
              Join Our Channel
            </div>
          </a>
          <a
            href="https://www.facebook.com/Dawit-Fassil-Ministry-1873139229468315/"
            target="_blank"
            className="rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md dark:bg-navy-mid dark:border-white/10"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
              Facebook
            </div>
            <div className="font-serif text-lg font-semibold">
              Follow Our Page
            </div>
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-black/5 bg-white p-6 shadow-sm dark:bg-navy-mid dark:border-white/10">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
            Location
          </div>
          <div className="font-serif text-lg font-semibold">
            Jimma, Ethiopia
          </div>
        </div>
      </section>
    </main>
  );
}
