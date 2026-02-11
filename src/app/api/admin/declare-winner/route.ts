import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const ADMIN_PASSWORD = "3141";

export async function POST(request: NextRequest) {
  let body: { movieId?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }
  if (body.password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const movieId = body.movieId;
  if (!movieId || typeof movieId !== "string") {
    return NextResponse.json({ error: "movieId required" }, { status: 400 });
  }

  const supabase = await createClient();
  await supabase.from("movies").update({ winner_at: null });
  const { error } = await supabase
    .from("movies")
    .update({ winner_at: new Date().toISOString() })
    .eq("id", movieId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
