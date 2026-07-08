'use client'

import { Phone, MapPin, Send, ArrowUpRight } from 'lucide-react'

import { SlSocialFacebook } from 'react-icons/sl'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Phone',
    value: '+251 917 804 407',
    href: 'tel:+251917804407',
    icon: Phone,
  },
  {
    title: 'Alternative Phone',
    value: '+251 906 202 626',
    href: 'tel:+251906202626',
    icon: Phone,
  },
  {
    title: 'Telegram',
    value: 'Join Our Channel',
    href: 'https://t.me/DawitFassilMinistry',
    icon: Send,
  },
  {
    title: 'Facebook',
    value: 'Follow Our Page',
    href: 'https://www.facebook.com/Dawit-Fassil-Ministry-1873139229468315/',
    icon: SlSocialFacebook,
  },
]

export default function ContactPage() {
  return (
    <main className='pt-[70px]'>
      {/* Hero */}
      <section className='bg-navy px-6 py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='section-label justify-center'>Contact</div>

          <h1 className='mt-4 font-serif text-4xl font-bold text-white md:text-5xl'>
            Get in Touch
          </h1>

          <p className='mx-auto mt-5 max-w-2xl font-ethiopic text-lg text-white/70'>
            ለማንኛውም አይነት ጥያቄ፣ ጸሎት ወይም መረጃ ለማግኘት በማንኛውም ጊዜ ያግኙን።
          </p>
        </motion.div>
      </section>

      {/* Contact Cards */}
      <section className='px-6 py-20'>
        <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel='noreferrer'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.45,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className='group rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition-all hover:border-gold hover:shadow-xl dark:border-white/10 dark:bg-navy-mid'
              >
                <div className='flex items-start justify-between'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold'>
                    <Icon size={28} />
                  </div>

                  <ArrowUpRight className='text-neutral-400 transition group-hover:text-gold' />
                </div>

                <p className='mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
                  {card.title}
                </p>

                <h3 className='mt-2 font-serif text-xl font-semibold'>
                  {card.value}
                </h3>
              </motion.a>
            )
          })}
        </div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='mx-auto mt-10 max-w-6xl rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-navy-mid'
        >
          <div className='flex items-start gap-5'>
            <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold'>
              <MapPin size={28} />
            </div>

            <div>
              <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
                Church Location
              </p>

              <h2 className='mt-2 font-serif text-2xl font-semibold'>
                Gospel Truth Church Ethiopia
              </h2>

              <p className='mt-2 text-neutral-600 dark:text-neutral-300'>
                Jimma, Ethiopia
              </p>

              <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-400'>
                We warmly welcome you to worship with us all the week.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-black/5 shadow-lg dark:border-white/10'
        >
          <iframe
            title='Church Location'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63263.91930837689!2d36.77415847778321!3d7.6836882610787915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17adb8ea838ad921%3A0x70b55631e22a5906!2sGospel%20Truth%20International%20Church!5e0!3m2!1sen!2set!4v1783518518722!5m2!1sen!2set'
            width='100%'
            height='500'
            loading='lazy'
            allowFullScreen
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full'
          />
        </motion.div>
      </section>
    </main>
  )
}
