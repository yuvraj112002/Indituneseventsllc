import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MouseGlow } from "@/components/MouseGlow";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Music } from "@/components/sections/Music";
import { Film } from "@/components/sections/Film";
import { Services } from "@/components/sections/Services";
import { Artists } from "@/components/sections/Artists";
import { Social } from "@/components/sections/Social";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IndiTunes — Where Music Meets Cinema | Dubai · Mumbai" },
      { name: "description", content: "International music label, film production & artist promotion based in Dubai & Mumbai. Independent, folk, sufi & global sounds — engineered for the world stage." },
      { property: "og:title", content: "IndiTunes — Where Music Meets Cinema" },
      { property: "og:description", content: "Dubai & Mumbai based international music label empowering independent artists, films, folk, sufi & global sounds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <SmoothScroll />
      <MouseGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Music />
        <Film />
        <Services />
        <Artists />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
