"use client";

import { LeaderboardSection } from "./LeaderboardSection";
import type { MovieWithVotes } from "@/lib/supabase/types";

type VoteRow = { movie_id: string; user_id: string };
type VoterProfileRow = { id: string; full_name: string; course: string; level: string };

export function Leaderboard({
  voterProfiles,
  votes,
  movies,
}: {
  voterProfiles: VoterProfileRow[];
  votes: VoteRow[];
  movies: MovieWithVotes[];
}) {
  const profileById = new Map(voterProfiles.map((p) => [p.id, p]));
  const movieById = new Map(movies.map((m) => [m.id, m]));

  const byCourse: Record<string, Record<string, number>> = {};
  const byLevel: Record<string, Record<string, number>> = {};

  votes.forEach((v) => {
    const profile = profileById.get(v.user_id);
    const course = profile?.course ?? "Unknown";
    const level = profile?.level ?? "Unknown";
    byCourse[course] = byCourse[course] ?? {};
    byCourse[course][v.movie_id] = (byCourse[course][v.movie_id] ?? 0) + 1;
    byLevel[level] = byLevel[level] ?? {};
    byLevel[level][v.movie_id] = (byLevel[level][v.movie_id] ?? 0) + 1;
  });

  const topByCourse = Object.entries(byCourse)
    .map(([course, counts]) => {
      const [movieId, voteCount] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] ?? [null, 0];
      const movie = movieId ? movieById.get(movieId) : null;
      return {
        course,
        movie_id: movieId!,
        title: movie?.title ?? "—",
        poster_url: movie?.poster_url ?? null,
        vote_count: voteCount,
      };
    })
    .filter((r) => r.movie_id)
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 8);

  const topByLevel = Object.entries(byLevel)
    .map(([level, counts]) => {
      const [movieId, voteCount] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] ?? [null, 0];
      const movie = movieId ? movieById.get(movieId) : null;
      return {
        level,
        movie_id: movieId!,
        title: movie?.title ?? "—",
        poster_url: movie?.poster_url ?? null,
        vote_count: voteCount,
      };
    })
    .filter((r) => r.movie_id)
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 6);

  const visualAppeal = [...movies]
    .filter((m) => m.imdb_rating)
    .map((m) => ({
      id: m.id,
      title: m.title,
      poster_url: m.poster_url,
      ratingNum: parseFloat(String(m.imdb_rating).replace(",", ".")) || 0,
    }))
    .sort((a, b) => b.ratingNum - a.ratingNum)
    .slice(0, 6);

  return (
    <section className="mt-16 pt-12 border-t border-[#d2d2d7]">
      <h2 className="text-lg font-semibold text-[#1d1d1f] mb-6">Impress management</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <LeaderboardSection
          title="Top by course"
          items={topByCourse.map((r) => ({
            nationality: r.course,
            movie_id: r.movie_id,
            title: r.title,
            poster_url: r.poster_url,
            vote_count: r.vote_count,
          }))}
          type="nationality"
        />
        <LeaderboardSection
          title="Top by level"
          items={topByLevel.map((r) => ({
            generation: r.level,
            movie_id: r.movie_id,
            title: r.title,
            poster_url: r.poster_url,
            vote_count: r.vote_count,
          }))}
          type="generation"
        />
        <LeaderboardSection
          title="Visual appeal (IMDb)"
          items={visualAppeal.map((m) => ({
            key: m.id,
            title: m.title,
            poster_url: m.poster_url,
            vote_count: m.ratingNum,
          }))}
          type="rating"
        />
      </div>
    </section>
  );
}
