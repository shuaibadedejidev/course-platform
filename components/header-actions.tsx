import Link from "next/link";
import { getAuth } from "@/lib/auth/server";
import { ProfileMenu } from "@/components/profile-menu";

type HeaderActionsProps = {
  className?: string;
};

export async function HeaderActions({
  className = "header-actions",
}: HeaderActionsProps) {
  const { data: session } = await getAuth().getSession();

  return (
    <div className={className}>
      {session?.user ? (
        <ProfileMenu
          email={session.user.email}
          name={session.user.name || "Learner"}
        />
      ) : (
        <>
          <Link className="login-link" href="/login">Log in</Link>
          <Link className="button button-small button-primary signup-button" href="/signup">
            Sign up
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </>
      )}
    </div>
  );
}
