import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-light-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/AIReady-logo.png"
            alt="AI Ready Institute"
            width={180}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 font-body" aria-label="Main navigation">
          <Link
            href="/about"
            className="text-gray-text hover:text-dark-text"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-gray-text hover:text-dark-text"
          >
            Our Services
          </Link>
          <Link
            href="/ai-careers"
            className="text-gray-text hover:text-dark-text"
          >
            AI in Careers
          </Link>
          <Link
            href="/consultation"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
          >
            Claim Your Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
