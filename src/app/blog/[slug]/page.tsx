import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.post.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    select: {
      title: true,
      summary: true,
      seoTitle: true,
      seoDescription: true,
    },
  });

  if (!post) {
    return {
      title: "Article Not Found | Siddhant Rajan",
    };
  }

  return {
    title: post.seoTitle || `${post.title} | Siddhant Rajan`,
    description: post.seoDescription || post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = await prisma.post.findFirst({
    where: {
      slug,
      status: "PUBLISHED",
    },
    select: {
      title: true,
      slug: true,
      summary: true,
      content: true,
      publishedAt: true,
      readingTime: true,
      updatedAt: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 transition hover:text-white"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12 mt-10">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
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

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-neutral-400">
            {post.summary}
          </p>
        </header>

        <div className="border-t border-neutral-800 pt-10">
  <article className="prose prose-invert prose-neutral max-w-none">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {post.content}
    </ReactMarkdown>
  </article>
</div>

        <footer className="mt-16 border-t border-neutral-800 pt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-neutral-400 transition hover:text-white"
          >
            ← View all articles
          </Link>
        </footer>
      </article>
    </main>
  );
}