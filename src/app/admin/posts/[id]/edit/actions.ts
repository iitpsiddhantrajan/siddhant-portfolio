"use server";

import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type UpdatePostState = {
  error?: string;
};

export async function updatePostAction(
  postId: string,
  _previousState: UpdatePostState,
  formData: FormData,
): Promise<UpdatePostState> {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const title = formData.get("title");
  const slug = formData.get("slug");
  const summary = formData.get("summary");
  const content = formData.get("content");
  const status = formData.get("status");

  if (
    typeof title !== "string" ||
    typeof slug !== "string" ||
    typeof summary !== "string" ||
    typeof content !== "string" ||
    typeof status !== "string"
  ) {
    return {
      error: "Invalid form data.",
    };
  }

  const cleanTitle = title.trim();

  const cleanSlug = slug
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");

  const cleanSummary = summary.trim();
  const cleanContent = content.trim();

  if (
    !cleanTitle ||
    !cleanSlug ||
    !cleanSummary ||
    !cleanContent
  ) {
    return {
      error: "Title, slug, summary, and content are required.",
    };
  }

  if (status !== "DRAFT" && status !== "PUBLISHED") {
    return {
      error: "Invalid post status.",
    };
  }

  const currentPost = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    select: {
      id: true,
      status: true,
      publishedAt: true,
    },
  });

  if (!currentPost) {
    return {
      error: "Post not found.",
    };
  }

  const slugOwner = await prisma.post.findFirst({
    where: {
      slug: cleanSlug,
      NOT: {
        id: postId,
      },
    },
    select: {
      id: true,
    },
  });

  if (slugOwner) {
    return {
      error: "Another post already uses this slug.",
    };
  }

  let publishedAt = currentPost.publishedAt;

  if (status === "PUBLISHED" && !publishedAt) {
    publishedAt = new Date();
  }

  if (status === "DRAFT") {
    publishedAt = null;
  }

  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      title: cleanTitle,
      slug: cleanSlug,
      summary: cleanSummary,
      content: cleanContent,
      status,
      publishedAt,
    },
  });

  redirect("/admin/posts");
}