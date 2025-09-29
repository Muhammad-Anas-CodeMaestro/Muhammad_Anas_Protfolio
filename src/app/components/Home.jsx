'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-scroll';

export const Home = () => {
  const homeRef = useRef(null);
  const isHomeInView = useInView(homeRef, { threshold: 0.2 })

  const data = [{
    h3: "Beginner",
    h5: "Experience"
  }, {
    h3: "20+",
    h5: "Projects"
  }, {
    h3: "BSCS",
    h5: "Education"
  }];

  return (
    <>
      <div className="relative w-full min-h-fit flex items-center justify-center bg-white">
        <div className='absolute right-0 top-0 w-1/2 h-full z-0 bg-gradient-to-r from-white via-purple-100 to-blue-100'>
        </div>
        <div className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto relative z-10" id='home'>
          <div 
            ref={homeRef} 
            className="flex flex-col-reverse lg:flex-row justify-between items-center h-fit my-10 lg:my-15 gap-10 lg:gap-0"
          >
            {/* Left Content */}
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.95 }}
              animate={isHomeInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 py-5">
                Hello, I'm Muhammad Anas
              </h1>
              <p className="w-full text-gray-600 text-sm md:text-base drop-shadow-lg pb-5">
                I am a <span className="relative font-semibold text-gray-900">
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-pink-200 z-[-1]"></span>
                  Front-End Developer
                </span> trying my best to build clean, responsive, and, of course, accessible user interface. 
                Bringing ideas to the visions of interactivity with pixel perfect websites.
              </p>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-70}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 text-white bg-purple-500 rounded-md shadow-md w-fit mx-auto lg:mx-0 cursor-pointer"
                >
                  Say Hi!
                </motion.div>
              </Link>
              <div className="flex flex-col sm:flex-row justify-around items-center mt-10 lg:mt-20 mb-10 text-center gap-3 sm:gap-0">
                {data.map((item, index) => (
                  <div key={index} className="bg-gray-200 w-full sm:w-1/3 mx-0.5 py-3">
                    <h3 className="text-gray-800 text-lg font-semibold pb-1.5">{item.h3}</h3>
                    <h5 className="text-gray-600 text-sm">{item.h5}</h5>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ x: 80, opacity: 0, scale: 0.95 }}
              animate={isHomeInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10 }}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <img src="/DP.jpg" alt="AnasPicture" width={300} className='rounded-2xl shadow-lg mx-auto' />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}