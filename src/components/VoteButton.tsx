"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Vote } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/contexts/UserContext";

export function VoteButton({
  movieId,
  isVoted,
  disabled,
}: {
  movieId: string;
  isVoted: boolean;
  disabled?: boolean;
}) {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  async function ensureVoterProfile() {
    if (!user) return;
    const supabase = createClient();
    await supabase.from("voter_profiles").upsert(
      {
        id: user.id,
        full_name: user.full_name,
        course: user.course,
        level: user.level,
      },
      { onConflict: "id" }
    );
  }

  async function handleVote() {
    if (!user || disabled) return;
    setLoading(true);
    const supabase = createClient();
    await ensureVoterProfile();
    if (isVoted) {
      await supabase.from("votes").delete().eq("user_id", user.id).eq("movie_id", movieId);
    } else {
      await supabase.from("votes").delete().eq("user_id", user.id);
      await supabase.from("votes").insert({ user_id: user.id, movie_id: movieId });
    }
    setLoading(false);
    router.refresh();
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleVote}
      disabled={loading || disabled}
      className={`mt-3 w-full py-2.5 rounded-2xl text-sm font-medium flex items-center justify-center gap-2 transition disabled:opacity-50 ${
        isVoted
          ? "bg-[#007AFF] text-white shadow-[0_2px_8px_rgba(0,122,255,0.35)]"
          : "bg-[#F5F5F7] text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#e8e8ed]"
      }`}
    >
      {isVoted ? (
        <>
          <Check className="w-4 h-4" />
          Voted
        </>
      ) : (
        <>
          <Vote className="w-4 h-4" />
          Vote
        </>
      )}
    </motion.button>
  );
}
