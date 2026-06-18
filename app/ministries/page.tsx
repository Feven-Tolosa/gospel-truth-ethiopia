'use client'

import { motion } from 'framer-motion'
import {
  Wine,
  Droplets,
  Users,
  Mic2,
  UserCheck,
  Church,
  Hand,
  BookOpen,
  Globe2,
  Music,
  Smile,
  UserRound,
} from 'lucide-react'

const ministries = [
  { en: "Lord's Supper", am: 'የጌታ እራት', icon: Wine },
  { en: 'Baptism', am: 'ጥምቀት', icon: Droplets },
  { en: 'Discipleship & Mentoring', am: 'ደቀመዝሙርነት እና መካሪነት', icon: Users },
  { en: 'Expository Preaching', am: 'ስብከተ ወንጌል', icon: Mic2 },
  { en: 'Youth Ministry', am: 'የወጣቶች አገልግሎት', icon: UserCheck },
  { en: 'Church Planting', am: 'አጥቢያ ጉባኤዎች', icon: Church },
  { en: 'Bible Studies', am: 'የቃሉ ጥናት', icon: BookOpen },
  { en: 'Prayer Ministry', am: 'የጸሎት አገልግሎት', icon: Hand },
  { en: 'Outreach & Evangelism', am: 'ወንጌልን ማስፋፋት', icon: Globe2 },
  { en: 'Choir & Worship', am: 'የዘማሪዎች አገልግሎት', icon: Music },
  { en: "Children's Ministry", am: 'የልጆች አገልግሎት', icon: Smile },
  { en: "Women's Ministry", am: 'የሴቶች አገልግሎት', icon: UserRound },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export default function MinistriesPage() {
  return (
    <main className='pt-[70px]'>
      {/* HERO */}
      <section className='bg-navy px-6 py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='section-label justify-center'>Ministries</div>

          <h1 className='mt-2 font-serif text-3xl font-bold text-white sm:text-4xl'>
            Serving the Body of Christ
          </h1>

          <p className='mx-auto mt-4 max-w-2xl text-white/60'>
            Our church serves across Ethiopia through Christ-centered ministries
            that build disciples, strengthen faith, and expand the Gospel.
          </p>
        </motion.div>
      </section>

      {/* GRID */}
      <section className='px-6 py-16'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4'
        >
          {ministries.map((m, i) => {
            const Icon = m.icon

            return (
              <motion.div
                key={i}
                variants={item}
                className='group relative rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-navy-mid'
              >
                {/* ICON */}
                <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy/90 ring-2 ring-gold/30 transition group-hover:ring-gold/70'>
                  <Icon className='h-6 w-6 text-gold' />
                </div>

                {/* TEXT */}
                <h3 className='font-serif text-sm font-semibold text-gray-900 dark:text-white'>
                  {m.en}
                </h3>

                <p className='mt-1 font-ethiopic text-xs text-neutral-500 dark:text-neutral-400'>
                  {m.am}
                </p>

                {/* glow */}
                <div className='absolute inset-0 -z-10 rounded-xl opacity-0 blur-xl transition group-hover:opacity-10 bg-gold' />
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </main>
  )
}
