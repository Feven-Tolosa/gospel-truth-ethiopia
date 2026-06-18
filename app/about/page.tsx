'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className='pt-[70px]'>
      <div className='relative w-full overflow-hidden'>
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <Image
            src='/image/channels_banner.png'
            alt='Gospel Truth Church'
            width={1920}
            height={1080}
            priority
            className='h-auto w-full object-cover'
          />
        </motion.div>

        <div className='absolute inset-0 bg-navy/20' />
        <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/70 to-transparent' />
      </div>
      <section className='bg-navy px-4 py-16 text-center'>
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='absolute bottom-8 text-center w-full max-w-7xl -translate-x-1/2 px-6 md:block'
        >
          <p className=' mb-3  text-gold font-serif '>
            - Welcome to Gospel Truth Church -
          </p>

          <h3 className='mb-3 text-white/80 font-serif text-3xl font-bold text-white md:text-3xl lg:text-5xl'>
            Proclaiming the Truth of God&apos;s Word
          </h3>
        </motion.div>
      </section>

      <section className='px-4 py-16'>
        <div className='mx-auto max-w-5xl'>
          <p className='mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300'>
            Gospel Truth Church is an evangelical assembly committed to the
            fundamental pillars of the Christian faith — the Holy Trinity, the
            divinity and humanity of Jesus Christ, the authority of Scripture,
            the gospel of grace, the forgiveness of sins, the second coming of
            Christ, and the coming judgment.
          </p>
          <p className='mb-6 rounded-lg border-l-4 border-gold bg-gold-pale p-6 font-ethiopic text-base leading-loose text-neutral-700 dark:bg-navy-mid dark:text-neutral-300'>
            የወንጌል እውነት ቤተክርስቲያን ፦ በዋነኞቹ አእማደ እምነቶች፣ በቅድስት ሥላሴ ፣ በኢየሱስ ክርስቶስ
            አምላክነትና ሰውነት፣ በመጽሓፍ ቅዱስ ስልጣን፣ በጸጋው ወንጌል፣ በኃጢአት ስርየት፣ በዳግም ምጽአት ፣
            በሚመጣው ፍርድ የምታምን ወንጌላዊት ጉባኤ ናት።
          </p>
          <p className='mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300'>
            We have local congregations across Southern, Southwestern, and
            Western Ethiopia. The church is led by an eldership, with all
            ministers of the Word and members of every spiritual department
            serving under the elders&apos; oversight.
          </p>
          <p className='leading-relaxed text-neutral-700 dark:text-neutral-300'>
            Our primary aim is to preach the gospel boldly and without fear —
            centering on Christ alone, holding fast to the teaching of our
            spiritual fathers, and bearing the cost of that calling for the sake
            of others.{' '}
            <span className='font-medium text-gold'>2 Corinthians 4:1–18</span>
          </p>
        </div>
      </section>
      <Link
        href='/ministries'
        className='mx-auto mb-14 block w-fit rounded-lg border border-gold p-6 font-serif font-bold text-white transition-all duration-300 hover:bg-gold sm:text-lg'
      >
        Ministries
      </Link>
    </main>
  )
}
