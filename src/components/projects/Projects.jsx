import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Zoo App",
    img: "../../../public/project1.png",
    desc: "Zoo App is designed to provide users with a seamless and engaging experience as they explore the diverse world of animals and birds",
  },
  {
    id: 2,
    title: "Chat-Chat App",
    img: "../../../public/project2.png",
    desc: "Chat-Chat App is social networking application, which has diffierent features such as profile, timeline, friends, groups etc to build better connection for users",
  },
  {
    id: 3,
    title: "Pokedex App",
    img: "../../../public/project3.png",
    desc: "Pokedex App enables users to explore a comprehensive database of Pokemon species, generations, their characteristics and abilities, by fetching Pokemon API data",
  },
  {
    id: 4,
    title: "Speed Game App",
    img: "../../../public/project4.png",
    desc: "Speed Game App allowes users to input their names and choose different level to play the game, also has a conditional message based on their performance",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="imgContainer">
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <motion.button whileHover={{ backgroundColor: "#6f2dbd" }}>
            See Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Latest Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
