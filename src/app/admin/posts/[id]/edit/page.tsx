import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { EditPostForm } from "./edit-post-form";

type EditPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPostPage({
  params,
}: EditPostPageProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      summary: true,
      content: true,
      status: true,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/admin/posts"
          className="mb-6 inline-block text-sm text-neutral-500 transition hover:text-white"
        >
          ← Back to Posts
        </Link>

        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              Edit Post
            </h1>

            <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
              {post.status === "PUBLISHED"
                ? "Published"
                : "Draft"}
            </span>
          </div>

          <p className="text-neutral-400">
            Update your article or change its publication status.
          </p>
        </div>

        <EditPostForm post={post} />
      </div>
    </main>
  );
}