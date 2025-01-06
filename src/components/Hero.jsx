import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/avinash.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Motion variants
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section id="profile" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Avinash"
              style={{ width: "55%", height: "auto", borderRadius: "5%" }}
            />
          </div>
        </div>

        {/* Profile Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.p
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-lg font-semibold"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-thin tracking-tight"
            >
              Avinash
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons */}
            <div className="btn-container flex gap-4 mt-4">
              <motion.button
                variants={container(1.2)}
                initial="hidden"
                animate="visible"
                className="px-3 py-1 text-sm border border-neutral-700 rounded-md text-white hover:bg-neutral-200 transition-colors duration-200"
                onClick={() => window.open('./public/AvinashResume.pdf', '_blank')}
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
