import { createClient } from "@/lib/supabase/server";
import { MainContent } from "@/components/MainContent";

export default async function HomePage() {
  const supabase = await createClient();

  const [
    { data: movies },
    { data: votes },
    { data: suggestions },
    { data: suggestionLikes },
    { data: voterProfiles },
  ] = await Promise.all([
    supabase
      .from("movies")
      .select("id, title, poster_url, imdb_id, year, director, plot, genre, imdb_rating, pedagogical_note, added_by")
      .order("created_at", { ascending: false }),
    supabase.from("votes").select("movie_id, user_id"),
    supabase
      .from("suggestions")
      .select("id, imdb_id, title, poster_url, year, director, plot, genre, imdb_rating, submitted_by, created_at")
      .order("created_at", { ascending: false }),
    supabase.from("suggestion_likes").select("suggestion_id, user_id"),
    supabase.from("voter_profiles").select("id, full_name, course, level"),
  ]);

  const voteCountByMovie: Record<string, number> = {};
  votes?.forEach((v) => {
    voteCountByMovie[v.movie_id] = (voteCountByMovie[v.movie_id] ?? 0) + 1;
  });
  const totalVotes = votes?.length ?? 0;

  const likeCountBySuggestion: Record<string, number> = {};
  suggestionLikes?.forEach((l) => {
    likeCountBySuggestion[l.suggestion_id] = (likeCountBySuggestion[l.suggestion_id] ?? 0) + 1;
  });

  const moviesWithVotes = (movies ?? []).map((m) => ({
    ...m,
    vote_count: voteCountByMovie[m.id] ?? 0,
    percentage: totalVotes > 0 ? Math.round(((voteCountByMovie[m.id] ?? 0) / totalVotes) * 100) : 0,
  }));

  const suggestionsWithLikes = (suggestions ?? []).map((s) => ({
    ...s,
    like_count: likeCountBySuggestion[s.id] ?? 0,
  }));

  return (
    <MainContent
      movies={moviesWithVotes}
      totalVotes={totalVotes}
      votes={votes ?? []}
      suggestions={suggestionsWithLikes}
      suggestionLikes={suggestionLikes ?? []}
      voterProfiles={voterProfiles ?? []}
    />
  );
}
