'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { assets, workData } from '../../assets/assets';

const Work = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const controls = useAnimation();
  const [isFaded, setIsFaded] = useState(false);

  // Fade sticky background image on scroll
  useEffect(() => {
    const handleScroll = () => {
      const imageRect = imageRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();
      if (!imageRect || !headingRect) return;

      const overlap = headingRect.top <= 0;//imageRect.bottom
      if (overlap && !isFaded) {
        controls.start({ opacity: 0 });
        setIsFaded(true);
      } else if (!overlap && isFaded) {
        controls.start({ opacity: 1 });
        setIsFaded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, isFaded]);

  return (
    <section
      id="work"
      className="w-screen min-h-screen h-100 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText"
    >
      {/* Sticky background image */}
      <motion.div
        ref={imageRef}
        className="w-screen max-w-none top-0 sticky"
        animate={controls}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={assets.bg_work03}
          alt="Work background"
          className="w-full h-auto object-cover"
          priority
           style={{ imageRendering: "smooth" }}
        />
      </motion.div>

      {/* Portfolio Section Header */}
      <div ref={headingRef} className="relative px-[12%]  pt-10 z-10  bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText pb-8">
        <h4 className="text-center mb-2 text-2xl font-Ovo">Opus</h4>
             <div className='border-b-4 border-orange-500 mb-12 '> 
  <h1  className='text-end text-5xl font-Ovo text-primary pt-10 mb-1'>Experience</h1>
</div>
        


        {/* Animated Project Cards */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {workData.map((project, index) => (
            <motion.div
              key={index} // Proper key placement
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeInOut', duration: 0.80 }}
              className="w-[80vw] m-10 p-4 border-4 border-white shadow-xl shadow-gray-200/50 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText dark:shadow-xl dark:shadow-orange-100/25 dark:border-darkTheme "
            >
              <p className="text-sm font-Ovo">{project.date}</p>

              {/* Title */}
              <h2 className="text-2xl font-black pb-2 text-primary">{project.title}</h2>

              {/* Description */}
              <p className="text-md font-Ovo">{project.description}</p>
            </motion.div>
          ))}
        </div>
             <div className='border-t-4 border-orange-500 p-10 mt-8'></div>

      </div> 
    </section>
  );
};

export default Work;
