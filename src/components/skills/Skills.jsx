import "./skills.scss";
import { motion } from "framer-motion";
import html5 from "../../../public/html5.png";
import css3 from "../../../public/css3.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import react from "../../../public/react.png";
import git from "../../../public/git.png";
import github from "../../../public/github.png";
import nodejs from "../../../public/nodejs.png";
import mongodb from "../../../public/mongodb.png";
import mysql from "../../../public/mysql.png";
import figma from "../../../public/figma.png";
import webflow from "../../../public/webflow.png";
import photoshop from "../../../public/photoshop.png";
import adobe from "../../../public/adobe.png";
import color from "../../../public/color.png";
import prototype from "../../../public/prototype.png";
import typography from "../../../public/typography.png";
import communication from "../../../public/communication.png";
import problem from "../../../public/problem-solving-skill.png";
import collaboration from "../../../public/collaboration.png";
import api from "../../../public/api-interface.png";
import trello from "../../../public/trello.png";
import aws from "../../../public/aws.png";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <div className="skills">
      <motion.div
        variants={variants}
        initial="initial"
        //  animate="animate"
        whileInView="animate"
        className="textContainer">
        <p>I am passionate about creating delightful and satisfying projects</p>
        <hr />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
        className="listContainer">
        <motion.button whileHover={{ backgroundColor: "#6f2dbd" }}>
          MY SKILLS
        </motion.button>
        <div className="boxes">
          <div className="box">
            <h3>Front-end</h3>
            <div className="icons">
              <img src={html5} alt="html5" />
              <img src={css3} alt="css3" />
              <img src={scss} alt="scss" />
              <img src={js} alt="js" />
              <img src={react} alt="react" />
              <img src={git} alt="git" />
              <img src={github} alt="github" />
            </div>
          </div>
          <div className="box">
            <h3>Back-end</h3>
            <div className="icons">
              <img src={nodejs} alt="nodejs" />
              <img src={mongodb} alt="mongodb" />
              <img src={mysql} alt="mysql" />
            </div>
          </div>
          <div className="box">
            <h3>UI / UX</h3>
            <div className="icons">
              <img src={figma} alt="figma" />
              <img src={webflow} alt="webflow" />
              <img src={photoshop} alt="photoshop" />
              <img src={adobe} alt="adobe" />
              <img src={color} alt="color" />
              <img src={prototype} alt="prototype" />
              <img src={typography} alt="typography" />
            </div>
          </div>
          <div className="box">
            <h3>Other skills</h3>
            <div className="icons">
              <img src={communication} alt="communication skills" />
              <img src={problem} alt="problem-solving-skill" />
              <img src={collaboration} alt="collaboration" />
              <img src={api} alt="api-interface" />
              <img src={trello} alt="trello" />
              <img src={aws} alt="aws" />
            </div>
          </div>
          <div className="box">
            <h3>my hobbies</h3>
            <div className="icons"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
