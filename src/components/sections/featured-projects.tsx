import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";

const projects = [
  {
    title: "Safora",
    description:
      "A real-time communication platform exploring scalable messaging, user presence, private conversations, and modern social interaction.",
    technologies: ["Next.js", "Python", "Real-time Systems"],
    status: "In Development",
  },
  {
    title: "DevMind",
    description:
      "An AI-powered software engineering workspace designed to explore intelligent coding assistance, developer workflows, and AI agents.",
    technologies: ["AI", "LLMs", "Software Engineering"],
    status: "Exploring",
  },
  {
    title: "Climate & Coastal AI",
    description:
      "A research-focused project exploring how artificial intelligence and data analysis can support climate change projections and coastal ecosystem research.",
    technologies: ["Python", "AI/ML", "Data Analysis"],
    status: "Research",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <Container>
        <div className="py-24 sm:py-32">
          <p className="text-sm font-medium text-neutral-500">
            Selected work
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Projects built around real problems and ambitious ideas.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            A selection of software, AI, and research projects I&apos;m
            building while exploring scalable systems, intelligent products,
            and emerging technologies.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}