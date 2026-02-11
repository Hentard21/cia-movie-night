"use client";

import { usePathname } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

const WELCOME = "/welcome";

/** Optional auth: allow viewing all pages without user. No redirect to welcome. */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { ready } = useUser();

  if (!ready && pathname !== WELCOME) {
    return null;
  }
  return <>{children}</>;
}
