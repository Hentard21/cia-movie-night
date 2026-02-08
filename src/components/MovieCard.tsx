"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ChevronDown, ChevronUp, Languages, Loader2 } from "lucide-react";
import { VoteButton } from "./VoteButton";
import type { MovieWithVotes } from "@/lib/supabase/types";

export function MovieCard({
  movie,
  rank,
  isVoted,
  totalVotes,
}: {
  movie: MovieWithVotes;
  rank: number;
  isVoted: boolean;
  totalVotes: number;
}) {
  const [plotExpanded, setPlotExpanded] = useState(false);
  const [translatedPlot, setTranslatedPlot] = useState<string | null>(null);
  const [translating, setTranslating] = useState(false);

  const percentage = movie.percentage ?? 0;
  const hasPlot = !!movie.plot?.trim();

  async function handleTranslate() {
    if (!movie.plot?.trim() || translating) return;
    if (translatedPlot) {
      setTranslatedPlot(null);
      return;
    }
    setTranslating(true);
    try {
      const res = await fetch(`/api/translate?text=${encodeURIComponent(movie.plot!)}`);
      const data = await res.json();
      if (res.ok && data.translated) setTranslatedPlot(data.translated);
    } finally {
      setTranslating(false);
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: rank * 0.05 }}
      className="rounded-[24px] bg-white overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow"
    >
      <div className="aspect-[2/3] relative bg-[#F5F5F7]">
        {movie.poster_url ? (
          <Image
            src={movie.poster_url}
            alt={movie.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#86868b] text-sm">
            No poster
          </div>
        )}
        {movie.imdb_rating && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-xl bg-black/50 backdrop-blur-sm text-amber-500 text-xs font-medium">
            ★ {movie.imdb_rating}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-[#1d1d1f] truncate flex-1">{movie.title}</h3>
          {hasPlot && (
            <button
              type="button"
              onClick={() => setPlotExpanded(!plotExpanded)}
              className="flex-shrink-0 p-1.5 rounded-xl text-[#007AFF] hover:bg-[#007AFF]/10 transition"
              aria-label={plotExpanded ? "Hide plot" : "Read more"}
            >
              {plotExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <Info className="w-4 h-4" />
              )}
            </button>
          )}
        </div>
        {(movie.year || movie.pedagogical_note) && (
          <p className="text-xs text-[#86868b] mt-0.5">
            {movie.year}
            {movie.pedagogical_note && (
              <span className="block mt-1 text-[#86868b] italic line-clamp-2">
                {movie.pedagogical_note}
              </span>
            )}
          </p>
        )}

        <AnimatePresence>
          {plotExpanded && hasPlot && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-[#d2d2d7]">
                <p className="text-sm text-[#1d1d1f] leading-relaxed">
                  {translatedPlot ?? movie.plot}
                </p>
                <button
                  type="button"
                  onClick={handleTranslate}
                  disabled={translating}
                  className="mt-2 flex items-center gap-1.5 text-sm text-[#007AFF] hover:underline disabled:opacity-50"
                >
                  {translating ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Languages className="w-3.5 h-3.5" />
                  )}
                  {translatedPlot ? "Show original" : "Translate to Russian"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-3 h-1.5 rounded-full bg-[#F5F5F7] overflow-hidden">
          <motion.div
            className="h-full bg-[#007AFF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <p className="text-xs text-[#86868b] mt-1">{percentage}% of votes</p>
        <VoteButton movieId={movie.id} isVoted={isVoted} />
      </div>
    </motion.article>
  );
}
