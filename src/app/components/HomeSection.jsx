'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { motion, time, useInView } from 'framer-motion'

function HomeSection() {
  const homeRef = useRef(null);
  const isHomeInView = useInView(homeRef, { threshold: 0.2})
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { threshold: 0.2 });
  const skillRef = useRef(null)
  const isSkillInView = useInView(skillRef, { threshold: 0.2 });

  const data = [{
    h3: "Beginner",
    h5: "Experience"
  }, {
    h3: "20+",
    h5: "Projects"
  }, {
    h3: "BSCS",
    h5: "Education"
  }]

  const skillLeft = [
    { name: "HTML", percentage: "95%" },
    { name: "CSS", percentage: "90%" },
    { name: "JavaScript", percentage: "90%" },
    { name: "React", percentage: "80%" },
    { name: "Next.js", percentage: "75%" },
  ];

  const skillRight = [
    { name: "Node.js", percentage: "50%" },
    { name: "Express.js", percentage: "50%" },
    { name: "MongoDB", percentage: "40%" },
    { name: "Bootstrap", percentage: "80%" },
    { name: "Tailwind CSS", percentage: "85%" }
  ];

  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center bg-white">
        <div className='absolute right-0 top-0 w-1/2 h-1/5 z-0 bg-gradient-to-r from-white via-purple-100 to-blue-100'>
        </div>
        <div className='bg-gradient-to-bl from-blue-100 via-white to-white absolute right-0 w-1/2 h-3/5 z-0'>
        </div>
        <div className='absolute left-0 top-0 w-1/2 h-3/5 bg-gradient-to-t from-orange-100 via-white to-white z-0'>
        </div>
        <div className='absolute bottom-0 w-full h-2/5 bg-gray-200 z-0'>
        </div>
        <div className="w-2/3 mx-auto relative z-10" id='home'>
          <div ref={homeRef} className="flex justify-around items-center h-fit mt-15 mb-20">
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.95 }}
              animate={ isHomeInView ? {  x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 } }
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
              animate={ isHomeInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, }}
              className="w-2/5">
              <img src="/DP.jpg" alt="AnasPicture" width={300} className='rounded-2xl  shadow-lg mx-auto' />
            </motion.div>
          </div>
          <div id='about'></div>
          <div ref={aboutRef} className="flex shadow-2xl px-12 py-15 my-20 bg-gray-50 rounded-lg items-center">
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.95 }}
              animate={ isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 } }
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
              className='w-fit relative mx-auto'>
              <img src="/Graybg.jpg" alt="AnasPicture" width={300} className='bg-transparent rounded-md' />
              <div className='flex items-center justify-center bg-white text-purple-500 text-lg px-3 py-2 
              absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 bottom-0 space-x-3 shadow-md'>
                <FontAwesomeIcon icon={faFacebookF} className='pr-3 hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <FontAwesomeIcon icon={faLinkedinIn} className='p-3 bg-purple-500 text-white hover:scale-110 transition-transform duration-300 cursor-pointer' />
                <FontAwesomeIcon icon={faGithub} className='pl-3 hover:scale-110 transition-transform duration-300 cursor-pointer' />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={ isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
              className='w-1/2 space'>
              <h3 className='text-gray-900 font-semibold font-sans text-3xl pb-7'>I am Front-End Developer</h3>
              <p className='text-gray-600 text-sm pb-5'>
                I build modern, simple to use, and highly responsive website designs using the latest front-end tools such as React, Tailwind CSS and JavaScript. I am a UX designer that enjoys creating interactive digital designs and experiences that are user-centric, creative, user-friendly.
              </p>
              <p className='text-gray-600 text-sm pb-5'>
                I enjoy overcoming real world challenges with code whether it is through the development of user friendly user interfaces or cross-browser compatibilities.
              </p>
              <div className='flex items-center'>
                <a href="https://github.com/Muhammad-Anas-CodeMaestro?tab=repositories" target='_blank' className='px-6 py-3 bg-purple-500 text-white rounded-md w-fit mr-2'>My Projects</a>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className='px-6 py-3 bg-white text-purple-500 w-fit border border-purple-500 rounded-md cursor-pointer'>
                    <FontAwesomeIcon icon={faDownload} /> Download CV
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className='mb-10' id='skills'>
            <div className="relative w-full">
              <h1 className="text-2xl font-semibold text-gray-900 w-fit mx-auto mb-5">My Skills</h1>
              <div ref={skillRef} className='flex gap-x-8 bg-white rounded-xl px-6 py-4'>
                <div className='w-1/2'>
                  {skillLeft.map((skill, index) => (
                    <div key={index} className="my-9">
                      <span className="block text-lg font-semibold text-gray-700">{skill.name}</span>
                      <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={isSkillInView ? { width: skill.percentage, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="block h-full rounded-xl bg-purple-500 relative"
                        >
                          <motion.span
                            initial={{ opacity: 0, y: 0 }}
                            animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10"
                          >
                            {skill.percentage}
                            <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0"></span>
                          </motion.span>
                        </motion.span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='w-1/2'>
                  {skillRight.map((skill, index) => (
                    <div key={index} className="my-9">
                      <span className="block text-lg font-semibold text-gray-700">{skill.name}</span>
                      <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={isSkillInView ? { width: skill.percentage, opacity: 1 } : {}}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="block h-full rounded-xl bg-purple-500 relative"
                        >
                          <motion.span
                            initial={{ opacity: 0, y: 0 }}
                            animate={isSkillInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10"
                          >
                            {skill.percentage}
                            <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0"></span>
                          </motion.span>
                        </motion.span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection