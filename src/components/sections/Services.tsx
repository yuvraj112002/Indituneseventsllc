import { Reveal } from "@/components/Reveal";
import { Disc3, Megaphone, Clapperboard, Video, Sparkles, Globe2, Music2, Star } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const services = [
  { icon: Disc3, title: "Music Distribution", desc: "Spotify, Apple Music, YouTube, JioSaavn — every major platform, worldwide." },
  { icon: Megaphone, title: "Artist Promotion", desc: "Editorial pitching, playlisting, paid amplification & PR campaigns." },
  { icon: Clapperboard, title: "Film Production", desc: "End-to-end production from script to festival circuit." },
  { icon: Video, title: "Music Videos", desc: "Cinematic visuals shot in Dubai, Mumbai & beyond." },
  { icon: Sparkles, title: "Branding & PR", desc: "Identity, narrative & press for serious artists." },
  { icon: Globe2, title: "International Releases", desc: "Multi-territory rollouts with local partners." },
  { icon: Music2, title: "Folk & Sufi Promotion", desc: "Tradition-rooted campaigns for devotional & folk catalogues." },
  { icon: Star, title: "Independent Launches", desc: "Debut campaigns engineered for first-time artists." },
];

function ServiceCard({ s, i }: { s: typeof services[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(0)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <Reveal delay={i * 0.05}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="group relative h-full rounded-2xl glass p-7 transition-all duration-300 hover:border-gold/50"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), oklch(0.85 0.14 85 / 0.12), transparent 60%)" }}
        />
        <div className="relative">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-transform group-hover:rotate-12 group-hover:scale-110">
            <s.icon className="h-5 w-5" />
          </div>
          <h3 className="font-display text-2xl">{s.title}</h3>
          <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold opacity-0 transition-all -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">— What We Do</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
              A full-stack <span className="gradient-gold-text italic">production house</span> for the modern artist.
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
