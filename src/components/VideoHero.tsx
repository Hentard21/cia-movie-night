"use client";

import { motion } from "framer-motion";

const VIDEO_SRC = "/CIA MOVIE INT 1.mp4";

export function VideoHero() {
  return (
    <section className="relative w-full aspect-[16/9] min-h-[420px] max-h-[85vh] overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      {/* Dark semi-transparent overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
            textShadow: "0 2px 48px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.2)",
            letterSpacing: "-0.02em",
          }}
        >
          Movie Night in CIA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/95 font-normal tracking-[0.02em]"
          style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
            textShadow: "0 1px 24px rgba(0,0,0,0.35)",
          }}
        >
          Every Wednesday • 7:00 PM • Auditorium (6th Floor)
        </motion.p>
      </div>
    </section>
  );
}
