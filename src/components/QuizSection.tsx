"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/contexts/UserContext";
import { QUIZ_QUESTIONS, Q_KEYS, type QuizAnswers } from "@/lib/quiz";

export function QuizSection() {
  const router = useRouter();
  const { user } = useUser();
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = Q_KEYS.every((k) => answers[k]);

  function setAnswer(q: (typeof Q_KEYS)[number], value: string) {
    setAnswers((prev) => ({ ...prev, [q]: value }));
  }

  async function handleSubmit() {
    if (!allAnswered || !user || submitting) return;
    setSubmitting(true);
    const supabase = createClient();
    await supabase.from("voter_profiles").upsert(
      { id: user.id, full_name: user.full_name, course: user.course, level: user.level },
      { onConflict: "id" }
    );
    const { error } = await supabase.from("quiz_responses").upsert(
      {
        user_id: user.id,
        q1: answers.q1!,
        q2: answers.q2!,
        q3: answers.q3!,
        q4: answers.q4!,
        q5: answers.q5!,
      },
      { onConflict: "user_id" }
    );
    setSubmitting(false);
    if (error) return;
    setSubmitted(true);
    router.refresh();
  }

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-4">
        <ClipboardList className="w-5 h-5 text-[#007AFF]" />
        <h2 className="text-xl font-semibold text-[#1d1d1f]">Quick survey</h2>
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-[24px] bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex p-3 rounded-2xl bg-[#34C759]/15 text-[#34C759] mb-4"
            >
              <Check className="w-8 h-8" />
            </motion.div>
            <p className="text-[#1d1d1f] font-medium">Thanks! Your answers have been saved.</p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-[24px] bg-white p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <p className="text-sm text-[#86868b] mb-6">5 quick questions — tap your choice for each.</p>
            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q) => (
                <div key={q.id}>
                  <p className="text-sm font-medium text-[#1d1d1f] mb-3">{q.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((opt) => {
                      const selected = answers[q.id as keyof QuizAnswers] === opt.value;
                      return (
                        <motion.button
                          key={opt.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setAnswer(q.id, opt.value)}
                          className={`px-4 py-2.5 rounded-2xl text-sm font-medium transition ${
                            selected
                              ? "bg-[#007AFF] text-white shadow-[0_2px_8px_rgba(0,122,255,0.35)]"
                              : "bg-[#F5F5F7] text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#e8e8ed]"
                          }`}
                        >
                          {opt.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <motion.button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered || submitting}
              whileHover={allAnswered && !submitting ? { scale: 1.01 } : {}}
              whileTap={allAnswered && !submitting ? { scale: 0.99 } : {}}
              className="mt-8 w-full py-4 rounded-2xl bg-[#007AFF] text-white font-semibold text-base disabled:opacity-50 disabled:pointer-events-none transition shadow-[0_2px_12px_rgba(0,122,255,0.4)] hover:shadow-[0_4px_20px_rgba(0,122,255,0.45)]"
            >
              {submitting ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  Submitting…
                </motion.span>
              ) : (
                "Submit"
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
