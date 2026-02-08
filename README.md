# Movie Night — Wednesday Session

A high-end, minimalist **Movie Voting Web App** for a multicultural student community. Liquid glass UI, dark theme, and smart voting with leaderboards by nationality and generation.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS** — styling
- **Lucide React** — icons
- **Framer Motion** — animations
- **Supabase** — Auth (email magic link) + PostgreSQL

## Features

- **Ultra-light onboarding**: Email magic link; first login collects Nationality + Birth year.
- **IMDb integration**: Paste an IMDb link; app uses OMDb API to fetch title, poster, year, director, plot, genre (and optional pedagogical note).
- **Smart voting**: One vote per user; real-time percentage bars and leaderboards.
- **Impress management**: Top picks by nationality, by generation, and “Visual appeal” (IMDb rating).

## Setup

1. **Clone and install**

   ```bash
   cd movie-voting-app
   npm install
   ```

2. **Supabase**

   - Create a project at [supabase.com](https://supabase.com).
   - In **SQL Editor**, run the contents of `supabase/schema.sql`.
   - In **Authentication → URL Configuration**, add your site URL and redirect URL (e.g. `http://localhost:3000` and `http://localhost:3000/auth/callback`).
   - Enable **Email** auth (magic link).

3. **OMDb API**

   - Get a free key at [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx).

4. **Environment**

   - Copy `.env.local.example` to `.env.local` and set:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   OMDB_API_KEY=your-omdb-api-key
   ```

5. **Run**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). Sign in with email; complete onboarding; add movies and vote.

## Project layout

- `src/app` — routes: `/`, `/login`, `/onboarding`, `/auth/callback`, `/api/omdb`
- `src/components` — Navbar, Hero, MovieGrid, MovieCard, VoteButton, AddMovieForm, Leaderboard
- `src/lib/supabase` — client, server, middleware, types
- `supabase/schema.sql` — `profiles`, `movies`, `votes` + RLS

## Design

- **Liquid glass**: `bg-white/10`, `backdrop-blur-md`, thin borders.
- **Dark theme** with soft mesh gradients in `globals.css`.
- **Framer Motion** for entrance and hover transitions.
