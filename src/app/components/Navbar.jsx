'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { MenuIcon, XIcon } from 'lucide-react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'project' },
    { name: 'Services', to: 'services' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <div className="flex justify-between items-center px-6 md:px-12 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <motion.h3
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-purple-500 font-medium text-white px-4 py-2 rounded-full text-xl mr-2"
          >
            A
          </motion.h3>
          <h3 className="text-gray-900 text-2xl font-bold">Anas</h3>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-lg font-medium">
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
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              className="px-5 py-2 bg-purple-500 text-white rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-purple-500 hover:shadow-lg"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-800"
        >
          {isMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-40 flex flex-col p-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                offset={-70}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-purple-500 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-2 bg-purple-500 text-white rounded-md text-center hover:bg-gray-100 hover:text-purple-500 hover:shadow-lg transition"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}