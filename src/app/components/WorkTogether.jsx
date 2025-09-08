'use client'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';

export const WorkTogether = () => {
  const workViewRef = useRef(null);
  const isWorkInView = useInView(workViewRef, { thershold: 0.6 })

  return (
    <>
      <div className='bg-gray-900 p-10 mx-auto text-white' ref={workViewRef}>
        <motion.h1
          className='text-2xl font-semibold w-3/12 mx-auto text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={isWorkInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Do you have project idea?
          Let's discuss your project!
        </motion.h1>
        <motion.p
          className='text-gray-300 py-10 text-sm w-2/4 mx-auto text-center'
          initial={{ y: 50, opacity: 0 }}
          animate={isWorkInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          It can be both a web page or mobile app or a specific online solution that you are telling me about. Together we can make your vision reality in an efficient and creative development.
        </motion.p>
        <motion.button
          className='cursor-pointer w-full mx-auto'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isWorkInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >

          <Link
            to="contact"
            smooth={true}
            duration={900}
            offset={-70}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white bg-purple-500 rounded-md shadow-md w-fit cursor-pointer"
            >
              Let's Work Togetter <FontAwesomeIcon icon={faArrowRight} className='text-sm' />
            </motion.div>
          </Link>
        </motion.button>
      </div>
    </>
  )
}
