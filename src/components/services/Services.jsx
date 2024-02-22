import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>We focus on helping your business grow and move forward</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <button>What We Do ?</button>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Develop </motion.b>
            Products
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <img
            src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1708584342~exp=1708587942~hmac=e0819a1c92968a22389ba56af64c2cc5b933ecfc1a0fdc1d3eb67293e13493fb&w=2000"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            We specialize in crafting modern, responsive websites and intuitive
            user interfaces using cutting-edge technologies like React, Next.js,
            and Tailwind CSS. Our skilled team excels at creating beautiful,
            user-friendly designs that bring your vision to life.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            We are experts in building powerful, scalable backend systems and
            APIs using top-notch technologies like Python, Go, Node.js, and
            FastAPI. Our experienced team is dedicated to crafting secure,
            efficient solutions that meet your unique requirements.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Architecture</h2>
          <p>
            We specialize in building robust, scalable systems for your
            business. Our expertise includes system and database design,
            ensuring reliability through CI/CD practices, and implementing
            DevOps methodologies for smooth, efficient operations.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
