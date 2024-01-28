import "./about-me.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div className="about-me">
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/about-me.png" alt="about-me" />
        </div>
        <div className="title">
          <button>ABOUT ME</button>
          <ul>
            <li>8 years+ of experience in customer service</li>
            <li>Full Stack Web Developer program - present</li>
            <li>Bachelor degree from Centria AMK Finland</li>
            <li>Chinese, English, Cantonese, basic Finnish</li>
            <li>
              Details oriented & Great sense of responsibility & Self-motivated
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <button>MY SKILLS</button>
        <div className="boxes">
          <div className="box">
            <h4>Front-end</h4>
            <img src="/html5.png" alt="html5" />
            <img src="/css3.png" alt="css3" />
            <img src="/scss.png" alt="scss" />
            <img src="/js.png" alt="js" />
            <img src="/react.png" alt="react" />
            <img src="/git.png" alt="git" />
            <img src="/github.png" alt="github" />
          </div>
          <div className="box">
            <h4>Back-end</h4>
            <img src="/nodejs.png" alt="nodejs" />
            <img src="/mongodb.png" alt="mongodb" />
            <img src="/mysql.png" alt="mysql" />
          </div>
          <div className="box">
            <h4>UI / UX</h4>
            <img src="/figma.png" alt="figma" />
            <img src="/webflow.png" alt="webflow" />
            <img src="/photoshop.png" alt="photoshop" />
            <img src="/adobe.png" alt="adobe" />
            <img src="/color.png" alt="color" />
            <img src="/prototype.png" alt="prototype" />
            <img src="/typography.png" alt="typography" />
          </div>
          <div className="box">
            <h4>Other skills</h4>
            <img src="/communication.png" alt="communication skills" />
            <img src="/problem-solving-skill.png" alt="problem-solving-skill" />
            <img src="/collaboration.png" alt="collaboration" />
            <img src="/api-interface.png" alt="api-interface" />
            <img src="/trello.png" alt="trello" />
            <img src="aws.png" alt="aws" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
