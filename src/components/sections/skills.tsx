import { Container } from "@/components/layout/container";

const skillGroups = [
  {
    title: "Engineering",
    skills: ["Python", "C", "C++", "Git", "Software Development"],
  },
  {
    title: "AI & Data",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analysis",
    ],
  },
  {
    title: "Web & Systems",
    skills: ["Next.js", "Flask", "SQL", "APIs", "Real-time Applications"],
  },
  {
    title: "Currently Exploring",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Reinforcement Learning",
      "DevOps",
      "Scalable Systems",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <Container>
        <div className="py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-neutral-500">
              Skills & Technologies
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Technologies I work with and explore.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Building a strong foundation across software engineering,
              artificial intelligence, and modern product development.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-[#090909] p-8 sm:p-10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}