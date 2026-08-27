import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[18px] sm:rounded-[20px] shadow-card h-full'
    >
      <div
        className='bg-tertiary rounded-[18px] sm:rounded-[20px] py-4 sm:py-5 px-3 sm:px-6 min-h-[200px] sm:min-h-[260px] flex justify-evenly items-center flex-col h-full'
      >
        <img
          src={icon}
          alt={title}
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />

        <h3 className='text-white text-[16px] sm:text-[18px] font-bold text-center leading-snug'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Computer Engineering undergraduate with an Honours in Next-Gen AI at
        Vidyalankar Institute of Technology, Mumbai (CGPA: 9.75/10). Experienced in
        Artificial Intelligence, Deep Learning (PyTorch, Transformers), Full-Stack
        Development (React, Next.js, FastAPI, Node.js), and Mobile Engineering (Flutter).
        I specialize in architecting multimodal ML systems, high-throughput backend APIs,
        and responsive digital experiences.
      </motion.p>

      <div className='mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
