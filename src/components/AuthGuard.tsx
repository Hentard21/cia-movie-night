"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";

const WELCOME = "/welcome";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, ready } = useUser();

  useEffect(() => {
    if (!ready || pathname === WELCOME) return;
    if (!user) {
      router.replace(WELCOME);
    }
  }, [pathname, user, ready, router]);

  if (ready && !user && pathname !== WELCOME) {
    return null;
  }
  return <>{children}</>;
}
