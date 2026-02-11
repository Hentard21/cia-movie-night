"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Film, User, LogOut, Lock, Unlock } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

export function Navbar() {
  const router = useRouter();
  const { user, isAdmin, signOut, unlockAdmin, lockAdmin } = useUser();
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [adminError, setAdminError] = useState(false);

  const handleSignOut = () => {
    signOut();
    router.replace("/welcome");
    router.refresh();
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlockAdmin(adminPassword)) {
      setAdminPassword("");
      setShowAdminInput(false);
      setAdminError(false);
      router.refresh();
    } else {
      setAdminError(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50 shadow-[0_1px_0_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="w-full max-w-6xl min-w-0 mx-auto px-4 h-14 flex items-center justify-between gap-2">
        <Link
          href="/"
          className="flex items-center gap-2 text-[#1d1d1f] hover:opacity-80 transition flex-shrink-0 min-w-0 overflow-hidden"
        >
          <Film className="w-6 h-6 text-[#007AFF] flex-shrink-0" />
          <span className="font-semibold tracking-tight truncate">Movie Night</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {user ? (
            <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-2xl bg-[#F5F5F7] border border-[#d2d2d7]/60 min-w-0 max-w-[90px] sm:max-w-[140px] md:max-w-[160px] overflow-hidden">
              <User className="w-4 h-4 text-[#86868b] flex-shrink-0" />
              <span className="text-sm text-[#1d1d1f] truncate">
                {user.full_name} · {user.course} {user.level}
              </span>
            </div>
          ) : (
            <Link
              href="/welcome"
              className="px-3 py-2 rounded-2xl text-sm font-medium text-[#007AFF] hover:bg-[#007AFF]/10 transition"
            >
              Sign in to vote
            </Link>
          )}

          {!isAdmin ? (
            <button
              type="button"
              onClick={() => setShowAdminInput(!showAdminInput)}
              className="p-2 rounded-2xl text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#F5F5F7] transition flex-shrink-0"
              aria-label="Admin"
            >
              <Lock className="w-4 h-4" />
            </button>
          ) : (
            <>
              <Link
                href="/admin"
                className="hidden sm:inline-flex px-2 sm:px-3 py-2 rounded-2xl text-sm font-medium text-[#007AFF] hover:bg-[#007AFF]/10 transition flex-shrink-0"
              >
                Admin
              </Link>
              <button
                type="button"
                onClick={lockAdmin}
                className="p-2 rounded-2xl text-[#007AFF] hover:bg-[#007AFF]/10 transition flex-shrink-0"
                aria-label="Exit admin"
              >
                <Unlock className="w-4 h-4" />
              </button>
            </>
          )}

          {user ? (
            <button
              onClick={handleSignOut}
              className="p-2 rounded-2xl text-[#86868b] hover:text-[#1d1d1f] hover:bg-[#F5F5F7] transition flex-shrink-0"
              aria-label="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      </div>

      {showAdminInput && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40"
          onClick={() => {
            setShowAdminInput(false);
            setAdminError(false);
          }}
          role="dialog"
          aria-label="Admin login"
        >
          <form
            onSubmit={handleAdminSubmit}
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl bg-white p-4 shadow-xl border border-[#d2d2d7] flex flex-col sm:flex-row gap-3 min-w-[260px]"
          >
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => {
                setAdminPassword(e.target.value);
                setAdminError(false);
              }}
              placeholder="Admin password"
              className="px-3 py-2 rounded-xl border border-[#d2d2d7] text-sm focus:outline-none focus:border-[#007AFF] flex-1"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowAdminInput(false);
                  setAdminError(false);
                }}
                className="px-3 py-2 rounded-xl border border-[#d2d2d7] text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-[#007AFF] text-white text-sm font-medium"
              >
                Unlock
              </button>
            </div>
            {adminError && (
              <p className="text-red-500 text-xs">Wrong password</p>
            )}
          </form>
        </div>
      )}
    </header>
  );
}
