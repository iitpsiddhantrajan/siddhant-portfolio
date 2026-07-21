type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  status,
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-8">
      
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="text-sm text-neutral-500">
          Project
        </span>

        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-400">
          {status}
        </span>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-neutral-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-neutral-400"
          >
            {technology}
          </span>
        ))}
      </div>

    </article>
  );
}