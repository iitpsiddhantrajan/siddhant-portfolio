"use client";

import { useState, useTransition } from "react";
import { deletePostAction } from "./actions";

type DeletePostButtonProps = {
  postId: string;
  postTitle: string;
};

export function DeletePostButton({
  postId,
  postTitle,
}: DeletePostButtonProps) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deletePostAction(postId);
      setConfirming(false);
    });
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-neutral-400">
          Delete &quot;{postTitle}&quot;?
        </span>

        <button
          type="button"
          onClick={() => setConfirming(false)}
          disabled={pending}
          className="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs transition hover:bg-neutral-900"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleDelete}
          disabled={pending}
          className="rounded-lg border border-red-900 bg-red-950/30 px-3 py-1.5 text-xs text-red-300 transition hover:bg-red-950/60 disabled:opacity-50"
        >
          {pending ? "Deleting..." : "Confirm Delete"}
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setConfirming(true)}
      className="rounded-lg border border-red-950 px-3 py-1.5 text-sm text-red-400 transition hover:border-red-900 hover:bg-red-950/30"
    >
      Delete
    </button>
  );
}