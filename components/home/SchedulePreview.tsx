import { weeklySchedule } from '@/lib/schedule-data'
import Link from 'next/link'

export default function SchedulePreview() {
  const featured = weeklySchedule.filter((s) =>
    ['Sunday', 'Saturday'].includes(s.day),
  )
  return (
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
  )
}
