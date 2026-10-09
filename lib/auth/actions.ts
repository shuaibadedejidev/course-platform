"use server";

import { redirect } from "next/navigation";
import { getAuth } from "@/lib/auth/server";

export type AuthActionState = {
  error?: string;
} | null;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export async function signUpWithEmail(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const name = readString(formData, "name").trim();
  const email = readString(formData, "email").trim().toLowerCase();
  const password = readString(formData, "password");

  if (name.length < 2) {
    return { error: "Enter your name (at least 2 characters)." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Enter a valid email address." };
  }

  if (password.length < 8) {
    return { error: "Your password must be at least 8 characters." };
  }

  const { error } = await getAuth().signUp.email({ email, name, password });

  if (error) {
    return { error: error.message || "We couldn't create your account." };
  }

  redirect("/account");
}

export async function signInWithEmail(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const email = readString(formData, "email").trim().toLowerCase();
  const password = readString(formData, "password");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !password) {
    return { error: "Enter a valid email address and password." };
  }

  const { error } = await getAuth().signIn.email({ email, password });

  if (error) {
    return { error: error.message || "We couldn't sign you in." };
  }

  redirect("/account");
}
