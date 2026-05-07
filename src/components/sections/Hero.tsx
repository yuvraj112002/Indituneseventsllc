import { motion } from "framer-motion";
import heroImg from "@/assets/hero-skyline.jpg";

function Waveform() {
  return (
    <div className="flex items-end gap-1 h-8" aria-hidden>
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[3px] rounded-full bg-gold/80"
          style={{ height: `${20 + ((i * 13) % 80)}%`, animationDelay: `${i * 0.06}s` }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden noise vignette">
      {/* parallax background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Cinematic Dubai and Mumbai skyline at night"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-foreground/80"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Dubai · Mumbai · Worldwide
        </motion.div>

        <h1 className="font-display text-balance text-[14vw] leading-[0.9] md:text-[8.5rem] tracking-tight">
          {"Where Music".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-block"
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
          <br />
          <span className="gradient-gold-text italic">
            {"Meets Cinema.".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.9 + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-block"
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed"
        >
          A Dubai &amp; Mumbai based international music label empowering independent artists,
          films, folk, sufi &amp; global sounds — engineered for the world stage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#music"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Explore Music</span>
            <span className="absolute inset-0 shimmer" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-sm uppercase tracking-[0.2em] text-foreground/90 transition-all hover:border-gold/50 hover:text-gold"
          >
            Work With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="absolute bottom-10 left-6 right-6 mx-auto flex max-w-7xl items-end justify-between"
        >
          <div className="flex items-center gap-4">
            <Waveform />
            <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">Now Playing · Global Catalogue</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            Scroll
            <span className="h-8 w-px bg-foreground/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
