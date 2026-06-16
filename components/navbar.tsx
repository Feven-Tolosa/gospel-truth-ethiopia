"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/beliefs", label: "What We Believe" },
  { href: "/sermons", label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/prayer", label: "Prayer Requests" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gold/15 bg-navy/97 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-navy">
            ✟
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-sm font-semibold tracking-wide text-gold-light">
              Gospel Truth Ethiopia
            </span>
            <span className="font-ethiopic text-[11px] text-white/60">
              የወንጌል እውነት ቤተ ክርስቲያን
            </span>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 text-[11.5px] font-medium uppercase tracking-wide text-white/80 transition hover:text-gold-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/schedule"
              className="ml-2 rounded bg-gold px-5 py-2 text-[11.5px] font-semibold uppercase tracking-wide text-navy transition hover:bg-gold-light"
            >
              Service Times
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
          >
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-gold/15 bg-navy/98 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-white/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/schedule"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded bg-gold px-5 py-2 text-sm font-semibold text-navy"
              >
                Service Times
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
