import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <Container>
        <div className="grid gap-12 py-24 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          
          <div>
            <p className="text-sm font-medium text-neutral-500">
              About me
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Learning deeply.
              <br />
              Building for the real world.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-lg leading-8 text-neutral-400">
            <p>
              I&apos;m Siddhant Rajan, a Computer Science student at IIT Patna
              with a growing focus on software engineering, artificial
              intelligence, and building useful technology products.
            </p>

            <p>
              I&apos;m interested in understanding how intelligent systems are
              built from the ground up — from software architecture and
              scalable applications to machine learning and AI-powered
              experiences.
            </p>

            <p>
              Beyond learning individual technologies, I enjoy turning ideas
              into working products. My long-term goal is to build technology
              that solves meaningful problems and grow as both an engineer and
              a product builder.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}