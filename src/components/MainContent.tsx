"use client";

import { useUser } from "@/contexts/UserContext";
import { Navbar } from "@/components/Navbar";
import { VideoHero } from "@/components/VideoHero";
import { Hero } from "@/components/Hero";
import { SuggestionsSection } from "@/components/SuggestionsSection";
import { MovieGrid } from "@/components/MovieGrid";
import { Leaderboard } from "@/components/Leaderboard";
import { QuizSection } from "@/components/QuizSection";
import type { MovieWithVotes } from "@/lib/supabase/types";
import type { Suggestion } from "@/lib/supabase/types";

type VoteRow = { movie_id: string; user_id: string };
type SuggestionLikeRow = { suggestion_id: string; user_id: string };
type VoterProfileRow = { id: string; full_name: string; course: string; level: string };

export function MainContent({
  movies,
  totalVotes,
  votes,
  suggestions,
  suggestionLikes,
  voterProfiles,
}: {
  movies: MovieWithVotes[];
  totalVotes: number;
  votes: VoteRow[];
  suggestions: (Suggestion & { like_count: number })[];
  suggestionLikes: SuggestionLikeRow[];
  voterProfiles: VoterProfileRow[];
}) {
  const { user } = useUser();
  const myVoteMovieId = user ? votes.find((v) => v.user_id === user.id)?.movie_id ?? null : null;
  const myLikedSuggestionIds = user
    ? new Set(suggestionLikes.filter((l) => l.user_id === user.id).map((l) => l.suggestion_id))
    : new Set<string>();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7]">
      <Navbar />
      <VideoHero />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <Hero />
        <SuggestionsSection
          suggestions={suggestions}
          myLikedSuggestionIds={myLikedSuggestionIds}
        />
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">Final Voting</h2>
          <MovieGrid
            movies={movies}
            totalVotes={totalVotes}
            myVoteMovieId={myVoteMovieId}
          />
        </section>
        <QuizSection />
        <Leaderboard voterProfiles={voterProfiles} votes={votes} movies={movies} />
      </main>
    </div>
  );
}
