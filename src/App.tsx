import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Marquee from "./components/Marquee";
import Process from "./components/Process";
import Clubs from "./components/Clubs";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="grain relative bg-[var(--color-paper)] text-[var(--color-ink)] overflow-x-hidden">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Marquee />
        <Skills />
        <Projects />
        <Process />
        <Clubs />
        <Quotes />
        <Contact />
      </main>
    </div>
  );
}