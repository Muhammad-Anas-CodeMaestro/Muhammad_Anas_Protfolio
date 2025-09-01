'use client'
import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'project' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <>
      <div className='bg-gray-800 flex justify-between items-center'>
        <div className='w-3/4 mx-auto py-18 flex justify-between items-center'>
          <div className="flex items-center">
            <motion.h3
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-purple-500 font-medium text-white px-5 py-3 rounded-full text-2xl mr-3"
            >
              A
            </motion.h3>
            <h3 className="text-white text-2xl font-bold">Anas</h3>
          </div>
          <div className="w-1/2 flex justify-between">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer relative text-gray-50 hover:text-purple-500 transition-all duration-300 ease-in-out after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
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
          </div>
          <div>
            <h3 className='text-white'>Copyright &copy; {year} </h3>
          </div>
        </div>
      </div>
    </>
  )
}