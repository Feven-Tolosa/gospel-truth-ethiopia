import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import SchedulePreview from '@/components/home/SchedulePreview'
import SermonsPreview from '@/components/home/SermonsPreview'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <SchedulePreview />
      <SermonsPreview />
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
