"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Film, Globe, Calendar } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

const NATIONALITIES = [
  "Afghanistan", "Argentina", "Australia", "Austria", "Belgium", "Brazil",
  "Canada", "Chile", "China", "Colombia", "Egypt", "Finland", "France",
  "Germany", "Ghana", "Greece", "India", "Indonesia", "Iran", "Ireland",
  "Italy", "Japan", "Kenya", "South Korea", "Mexico", "Netherlands",
  "Nigeria", "Norway", "Pakistan", "Philippines", "Poland", "Portugal",
  "Russia", "South Africa", "Spain", "Sweden", "Switzerland", "Turkey",
  "Ukraine", "United Kingdom", "United States", "Vietnam", "Other",
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 60 }, (_, i) => currentYear - 18 - i);

export default function OnboardingPage() {
  const router = useRouter();
  const [nationality, setNationality] = useState("");
  const [birthYear, setBirthYear] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.replace("/login");
    });
  }, [router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nationality || birthYear === "") return;
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }
    const { error: err } = await supabase
      .from("profiles")
      .upsert(
        {
          id: user.id,
          email: user.email ?? "",
          nationality,
          birth_year: Number(birthYear),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-panel rounded-2xl p-8 border border-white/10"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-white/10">
            <Film className="w-8 h-8 text-amber-400/90" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Almost there
          </span>
        </div>
        <p className="text-sm text-white/60 mb-6">
          Two quick details so we can tailor picks for our community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
              <Globe className="w-4 h-4 text-white/50" />
              Nationality
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "18px" }}
            >
              <option value="">Select</option>
              {NATIONALITIES.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white/50" />
              Birth year
            </label>
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value ? Number(e.target.value) : "")}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "18px" }}
            >
              <option value="">Select</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          {error && <p className="text-sm text-red-400/90">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 hover:bg-amber-500/30 transition font-medium disabled:opacity-50"
          >
            {loading ? "Saving…" : "Continue"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
