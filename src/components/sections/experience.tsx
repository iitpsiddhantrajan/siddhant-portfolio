import { Container } from "@/components/layout/container";

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10">
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          {/* Section heading */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Learning through real-world work.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Professional experience that helped me understand digital
              products, e-commerce operations, and how technology supports
              real businesses.
            </p>
          </div>

          {/* Experience */}
          <div className="mt-16 border-t border-white/10">
            <article className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[1fr_2fr] md:gap-16">
              {/* Company and date */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Estornet Pvt. Ltd.
                </h3>

                <p className="mt-2 text-neutral-400">
                  E-Commerce Executive
                </p>

                <p className="mt-3 text-sm text-neutral-500">
                  June 2025 — November 2025
                </p>
              </div>

              {/* Description */}
              <div>
                <p className="max-w-2xl leading-7 text-neutral-400">
                  Worked on e-commerce operations including product catalog
                  management, listing optimization, keyword research, and
                  SEO-focused improvements. Gained hands-on experience
                  managing digital product information and supporting online
                  marketplace operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "E-Commerce",
                    "Catalog Management",
                    "SEO",
                    "Keyword Research",
                    "Product Listings",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}