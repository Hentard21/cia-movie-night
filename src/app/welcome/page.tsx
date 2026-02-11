"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Film, User, BookOpen, BarChart3, X } from "lucide-react";
import { useUser } from "@/contexts/UserContext";

const COURSES = ["ELS", "IELTS", "Business", "TOEFL"] as const;
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

export default function WelcomePage() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [fullName, setFullName] = useState("");
  const [course, setCourse] = useState<(typeof COURSES)[number] | "">("");
  const [level, setLevel] = useState<(typeof LEVELS)[number] | "">("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !course || !level) return;
    setLoading(true);
    const id = crypto.randomUUID();
    setUser({
      id,
      full_name: fullName.trim(),
      course,
      level,
    });
    setLoading(false);
    router.replace("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F5F5F7] relative">
      <Link
        href="/"
        className="absolute top-4 right-4 p-2 rounded-2xl text-[#86868b] hover:bg-white hover:text-[#1d1d1f] transition z-10"
        aria-label="Skip registration"
      >
        <X className="w-6 h-6" />
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-[24px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl bg-[#007AFF]/10">
            <Film className="w-8 h-8 text-[#007AFF]" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-[#1d1d1f]">
            Movie Night
          </span>
        </div>
        <p className="text-[#86868b] text-sm mb-6">
          Enter your details to vote and suggest films. You can skip and browse only.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#1d1d1f] mb-2 flex items-center gap-2"
            >
              <User className="w-4 h-4 text-[#86868b]" />
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#86868b]" />
              Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value as (typeof COURSES)[number])}
              required
              className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#d2d2d7] text-[#1d1d1f] focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2386868b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "18px",
              }}
            >
              <option value="">Select course</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#86868b]" />
              Level
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as (typeof LEVELS)[number])}
              required
              className="w-full px-4 py-3 rounded-2xl bg-[#F5F5F7] border border-[#d2d2d7] text-[#1d1d1f] focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20 appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2386868b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 12px center",
                backgroundSize: "18px",
              }}
            >
              <option value="">Select level</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-2xl bg-[#007AFF] text-white font-medium hover:bg-[#0051D5] transition disabled:opacity-50 shadow-[0_2px_8px_rgba(0,122,255,0.35)]"
          >
            {loading ? "Entering…" : "Enter"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
