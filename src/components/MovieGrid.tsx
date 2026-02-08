"use client";

import { MovieCard } from "./MovieCard";
import type { MovieWithVotes } from "@/lib/supabase/types";

export function MovieGrid({
  movies,
  totalVotes,
  myVoteMovieId,
}: {
  movies: MovieWithVotes[];
  totalVotes: number;
  myVoteMovieId: string | null;
}) {
  if (movies.length === 0) {
    return (
      <div className="rounded-[24px] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <p className="text-[#86868b] text-sm">No movies in final voting yet. Approve suggestions as admin to add them.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {movies.map((movie, i) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          rank={i + 1}
          isVoted={myVoteMovieId === movie.id}
          totalVotes={totalVotes}
        />
      ))}
    </div>
  );
}
