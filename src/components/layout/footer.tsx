import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-white">
              Siddhant Rajan
            </p>

            <p className="mt-1 text-sm text-neutral-500">
              Building, learning, and exploring what&apos;s next.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:siddhant.rajan01@gmail.com"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                Email
              </a>

              <a
                href="https://github.com/iitpsiddhantrajan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/siddhant-rajan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <Link
                href="/"
                className="text-sm text-neutral-500 transition-colors hover:text-white"
              >
                Back to top ↑
              </Link>
            </div>

            <p className="text-xs text-neutral-600">
              © {currentYear} Siddhant Rajan
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}