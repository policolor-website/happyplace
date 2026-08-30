"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/camere", label: "Spații" },
  { href: "/galerie", label: "Galerie" },
  { href: "/agrement", label: "Facilități" },
  { href: "/contact", label: "Contact" },
];

const apartments = [
  { href: "/apartamente/happy-place", label: "Happy Place" },
  { href: "/apartamente/dream-studio", label: "Dream Studio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aptDropdown, setAptDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const linkClass = (active: boolean) =>
    `text-sm font-medium tracking-wide no-underline transition-colors ${
      active ? "text-gold" : "text-cream hover:text-gold"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 border-b border-border-dark bg-night/90 backdrop-blur-md"
          : "py-5 border-b border-transparent bg-night/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" onClick={closeMobile} className="no-underline">
          <span className="font-display text-xl md:text-2xl font-bold text-cream tracking-tight">
            Happy<span className="text-gold"> Place</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none items-center">
          <li>
            <Link href="/" className={linkClass(pathname === "/")}>
              Acasă
            </Link>
          </li>

          {/* Despre noi */}
          <li>
            <Link href="/despre-noi" className={linkClass(pathname === "/despre-noi")}>
              Despre noi
            </Link>
          </li>

          {/* Apartamente dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setAptDropdown(true)}
            onMouseLeave={() => setAptDropdown(false)}
          >
            <button
              className={`text-sm font-medium tracking-wide transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1 ${
                pathname.startsWith("/apartamente") ? "text-gold" : "text-cream hover:text-gold"
              }`}
            >
              Apartamente
              <svg className={`w-3 h-3 transition-transform ${aptDropdown ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aptDropdown && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="bg-night-light border border-border-dark shadow-2xl min-w-[200px]">
                  {apartments.map((apt) => (
                    <Link
                      key={apt.href}
                      href={apt.href}
                      className={`block px-6 py-3 text-sm font-medium no-underline transition-colors border-b border-border-dark last:border-b-0 ${
                        pathname === apt.href ? "text-gold bg-night" : "text-cream hover:text-gold hover:bg-night"
                      }`}
                    >
                      {apt.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(pathname === link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/camere"
          className="hidden md:inline-block px-6 py-2.5 bg-gold text-night text-sm font-semibold tracking-wide no-underline transition-all hover:bg-gold-light"
        >
          Rezervă acum
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cream transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-night border-b border-border-dark shadow-2xl">
          <div className="px-6 py-6 flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMobile}
              className={`py-3 text-base font-medium no-underline ${
                pathname === "/" ? "text-gold" : "text-cream"
              }`}
            >
              Acasă
            </Link>

            {/* Despre noi */}
            <Link
              href="/despre-noi"
              onClick={closeMobile}
              className={`py-3 text-base font-medium no-underline ${
                pathname === "/despre-noi" ? "text-gold" : "text-cream"
              }`}
            >
              Despre noi
            </Link>

            {/* Apartamente cu sub-link-uri în mobil */}
            <div className="py-3">
              <p className="text-base font-medium text-cream mb-2">Apartamente</p>
              <div className="flex flex-col gap-1 pl-4 border-l border-border-dark">
                {apartments.map((apt) => (
                  <Link
                    key={apt.href}
                    href={apt.href}
                    onClick={closeMobile}
                    className={`py-2 text-sm no-underline ${
                      pathname === apt.href ? "text-gold" : "text-muted hover:text-gold"
                    }`}
                  >
                    {apt.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className={`py-3 text-base font-medium no-underline ${
                  pathname === link.href ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/camere"
              onClick={closeMobile}
              className="mt-4 px-6 py-3 bg-gold text-night text-sm font-semibold tracking-wide no-underline text-center"
            >
              Rezervă acum
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
