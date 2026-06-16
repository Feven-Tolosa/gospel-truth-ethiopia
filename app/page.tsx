import Link from 'next/link'
import { weeklySchedule } from '@/lib/schedule-data'
import HeroSection from '@/components/home/HeroSection'

export default function HomePage() {
  const featured = weeklySchedule.filter((s) =>
    ['Sunday', 'Saturday'].includes(s.day),
  )

  return (
    <main>
      <HeroSection />
      {/* HERO */}
      <section className='relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-navy'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.88) 100%), url('https://images.unsplash.com/photo-1438232992991-995b671e49ea?w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className='relative z-10 max-w-3xl px-8 text-center'>
          <div className='section-label justify-center before:hidden'>
            <span className='block h-px w-8 bg-gold/60' />
            Jimma, Ethiopia
            <span className='block h-px w-8 bg-gold/60' />
          </div>
          <h1 className='mb-2 font-ethiopic text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl'>
            የወንጌል እውነት ቤተ ክርስቲያን
          </h1>
          <p className='mb-7 font-serif text-lg italic text-gold-light sm:text-xl md:text-2xl'>
            Gospel Truth Church — Ethiopia
          </p>
          <blockquote className='mx-auto mb-9 max-w-xl border-l-2 border-gold pl-5 text-left font-serif text-base italic leading-relaxed text-white/75 sm:text-lg'>
            &ldquo;ክርስቶስ ኢየሱስ ጌታ ሲሆን እኛ ራሳችንን ሎሌዎቻችሁ አድርገን ስለ ኢየሱስ
            እናስተምራለን።&rdquo;
            <cite className='mt-2 block font-sans text-sm font-medium not-italic text-gold'>
              2 ቆሮንቶስ 4፡5
            </cite>
          </blockquote>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/schedule' className='btn-primary'>
              Join Us Sunday
            </Link>
            <Link
              href='/sermons'
              className='btn-outline border-white/35 text-white hover:border-white'
            >
              Watch Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className='bg-navy px-6 py-16'>
        <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_auto_1fr]'>
          <div className='text-white'>
            <div className='section-label'>Who We Are</div>
            <h2 className='mb-4 font-serif text-2xl font-semibold leading-snug text-white sm:text-3xl'>
              A Church Built on the Word of God
            </h2>
            <p className='mb-4 leading-relaxed text-white/70'>
              Gospel Truth Church is an evangelical assembly committed to the
              fundamental pillars of Christian faith — the Holy Trinity, the
              divinity and humanity of Jesus Christ, the authority of Scripture,
              the gospel of grace, and the forgiveness of sins.
            </p>
            <p className='font-ethiopic text-sm leading-loose text-white/55'>
              ወንጌላዊ ጉባኤ ናት - በዋነኞቹ አእማደ እምነቶች፣ በቅድስት ሥላሴ፣ በኢየሱስ ክርስቶስ አምላክነትና
              ሰውነት፣ በመጽሓፍ ቅዱስ ስልጣን፣ በጸጋው ወንጌል የምታምን።
            </p>
          </div>
          <div className='hidden h-48 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-40 lg:block' />
          <div className='grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8'>
            <div className='text-center'>
              <div className='font-serif text-4xl font-bold text-gold'>3+</div>
              <div className='text-xs font-medium uppercase tracking-wider text-white/50'>
                Regions Served
              </div>
            </div>
            <div className='text-center'>
              <div className='font-serif text-4xl font-bold text-gold'>∞</div>
              <div className='text-xs font-medium uppercase tracking-wider text-white/50'>
                Lives Changed
              </div>
            </div>
            <div className='text-center'>
              <div className='font-serif text-4xl font-bold text-gold'>1</div>
              <div className='text-xs font-medium uppercase tracking-wider text-white/50'>
                Gospel, Proclaimed Boldly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className='border-t-[3px] border-gold bg-gold-pale px-6 py-20 dark:bg-navy-mid'>
        <div className='mx-auto max-w-7xl'>
          <div className='section-label'>Service Schedule</div>
          <h2 className='section-title'>Join Us for Worship</h2>
          <p className='section-subtitle mb-10'>
            Sunday is our main gathering — worship, the Lord&apos;s Supper, and
            Bible teaching. We also meet every evening of the week.
          </p>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {featured.map((item, i) => (
              <div
                key={i}
                className='relative overflow-hidden rounded-lg border border-gold/20 bg-white p-6 shadow-sm dark:bg-navy dark:border-white/10'
              >
                <span className='absolute left-0 right-0 top-0 h-1 bg-gold' />
                <div className='mb-1.5 text-[11px] font-bold uppercase tracking-wider text-gold'>
                  {item.day}
                </div>
                <div className='mb-0.5 font-serif text-lg font-semibold'>
                  {item.name}
                </div>
                <div className='mb-2.5 font-ethiopic text-sm text-neutral-500 dark:text-neutral-400'>
                  {item.nameAm}
                </div>
                <div className='text-sm font-semibold text-navy dark:text-gold-light'>
                  {item.time}
                </div>
                {item.note && (
                  <div className='mt-1.5 text-xs text-neutral-500 dark:text-neutral-400'>
                    {item.note}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='mt-8'>
            <Link href='/schedule' className='btn-primary'>
              View Full Weekly Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* SERMONS PREVIEW */}
      <section className='px-6 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div>
              <div className='section-label'>Sermons</div>
              <h2 className='section-title'>Hear the Word of God</h2>
              <p className='section-subtitle'>
                Expository teaching from the Scriptures — available on YouTube
                and Telegram.
              </p>
            </div>
            <Link
              href='/sermons'
              className='btn-primary mt-2 whitespace-nowrap'
            >
              All Sermons
            </Link>
          </div>

          <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                ref: '2 Corinthians 4:1–18',
                title: 'Therefore We Do Not Lose Heart',
                tag: 'Series',
              },
              {
                ref: 'John 1:1–14',
                title: 'In the Word Was Life',
                tag: 'Doctrine',
              },
              {
                ref: 'Romans 3:21–26',
                title: 'The Gospel of Grace',
                tag: 'Gospel',
              },
            ].map((s, i) => (
              <article
                key={i}
                className='overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-navy-mid dark:border-white/10'
              >
                <div className='relative flex h-40 items-center justify-center bg-gradient-to-br from-navy to-navy-light'>
                  <span className='absolute left-3 top-3 rounded-sm border border-gold/40 bg-gold/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light'>
                    {s.tag}
                  </span>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gold'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='#0D1B2A'
                      width='20'
                      height='20'
                    >
                      <polygon points='5 3 19 12 5 21 5 3' />
                    </svg>
                  </div>
                </div>
                <div className='p-5'>
                  <div className='mb-1.5 text-xs font-semibold text-gold'>
                    {s.ref}
                  </div>
                  <h3 className='font-serif text-base font-semibold leading-snug'>
                    {s.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BELIEFS PREVIEW */}
      <section className='bg-navy px-6 py-20'>
        <div className='mx-auto max-w-7xl'>
          <div className='section-label'>What We Believe</div>
          <h2 className='section-title text-white'>Our Doctrinal Foundation</h2>
          <p className='section-subtitle mb-10 text-white/55'>
            Standing on the unchanging truths of Scripture, we hold fast to the
            historic Christian faith.
          </p>
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {[
              { en: 'The Holy Trinity', am: 'ቅድስት ሥላሴ' },
              { en: 'The Divinity of Christ', am: 'የኢየሱስ ክርስቶስ አምላክነት' },
              { en: 'Authority of Scripture', am: 'የመጽሓፍ ቅዱስ ስልጣን' },
            ].map((b, i) => (
              <div
                key={i}
                className='rounded-lg border border-gold/15 bg-white/5 p-6 transition hover:bg-white/[0.08] hover:border-gold/35'
              >
                <div className='mb-1 font-serif text-base font-semibold text-white'>
                  {b.en}
                </div>
                <div className='font-ethiopic text-sm text-gold/80'>{b.am}</div>
              </div>
            ))}
          </div>
          <div className='mt-8'>
            <Link
              href='/beliefs'
              className='btn-outline border-white/30 text-white hover:border-white'
            >
              Read Our Full Beliefs
            </Link>
          </div>
        </div>
      </section>

      {/* VISIT CTA */}
      <section className='relative overflow-hidden bg-navy px-6 py-24 text-center'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_70%)]' />
        <div className='relative mx-auto max-w-2xl'>
          <div className='section-label justify-center'>Come & See</div>
          <h2 className='mb-2 font-serif text-3xl font-bold text-white sm:text-4xl'>
            You Are Welcome Here
          </h2>
          <p className='mb-4 font-ethiopic text-lg text-gold-light'>
            ወደ እኛ እንኳን ደህና መጣህ
          </p>
          <p className='mb-8 leading-relaxed text-white/65'>
            No matter where you are on your journey, we invite you to come hear
            the Word of God preached faithfully. All are welcome at Gospel Truth
            Church.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/schedule' className='btn-primary'>
              Plan Your Visit
            </Link>
            <Link
              href='/contact'
              className='btn-outline border-white/35 text-white hover:border-white'
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
