"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createAdminSession } from "@/lib/auth";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !email.trim() ||
    !password
  ) {
    return {
      error: "Email and password are required.",
    };
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminPasswordHash) {
    console.error("Admin authentication environment variables are missing.");

    return {
      error: "Unable to sign in. Please try again later.",
    };
  }

  const emailMatches =
    email.trim().toLowerCase() === adminEmail.trim().toLowerCase();

  const passwordMatches = await bcrypt.compare(
    password,
    adminPasswordHash,
  );

  if (!emailMatches || !passwordMatches) {
    return {
      error: "Invalid email or password.",
    };
  }

  await createAdminSession();

  redirect("/admin");
}