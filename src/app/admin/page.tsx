import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logoutAction } from "./actions";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const [totalPosts, publishedPosts, draftPosts, latestPost] =
    await Promise.all([
      prisma.post.count(),

      prisma.post.count({
        where: {
          status: "PUBLISHED",
        },
      }),

      prisma.post.count({
        where: {
          status: "DRAFT",
        },
      }),

      prisma.post.findFirst({
        orderBy: {
          updatedAt: "desc",
        },
        select: {
          updatedAt: true,
        },
      }),
    ]);

  const lastUpdated = latestPost
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(latestPost.updatedAt)
    : "—";

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-2 text-sm text-neutral-500">
              Siddhant Rajan
            </p>

            <h1 className="text-3xl font-semibold tracking-tight">
              Admin Dashboard
            </h1>

            <p className="mt-3 text-neutral-400">
              Manage your blog posts and portfolio content.
            </p>
          </div>

          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-medium text-neutral-300 transition hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
            >
              Logout
            </button>
          </form>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-sm text-neutral-500">Total Posts</p>
            <p className="mt-3 text-3xl font-semibold">
              {totalPosts}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-sm text-neutral-500">Published</p>
            <p className="mt-3 text-3xl font-semibold">
              {publishedPosts}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-sm text-neutral-500">Drafts</p>
            <p className="mt-3 text-3xl font-semibold">
              {draftPosts}
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-sm text-neutral-500">Last Updated</p>
            <p className="mt-3 text-lg font-medium">
              {lastUpdated}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
  <h2 className="text-xl font-semibold">
    Quick Actions
  </h2>

  <p className="mt-2 text-sm text-neutral-400">
    Create and manage your blog content.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <Link
      href="/admin/posts"
      className="rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium transition hover:border-neutral-500 hover:bg-neutral-900"
    >
      Manage Posts
    </Link>

    <Link
      href="/admin/posts/new"
      className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
    >
      + New Post
    </Link>
  </div>
</div>
      </div>
    </main>
  );
}