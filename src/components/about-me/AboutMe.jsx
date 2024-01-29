import "./about-me.scss";
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

const AboutMe = () => {
  return (
    <motion.div className="about-me">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="textContainer">
        <p>I am passionate about creating delightful and satisfying projects</p>
        <hr />
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="titleContainer">
        <div className="title">
          <img src="/about-me.png" alt="about-me" />
        </div>
        <div className="title">
          <button>ABOUT ME</button>
          <ul>
            <div className="feature">
              <img src="work.png" alt="work" />
              <li>8 years+ of experience in customer service</li>
            </div>
            <div className="feature">
              <img src="school.png" alt="school" />
              <li>Full Stack Web Developer program - present</li>
            </div>
            <div className="feature">
              <img src="degree.png" alt="degree" />
              <li>Bachelor degree from Centria AMK Finland</li>
            </div>
            <div className="feature">
              <img src="language.png" alt="language" />
              <li>Chinese, English, Cantonese, basic Finnish</li>
            </div>
            <div className="feature">
              <img src="personality.png" alt="personality" />
              <li>
                Details oriented & Great sense of responsibility &
                Self-motivated
              </li>
            </div>
            <div className="feature">
              <img src="heart.png" alt="hobbies" />
              <li>
                Coding projects; Climbing; Badminton; Reading; Music; Traveling
              </li>
            </div>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
