"use server";

import { redirect } from "next/navigation";
import { deleteAdminSession } from "@/lib/auth";

export async function logoutAction() {
  await deleteAdminSession();
  redirect("/admin/login");
}