"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/animals", label: "Animals" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate", donate: true },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function navLinks(onClick?: () => void) {
    return LINKS.map(({ href, label, donate }) => (
      <Link
        key={href}
        href={href}
        className={donate ? "nav-donate" : undefined}
        aria-current={pathname === href ? "page" : undefined}
        onClick={onClick}
      >
        {label}
      </Link>
    ));
  }

  return (
    <header className="site-header">
      <div className="wrap header-bar">
        <Link
          className="brand"
          href="/"
          aria-label="The Tiger Preservation Center of Nevada — home"
        >
          The Tiger Preservation Center <span>of Nevada</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navLinks()}
        </nav>
        <button
          ref={burgerRef}
          className="burger"
          aria-expanded={open}
          aria-controls="mobileMenu"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          &#9776;
        </button>
      </div>
      <nav
        className={`mobile-menu${open ? " open" : ""}`}
        id="mobileMenu"
        aria-label="Primary"
      >
        {navLinks(() => setOpen(false))}
      </nav>
    </header>
  );
}
