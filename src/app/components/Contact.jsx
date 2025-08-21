'use client'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export const Contact = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { threshold: 0.2 });

  const personalDetails = [
    {
      icon: faEnvelope,
      title: "My Email:",
      id: "mraza50044@gmail.com"
    },
    {
      icon: faAddressBook,
      title: "Call Me Now:",
      id: "+92 319 0409896"
    }
  ]

  const socialLinks = [
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/muhammadanas62600/'
    },
    {
      icon: faGithub,
      link: 'https://github.com/Muhammad-Anas-CodeMaestro'
    },
    {
      icon: faLinkedinIn,
      link: 'https://www.linkedin.com/in/muhammad-anas-72aa05260/'
    }
  ]
  return (
    <>
      <div className="relative w-full h-full bg-white" id="contact">
        <div ref={aboutRef} className="w-2/3 mx-auto relative z-10 flex justify-around shadow-2xl h-11/12 rounded-lg items-center mt-2 py-10">
          <motion.div
            initial={{ x: -80, opacity: 0, scale: 0.95 }}
            animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
            className='w-5/12'>
            <div>
              <h2 className="text-3xl text-gray-900 font-semibold w-full">Let's discuss your project </h2>
              <p className="pt-3 text-sm text-gray-400 font-medium">Please provide the detail of your project, and I will get back to you shortly.</p>
            </div>
            <div className="flex p-4 pr-25 bg-white rounded-md shadow-xl w-fit mt-5">
              <div className="p-3 text-white bg-purple-500 rounded-md mr-5 text-lg">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h2 className="text-gray-700 text-sm font-medium">
                  Address:
                </h2>
                <h2 className="text-gray-900 text-sm font-semibold pt-2">
                  Karachi, Pakistan
                </h2>
              </div>
            </div>
            {personalDetails.map((detail, index) => (
              <div key={index} className="flex p-4 bg-white mt-7">
                <FontAwesomeIcon icon={detail.icon} className="p-3 text-purple-500 bg-gray-100 rounded-md mr-5 text-lg" />
                <div>
                  <h2 className="text-gray-700 text-sm font-medium">{detail.title}</h2>
                  <h2 className="text-gray-900 text-sm font-semibold pt-2">{detail.id}</h2>
                </div>
              </div>
            ))}
            <div className="w-3/4 flex text-purple-500 text-lg mt-5 items-center justify-center">
              <a href="https://www.facebook.com/profile.php?id=100017561626556" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} className='bg-purple-500 text-white p-2 cursor-pointer' />
              </a>
              {socialLinks.map((social, index) => (
                <a href={social.link} target="_blank" key={index}>
                  <FontAwesomeIcon icon={social.icon} className='p-2 mx-3 cursor-pointer' />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
            className='w-5/12'
          >
          </motion.div>
        </div>
      </div>
    </>
  )
}