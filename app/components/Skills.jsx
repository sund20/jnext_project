'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { serviceData, assets, toolsData2 } from '../../assets/assets';

const Skills = () => {
 const imageRef = useRef(null);
  const headingRef = useRef(null);
  const controls = useAnimation();

  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imageRect = imageRef.current?.getBoundingClientRect();
      const headingRect = headingRef.current?.getBoundingClientRect();

      if (!imageRect || !headingRect) return;

      const overlap = headingRect.top <= 0;//imageRect.bottom;

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
      id="skills"
      className="w-screen min-h-screen  bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText relative"
    >
      {/* Sticky fading image */}
      <motion.div
        ref={imageRef}
        className="w-screen max-w-none top-0 sticky"
        animate={controls}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Image
          src={assets.bg_skills}
          alt="Skills background"
          className="w-full h-auto object-cover"
          priority
           style={{ imageRendering: "smooth" }}
        />
      </motion.div>

      {/* Main Content */}
      <div
        ref={headingRef}
        className="px-[12%] pt-10 relative z-10 bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText"
      >
        {/* Heading */}
        <motion.h4 
                      initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}className="text-center mb-2 text-2xl  font-Ovo">Proiectum</motion.h4>
        <motion.div
                      initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}className="border-b-4 border-orange-500 mb-12">
          <h1 className="text-start text-5xl font-Ovo text-primary pt-10 mb-1">
            Skills
          </h1>
        </motion.div>

        {/* Skills List */}
        <motion.ul 
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-left text-base sm:text-lg font-Ovo list-disc list-inside space-y-3 sm:space-y-2">
          <li>HTML5 / Adobe Creative Suite / Dreamweaver</li>
          <li>CSS / SCSS / Bootstrap / Tailwind CSS / Framer motion</li>
          <li>VS Code / NetBeans</li>
          <li>JavaScript (Learning React / TypeScript / Next.js)</li>
          <li>Learning MongoDB / Postman / GitHub</li>
          <li>Exploring AI tools (ChatGPT / CoPilot)</li>
          <li>Basic Understanding AEM experience</li>
        </motion.ul>

        {/* Tools Section */}
        <motion.h2 
                      initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-start text-3xl font-Ovo text-primary pt-10 mb-10">
          Applications & Tools
        </motion.h2>

        <motion.ul
        initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }} className="flex flex-wrap items-center gap-3 sm:gap-5 mt-4 pb-20">
          {toolsData2.map(({ icon: ToolIcon }, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                         bg-white p-2 rounded-md border border-white shadow-xl 
                         shadow-orange-200/50 dark:bg-darkBg dark:border-darkTheme"
            >
              <ToolIcon className="w-5 sm:w-7 h-5 sm:h-7 text-primary/100" />
            </li>
          ))}
        </motion.ul>

        {/* Links to projects Grid */}
        <motion.div
                      initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {/* Links  1 */}
                      <a
                href="https://solis.ink/TheProj22/index.html"
                target="_blank"
                className="underline text-primary"
              >
                 <div
            className="px-4 py-10 rounded-lg border-4 border-white shadow-xl shadow-gray-200/50 
                       bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText 
                       dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme 
                       hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 
                       dark:hover:shadow-glow-rose group-hover:cursor-pointer"
          >
            {/* Title and Description */}
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-500">
              Frontend project
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-5 mb-4" style={{ textDecoration: 'none' }}>
               2022 - HTML5 CSS3 JavaScript jQuery
                Sass Bootstrap Static site
            </p>
            <p>
              My 2022 web site
            </p>
          </div></a>
            {/* Links  2 */}
                <a
                href="https://solis.ink/ProjCCTW915/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                      <div
            className="px-4 py-10 rounded-lg border-4 border-white shadow-xl shadow-gray-200/50 
                       bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText 
                       dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme 
                       hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 
                       dark:hover:shadow-glow-rose group-hover:cursor-pointer"
          >
            {/* Title and Description */}
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-500">
              Web Design
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-5 mb-4">
              My Traning with NAIT <br />HTML5 CSS3 JavaScript Bootstrap
            </p>
            <p> 2017 - project</p>
          </div>
          </a>
            {/* Links  3 */}
                 <a
                href="https://solis.ink/MoodleHelp/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                <div
            className="px-4 py-10 rounded-lg border-4 border-white shadow-xl shadow-gray-200/50 
                       bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText 
                       dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme 
                       hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 
                       dark:hover:shadow-glow-rose group-hover:cursor-pointer"
          >
            {/* Title and Description */}
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-500">
              Moodle Help site
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-5 mb-4">
              Moodle 2019 - Bootstrap inline javascript
            </p>
            <p>
              Moodle Help
            </p>
          </div></a>
              {/* Links  4 */}
              <div
            className="px-4 py-10 rounded-lg border-4 border-white shadow-xl shadow-gray-200/50 
                       bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText 
                       dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme 
                       hover:shadow-lg hover:-translate-y-1 transition-transform duration-500 
                       dark:hover:shadow-glow-rose group-hover:cursor-pointer"
          >
            {/* Title and Description */}
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-500">
              Simple Mern Stack
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-5 mb-4">
              My first mern-stack<br />Mongodb Express React+Vite Node <br/>Github Bootstrap Render.com 
       <br/><span className='font-bold'>coming soon</span> 
            </p>
            <p>
              {/*<a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                first-mern-stack-client.onrender
              </a>*/}
            </p>
          </div>
        </motion.div>
              <motion.h2 
                      initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-start text-3xl font-Ovo text-primary ">
          Award & recognition </motion.h2>
<div className="flex flex-col items-center justify-center pt-10">
  <div className="flex flex-row items-center justify-center gap-10">
    
    {/* Image Container */}
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-auto max-w-xs sm:max-w-sm md:max-w-md"
    >
      <Image
        src={assets.award_img}
        alt="Award"
        className="w-full h-auto"
        style={{ imageRendering: "smooth" }}
      />
    </motion.div>

    {/* List Container */}
    <motion.div 
          initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full max-w-md"
    >
      <ul className="text-left text-base sm:text-lg font-Ovo list-disc list-inside bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText 
                       dark:shadow-xl dark:shadow-orange-400/25 dark:border-darkTheme p-4 rounded-md shadow-md">
        <li>
          The Q Impact award for Moodle Theme and assisting Faculty Development Team
        </li>
      </ul>
    </motion.div>

  </div>
</div>

              <div className='border-t-4 border-orange-500 p-10 mt-12'></div>
      </div>
    </section>
  );
};

export default Skills;
