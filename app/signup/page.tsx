import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth-form";
import { AuthVisual } from "@/components/auth-visual";
import { signUpWithEmail } from "@/lib/auth/actions";
import { getAuth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create an account — Goodcourse",
  description: "Create a Goodcourse account and make room for what’s next.",
};

export default async function SignupPage() {
  const { data: session } = await getAuth().getSession();

  if (session?.user) {
    redirect("/account");
  }

  return (
    <main className="auth-page">
      <header className="auth-header">
        <Link className="wordmark" href="/" aria-label="Goodcourse home">
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>goodcourse</span>
        </Link>
        <Link className="auth-back-link" href="/">Back to home</Link>
      </header>
      <section className="auth-content" aria-labelledby="auth-title">
        <div className="auth-layout">
          <div className="auth-card">
            <p className="eyebrow">START YOUR NEXT CHAPTER</p>
            <h1 id="auth-title">Make room to grow.</h1>
            <p className="auth-description">
              Create your account to keep your courses and progress together.
            </p>
            <AuthForm action={signUpWithEmail} mode="signup" />
          </div>
          <AuthVisual />
        </div>
        <p className="auth-footnote">A little room for what’s next.</p>
      </section>
    </main>
  );
}
