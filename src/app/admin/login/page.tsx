import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import LoginForm from "./login-form";

export default async function AdminLoginPage() {
  const session = await getAdminSession();

  // If already logged in, don't show the login page again.
  if (session) {
    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-12 text-white">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm text-neutral-500">
            Siddhant Rajan
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">
            Admin Sign In
          </h1>

          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Sign in to manage your blog posts and portfolio content.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl sm:p-8">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-neutral-600">
          Private administration area
        </p>
      </div>
    </main>
  );
}