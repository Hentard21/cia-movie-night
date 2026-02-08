import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get("text");
  if (!text || text.length > 3000) {
    return NextResponse.json({ error: "Missing or too long text" }, { status: 400 });
  }
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ru`;
    const res = await fetch(url);
    const data = (await res.json()) as { responseData?: { translatedText?: string }; responseStatus?: number };
    const translatedText = data.responseData?.translatedText;
    if (!translatedText) {
      return NextResponse.json({ error: "Translation failed" }, { status: 502 });
    }
    return NextResponse.json({ translated: translatedText });
  } catch {
    return NextResponse.json({ error: "Translation failed" }, { status: 502 });
  }
}
