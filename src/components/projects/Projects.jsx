import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";

const items = [
  {
    id: 1,
    title: "Zoo App",
    img: project1,
    desc: "Zoo App is designed to provide users with a seamless and engaging experience as they explore the diverse world of animals and birds",
    link: "https://selinyan.github.io/zooApp/",
  },
  // {
  //   id: 2,
  //   title: "Chat-Chat App",
  //   img: project2,
  //   desc: "Chat-Chat App is social networking application, which has diffierent features such as profile, timeline, friends, groups etc to build better connection for users",
  // },
  {
    id: 3,
    title: "Pokedex App",
    img: project3,
    desc: "Pokedex App enables users to explore a comprehensive database of Pokemon species, generations, their characteristics and abilities, by fetching Pokemon API data",
    link: "https://selinyan.github.io/pokedex/",
  },
  {
    id: 4,
    title: "Speed Game App",
    img: project4,
    desc: "Speed Game App allowes users to input their names and choose different level to play the game, also has a conditional message based on their performance",
    link: "https://selinyan.github.io/NewSpeedGame/",
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
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ backgroundColor: "#6f2dbd" }}>
              See Demo
            </motion.button>
          </a>
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
