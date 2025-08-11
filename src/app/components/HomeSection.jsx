'use client'
import React, { useRef, } from 'react'
import { motion, useInView } from 'framer-motion'

function HomeSection() {
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
        <div className="w-2/3 mx-auto relative z-10" id='home'>
          <div ref={homeRef} className="flex justify-around items-center h-fit my-15">
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.95 }}
              animate={isHomeInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, }}
              className="w-1/2">
              <h1 className="text-5xl text-gray-900 py-5">Hello, I'm Muhammad Anas</h1>
              <p className="w-full text-gray-600 text-sm drop-shadow-lg pb-5">
                I am a  <span className="relative font-semibold text-gray-900">
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-pink-200 z-[-1]"></span>
                  Front-End Developer
                </span> trying my best to build clean, responsive, and, of course, accessible user interface. Bringing ideas to the visions of interactivity with pixel perfect websites.
              </p>
              <h3 className="px-5 py-2 bg-purple-500 text-white rounded-md w-fit cursor-pointer">Say Hello!</h3>
              <div className="flex justify-around items-center mt-20 mb-10 text-center ">
                {data.map((item, index) => (
                  <div key={index} className="bg-gray-200 w-full mx-0.5 py-3">
                    <h3 className="text-gray-800 text-lg font-semibold pb-1.5">{item.h3}</h3>
                    <h5 className="text-gray-600 text-sm">{item.h5}</h5>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 80, opacity: 0, scale: 0.95 }}
              animate={isHomeInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, }}
              className="w-2/5">
              <img src="/DP.jpg" alt="AnasPicture" width={300} className='rounded-2xl  shadow-lg mx-auto' />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection