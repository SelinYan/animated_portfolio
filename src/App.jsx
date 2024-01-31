import "./app.scss";
import AboutMe from "./components/about-me/AboutMe";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Hello-World">
        <Parallax type="hello-world" />
      </section>
      <section id="About me">
        <AboutMe />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="latest-works" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
