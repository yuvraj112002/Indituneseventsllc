export function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl">Indi<span className="text-gold">Tunes</span></span>
          <span className="text-xs text-foreground/40">· inditunesevents.com</span>
        </div>
        <p className="text-xs text-foreground/40 uppercase tracking-[0.25em]">
          © {new Date().getFullYear()} IndiTunes — A Global Cinematic Music Movement
        </p>
      </div>
    </footer>
  );
}
