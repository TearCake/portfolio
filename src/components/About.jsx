import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, personalInfo } from "../constants";
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

      <div className='mt-7 flex flex-wrap gap-4 items-center'>
        <a
          href={personalInfo.resumeUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#6d30e3] text-white font-semibold text-[15px] sm:text-[16px] shadow-[0_0_25px_rgba(145,94,255,0.4)] hover:shadow-[0_0_35px_rgba(145,94,255,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-white/15 cursor-pointer'
        >
          <svg
            className='w-5 h-5 text-white transition-transform duration-300 group-hover:translate-y-0.5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
            />
          </svg>
          <span>Download Resume / CV</span>
          <span className='text-xs opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300'>
            ↗
          </span>
        </a>
      </div>

      <div className='mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
