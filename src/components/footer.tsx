import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="content-container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* copyright */}
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} Daniel Vitashkevich
          </p>

          {/* quick links */}
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              About
            </Link>
            <Link href="/experience" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Work
            </Link>
            <Link href="/contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Contact
            </Link>
            <a
              href="https://github.com/Dvitash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
