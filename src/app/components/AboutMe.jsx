'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { toast, } from "react-toastify";

export const AboutMe = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { threshold: 0.2 });
  const handleClick = async () => {
    try {
      const res = await fetch("/Anas_CV.pdf")
      const blob = await res.blob();

      const link = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = link
      a.download = "Anas_CV.pdf"
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(link)

      toast.dismiss()
      toast.success("CV Downloaded Successfully!")

    } catch (error) {
      toast.dismiss()
      toast.error("Failed to Download CV!" + error.message)
    }
  }
  return (
    <>
      <div className="relative w-full flex items-center justify-center bg-white" id="about">
        <div className='absolute right-0 bottom-0 w-1/2 h-full z-0 bg-gradient-to-bl from-blue-100 via-white to-white'>
        </div>
        <div className='absolute left-0 bottom-0 w-1/2 h-3/6 z-0 bg-gradient-to-tr from-orange-100 via-white to-white'>
        </div>
        <div className="w-2/3 mx-auto relative z-10">
          <div ref={aboutRef} className="flex shadow-2xl px-12 py-15 my-10 bg-gray-50 rounded-lg items-center">
            <motion.div
              initial={{ x: -80, opacity: 0, scale: 0.95 }}
              animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
              className='w-fit relative mx-auto'>
              <img src="/Graybg.jpg" alt="AnasPicture" width={300} className='bg-transparent rounded-md' />
              <div className='flex items-center justify-center bg-white text-purple-500 text-lg px-3 py-2 absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 bottom-0 space-x-3 shadow-md'>
              <a href="https://www.facebook.com/profile.php?id=100017561626556" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className='px-3 hover:scale-110 transition-transform duration-300 cursor-pointer' />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-anas-72aa05260/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} className='p-3 bg-purple-500 text-white hover:scale-100 transition-transform duration-300 cursor-pointer' />
              </a>
              <a href="https://github.com/Muhammad-Anas-CodeMaestro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='px-3 hover:scale-110 transition-transform duration-300 cursor-pointer' />
              </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 bg-white text-purple-500 w-fit border border-purple-500 rounded-md cursor-pointer'
                  onClick={handleClick}>
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}