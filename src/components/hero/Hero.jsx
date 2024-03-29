import "./hero.scss";
import { motion } from "framer-motion";

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
      staggerChildren: 0.1,
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
const sliderVariants = {
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
          animate="animate"
        >
          <motion.h2 variants={textVariants}>downTIME ? No More</motion.h2>
          <motion.h1 variants={textVariants}>
            We help you by making products from scratch, increasing revenue, and
            scaling.
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Our Work">
              {" "}
              <motion.button variants={textVariants}>
                See Our Work
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Us</motion.button>
            </a>
          </motion.div>
          <div className="imgContainer">
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Developer Developer
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
