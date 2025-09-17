'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { assets } from '../../assets/assets';

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Scale the background image on scroll (parallax)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  // Move and fade out text on scroll
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen w-screen overflow-hidden"
    >
      {/* Hero image with scale */}
  
      <motion.div
  style={{ scale: imageScale }}
  className="absolute inset-0 z-10"
>
 {/* */}<video
    autoPlay
    loop
    muted
    playsInline
    preload='auto'
    className="w-full h-[110vh] object-cover object-bottom"
  >
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent  to-slate-900" />
      {/* Hero text: enters on load, then scroll-fades + moves down */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-white text-start px-7"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          y: textY,
          opacity: textOpacity,
        
        }}
      >
        {/*<h1
          className="text-4xl md:text-6xl lg:text-8xl font-bold font-Newsreader text-orange-500 text-shadow-lg "
        >
          Imagination
        </h1>    
            <p className="text-3xl font-semibold text-white font-Newsreader">
          Fuels what's NEXT
        </p>*/}
         <div className='w-2/5 justify-center text-[min(10vw),2.5rem]'>  
           <h1 className="text-4xl font-semibold text-white font-ovo  leading-8">
<span> Imagine </span>
<span className='text-justify text-orange-500 bg-slate-50/20 leading-10'>The Way</span>,
 <br /><span>Fueled by </span>
<span className='text-justify text-orange-500 bg-slate-50/20 text-4xl leading-10'>Truth</span>, <br />
<span className='text-justify text-orange-500 bg-slate-50/20 leading-10'>Life</span> what’s next.
        </h1></div> 

      </motion.div>
<motion.div
  className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50"
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.2, ease: 'easeOut' }}
  style={{
    y: textY,
    opacity: textOpacity,
  }}
>
  
        <a
          href="/Sunita_25UofA23.pdf"
          download
          className="flex items-center gap-2 text-md font-semibold rounded-md bg-stone-200/40
                     text-orange-500 border border-stone-500 px-4 py-2
                     dark:text-primary dark:border-gray-100 
                     transition-all duration-500
                     hover:bg-orange-500 hover:text-white dark:hover:text-white"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4"
          />
        </a>
</motion.div>


    </section>
  );
};

export default Hero;
