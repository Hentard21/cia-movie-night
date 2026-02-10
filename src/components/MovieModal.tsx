"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Star } from "lucide-react";
import { useState } from "react";

export type MovieModalData = {
  title: string;
  poster_url: string | null;
  plot: string | null;
  imdb_rating: string | null;
};

export function MovieModal({
  open,
  onClose,
  movie,
}: {
  open: boolean;
  onClose: () => void;
  movie: MovieModalData;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const text = movie.plot?.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Blurry dark background */}
          <motion.div
            className="absolute inset-0 bg-black/65 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative w-full h-full sm:h-auto sm:max-h-[92vh] sm:w-[min(980px,calc(100vw-2rem))] bg-[#0b0b0e]/80 sm:rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.55)] border border-white/10"
            initial={{ y: 24, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 24, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white/90 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-full sm:h-auto grid grid-cols-1 sm:grid-cols-[320px_1fr]">
              <div className="relative bg-black/30">
                <div className="relative w-full h-[44vh] sm:h-full sm:min-h-[520px]">
                  {movie.poster_url ? (
                    <Image
                      src={movie.poster_url}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                      No poster
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
                </div>
              </div>

              <div className="p-6 sm:p-8 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight truncate">
                      {movie.title}
                    </h2>
                    {movie.imdb_rating && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-white/10 border border-white/10 text-sm text-white/90">
                        <Star className="w-4 h-4 text-amber-400" />
                        IMDb {movie.imdb_rating}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-white/75">Plot</p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      disabled={!movie.plot?.trim()}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white/90 text-sm font-medium transition disabled:opacity-50"
                      aria-label="Copy plot"
                    >
                      <Copy className="w-4 h-4" />
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <p className="mt-3 text-white/90 leading-relaxed whitespace-pre-wrap">
                    {movie.plot?.trim() ? movie.plot : "No plot available."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

