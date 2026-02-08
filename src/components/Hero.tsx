"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 text-[#86868b] text-sm mb-1">
        <Calendar className="w-4 h-4" />
        <span>Wednesday Session</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1d1d1f]">
        Movie Night
      </h1>
      <p className="mt-2 text-[#86868b] text-sm max-w-md">
        Suggest films, like others’ picks, and vote for the final list. One vote per person.
      </p>
    </motion.section>
  );
}
