import { Container } from "@/components/layout/container";

const contactLinks = [
  {
    label: "Email",
    value: "siddhant.rajan01@gmail.com",
    href: "mailto:siddhant.rajan01@gmail.com",
  },
  {
    label: "GitHub",
    value: "iitpsiddhantrajan",
    href: "https://github.com/iitpsiddhantrajan",
  },
  {
    label: "LinkedIn",
    value: "siddhant-rajan",
    href: "https://www.linkedin.com/in/siddhant-rajan",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <Container>
        <div className="py-24 sm:py-32 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            
            {/* Left side */}
            <div>
              <p className="text-sm font-medium text-neutral-500">
                Contact
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something meaningful.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
                I&apos;m always interested in learning, collaborating, and
                exploring opportunities in software engineering, artificial
                intelligence, and product development.
              </p>
            </div>

            {/* Right side */}
            <div className="lg:pt-10">
              <div className="border-t border-white/10">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.label === "Email" ? undefined : "_blank"
                    }
                    rel={
                      link.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center justify-between gap-6 border-b border-white/10 py-7"
                  >
                    <div>
                      <p className="text-sm text-neutral-500">
                        {link.label}
                      </p>

                      <p className="mt-1 text-base text-neutral-300 transition-colors group-hover:text-white sm:text-lg">
                        {link.value}
                      </p>
                    </div>

                    <span className="text-xl text-neutral-500 transition-all group-hover:translate-x-1 group-hover:text-white">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}