"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Link2, Loader2, BookOpen } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function AddMovieForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [imdbInput, setImdbInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetched, setFetched] = useState<{
    imdb_id: string;
    title: string;
    poster_url: string | null;
    year: string | null;
    director: string | null;
    plot: string | null;
    genre: string | null;
    imdb_rating: string | null;
  } | null>(null);
  const [pedagogicalNote, setPedagogicalNote] = useState("");

  async function handleFetch() {
    if (!imdbInput.trim()) return;
    setError(null);
    setFetching(true);
    try {
      const res = await fetch(`/api/omdb?url=${encodeURIComponent(imdbInput.trim())}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to fetch");
      setFetched(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load movie");
      setFetched(null);
    } finally {
      setFetching(false);
    }
  }

  async function handleSubmit() {
    if (!fetched) return;
    setError(null);
    setSaving(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setSaving(false);
      return;
    }
    const { error: err } = await supabase.from("movies").insert({
      imdb_id: fetched.imdb_id,
      title: fetched.title,
      poster_url: fetched.poster_url,
      year: fetched.year,
      director: fetched.director,
      plot: fetched.plot,
      genre: fetched.genre,
      imdb_rating: fetched.imdb_rating,
      added_by: user.id,
      pedagogical_note: pedagogicalNote.trim() || null,
    });
    setSaving(false);
    if (err) {
      setError(err.message);
      return;
    }
    setOpen(false);
    setImdbInput("");
    setFetched(null);
    setPedagogicalNote("");
    router.refresh();
  }

  function handleClose() {
    setOpen(false);
    setError(null);
    setFetched(null);
    setImdbInput("");
    setPedagogicalNote("");
  }

  return (
    <div className="mb-8">
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setOpen(true)}
        className="glass-panel rounded-xl px-4 py-3 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/15 border border-white/10 hover:border-white/20 transition"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Add movie</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg glass-panel rounded-2xl p-6 border border-white/10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-amber-400/80" />
                <h3 className="font-semibold text-white/95">Add from IMDb</h3>
              </div>
              <input
                type="text"
                value={imdbInput}
                onChange={(e) => setImdbInput(e.target.value)}
                placeholder="Paste IMDb link or ID (e.g. tt0111161)"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30"
              />
              <button
                type="button"
                onClick={handleFetch}
                disabled={fetching || !imdbInput.trim()}
                className="mt-2 w-full py-2 rounded-xl bg-white/10 text-white/90 text-sm font-medium hover:bg-white/15 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {fetching ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                {fetching ? "Fetching…" : "Fetch movie"}
              </button>

              <AnimatePresence>
                {fetched && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <p className="text-white/90 font-medium">{fetched.title}</p>
                    <p className="text-xs text-white/50 mt-0.5">
                      {fetched.year} · {fetched.genre}
                    </p>
                    <label className="block mt-3 text-sm text-white/70 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Pedagogical note
                    </label>
                    <textarea
                      value={pedagogicalNote}
                      onChange={(e) => setPedagogicalNote(e.target.value)}
                      placeholder="Why this film is useful for students…"
                      rows={2}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/30 resize-none"
                    />
                    <div className="flex gap-2 mt-4">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="flex-1 py-2 rounded-xl border border-white/20 text-white/80 text-sm hover:bg-white/10"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={saving}
                        className="flex-1 py-2 rounded-xl bg-amber-500/25 text-amber-300 border border-amber-400/30 text-sm font-medium hover:bg-amber-500/35 disabled:opacity-50"
                      >
                        {saving ? "Adding…" : "Add movie"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {error && (
                <p className="mt-3 text-sm text-red-400/90">{error}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
