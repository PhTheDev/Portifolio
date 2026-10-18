import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Place from "./components/Place";
import Work from "./components/Work";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Place />
        <Work />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
