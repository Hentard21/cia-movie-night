import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: suggestion, error: fetchErr } = await supabase
    .from("suggestions")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchErr || !suggestion) {
    return NextResponse.json({ error: "Suggestion not found" }, { status: 404 });
  }

  const { error: insertErr } = await supabase.from("movies").insert({
    imdb_id: suggestion.imdb_id,
    title: suggestion.title,
    poster_url: suggestion.poster_url,
    year: suggestion.year,
    director: suggestion.director,
    plot: suggestion.plot,
    genre: suggestion.genre,
    imdb_rating: suggestion.imdb_rating,
    added_by: suggestion.submitted_by,
  });

  if (insertErr) {
    return NextResponse.json({ error: insertErr.message }, { status: 500 });
  }

  await supabase.from("suggestions").delete().eq("id", id);

  return NextResponse.json({ ok: true });
}
