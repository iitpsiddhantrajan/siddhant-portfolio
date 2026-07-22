"use server";

import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type CreatePostState = {
  error?: string;
};

export async function createPostAction(
  _previousState: CreatePostState,
  formData: FormData,
): Promise<CreatePostState> {
  // Security: only the authenticated admin can create posts.
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  // Read form values.
  const title = formData.get("title");
  const slug = formData.get("slug");
  const summary = formData.get("summary");
  const content = formData.get("content");
  const status = formData.get("status");

  // Validate required fields.
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

  // Slugs must be unique because they become /blog/[slug].
  const existingPost = await prisma.post.findUnique({
    where: {
      slug: cleanSlug,
    },
    select: {
      id: true,
    },
  });

  if (existingPost) {
    return {
      error: "A post with this slug already exists.",
    };
  }

  await prisma.post.create({
    data: {
      title: cleanTitle,
      slug: cleanSlug,
      summary: cleanSummary,
      content: cleanContent,
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
    },
  });

  redirect("/admin/posts");
}