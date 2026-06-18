'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Sermon } from '@/lib/youtube'
import { useEffect, useState } from 'react'
interface Props {
  featured: Sermon
  recent: Sermon[]
}

export default function SermonsPreviewClient({ featured, recent }: Props) {
  return (
    <section className='relative overflow-hidden bg-gold-pale px-6 py-24 dark:bg-navy-mid'>
      {/* Background Glow */}
      <div className='absolute left-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl' />
      <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='mb-12 flex flex-wrap items-start justify-between gap-4'
        >
          <div>
            <div className='section-label'>Latest Sermons</div>

            <h2 className='section-title'>Hear the Word of God</h2>

            <p className='section-subtitle max-w-2xl'>
              Faithful biblical preaching and teaching from Dawit Fassil
              Ministries.
            </p>
          </div>

          {/* <Link href='/sermons' className='btn-primary mt-2 whitespace-nowrap'>
            View All Sermons
          </Link> */}
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='group mb-14 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-xl dark:border-white/10 dark:bg-navy'
        >
          <div className='grid lg:grid-cols-2'>
            <div className='relative aspect-video overflow-hidden'>
              <iframe
                className='h-full w-full'
                src={`https://www.youtube.com/embed/${featured.id}`}
                title={featured.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 to-transparent' />
            </div>

            <div className='flex flex-col justify-center p-8 lg:p-12'>
              <div className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold'>
                Featured Sermon
              </div>

              <h3 className='font-serif text-2xl font-bold leading-tight lg:text-4xl'>
                {featured.title}
              </h3>

              <p className='mt-4 text-sm text-black/60 dark:text-white/60'>
                Published {new Date(featured.publishedAt).toLocaleDateString()}
              </p>

              <div className='mt-8'>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary'
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Sermons */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {recent.map((sermon, index) => (
            <motion.a
              key={sermon.id}
              href={`https://www.youtube.com/watch?v=${sermon.id}`}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className='group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-navy'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  fill
                  className='object-cover transition duration-700 group-hover:scale-110'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />

                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className='absolute inset-0 flex items-center justify-center'
                >
                  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-xl'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='#0D1B2A'
                      width='22'
                      height='22'
                    >
                      <polygon points='5 3 19 12 5 21 5 3' />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div className='p-6'>
                <h3 className='line-clamp-2 font-serif text-lg font-semibold leading-snug transition-colors group-hover:text-gold'>
                  {sermon.title}
                </h3>

                <p className='mt-3 text-sm text-black/60 dark:text-white/60'>
                  {new Date(sermon.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
