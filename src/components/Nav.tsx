import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#film", label: "Film" },
  { href: "#services", label: "Services" },
  { href: "#artists", label: "Artists" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "glass-strong rounded-full mx-4 md:mx-auto md:px-8 py-2" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-wide">
            Indi<span className="text-gold">Tunes</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}
