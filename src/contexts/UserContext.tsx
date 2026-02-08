"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { VoterProfile } from "@/lib/supabase/types";

const STORAGE_KEY = "movie-voting-user";
const ADMIN_KEY = "movie-voting-admin";

export type LocalUser = VoterProfile & { id: string };

function loadUser(): LocalUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as LocalUser;
    if (data?.id && data?.full_name && data?.course && data?.level) return data;
  } catch {
    // ignore
  }
  return null;
}

function loadAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(ADMIN_KEY) === "true";
}

type UserContextValue = {
  user: LocalUser | null;
  isAdmin: boolean;
  ready: boolean;
  setUser: (u: LocalUser) => void;
  signOut: () => void;
  unlockAdmin: (password: string) => boolean;
  lockAdmin: () => void;
};

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<LocalUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUserState(loadUser());
    setIsAdmin(loadAdmin());
    setReady(true);
  }, []);

  const setUser = useCallback((u: LocalUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    setUserState(u);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ADMIN_KEY);
    setUserState(null);
    setIsAdmin(false);
  }, []);

  const unlockAdmin = useCallback((password: string): boolean => {
    if (password === "3141") {
      localStorage.setItem(ADMIN_KEY, "true");
      setIsAdmin(true);
      return true;
    }
    return false;
  }, []);

  const lockAdmin = useCallback(() => {
    localStorage.removeItem(ADMIN_KEY);
    setIsAdmin(false);
  }, []);

  const value = useMemo<UserContextValue>(
    () => ({
      user,
      isAdmin,
      ready,
      setUser,
      signOut,
      unlockAdmin,
      lockAdmin,
    }),
    [user, isAdmin, ready, setUser, signOut, unlockAdmin, lockAdmin]
  );

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
}
