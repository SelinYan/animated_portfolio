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
            <div className="icons">
              <img src="../../../public/html5.png" alt="html5" />
              <img src="../../../public/css3.png" alt="css3" />
              <img src="../../../public/scss.png" alt="scss" />
              <img src="../../../public/js.png" alt="js" />
              <img src="../../../public/react.png" alt="react" />
              <img src="../../../public/git.png" alt="git" />
              <img src="../../../public/github.png" alt="github" />
            </div>
          </div>
          <div className="box">
            <h3>Back-end</h3>
            <div className="icons">
              <img src="../../../public/nodejs.png" alt="nodejs" />
              <img src="../../../public/mongodb.png" alt="mongodb" />
              <img src="../../../public/mysql.png" alt="mysql" />
            </div>
          </div>
          <div className="box">
            <h3>UI / UX</h3>
            <div className="icons">
              <img src="../../../public/figma.png" alt="figma" />
              <img src="../../../public/webflow.png" alt="webflow" />
              <img src="../../../public/photoshop.png" alt="photoshop" />
              <img src="../../../public/adobe.png" alt="adobe" />
              <img src="../../../public/color.png" alt="color" />
              <img src="../../../public/prototype.png" alt="prototype" />
              <img src="../../../public/typography.png" alt="typography" />
            </div>
          </div>
          <div className="box">
            <h3>Other skills</h3>
            <div className="icons">
              <img
                src="../../../public/communication.png"
                alt="communication skills"
              />
              <img
                src="../../../public/problem-solving-skill.png"
                alt="problem-solving-skill"
              />
              <img
                src="../../../public/collaboration.png"
                alt="collaboration"
              />
              <img
                src="../../../public/api-interface.png"
                alt="api-interface"
              />
              <img src="../../../public/trello.png" alt="trello" />
              <img src="../../../public/aws.png" alt="aws" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
