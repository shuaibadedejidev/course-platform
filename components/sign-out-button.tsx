"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/client";

type SignOutButtonProps = {
  variant?: "default" | "menu";
};

export function SignOutButton({ variant = "default" }: SignOutButtonProps) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  async function signOut() {
    setError("");
    setIsPending(true);

    try {
      const { error: signOutError } = await authClient.signOut();

      if (signOutError) {
        setError(signOutError.message || "We couldn't sign you out.");
        setIsPending(false);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch (signOutError) {
      console.error("Sign-out failed.", signOutError);
      setError("We couldn't sign you out. Please try again.");
      setIsPending(false);
    }
  }

  return (
    <div className="auth-signout">
      <button
        className={variant === "menu" ? "profile-signout" : "button button-outline"}
        type="button"
        onClick={signOut}
        disabled={isPending}
      >
        {isPending ? "Signing out..." : "Sign out"}
      </button>
      {error && <p className="auth-error" role="alert">{error}</p>}
    </div>
  );
}
