'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

const links = [
  { href: '/about', label: 'About Us' },
  { href: '/playlists', label: 'Sermons' },
  { href: '/books', label: 'Books' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gold/10 bg-navy/98  shadow-lg backdrop-blur-md'
          : 'border-b border-gold/15 bg-navy/95 backdrop-blur-md'
      }`}
    >
      {/* Main Navbar */}
      <div
        className={`mx-auto flex items-center justify-between px-6 transition-all duration-300 border-gold/10 bg-black/20 ${
          scrolled ? 'h-[66px]' : 'h-[80px]'
        }`}
      >
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3'>
          <div
            className={`flex items-center justify-center rounded-full bg-gold text-navy transition-all duration-300 ${
              scrolled ? 'h-10 w-10 text-base' : 'h-11 w-11 text-lg'
            }`}
          >
            {/* ✟ */}
            <Image
              src='/logo.jpg'
              alt='Gospel Truth Ethiopia'
              width={40}
              height={40}
              className='rounded-full object-cover'
            />
          </div>

          <div className='flex flex-col leading-tight'>
            <span className='font-serif text-sm font-semibold tracking-wide text-gold-light'>
              Gospel Truth Ethiopia
            </span>

            <span className='font-ethiopic text-[11px] text-white/60'>
              የወንጌል እውነት ቤተ ክርስቲያን
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden items-center gap-1 lg:flex'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='group relative block px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-white/80 transition-colors duration-300 hover:text-gold-light'
              >
                {link.label}

                <span className='absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold-light transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>
          ))}

          <li className='ml-2'>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Controls */}
        <div className='flex items-center gap-3 lg:hidden'>
          <ThemeToggle />

          <button
            aria-label='Toggle menu'
            onClick={() => setOpen(!open)}
            className='relative h-8 w-8'
          >
            <span
              className={`absolute left-1 top-2 h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`absolute left-1 top-4 h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`absolute left-1 top-6 h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-gold/15 bg-navy/98 transition-all duration-300 lg:hidden ${
          open ? 'max-h-[500px] border-b opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-6 py-4'>
          <ul className='flex flex-col gap-1'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='block rounded-md py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-gold-light'
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href='/schedule'
                onClick={() => setOpen(false)}
                className='mt-3 inline-flex rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light'
              >
                Service Times
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
