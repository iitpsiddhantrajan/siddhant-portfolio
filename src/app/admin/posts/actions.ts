"use server";

import { revalidatePath } from "next/cache";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function deletePostAction(postId: string) {
  const session = await getAdminSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    select: {
      id: true,
    },
  });

  if (!post) {
    return;
  }

  await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/posts");
}