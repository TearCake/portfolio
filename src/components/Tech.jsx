import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import {
  skillsCategories,
  skillsRow1,
  skillsRow2,
  allCategorizedSkills,
} from "../constants";
import { SkillIcon } from "./TechIcons";

const SkillMarqueeCard = ({ skill }) => (
  <div className='group relative flex items-center gap-3.5 px-6 py-3.5 mx-3 rounded-2xl bg-[#100d25]/90 border border-white/10 hover:border-indigo-500/50 backdrop-blur-md shadow-card transition-all duration-300 hover:scale-105 hover:bg-[#171338] hover:shadow-[0_0_25px_rgba(128,77,238,0.25)] cursor-pointer select-none'>
    <div
      className='p-2 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all duration-300'
      style={{
        boxShadow: `0 0 15px ${skill.accent}20`,
      }}
    >
      <SkillIcon name={skill.name} className='w-7 h-7 sm:w-8 sm:h-8 object-contain' />
    </div>

    <div className='flex flex-col text-left'>
      <span className='text-white text-[15px] sm:text-[16px] font-semibold tracking-wide group-hover:text-white transition-colors duration-200'>
        {skill.name}
      </span>
      <span
        className='text-[11px] font-medium uppercase tracking-wider'
        style={{ color: skill.accent }}
      >
        {skill.category}
      </span>
    </div>
  </div>
);

const FilteredSkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    className='group relative flex items-center gap-4 p-5 rounded-2xl bg-[#100d25]/95 border border-white/10 hover:border-indigo-500/60 backdrop-blur-md shadow-card transition-all duration-300 hover:scale-105 hover:bg-[#171338] hover:shadow-[0_0_30px_rgba(128,77,238,0.3)]'
  >
    <div
      className='p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300'
      style={{
        boxShadow: `0 0 20px ${skill.accent}25`,
      }}
    >
      <SkillIcon name={skill.name} className='w-8 h-8 sm:w-9 sm:h-9 object-contain' />
    </div>

    <div className='flex flex-col text-left flex-1 min-w-0'>
      <div className='flex items-center justify-between gap-2'>
        <span className='text-white text-[16px] sm:text-[17px] font-bold tracking-wide truncate'>
          {skill.name}
        </span>
        <span
          className='text-[10px] sm:text-[11px] font-semibold uppercase px-2 py-0.5 rounded-full border'
          style={{
            color: skill.accent,
            borderColor: `${skill.accent}40`,
            backgroundColor: `${skill.accent}15`,
          }}
        >
          {skill.category}
        </span>
      </div>
      {skill.desc && (
        <p className='mt-1 text-secondary text-[12px] leading-[18px] line-clamp-2'>
          {skill.desc}
        </p>
      )}
    </div>
  </motion.div>
);

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Duplicate arrays to create seamless infinite looping for the marquee
  const row1Duplicated = [...skillsRow1, ...skillsRow1, ...skillsRow1];
  const row2Duplicated = [...skillsRow2, ...skillsRow2, ...skillsRow2];

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "all"
      ? []
      : allCategorizedSkills.filter(
          (skill) => skill.categoryKey === selectedCategory
        );

  const handleCategoryClick = (categoryId) => {
    // Toggle: if already active, switch back to 'all' marquee
    if (selectedCategory === categoryId) {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div className='w-full overflow-hidden'>
      <motion.div variants={textVariant()} className='text-center mb-10'>
        <p className={`${styles.sectionSubText}`}>
          What I bring to the table
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Skills & Tech Stack.
        </h2>
      </motion.div>

      {/* Interactive Category Filter Pills */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='flex flex-wrap justify-center gap-2.5 sm:gap-3.5 mb-10 px-4'
      >
        {skillsCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md shadow-sm border ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-indigo-400 shadow-[0_0_20px_rgba(128,77,238,0.5)] scale-105"
                  : "bg-tertiary/70 text-secondary hover:text-white border-white/10 hover:border-white/30 hover:bg-tertiary"
              }`}
            >
              {cat.label}
              {isActive && cat.id !== "all" && (
                <span className='ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white'>
                  {filteredSkills.length}
                </span>
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Content Area: Either Infinite Dual Marquee (when 'all') or Filtered Grid */}
      <AnimatePresence mode='wait'>
        {selectedCategory === "all" ? (
          /* Marquee Container with Left & Right Gradient Masks */
          <motion.div
            key='marquee-stream'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='relative w-full overflow-hidden py-4'
          >
            {/* Left and right fade gradient overlays */}
            <div className='pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10' />
            <div className='pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10' />

            {/* Row 1: Leftward infinite flow */}
            <div className='flex mb-6'>
              <div className='animate-marquee-left flex flex-row items-center'>
                {row1Duplicated.map((skill, index) => (
                  <SkillMarqueeCard
                    key={`row1-${skill.name}-${index}`}
                    skill={skill}
                  />
                ))}
              </div>
            </div>

            {/* Row 2: Rightward infinite flow */}
            <div className='flex'>
              <div className='animate-marquee-right flex flex-row items-center'>
                {row2Duplicated.map((skill, index) => (
                  <SkillMarqueeCard
                    key={`row2-${skill.name}-${index}`}
                    skill={skill}
                  />
                ))}
              </div>
            </div>

            <p className='mt-8 text-center text-secondary text-xs tracking-wider opacity-70'>
              ✨ Hover to pause • Click a category button above to filter
            </p>
          </motion.div>
        ) : (
          /* Static Categorized Skills Grid (Marquee Stopped) */
          <motion.div
            key={`filtered-${selectedCategory}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className='max-w-6xl mx-auto px-4'
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
              {filteredSkills.map((skill, index) => (
                <FilteredSkillCard
                  key={`filtered-${skill.name}-${index}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>

            <div className='mt-8 text-center'>
              <button
                onClick={() => setSelectedCategory("all")}
                className='inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-secondary hover:text-white border border-white/10 transition-all duration-200 cursor-pointer'
              >
                <span>🔄</span> Resume Infinite Stream (Show All)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
