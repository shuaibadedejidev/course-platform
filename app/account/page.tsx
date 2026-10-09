import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/sign-out-button";
import { getAuth } from "@/lib/auth/server";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Your account — Goodcourse",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const { data: session } = await getAuth().getSession();

  if (!session?.user) {
    redirect("/login");
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
        <Link className="auth-back-link" href="/courses">Explore courses</Link>
      </header>
      <section className="auth-content" aria-labelledby="account-title">
        <div className="auth-card account-card">
          <p className="eyebrow">YOUR GOODCOURSE ACCOUNT</p>
          <h1 id="account-title">Welcome, {session.user.name || "learner"}.</h1>
          <p className="auth-description">
            Signed in as <strong>{session.user.email}</strong>
          </p>
          <div className="account-actions">
            <Link className="button button-primary" href="/courses">
              Browse courses
            </Link>
            <SignOutButton />
          </div>
        </div>
        <p className="auth-footnote">Your learning journey starts here.</p>
      </section>
    </main>
  );
}
