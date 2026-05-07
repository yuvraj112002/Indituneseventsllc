import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Instagram, Youtube, Facebook, Twitter, Mail } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.85 0.14 85 / 0.15), transparent 60%)" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-6">— Contact</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.95] text-balance">
              Let the world <span className="gradient-gold-text italic">hear your sound.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">Email</p>
                <a href="mailto:Info.inditunes@gmail.com" className="font-display text-2xl hover:text-gold transition-colors flex items-center gap-3">
                  <Mail className="h-5 w-5" /> Info.inditunes@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">Studios</p>
                <p className="font-display text-2xl">Dubai · Mumbai</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-3">Follow</p>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/inditunesmusic/" target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all"><Instagram className="h-4 w-4" /></a>
                  <a href="https://www.youtube.com/@IndiTunesMusicLable/videos" target="_blank" rel="noreferrer" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all"><Youtube className="h-4 w-4" /></a>
                  <a href="#" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all"><Facebook className="h-4 w-4" /></a>
                  <a href="#" className="glass rounded-full p-3 hover:text-gold hover:border-gold/40 transition-all"><Twitter className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong rounded-2xl p-8 space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Subject" name="subject" />
              <Field label="Tell us about your project" name="message" textarea />
              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-[1.01]"
              >
                <span className="relative z-10">{sent ? "Message Sent — We'll be in touch" : "Send Message"}</span>
                <span className="absolute inset-0 shimmer" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", textarea = false, required }: {
  label: string; name: string; type?: string; textarea?: boolean; required?: boolean;
}) {
  const cls = "peer w-full bg-transparent border-b border-foreground/20 pt-6 pb-2 text-sm focus:outline-none focus:border-gold transition-colors";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea name={name} rows={4} required={required} className={cls} placeholder=" " />
      ) : (
        <input type={type} name={name} required={required} className={cls} placeholder=" " />
      )}
      <span className="pointer-events-none absolute left-0 top-4 text-xs uppercase tracking-[0.25em] text-foreground/50 transition-all peer-focus:-translate-y-3 peer-focus:text-gold peer-[:not(:placeholder-shown)]:-translate-y-3">
        {label}
      </span>
    </label>
  );
}
