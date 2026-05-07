import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import skyline from "@/assets/hero-skyline.jpg";

const stats = [
  { v: 60, suffix: "+", label: "Countries Reached" },
  { v: 250, suffix: "+", label: "Music Releases" },
  { v: 180, suffix: "+", label: "Artists Supported" },
  { v: 12, suffix: "M+", label: "Streams Worldwide" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl gradient-gold-text">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <img src={skyline} alt="Dubai skyline" loading="lazy" className="h-full w-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Est. Studios</p>
              <p className="mt-1 font-display text-2xl">Dubai · Mumbai</p>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 -z-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">— The Label</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              India's only platform that becomes your <span className="gradient-gold-text italic">music partner.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-foreground/70 leading-relaxed max-w-xl">
              IndiTunes empowers independent artists to distribute and promote music worldwide.
              From Sufi mystics to folk storytellers, film composers to bedroom producers — we
              build the bridge between raw talent and a global stage.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Independent", "Film Music", "Folk", "Sufi", "Bhakti", "Emerging Talent"].map((t) => (
                <span key={t} className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1.5 text-xs uppercase tracking-wider text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <div>
                  <Counter value={s.v} suffix={s.suffix} />
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-foreground/60">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
