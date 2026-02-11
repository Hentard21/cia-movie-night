"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Trophy, Clock } from "lucide-react";
import { isVotingOpen, getNextOpen, getNextClose } from "@/lib/votingWindow";
import { MovieCard } from "./MovieCard";
import type { MovieWithVotes } from "@/lib/supabase/types";

const MAX_FINALISTS = 5;

function formatDate(d: Date): string {
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function FinalVoteSection({
  movies,
  totalVotes,
  myVoteMovieId,
  winnerMovieId,
  isAdmin,
}: {
  movies: MovieWithVotes[];
  totalVotes: number;
  myVoteMovieId: string | null;
  winnerMovieId: string | null;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const votingOpen = useMemo(() => isVotingOpen(), []);
  const nextOpen = useMemo(() => getNextOpen(), []);
  const nextClose = useMemo(() => getNextClose(), []);

  const top5 = useMemo(() => {
    const sorted = [...movies].sort((a, b) => (b.vote_count ?? 0) - (a.vote_count ?? 0));
    return sorted.slice(0, MAX_FINALISTS);
  }, [movies]);

  const canVote = votingOpen && !winnerMovieId;
  const winnerMovie = winnerMovieId ? top5.find((m) => m.id === winnerMovieId) : null;
  const ladderMovies = winnerMovieId ? top5.filter((m) => m.id !== winnerMovieId) : top5;

  async function handleDeclareWinner(movieId: string) {
    const res = await fetch("/api/admin/declare-winner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movieId, password: "3141" }),
    });
    if (res.ok) router.refresh();
  }

  if (top5.length === 0) {
    return (
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">Final vote</h2>
        <div className="rounded-[24px] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <p className="text-[#86868b] text-sm">No films in the final yet. Approve up to 5 suggestions as admin.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <h2 className="text-xl font-semibold text-[#1d1d1f]">Final vote — top 5</h2>
        <div className="flex items-center gap-2 text-sm text-[#86868b]">
          <Clock className="w-4 h-4" />
          {winnerMovieId ? (
            <span>Voting closed</span>
          ) : votingOpen ? (
            <span>Open until {formatDate(nextClose)}</span>
          ) : (
            <span>Opens {formatDate(nextOpen)}</span>
          )}
        </div>
      </div>

      {winnerMovie && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3 text-[#1d1d1f] font-medium">
            <Trophy className="w-5 h-5 text-amber-500" />
            Winner
          </div>
          <div className="rounded-[24px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] ring-2 ring-amber-400/50">
            <MovieCard
              movie={winnerMovie}
              rank={0}
              isVoted={myVoteMovieId === winnerMovie.id}
              totalVotes={totalVotes}
              isWinner
              votingClosed
              canVote={false}
              isAdmin={isAdmin}
            />
          </div>
        </motion.div>
      )}

      {ladderMovies.length > 0 && (
        <>
          {!winnerMovie && (
            <p className="text-sm text-[#86868b] mb-3">Tournament ladder — vote for one</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ladderMovies.map((movie, i) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                rank={i + 1}
                isVoted={myVoteMovieId === movie.id}
                totalVotes={totalVotes}
                votingClosed={!!winnerMovieId || !votingOpen}
                canVote={canVote}
                isAdmin={isAdmin}
                onDeclareWinner={() => handleDeclareWinner(movie.id)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
