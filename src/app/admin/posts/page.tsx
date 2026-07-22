import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { DeletePostButton } from "./delete-post-button";

export default async function AdminPostsPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const posts = await prisma.post.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
      status: true,
      updatedAt: true,
      publishedAt: true,
    },
  });

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link
              href="/admin"
              className="mb-4 inline-block text-sm text-neutral-500 transition hover:text-white"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="text-3xl font-semibold tracking-tight">
              Posts
            </h1>

            <p className="mt-3 text-neutral-400">
              Create, edit, publish, and manage your blog articles.
            </p>
          </div>

          <Link
            href="/admin/posts/new"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            + New Post
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
          {posts.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <h2 className="text-lg font-medium">
                No posts yet
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Create your first article to get started.
              </p>

              <Link
                href="/admin/posts/new"
                className="mt-6 inline-block rounded-lg border border-neutral-700 px-4 py-2 text-sm transition hover:border-neutral-500 hover:bg-neutral-900"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-neutral-800">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h2 className="font-medium">
                      {post.title}
                    </h2>

                    <p className="mt-1 text-sm text-neutral-500">
                      /blog/{post.slug}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
  <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
    {post.status === "PUBLISHED"
      ? "Published"
      : "Draft"}
  </span>

  <span className="text-sm text-neutral-500">
    {new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(post.updatedAt)}
  </span>

  <Link
    href={`/admin/posts/${post.id}/edit`}
    className="rounded-lg border border-neutral-700 px-3 py-1.5 text-sm font-medium transition hover:border-neutral-500 hover:bg-neutral-900"
  >
    Edit
  </Link>

  <DeletePostButton
  postId={post.id}
  postTitle={post.title}
/>
</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}