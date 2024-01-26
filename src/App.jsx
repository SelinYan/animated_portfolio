import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About me">Parallax</section>
      <section id="Projects">Services</section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Skills">Parallax</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
