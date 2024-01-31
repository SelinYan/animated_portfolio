import "./hero.scss";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChilden: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <motion.h2 variants={textVariants}>WEN YAN</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI/UX designer
          </motion.h1>
          <motion.p>
            I am passionate about creating delightful and satisfying projects
          </motion.p>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate">
        Web Developer and UI/UX designer
      </motion.div>
      <div className="imageContainer">
        <img
          src="hero.png"
          alt="hero-image
        "
        />
      </div>
    </div>
  );
};

export default Hero;
