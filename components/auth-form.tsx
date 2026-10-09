"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { authClient } from "@/lib/auth/client";
import type { AuthActionState } from "@/lib/auth/actions";

type AuthFormProps = {
  action: (
    state: AuthActionState,
    formData: FormData,
  ) => Promise<AuthActionState>;
  mode: "login" | "signup";
};

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.12.08 1.72 1.15 1.72 1.15 1 1.71 2.62 1.22 3.26.94.1-.73.4-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.76 1.15 2.98 0 4.27-2.6 5.22-5.08 5.5.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export function AuthForm({ action, mode }: AuthFormProps) {
  const [state, formAction, isPending] = useActionState(action, null);
  const [socialError, setSocialError] = useState("");
  const [isSocialPending, setIsSocialPending] = useState(false);
  const isSignUp = mode === "signup";

  async function signInWithGitHub() {
    setSocialError("");
    setIsSocialPending(true);

    try {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/account",
      });

      if (error) {
        setSocialError(error.message || "GitHub sign-in couldn't be started.");
        setIsSocialPending(false);
      }
    } catch (error) {
      console.error("GitHub sign-in failed to start.", error);
      setSocialError("GitHub sign-in couldn't be started. Please try again.");
      setIsSocialPending(false);
    }
  }

  return (
    <div className="auth-form-wrap">
      <button
        className="auth-social-button"
        type="button"
        onClick={signInWithGitHub}
        disabled={isPending || isSocialPending}
      >
        <GitHubIcon />
        {isSocialPending ? "Connecting to GitHub..." : "Continue with GitHub"}
      </button>

      <div className="auth-divider"><span>or with email</span></div>

      <form action={formAction} onSubmit={() => setSocialError("")} className="auth-form">
        {isSignUp && (
          <label className="auth-field">
            <span>Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              minLength={2}
              required
              placeholder="Your name"
              disabled={isPending || isSocialPending}
            />
          </label>
        )}
        <label className="auth-field">
          <span>Email address</span>
          <input
            name="email"
            type="email"
            autoComplete={isSignUp ? "email" : "username"}
            required
            placeholder="you@example.com"
            disabled={isPending || isSocialPending}
          />
        </label>
        <label className="auth-field">
          <span>Password</span>
          <input
            name="password"
            type="password"
            autoComplete={isSignUp ? "new-password" : "current-password"}
            minLength={isSignUp ? 8 : undefined}
            required
            placeholder={isSignUp ? "At least 8 characters" : "Your password"}
            disabled={isPending || isSocialPending}
          />
        </label>

        {(socialError || state?.error) && (
          <p className="auth-error" role="alert">
            {socialError || state?.error}
          </p>
        )}

        <button
          className="button button-primary auth-submit"
          type="submit"
          disabled={isPending || isSocialPending}
        >
          {isPending
            ? isSignUp ? "Creating your account..." : "Signing in..."
            : isSignUp ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="auth-switch">
        {isSignUp ? "Already have an account?" : "New to Goodcourse?"}{" "}
        <Link href={isSignUp ? "/login" : "/signup"}>
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}
