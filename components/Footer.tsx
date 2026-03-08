import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-border bg-light-bg font-body">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-heading text-lg font-semibold text-dark-text">
              AI Ready Institute
            </Link>
            <p className="mt-2 max-w-sm text-sm text-gray-text">
              Preparing students for AI-driven careers with clarity, confidence, and career readiness.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            <Link href="/about" className="text-sm text-gray-text hover:text-dark-text">
              About Us
            </Link>
            <Link href="/services" className="text-sm text-gray-text hover:text-dark-text">
              Our Services
            </Link>
            <Link href="/ai-careers" className="text-sm text-gray-text hover:text-dark-text">
              AI in Careers
            </Link>
            <Link href="/consultation" className="text-sm text-gray-text hover:text-dark-text">
              Free Consultation
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-light-border pt-8 text-center text-sm text-gray-text">
          © {currentYear} AI Ready Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
