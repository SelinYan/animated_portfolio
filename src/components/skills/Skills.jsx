import "./skills.scss";
import { motion } from "framer-motion";

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
            <img src="/html5.png" alt="html5" />
            <img src="/css3.png" alt="css3" />
            <img src="/scss.png" alt="scss" />
            <img src="/js.png" alt="js" />
            <img src="/react.png" alt="react" />
            <img src="/git.png" alt="git" />
            <img src="/github.png" alt="github" />
          </div>
          <div className="box">
            <h3>Back-end</h3>
            <img src="/nodejs.png" alt="nodejs" />
            <img src="/mongodb.png" alt="mongodb" />
            <img src="/mysql.png" alt="mysql" />
          </div>
          <div className="box">
            <h3>UI / UX</h3>
            <img src="/figma.png" alt="figma" />
            <img src="/webflow.png" alt="webflow" />
            <img src="/photoshop.png" alt="photoshop" />
            <img src="/adobe.png" alt="adobe" />
            <img src="/color.png" alt="color" />
            <img src="/prototype.png" alt="prototype" />
            <img src="/typography.png" alt="typography" />
          </div>
          <div className="box">
            <h3>Other skills</h3>
            <img src="/communication.png" alt="communication skills" />
            <img src="/problem-solving-skill.png" alt="problem-solving-skill" />
            <img src="/collaboration.png" alt="collaboration" />
            <img src="/api-interface.png" alt="api-interface" />
            <img src="/trello.png" alt="trello" />
            <img src="aws.png" alt="aws" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
