import "./app.scss";
import AboutMe from "./components/about-me/AboutMe";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";

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
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Latest-Works">
        <Parallax type="latest-works" />
      </section>
      <Project />
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
