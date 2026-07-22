import Link from "next/link";
import { Container } from "@/components/layout/container";
import { prisma } from "@/lib/prisma";

export async function Blog() {
  const posts = await prisma.post.findMany({
    where: {
      status: "PUBLISHED",
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 3,
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

              <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
                Thoughts on software engineering, artificial intelligence,
                building products, and lessons from turning ideas into
                working systems.
              </p>

              <Link
                href="/blog"
                className="mt-8 inline-flex items-center text-sm font-medium text-neutral-300 transition hover:text-white"
              >
                View all articles →
              </Link>
            </div>

            {/* Right side */}
            <div>
              {posts.length === 0 ? (
                <div className="border-t border-white/10 pt-8">
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
              ) : (
                <div className="divide-y divide-white/10 border-y border-white/10">
                  {posts.map((post) => (
                    <article key={post.id} className="py-8">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block"
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                          {post.publishedAt ? (
                            <time
                              dateTime={post.publishedAt.toISOString()}
                            >
                              {new Intl.DateTimeFormat("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }).format(post.publishedAt)}
                            </time>
                          ) : null}

                          {post.readingTime ? (
                            <>
                              <span>•</span>
                              <span>
                                {post.readingTime} min read
                              </span>
                            </>
                          ) : null}
                        </div>

                        <h3 className="text-xl font-semibold tracking-tight text-white transition group-hover:text-neutral-300 sm:text-2xl">
                          {post.title}
                        </h3>

                        <p className="mt-3 line-clamp-2 leading-7 text-neutral-400">
                          {post.summary}
                        </p>

                        <p className="mt-4 text-sm font-medium text-neutral-300 transition group-hover:text-white">
                          Read article →
                        </p>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}