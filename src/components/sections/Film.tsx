import { Reveal } from "@/components/Reveal";
import poster from "@/assets/film-poster.jpg";
import { Star } from "lucide-react";

const press = ["IMDb", "Times of India", "Bollywood Hungama", "Filmfare", "Mid-Day", "Hindustan Times"];

export function Film() {
  return (
    <section id="film" className="relative py-32 md:py-44 overflow-hidden">
      {/* spotlight */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(ellipse, oklch(0.85 0.14 85 / 0.5), transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">— Featured On IMDb</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
              Stories that travel from <span className="gradient-gold-text italic">screen to soul.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-12 items-center">
          <Reveal className="md:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl gold-border">
                <img src={poster} alt="Ye Mard Bechara movie poster" loading="lazy" className="w-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-strong rounded-xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-gold px-2 py-0.5 text-xs font-bold text-primary-foreground">IMDb</span>
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="font-display text-xl">7.6</span>
                  <span className="text-xs text-foreground/60">/10</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">A Film By IndiTunes</p>
            <h3 className="font-display text-4xl md:text-6xl leading-[1.05]">Ye Mard Bechara</h3>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
              A tender, contemporary portrait of modern Indian masculinity — produced under the
              IndiTunes banner and recognized by global press as a debut of rare emotional clarity.
            </p>

            <div className="mt-10 grid gap-3 max-w-md">
              <a
                href="https://www.imdb.com/title/tt11026788/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl glass px-5 py-4 hover:border-gold/40 transition-all group"
              >
                <span className="text-sm">View on IMDb</span>
                <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/ye-mard-bechara/movie-review/87803094.cms"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl glass px-5 py-4 hover:border-gold/40 transition-all group"
              >
                <span className="text-sm">Read Times of India review</span>
                <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* press marquee */}
        <Reveal delay={0.3}>
          <div className="mt-24 overflow-hidden border-y border-foreground/10 py-8">
            <div className="marquee flex w-max items-center gap-16 whitespace-nowrap">
              {[...press, ...press, ...press].map((p, i) => (
                <span key={i} className="font-display text-2xl md:text-3xl text-foreground/40 hover:text-gold transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
