import { Container } from "@/components/layout/container";

export function Blog() {
  return (
    <section id="blog" className="border-t border-white/10">
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            
            {/* Left side */}
            <div>
              <p className="text-sm font-medium text-neutral-500">
                Writing
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ideas, notes, and things I&apos;m learning.
              </h2>
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-neutral-400">
                  I plan to write about software engineering, artificial
                  intelligence, building products, and the lessons I learn
                  while turning ideas into working systems.
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                  This space will become a collection of technical notes,
                  experiments, project insights, and ideas worth sharing.
                </p>
              </div>

              {/* Coming soon indicator */}
              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <p className="text-sm text-neutral-400">
                    First articles coming soon
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}