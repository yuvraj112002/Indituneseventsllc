import { Reveal } from "@/components/Reveal";
import mic from "@/assets/studio-mic.jpg";
import concert from "@/assets/concert.jpg";

const roles = ["Singer", "Lyricist", "Composer", "Music Producer", "Filmmaker"];

export function Artists() {
  return (
    <section id="artists" className="relative py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">— Join The Label</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
                Raw talent deserves a <span className="gradient-gold-text italic">global stage.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-foreground/70 leading-relaxed">
                Whether you write, sing, compose, produce or direct — IndiTunes opens the door.
                We hand-pick artists with a story to tell and build a global launchpad around them.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap gap-3">
              {roles.map((r, i) => (
                <Reveal key={r} delay={0.05 * i}>
                  <div className="rounded-full glass px-5 py-2.5 text-sm transition-all hover:border-gold/50 hover:text-gold cursor-default">
                    {r}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href="#contact"
                className="mt-12 inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Join IndiTunes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="md:col-span-5">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="float-slow overflow-hidden rounded-2xl aspect-[3/4] gold-border">
                <img src={mic} alt="Studio microphone" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="float-slow overflow-hidden rounded-2xl aspect-[3/4] mt-12 gold-border" style={{ animationDelay: "1.5s" }}>
                <img src={concert} alt="Concert lights" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -inset-10 -z-10 rounded-full bg-gold/10 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
