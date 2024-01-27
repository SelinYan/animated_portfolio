import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

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
      <section id="About-me">About me</section>
      <section id="Latest-Works">
        <Parallax type="latest-works" />
      </section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Skills">Skills</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
