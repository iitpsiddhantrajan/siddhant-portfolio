import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { CreatePostForm } from "./create-post-form";

export default async function NewPostPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
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
          <h1 className="text-3xl font-semibold tracking-tight">
            Create New Post
          </h1>

          <p className="mt-3 text-neutral-400">
            Write a new article and save it as a draft or publish it.
          </p>
        </div>

        <CreatePostForm />
      </div>
    </main>
  );
}