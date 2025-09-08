'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'project' },
    { name: 'Services', to: 'services' },
  ]

  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="sticky top-0 z-50 bg-white">
        <div className="flex justify-between h-18 w-2/3 mx-auto items-center py-4">
          <div className="flex items-center">
            <motion.h3
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-purple-500 font-medium text-white px-5 py-3 rounded-full text-2xl mr-3"
            >
              A
            </motion.h3>
            <h3 className="text-gray-900 text-2xl font-bold">Anas</h3>
          </div>
          <div className="w-2/4">
            <div className="flex justify-around items-center text-gray-900 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="cursor-pointer relative text-gray-700 hover:text-purple-500 transition-all duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  <motion.div
                    key={link.to}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-70}
                  className="px-5 py-2 bg-purple-500 text-white rounded-md cursor-pointer relative transition-all duration-300 ease-in-out hover:bg-gray-100 hover:shadow-xl hover:text-purple-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300">
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}