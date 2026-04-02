"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/95 backdrop-blur-sm">
      <nav className="content-container h-14 flex items-center justify-between">
        {/* logo */}
        <Link
          href="/"
          className="font-display text-lg tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          dvitash.dev
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-label transition-colors ${
                isActive(item.href)
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/Dvitash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-primary)]">
          <div className="content-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label py-2 transition-colors ${
                  isActive(item.href)
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/Dvitash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
            >
              <FaGithub size={18} />
              <span className="font-label">GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
