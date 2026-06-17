import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import SchedulePreview from '@/components/home/SchedulePreview'
import SermonsPreview from '@/components/home/SermonPreview'
import BeliefSection from '@/components/home/Belifesection'
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <SchedulePreview />
      <SermonsPreview />
      <BeliefSection />
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
