import Link from 'next/link'
import HeroSection from '@/components/home/HeroSection'
import WelcomeSection from '@/components/home/WelcomeSection'
import SchedulePreview from '@/components/home/SchedulePreview'
import SermonsPreview from '@/components/home/SermonPreview'
import BeliefSection from '@/components/home/Belifesection'
import VisitSection from '@/components/home/Visitsection'
import PastorMessage from '@/components/home/PastorMessage'
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <SchedulePreview />
      <PastorMessage />
      <SermonsPreview />
      <BeliefSection />
      <VisitSection />
    </main>
  )
}
