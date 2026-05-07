import { Reveal } from "@/components/Reveal";
import { Play } from "lucide-react";

const tracks = [
  { id: "reE3Po9_tgk", title: "Featured Release · I", tag: "Sufi · Cinematic" },
  { id: "z2Q-U9q5tvI", title: "Featured Release · II", tag: "Folk · Worldbeat" },
  { id: "H-9K7CHGNqM", title: "Featured Release · III", tag: "Indie · Original" },
];

function Wave() {
  return (
    <div className="flex items-end gap-1 h-6">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="wave-bar w-[2px] rounded-full bg-gold"
          style={{ height: `${30 + ((i * 17) % 70)}%`, animationDelay: `${i * 0.07}s` }}
        />
      ))}
    </div>
  );
}

export function Music() {
  return (
    <section id="music" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">— Featured Music</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] text-balance max-w-2xl">
              Sounds engineered for <span className="gradient-gold-text italic">cinema.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://www.youtube.com/@IndiTunesMusicLable/videos"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-gold transition-colors"
            >
              View All Releases →
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <a
                href={`https://www.youtube.com/watch?v=${t.id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl gold-border hover-lift"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${t.id}/maxresdefault.jpg`}
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${t.id}/hqdefault.jpg`; }}
                    alt={t.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-primary-foreground shadow-[0_0_60px_rgba(255,200,80,0.5)]">
                      <Play className="h-7 w-7 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{t.tag}</p>
                        <p className="mt-1 font-display text-xl">{t.title}</p>
                      </div>
                      <div className="opacity-0 transition-opacity group-hover:opacity-100">
                        <Wave />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
