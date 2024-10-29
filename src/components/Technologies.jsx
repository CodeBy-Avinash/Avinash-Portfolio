import React from "react";
import { FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

// Icon animation variants
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const SkillsSection = () => {
  return (
    <section id="Technologies" className="text-center my-20">
      {/* <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg font-semibold"
      >
        Explore My
      </motion.p> */}
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
      >
        Skills
      </motion.h1>
<br></br>
<br></br>
<br></br>
      {/* Skill Categories */}
      <div className="experience-details-container flex flex-col md:flex-row justify-center gap-12">
        
        {/* Frontend Skills */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="details-container"
        >
          <h2 className="experience-sub-title text-2xl font-semibold mb-4">Frontend Development</h2>
          <div className="article-container flex flex-wrap justify-center gap-4">
            
            {/* HTML */}
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="p-4">
              <FaHtml5 className="text-7xl text-orange-500" />
              <p>HTML</p>
            </motion.div>
            
            {/* CSS */}
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="p-4">
              <FaCss3Alt className="text-7xl text-blue-500" />
              <p>CSS</p>
            </motion.div>
            
            {/* Bootstrap */}
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="p-4">
              <FaBootstrap className="text-7xl text-purple-500" />
              <p>Bootstrap</p>
            </motion.div>
            
            {/* JavaScript */}
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="p-4">
              <SiJavascript className="text-7xl text-yellow-500" />
              <p>JavaScript</p>
            </motion.div>
            
            {/* React */}
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="p-4">
              <RiReactjsLine className="text-7xl text-cyan-400" />
              <p>React JS</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Backend Skills */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="details-container"
        >
          <h2 className="experience-sub-title text-2xl font-semibold mb-4">Backend Development</h2>
          <div className="article-container flex flex-wrap justify-center gap-4">
            
            {/* Python */}
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="p-4">
              <FaPython className="text-7xl text-yellow-400" />
              <p>Python</p>
            </motion.div>
            
            {/* Django */}
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="p-4">
              <SiDjango className="text-7xl text-green-600" />
              <p>Django</p>
            </motion.div>
            
            {/* PostgreSQL */}
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="p-4">
              <SiPostgresql className="text-7xl text-blue-500" />
              <p>PostgreSQL</p>
            </motion.div>
            
            {/* Git */}
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="p-4">
              <FaDatabase className="text-7xl text-gray-700" />
              <p>Git</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Arrow Icon */}
      {/* <motion.img
        src="./assets/arrow.png"
        alt="arrow icon"
        className="icon arrow mt-8 cursor-pointer"
        onClick={() => (window.location.href = './#projects')}
        initial={{ y: -10 }}
        animate={{ y: [10, -10] }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default SkillsSection;
