"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, ArrowLeft, Shield } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { createClient } from "@/lib/supabase/client";
import { QUIZ_QUESTIONS } from "@/lib/quiz";

type QuizRow = { id: string; user_id: string; q1: string; q2: string; q3: string; q4: string; q5: string };

function aggregateQuiz(responses: QuizRow[]) {
  const total = responses.length;
  if (total === 0) return null;
  const byQuestion: Record<string, Record<string, number>> = {};
  QUIZ_QUESTIONS.forEach((q) => {
    byQuestion[q.id] = {};
    q.options.forEach((opt) => {
      byQuestion[q.id][opt.value] = 0;
    });
  });
  responses.forEach((r) => {
    (["q1", "q2", "q3", "q4", "q5"] as const).forEach((key) => {
      const v = r[key];
      if (v && byQuestion[key]) byQuestion[key][v] = (byQuestion[key][v] ?? 0) + 1;
    });
  });
  return { total, byQuestion };
}

export default function AdminPage() {
  const router = useRouter();
  const { user, isAdmin, ready } = useUser();
  const [responses, setResponses] = useState<QuizRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ready) return;
    if (!user || !isAdmin) {
      router.replace("/");
      return;
    }
    const supabase = createClient();
    supabase
      .from("quiz_responses")
      .select("id, user_id, q1, q2, q3, q4, q5")
      .then(({ data }) => {
        setResponses((data ?? []) as QuizRow[]);
        setLoading(false);
      });
  }, [ready, user, isAdmin, router]);

  const aggregated = aggregateQuiz(responses);

  if (!ready || !user) return null;
  if (!isAdmin) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7]">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]/50">
        <div className="container mx-auto px-4 h-14 max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-2xl text-[#86868b] hover:bg-[#F5F5F7] hover:text-[#1d1d1f] transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Shield className="w-5 h-5 text-[#007AFF]" />
            <span className="font-semibold text-[#1d1d1f]">Admin</span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-6 h-6 text-[#007AFF]" />
          <h1 className="text-2xl font-semibold text-[#1d1d1f]">Survey DNA</h1>
        </div>
        <p className="text-sm text-[#86868b] mb-8">
          Aggregated results from the 5-question survey. Use this to see what the group prefers.
        </p>

        {loading ? (
          <div className="rounded-[24px] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[#86868b]">Loading…</p>
          </div>
        ) : !aggregated || aggregated.total === 0 ? (
          <div className="rounded-[24px] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[#86868b]">No survey responses yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-sm font-medium text-[#1d1d1f]">
              {aggregated.total} response{aggregated.total !== 1 ? "s" : ""} total
            </p>
            {QUIZ_QUESTIONS.map((q, i) => {
              const counts = aggregated.byQuestion[q.id];
              if (!counts) return null;
              const entries = Object.entries(counts)
                .filter(([, n]) => n > 0)
                .sort((a, b) => b[1] - a[1]);
              const optionLabel = (value: string) => q.options.find((o) => o.value === value)?.label ?? value;

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-[24px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-sm font-medium text-[#86868b] mb-3">{q.label}</h3>
                  <ul className="space-y-2">
                    {entries.map(([value, count]) => {
                      const pct = Math.round((count / aggregated.total) * 100);
                      return (
                        <li key={value} className="flex items-center gap-3">
                          <div className="flex-1 flex items-center gap-2">
                            <div
                              className="h-2 rounded-full bg-[#007AFF] transition-all duration-500"
                              style={{ width: `${pct}%`, minWidth: pct > 0 ? "4px" : 0 }}
                            />
                            <span className="text-sm text-[#1d1d1f]">{optionLabel(value)}</span>
                          </div>
                          <span className="text-sm font-medium text-[#007AFF] w-10 text-right">
                            {pct}%
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
