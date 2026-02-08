import { NextRequest, NextResponse } from "next/server";

function extractImdbId(urlOrId: string): string | null {
  const trimmed = urlOrId.trim();
  const match = trimmed.match(/tt\d{7,8}/);
  if (match) return match[0];
  if (/^tt\d{7,8}$/.test(trimmed)) return trimmed;
  return null;
}

export async function GET(request: NextRequest) {
  const imdbId = request.nextUrl.searchParams.get("id") ?? request.nextUrl.searchParams.get("url");
  if (!imdbId) {
    return NextResponse.json({ error: "Missing id or url" }, { status: 400 });
  }
  const id = extractImdbId(imdbId);
  if (!id) {
    return NextResponse.json({ error: "Invalid IMDb link or ID" }, { status: 400 });
  }
  const key = process.env.OMDB_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "OMDb API key not configured" }, { status: 503 });
  }
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${key}&i=${id}&plot=short`
  );
  const data = await res.json();
  if (data.Response === "False") {
    return NextResponse.json({ error: data.Error ?? "Movie not found" }, { status: 404 });
  }
  return NextResponse.json({
    imdb_id: data.imdbID,
    title: data.Title,
    poster_url: data.Poster && data.Poster !== "N/A" ? data.Poster : null,
    year: data.Year ?? null,
    director: data.Director ?? null,
    plot: data.Plot ?? null,
    genre: data.Genre ?? null,
    imdb_rating: data.imdbRating ?? null,
  });
}
