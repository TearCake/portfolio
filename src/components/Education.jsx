import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={edu.date}
      iconStyle={{ background: edu.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={edu.icon}
            alt={edu.institution_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[22px] font-bold'>{edu.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.institution_name}
        </p>
        {edu.grade && (
          <span className='inline-block mt-2 px-3 py-1 bg-[#915EFF]/20 border border-[#915EFF]/40 text-[#bba1ff] text-xs font-semibold rounded-full'>
            {edu.grade}
          </span>
        )}
      </div>

      {edu.points && edu.points.length > 0 && (
        <ul className='mt-4 list-disc ml-5 space-y-2'>
          {edu.points.map((point, index) => (
            <li
              key={`education-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      )}
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`education-${index}`}
              edu={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
