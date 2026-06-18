import Image from 'next/image'
import Link from 'next/link'
import { Download, BookOpen } from 'lucide-react'
import { books } from '@/lib/books-data'

export const metadata = {
  title: 'Books & Resources | Gospel Truth Church Ethiopia',
  description:
    'Download biblical books, study guides, and Christian resources.',
}

export default function BooksPage() {
  return (
    <main className='pt-[70px]'>
      {/* Hero Section */}
      <section className='bg-navy px-6 py-20 text-center'>
        <div className='section-label justify-center'>Books & Resources</div>

        <h1 className='mt-4 font-serif text-4xl font-bold text-white sm:text-5xl'>
          Biblical Resources
        </h1>

        <p className='mx-auto mt-4 max-w-2xl text-white/70'>
          Explore a growing collection of Christ-centered books, study guides,
          and biblical resources designed to strengthen your faith and deepen
          your understanding of God's Word.
        </p>
      </section>

      {/* Books Grid */}
      <section className='bg-white px-6 py-20 dark:bg-navy-dark'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {books.map((book) => (
              <article
                key={book.title}
                className='group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-navy-mid'
              >
                {/* Cover */}
                <div className='relative aspect-[3/4] overflow-hidden bg-gold-pale dark:bg-navy'>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className='object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <div className='mb-2 flex items-center gap-2 text-gold'>
                    <BookOpen size={18} />
                    <span className='text-xs font-semibold uppercase tracking-wider'>
                      Resource
                    </span>
                  </div>

                  <h2 className='font-serif text-xl font-semibold text-navy dark:text-white'>
                    {book.title}
                  </h2>

                  <p className='mt-1 text-sm text-gold'>{book.author}</p>

                  <p className='mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400'>
                    {book.description}
                  </p>

                  {/* Actions */}
                  <div className='mt-6 flex gap-3'>
                    <a
                      href={book.pdf}
                      target='_blank'
                      className='flex-1 rounded-lg border border-gold px-4 py-2 text-center text-sm font-medium text-gold transition hover:bg-gold hover:text-navy'
                    >
                      Read
                    </a>

                    <a
                      href={book.pdf}
                      download
                      className='inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy transition hover:opacity-90'
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-gold-pale px-6 py-16 text-center dark:bg-navy-mid'>
        <div className='mx-auto max-w-2xl'>
          <h2 className='font-serif text-3xl font-bold text-navy dark:text-white'>
            Grow in God's Word
          </h2>

          <p className='mt-4 text-neutral-600 dark:text-neutral-400'>
            Dive into our collection of biblical resources and strengthen your
            faith. Whether you're seeking to deepen your understanding of
            Scripture or looking for practical guidance, our resources are here
            to support your spiritual journey.
          </p>
        </div>
      </section>
    </main>
  )
}
