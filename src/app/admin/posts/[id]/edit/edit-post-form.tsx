"use client";

import Link from "next/link";
import { useActionState } from "react";
import {
  updatePostAction,
  type UpdatePostState,
} from "./actions";

type EditPostFormProps = {
  post: {
    id: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    status: "DRAFT" | "PUBLISHED";
  };
};

const initialState: UpdatePostState = {};

export function EditPostForm({ post }: EditPostFormProps) {
  const updatePostWithId = updatePostAction.bind(null, post.id);

  const [state, formAction, pending] = useActionState(
    updatePostWithId,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-8">
      {state.error ? (
        <div className="rounded-xl border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {state.error}
        </div>
      ) : null}

      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={post.title}
              className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-white outline-none transition focus:border-neutral-600"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Slug
            </label>

            <input
              id="slug"
              name="slug"
              type="text"
              required
              defaultValue={post.slug}
              className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 text-white outline-none transition focus:border-neutral-600"
            />

            <p className="mt-2 text-xs text-neutral-500">
              Article URL: /blog/{post.slug}
            </p>
          </div>

          <div>
            <label
              htmlFor="summary"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Summary
            </label>

            <textarea
              id="summary"
              name="summary"
              required
              rows={3}
              defaultValue={post.summary}
              className="w-full resize-y rounded-xl border border-neutral-800 bg-black px-4 py-3 text-white outline-none transition focus:border-neutral-600"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              Content
            </label>

            <textarea
              id="content"
              name="content"
              required
              rows={18}
              defaultValue={post.content}
              className="w-full resize-y rounded-xl border border-neutral-800 bg-black px-4 py-3 font-mono text-sm leading-7 text-white outline-none transition focus:border-neutral-600"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/admin/posts"
          className="rounded-lg border border-neutral-800 px-5 py-3 text-center text-sm font-medium text-neutral-300 transition hover:bg-neutral-900 hover:text-white"
        >
          Cancel
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            name="status"
            value="DRAFT"
            disabled={pending}
            className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium transition hover:bg-neutral-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "Saving..." : "Save as Draft"}
          </button>

          <button
            type="submit"
            name="status"
            value="PUBLISHED"
            disabled={pending}
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending
              ? "Saving..."
              : post.status === "PUBLISHED"
                ? "Update Published Post"
                : "Publish"}
          </button>
        </div>
      </div>
    </form>
  );
}