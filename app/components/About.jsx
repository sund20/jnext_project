'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData, toolsData2 } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useAnimation } from 'framer-motion';


const About = () => {
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const controls = useAnimation();

  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageRect = imageRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      if (!imageRect || !headingRect) return;

      const overlap = headingRect.top <= imageRect.bottom;

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
    

    <section id="about" 
      className="w-screen min-h-screen  bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText relative"
    >
      {/* Sticky fading image */}
      <motion.div
        ref={imageRef}
        className="w-screen max-w-none top-0 sticky -z-2  "
       // animate={controls}
       // initial={{ opacity: 1 }}
       //transition={{ duration: 0.8 }}
      
      >
        <Image
          src={assets.bg_about02}
          alt="background"
          className="w-full h-auto"
          style={{imageRendering: "smooth"}}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-[12%] mt-1 pt-10 bg-stone-50 text-lightText dark:bg-black dark:text-darkText shadow-xl">



        <h4 ref={headingRef} className="text-center mb-2 text-2xl font-Ovo top-10">Intr&#333;d&#363;cti&#333;</h4>


   <motion.div
  initial={{ y: 48, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
       className='border-b-4 border-orange-500 mb-12 '> 
  <h1  className='text-end text-5xl font-Ovo text-primary pt-10 mb-1'>About Me</h1>
</motion.div>

       <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
         className="mt-6 space-y-4 text-base leading-7 font-Ovo text-justify"
        >
        <p>
I'm a creative and versatile web developer with experience in both front-end and full-stack development. I build responsive, accessible, and visually appealing websites using modern tools like HTML5, CSS, Sass, Bootstrap, Tailwind CSS, jQuery, JavaScript, and frameworks like React and Next.js.
I'm skilled with VS Code and NetBeans, and I also work with WordPress and learning platforms like Moodle and Blackboard. With a background in design tools such as Adobe Creative Suite and Dreamweaver.
I'm passionate about user-friendly design and always stay up to date with the latest web technologies. </p>

      </motion.div>
        <motion.div 
    initial={{ y: 48, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
         className="flex flex-col md:flex-row-reverse items-start justify-center gap-10 mt-10 relative">
          {/* Profile Image */}
          <div className=" sm:w-80 max-w-none border-1 border-stone-50 shadow-xl shadow-gray-200/50 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText dark:shadow-xl dark:shadow-orange-100/25  top-0 w-full sm:flex sm:justify-center" >
            <Image
              src={assets.p_profile}
              alt="Profile Image"
              className="w-full mx-auto shadow-lg sm:block sm:mx-auto"
            />
          </div>

          {/* About Content */}
          <div
         className="flex-1 w-full md:flex-col items-center justify-between gap-20 m-5">
         <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-2xl mt-6 text-lg font-Ovo mb-20">
              {infoList.map((item, index) => (
               <div
                  key={index}
                  className="grid items-start space-x-4 border-[0.5px] border-gray-400 p-3 rounded-lg cursor-pointer bg-lightHover dark:hover:shadow-glow-orange dark:hover:-translate-y-1 
                  dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 dark:hover:shadow-glow-rose"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-2xl text-orange-500 mt-1 justify-center"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mt-0 text-orange-500">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>






        </div>
          </motion.div>
<div 
       className='border-t-4 border-orange-500 p-10 '> 
  
</div>
      </div>
   

    </section>


  );
};

export default About;
