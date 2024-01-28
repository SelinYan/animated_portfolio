import "./about-me.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div className="about-me">
      <motion.div className="textContainer">
        <p>
          I am passionate about creating delightful
          <br />
          and satisfying projects
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/about-me.png" alt="" />
        </div>
        <div className="title">
          <button>ABOUT ME</button>
          <ul>
            <li>Details oriented</li>
            <li>Great sense of responsibility</li>
            <li>Self-motivated</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </motion.div>
      <motion.div className="list container">
        <div>
          <button>MY SKILLS</button>
          <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
