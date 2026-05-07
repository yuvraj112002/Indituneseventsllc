import { Reveal } from "@/components/Reveal";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

const reels = ["reE3Po9_tgk", "z2Q-U9q5tvI", "H-9K7CHGNqM", "reE3Po9_tgk", "z2Q-U9q5tvI", "H-9K7CHGNqM"];

export function Social() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-4">— Live Feed</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] text-balance max-w-2xl">
              The label, <span className="gradient-gold-text italic">unfiltered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/inditunesmusic/" target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@IndiTunesMusicLable/videos" target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-5 px-6 pb-6" style={{ width: "max-content" }}>
            {reels.map((id, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/watch?v=${id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-[9/16] w-64 shrink-0 overflow-hidden rounded-2xl gold-border hover-lift"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="Reel"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">@inditunesmusic</p>
                  <p className="mt-1 text-sm text-foreground/90">Behind the sound</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
