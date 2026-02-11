"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Link2, Loader2, ThumbsUp, CheckCheck, Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useUser } from "@/contexts/UserContext";
import type { Suggestion } from "@/lib/supabase/types";
import { MovieModal } from "@/components/MovieModal";

type SuggestionWithLikes = Suggestion & { like_count: number };

export function SuggestionsSection({
  suggestions,
  myLikedSuggestionIds,
  canSuggest = true,
}: {
  suggestions: SuggestionWithLikes[];
  myLikedSuggestionIds: Set<string>;
  canSuggest?: boolean;
}) {
  const router = useRouter();
  const { user, isAdmin } = useUser();
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
    if (!fetched || !user) return;
    setError(null);
    setSaving(true);
    const supabase = createClient();
    await supabase.from("voter_profiles").upsert(
      { id: user.id, full_name: user.full_name, course: user.course, level: user.level },
      { onConflict: "id" }
    );
    const { error: err } = await supabase.from("suggestions").insert({
      imdb_id: fetched.imdb_id,
      title: fetched.title,
      poster_url: fetched.poster_url,
      year: fetched.year,
      director: fetched.director,
      plot: fetched.plot,
      genre: fetched.genre,
      imdb_rating: fetched.imdb_rating,
      submitted_by: user.id,
    });
    setSaving(false);
    if (err) {
      setError(err.message);
      return;
    }
    setOpen(false);
    setImdbInput("");
    setFetched(null);
    router.refresh();
  }

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#1d1d1f]">Suggestions</h2>
        {canSuggest ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpen(true)}
            className="rounded-2xl px-4 py-2.5 flex items-center gap-2 bg-[#007AFF] text-white text-sm font-medium hover:bg-[#0051D5] transition shadow-[0_2px_8px_rgba(0,122,255,0.35)]"
          >
            <Plus className="w-4 h-4" />
            Suggest a movie
          </motion.button>
        ) : (
          <a
            href="/welcome"
            className="rounded-2xl px-4 py-2.5 flex items-center gap-2 bg-[#F5F5F7] border border-[#d2d2d7] text-[#86868b] text-sm font-medium"
          >
            Sign in to suggest
          </a>
        )}
      </div>

      <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scroll-smooth snap-x snap-mandatory [scrollbar-width:thin]">
        {suggestions.map((s) => (
          <div key={s.id} className="flex-shrink-0 w-[160px] sm:w-[180px] snap-start">
            <SuggestionCardInner
              suggestion={s}
              isLiked={myLikedSuggestionIds.has(s.id)}
              isAdmin={isAdmin}
            />
          </div>
        ))}
      </div>
      {suggestions.length === 0 && (
        <div className="rounded-[24px] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <p className="text-[#86868b] text-sm">No suggestions yet. Add an IMDb link above.</p>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              setError(null);
              setFetched(null);
              setImdbInput("");
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[24px] bg-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-[#007AFF]" />
                <h3 className="font-semibold text-[#1d1d1f]">Suggest from IMDb</h3>
              </div>
              <input
                type="text"
                value={imdbInput}
                onChange={(e) => setImdbInput(e.target.value)}
                placeholder="Paste IMDb link or ID (e.g. tt0111161)"
                className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F5F7] border border-[#d2d2d7] text-[#1d1d1f] placeholder-[#86868b] text-sm focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[#007AFF]/20"
              />
              <button
                type="button"
                onClick={handleFetch}
                disabled={fetching || !imdbInput.trim()}
                className="mt-2 w-full py-2.5 rounded-2xl bg-[#F5F5F7] text-[#1d1d1f] text-sm font-medium hover:bg-[#e8e8ed] disabled:opacity-50 flex items-center justify-center gap-2 border border-[#d2d2d7]"
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
                    className="mt-4 pt-4 border-t border-[#d2d2d7]"
                  >
                    <p className="text-[#1d1d1f] font-medium">{fetched.title}</p>
                    <p className="text-xs text-[#86868b] mt-0.5">
                      {fetched.year} · {fetched.genre}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setOpen(false);
                          setFetched(null);
                          setImdbInput("");
                        }}
                        className="flex-1 py-2.5 rounded-2xl border border-[#d2d2d7] text-[#1d1d1f] text-sm hover:bg-[#F5F5F7]"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={saving}
                        className="flex-1 py-2.5 rounded-2xl bg-[#007AFF] text-white text-sm font-medium hover:bg-[#0051D5] disabled:opacity-50 shadow-[0_2px_8px_rgba(0,122,255,0.35)]"
                      >
                        {saving ? "Submitting…" : "Submit suggestion"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SuggestionCardInner({
  suggestion,
  isLiked,
  isAdmin,
}: {
  suggestion: SuggestionWithLikes;
  isLiked: boolean;
  isAdmin: boolean;
}) {
  const router = useRouter();
  const { user } = useUser();
  const [likeLoading, setLikeLoading] = useState(false);
  const [approveLoading, setApproveLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleLike() {
    if (!user) return;
    setLikeLoading(true);
    const supabase = createClient();
    await supabase.from("voter_profiles").upsert(
      { id: user.id, full_name: user.full_name, course: user.course, level: user.level },
      { onConflict: "id" }
    );
    if (isLiked) {
      await supabase
        .from("suggestion_likes")
        .delete()
        .eq("suggestion_id", suggestion.id)
        .eq("user_id", user.id);
    } else {
      await supabase.from("suggestion_likes").insert({
        suggestion_id: suggestion.id,
        user_id: user.id,
      });
    }
    setLikeLoading(false);
    router.refresh();
  }

  async function handleApprove() {
    setApproveLoading(true);
    await fetch(`/api/suggestions/${suggestion.id}/approve`, { method: "POST" });
    setApproveLoading(false);
    router.refresh();
  }

  return (
    <>
      <MovieModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        movie={{
          title: suggestion.title,
          poster_url: suggestion.poster_url ?? null,
          plot: suggestion.plot ?? null,
          imdb_rating: suggestion.imdb_rating ?? null,
        }}
      />

      <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-shadow"
      onClick={() => setModalOpen(true)}
    >
      <div className="aspect-[2/3] relative bg-[#F5F5F7]">
        {suggestion.poster_url ? (
          <Image
            src={suggestion.poster_url}
            alt={suggestion.title}
            fill
            className="object-cover"
            sizes="180px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#86868b] text-xs">
            No poster
          </div>
        )}
        {suggestion.imdb_rating && (
          <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-lg bg-black/50 backdrop-blur-sm text-amber-500 text-[10px] font-medium">
            ★ {suggestion.imdb_rating}
          </div>
        )}

        {isAdmin && (
          <button
            type="button"
            onClick={async (e) => {
              e.stopPropagation();
              if (!window.confirm("Delete this movie?")) return;
              const supabase = createClient();
              await supabase.from("suggestions").delete().eq("id", suggestion.id);
              router.refresh();
            }}
            className="absolute top-1.5 left-1.5 p-2 rounded-xl bg-white/85 hover:bg-white text-red-600 transition shadow-sm"
            aria-label="Delete suggestion"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className="p-2.5">
        <h3 className="font-semibold text-[#1d1d1f] text-sm truncate">{suggestion.title}</h3>
        <p className="text-[10px] text-[#86868b] mt-0.5 truncate">{suggestion.year}{suggestion.genre ? ` · ${suggestion.genre}` : ""}</p>
        <div className="mt-2 flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={handleLike}
            disabled={likeLoading}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-medium transition disabled:opacity-50 ${
              isLiked
                ? "bg-[#007AFF] text-white"
                : "bg-[#F5F5F7] text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#e8e8ed]"
            }`}
          >
            <ThumbsUp className="w-3 h-3" />
            {suggestion.like_count}
          </button>
          {isAdmin && (
            <button
              type="button"
              onClick={handleApprove}
              disabled={approveLoading}
              className="flex items-center gap-1 px-2 py-1.5 rounded-xl text-xs font-medium bg-emerald-500 text-white hover:bg-emerald-600 transition disabled:opacity-50"
            >
              {approveLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <CheckCheck className="w-3 h-3" />}
              Approve
            </button>
          )}
        </div>
      </div>
      </motion.article>
    </>
  );
}
