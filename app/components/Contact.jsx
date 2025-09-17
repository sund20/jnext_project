'use client';

import { React, useState, useEffect, useRef} from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {

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
    

  const [result, setResult] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('access_key', 'f2a52f6a-b568-4d83-9593-84db2abfe27f');

    const dataObject = Object.fromEntries(formData);
    const jsonData = JSON.stringify(dataObject);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: jsonData,
      });

      const res = await response.json();

      if (res.success) {
        setResult('✅ Your message has been sent successfully!');
        event.target.reset();
      } else {
        setResult('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setResult('❌ Something went wrong. Please try again.');
    }
  };

  return (
   <section
     id="contact"
     className="w-screen min-h-screen relative bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText pb-10"
   >
 {/* Sticky fading image */}
      <motion.div
        ref={imageRef}
        className="w-screen max-w-none top-0 sticky"
        animate={controls}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5}}
      >
        <Image
         src={assets.bg_contact02}
         alt="About background"
         className="w-full h-auto object-cover"
         priority
          style={{ imageRendering: "smooth" }}
       />
     </motion.div>
   
     {/* Padded content BELOW the full-width image */}
     <div className="px-[12%] pt-10 relative bg-stone-50 text-lightText dark:bg-darkBg dark:text-darkText">
 <h4 ref={headingRef} className='text-center text-2xl font-Ovo scroll-mt-20 '>Get in Touch</h4>
   <div className='border-b-4 border-orange-500 mb-12 '> 
  <h1 className='text-start text-5xl font-Ovo text-primary pt-10 mb-1'>Contact Me</h1>
</div>
     
       {/* More about section content... */}
      <motion.div
      initial={{y:48, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{ease:"easeInOut", duration:0.7}}>
        <p className="mt-5 mb-12 font-outfit text-center max-w-2xl mx-auto">
          I'd love to hear from you!
        </p>
      </motion.div>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative sm:px-10 xs:px-10">
        <motion.div
      initial={{y:48, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{ease:"easeInOut", duration:0.7}} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-sm w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-sm w-full"
            required
          />
        </motion.div>

        <motion.div
      initial={{y:48, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{ease:"easeInOut", duration:0.7}} className="mb-6">
          <textarea
            name="message"
            placeholder="Enter your Message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-sm resize-none"
            rows={5}
            required
          ></textarea>
        </motion.div>

        <motion.div
      initial={{y:48, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{ease:"easeInOut", duration:0.7}} className="flex flex-col items-center">

            <button
  type="submit"
  className="w-max mx-auto flex items-center justify-center gap-2 
             px-6 py-2 text-lg font-semibold rounded-md bg-stone-200
             text-orange-500 border border-stone-500 
             dark:text-primary dark:border-gray-100 
             transition-all duration-500 
             hover:bg-orange-500 hover:text-white dark:hover:text-white "
>

            Send Message
            <Image
              src={assets.right_arrow_bold}
              alt="Submit"
              className="w-4"
            />
          </button>

          {result && (
            <p
              className={`mt-4 text-center text-sm ${
                result.startsWith('✅') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {result}
            </p>
          )}
        </motion.div>
      </form>
      </div>
    </section>
  );
};

export default Contact;
