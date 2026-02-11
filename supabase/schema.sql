-- Movie Voting App: local users (no email auth), suggestions, movies, votes

create extension if not exists "uuid-ossp";

-- Local voter profiles (from Welcome screen, stored locally; synced on first vote)
create table public.voter_profiles (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  course text not null check (course in ('ELS', 'IELTS', 'Business', 'TOEFL')),
  level text not null check (level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2')),
  created_at timestamptz default now()
);

-- Movies in final voting (admin-approved or legacy)
create table public.movies (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  poster_url text,
  imdb_id text unique not null,
  year text,
  director text,
  plot text,
  genre text,
  imdb_rating text,
  added_by uuid references public.voter_profiles(id) on delete set null,
  pedagogical_note text,
  winner_at timestamptz,
  created_at timestamptz default now()
);

-- Student suggestions (IMDb links); approved ones move to movies
create table public.suggestions (
  id uuid primary key default uuid_generate_v4(),
  imdb_id text not null,
  title text not null,
  poster_url text,
  year text,
  director text,
  plot text,
  genre text,
  imdb_rating text,
  submitted_by uuid references public.voter_profiles(id) on delete set null,
  created_at timestamptz default now()
);

-- Likes on suggestions (one per user per suggestion)
create table public.suggestion_likes (
  suggestion_id uuid not null references public.suggestions(id) on delete cascade,
  user_id uuid not null references public.voter_profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (suggestion_id, user_id)
);

-- Votes: one per voter (voter_profiles.id) globally
create table public.votes (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.voter_profiles(id) on delete cascade,
  movie_id uuid not null references public.movies(id) on delete cascade,
  created_at timestamptz default now(),
  unique(user_id, movie_id)
);
create unique index votes_one_per_user on public.votes (user_id);

-- Quiz responses (5-question survey, one per user)
create table public.quiz_responses (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.voter_profiles(id) on delete cascade,
  q1 text not null,
  q2 text not null,
  q3 text not null,
  q4 text not null,
  q5 text not null,
  created_at timestamptz default now(),
  unique(user_id)
);

-- RLS
alter table public.voter_profiles enable row level security;
alter table public.movies enable row level security;
alter table public.suggestions enable row level security;
alter table public.suggestion_likes enable row level security;
alter table public.votes enable row level security;
alter table public.quiz_responses enable row level security;

-- Quiz: anyone can insert/read (for aggregates)
create policy "Quiz select" on public.quiz_responses for select using (true);
create policy "Quiz insert" on public.quiz_responses for insert with check (true);
create policy "Quiz update" on public.quiz_responses for update using (true);

-- Voter profiles: anyone can insert (client sends id) and read
create policy "Voter profiles insert" on public.voter_profiles for insert with check (true);
create policy "Voter profiles select" on public.voter_profiles for select using (true);
create policy "Voter profiles update" on public.voter_profiles for update using (true);

-- Movies: everyone can read; anyone can insert (admin approves from UI)
create policy "Movies select" on public.movies for select using (true);
create policy "Movies insert" on public.movies for insert with check (true);
create policy "Movies update" on public.movies for update using (true);
create policy "Movies delete" on public.movies for delete using (true);

-- Suggestions: everyone can read and insert
create policy "Suggestions select" on public.suggestions for select using (true);
create policy "Suggestions insert" on public.suggestions for insert with check (true);
create policy "Suggestions delete" on public.suggestions for delete using (true);

-- Suggestion likes: read and insert/delete
create policy "Suggestion likes select" on public.suggestion_likes for select using (true);
create policy "Suggestion likes insert" on public.suggestion_likes for insert with check (true);
create policy "Suggestion likes delete" on public.suggestion_likes for delete using (true);

-- Votes: read all; insert/delete own (we pass user_id from client)
create policy "Votes select" on public.votes for select using (true);
create policy "Votes insert" on public.votes for insert with check (true);
create policy "Votes delete" on public.votes for delete using (true);
