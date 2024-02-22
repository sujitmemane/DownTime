import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Tarotit",
    img: "https://play-lh.googleusercontent.com/bJLiFksu6v2KZ2nP-32cxPBsz0ZvvW3HcxBCLvjalwBo9bRJTXhMwKDNOhcoqmGgLtI=w480-h960",
    desc: "Tarotit, an innovative Virtual Tarot Buddy that provides accurate Tarot Readings 24/7, emulating the experience of a Human Tarot Reader, and it's completely free. On average, seeking a personal Tarot Reading involves personal references, opening up to strangers, costs $50+, and a wait time of 24+ hours. In contrast, Tarotit is accurate, free, and available 24/7. While existing platforms are automated and limited to predefined questions, our logic allows our platform to respond to any user inquiry, mimicking human Tarot Readers. Our system undergoes training on datasets, similar to human Tarot Readers. The team is also a certified Tarot Reader with 7+ years of offline experience.",
    link: "https://play.google.com/store/apps/details?id=com.tarotit.app&hl=en_IN&gl=US",
  },
  {
    id: 2,
    title: "Aura",
    img: "https://play-lh.googleusercontent.com/9Qa6qeYJLTjBddkSunA6Bq5XDUwYHrynZ3IlJ5cLt2NzcI-bASKM8BTh5K00dfxGLqI=w480-h960",
    desc: "Introducing Aura Gold (formerly Moi Gold), your premier destination for buying, selling, and saving gold. With its fresh new branding and enhanced features, Aura Gold revolutionizes the way you engage with the world of gold savings. Discover a secure and convenient platform that empowers you to take control of your financial future.",
    link: "https://play.google.com/store/apps/details?id=com.moi",
  },
  {
    id: 3,
    title: "Insukoon",
    img: "/insukoon.png",
    desc: "INSUKOON, a company formed with the core purpose of accelerating the imperative growth of every child through a very well-researched program. We envision a future where every child is empowered to excel academically, discover their unique potential, and thrive in overall well-being.",
    link: "https://www.insukoon.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              {" "}
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Our Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
