"use client";

import Link from "next/link";
import { SignOutButton } from "@/components/sign-out-button";

type ProfileMenuProps = {
  email: string;
  name: string;
};

export function ProfileMenu({ email, name }: ProfileMenuProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "L";

  return (
    <details className="profile-menu">
      <summary className="profile-trigger" aria-label="Open account menu">
        <span className="profile-avatar" aria-hidden="true">{initial}</span>
        <span className="profile-name">{name}</span>
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
          <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="profile-dropdown">
        <div className="profile-identity">
          <span className="profile-dropdown-name">{name}</span>
          <span className="profile-email">{email}</span>
        </div>
        <Link className="profile-menu-link" href="/account">My account</Link>
        <Link className="profile-menu-link" href="/courses">Browse courses</Link>
        <div className="profile-menu-divider" />
        <SignOutButton variant="menu" />
      </div>
    </details>
  );
}
