import Link from "next/link";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section>
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          {/* Status */}
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-sm text-neutral-400">
              Building, learning, and exploring new ideas
            </span>
          </div>

          {/* Small introduction */}
          <p className="mb-6 text-sm font-medium text-neutral-400">
            Computer Science @ IIT Patna
          </p>

          {/* Main headline */}
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build intelligent software and AI-powered products.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400 sm:text-xl">
            I&apos;m Siddhant Rajan, a Computer Science student at IIT Patna
            exploring the intersection of software engineering, artificial
            intelligence, and product development.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-neutral-200"
            >
              Explore my work
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}