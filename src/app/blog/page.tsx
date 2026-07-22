import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Siddhant Rajan",
  description:
    "Articles about artificial intelligence, software engineering, technology, and the things I am learning and building.",
};

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      publishedAt: true,
      readingTime: true,
    },
  });

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <header className="mb-14 mt-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Writing
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Blog
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-400">
            Thoughts, lessons, and explorations around artificial
            intelligence, software engineering, technology, and the things
            I&apos;m building.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-10">
            <h2 className="text-xl font-medium">
              No published articles yet.
            </h2>

            <p className="mt-2 text-neutral-500">
              New articles will appear here soon.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {posts.map((post) => (
              <article key={post.id} className="py-8">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    {post.publishedAt ? (
                      <time dateTime={post.publishedAt.toISOString()}>
                        {new Intl.DateTimeFormat("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(post.publishedAt)}
                      </time>
                    ) : null}

                    {post.readingTime ? (
                      <>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                      </>
                    ) : null}
                  </div>

                  <h2 className="text-2xl font-semibold tracking-tight transition group-hover:text-neutral-300">
                    {post.title}
                  </h2>

                  <p className="mt-3 max-w-3xl leading-7 text-neutral-400">
                    {post.summary}
                  </p>

                  <p className="mt-5 text-sm font-medium text-neutral-300 transition group-hover:text-white">
                    Read article →
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}