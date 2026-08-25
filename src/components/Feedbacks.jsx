import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const CertificationCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-between shadow-card border border-white/5 hover:border-indigo-500/30 transition-all duration-300'
  >
    <div>
      <div className='flex items-center justify-between'>
        <span className='text-3xl'>🏆</span>
        <img
          src={image}
          alt={company}
          className='w-12 h-12 rounded-xl object-contain bg-white/10 p-1.5'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[20px] leading-[26px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] leading-[22px]'>{testimonial}</p>
      </div>
    </div>

    <div className='mt-6 pt-4 border-t border-white/10 flex justify-between items-center'>
      <div>
        <p className='text-white font-semibold text-[15px]'>{company}</p>
        <p className='text-secondary text-[12px]'>{designation}</p>
      </div>
      {link ? (
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs px-3 py-1.5 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 hover:text-white border border-indigo-500/40 font-medium flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm hover:scale-105'
        >
          Verify
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-3.5 h-3.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2.2'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' />
          </svg>
        </a>
      ) : (
        <span className='text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-medium'>
          Verified
        </span>
      )}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[260px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Verified Credentials</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center sm:justify-start`}>
        {testimonials.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
