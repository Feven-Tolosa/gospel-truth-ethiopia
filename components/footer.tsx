import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-serif text-xl font-bold text-gold">
              Gospel Truth Ethiopia
            </div>
            <div className="mb-4 font-ethiopic text-sm text-white/40">
              የወንጌል እውነት ቤተ ክርስቲያን
            </div>
            <p className="mb-3 text-sm leading-relaxed text-white/45">
              An evangelical church committed to the bold, fearless
              proclamation of the gospel across Southern, Southwestern, and
              Western Ethiopia — led by elders, centered on Christ.
            </p>
            <p className="font-ethiopic text-sm leading-loose text-white/35">
              ወንጌልን ያለፍርሃት በግልጽነት መስበክ ዋና አላማቸው ናቸው።
            </p>
          </div>

          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/about" className="text-sm text-white/50 hover:text-white/85">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/beliefs" className="text-sm text-white/50 hover:text-white/85">
                  What We Believe
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-sm text-white/50 hover:text-white/85">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm text-white/50 hover:text-white/85">
                  Service Times
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
              Resources
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://gospeltruthethiopia.com"
                  target="_blank"
                  className="text-sm text-white/50 hover:text-white/85"
                >
                  Books by Dawit Fassil
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/DawitFassilMinistries"
                  target="_blank"
                  className="text-sm text-white/50 hover:text-white/85"
                >
                  Audio Sermons (Telegram)
                </a>
              </li>
              <li>
                <Link href="/prayer" className="text-sm text-white/50 hover:text-white/85">
                  Prayer Requests
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-white/50 hover:text-white/85">
                  Events Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold">
              Contact
            </div>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <a href="tel:+251917804407" className="hover:text-white/85">
                +251 917 804 407
              </a>
              <a href="tel:+251906202626" className="hover:text-white/85">
                +251 906 202 626
              </a>
              <span>Jimma, Ethiopia</span>
              <a
                href="https://gospeltruthethiopia.com"
                target="_blank"
                className="hover:text-white/85"
              >
                gospeltruthethiopia.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Gospel Truth Church Ethiopia · All
            rights reserved
          </p>
          <div className="flex gap-2.5">
            <a
              href="https://www.facebook.com/Dawit-Fassil-Ministry-1873139229468315/"
              target="_blank"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded bg-white/5 text-white/60 transition hover:bg-gold/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://t.me/DawitFassilMinistries"
              target="_blank"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded bg-white/5 text-white/60 transition hover:bg-gold/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="16"
                height="16"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
