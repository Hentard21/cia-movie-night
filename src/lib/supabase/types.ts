export type VoterProfile = {
  id: string;
  full_name: string;
  course: "ELS" | "IELTS" | "Business" | "TOEFL";
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  created_at?: string;
};

export type Movie = {
  id: string;
  title: string;
  poster_url: string | null;
  imdb_id: string;
  year: string | null;
  director: string | null;
  plot: string | null;
  genre: string | null;
  imdb_rating: string | null;
  added_by: string | null;
  pedagogical_note: string | null;
  created_at?: string;
};

export type Vote = {
  id: string;
  user_id: string;
  movie_id: string;
  created_at?: string;
};

export type MovieWithVotes = Movie & {
  vote_count: number;
  percentage?: number;
};

export type LeaderboardByNationality = {
  nationality: string;
  movie_id: string;
  title: string;
  poster_url: string | null;
  vote_count: number;
};

export type LeaderboardByGeneration = {
  generation: string;
  movie_id: string;
  title: string;
  poster_url: string | null;
  vote_count: number;
};

export type Suggestion = {
  id: string;
  imdb_id: string;
  title: string;
  poster_url: string | null;
  year: string | null;
  director: string | null;
  plot: string | null;
  genre: string | null;
  imdb_rating: string | null;
  submitted_by: string | null;
  created_at?: string;
};
