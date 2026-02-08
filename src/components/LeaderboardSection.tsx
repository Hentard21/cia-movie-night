"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Item =
  | { nationality: string; movie_id: string; title: string; poster_url: string | null; vote_count: number }
  | { generation: string; movie_id: string; title: string; poster_url: string | null; vote_count: number }
  | { key: string; title: string; poster_url: string | null; vote_count: number; subtitle?: string };

export function LeaderboardSection({
  title,
  items,
  type,
}: {
  title: string;
  items: Item[];
  type: "nationality" | "generation" | "rating";
}) {
  const getLabel = (item: Item) =>
    "nationality" in item ? item.nationality : "generation" in item ? item.generation : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[24px] bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <h3 className="text-sm font-medium text-[#86868b] mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={"movie_id" in item ? item.movie_id : (item as { key: string }).key}
            className="flex items-center gap-3 py-1.5"
          >
            <span className="text-[#86868b] text-sm w-5">{i + 1}</span>
            {item.poster_url ? (
              <div className="relative w-8 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F5F7]">
                <Image
                  src={item.poster_url}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
            ) : (
              <div className="w-8 h-12 rounded-lg bg-[#F5F5F7] flex-shrink-0" />
            )}
            <div className="min-w-0 flex-1">
              <p className="text-sm text-[#1d1d1f] truncate">{item.title}</p>
              {(getLabel(item) || ("subtitle" in item && item.subtitle)) && (
                <p className="text-xs text-[#86868b]">
                  {getLabel(item) ?? ("subtitle" in item ? item.subtitle : "")}
                </p>
              )}
            </div>
            <span className="text-xs text-[#007AFF] tabular-nums font-medium">
              {type === "rating" ? `★ ${(item as { vote_count: number }).vote_count}` : (item as { vote_count: number }).vote_count}
            </span>
          </li>
        ))}
      </ul>
      {items.length === 0 && (
        <p className="text-sm text-[#86868b]">No data yet.</p>
      )}
    </motion.div>
  );
}
