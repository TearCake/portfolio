import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is a mobile/tablet device or has small screen width
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          {isMobile ? (
            <Tilt
              className='w-full h-full rounded-full'
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              scale={1.05}
              transitionSpeed={400}
            >
              <div className='w-full h-full rounded-full bg-tertiary/90 backdrop-blur-md p-4 flex flex-col items-center justify-center border border-white/10 shadow-card hover:border-[#915EFF]/60 hover:shadow-[0_0_20px_rgba(145,94,255,0.4)] transition-all duration-300'>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-12 h-12 object-contain filter drop-shadow-md'
                  loading='lazy'
                />
              </div>
            </Tilt>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
