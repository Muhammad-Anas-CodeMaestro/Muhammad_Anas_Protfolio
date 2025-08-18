'use client'
import React, { useRef } from 'react'
import { easeOut, motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null)
  const isCardInView = useInView(cardRef, { thershold: 0.2})
  const isRightCard = index === 0 || index === 3
  const initialpos = isRightCard
    ? { x: 100, y: 50, opacity: 0 }
    : { x: -100, y: 50, opacity: 0 }

  return (
    <motion.div
      key={index}
      ref={cardRef}
      initial={initialpos}
      animate={isCardInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.2 }}
      className='shadow-xl bg-white w-full'
    >
      <img src={project.image} alt={project.title} className='w-full h-40 object-cover rounded-t-lg' />
      <div className='p-5'>
        <h5 className='text-gray-400 text-sm'>{project.category}</h5>
        <h1 className='text-gray-900 text-lg font-semibold mb-2'>{project.title}</h1>
        <p className='text-gray-600 text-sm mb-6'>{project.description}</p>
        <div className='flex justify-between'>
          <a href={project.liveDemo} target='_blank' rel='noopener noreferrer' className='text-purple-500 hover:text-purple-800 px-5 py-3 bg-white w-fit border border-purple-500 rounded-md cursor-pointer'>Case Study <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
          <a href={project.github} target='_blank' rel='noopener noreferrer' className='text-purple-500 hover:text-purple-800 px-4 py-3 bg-white w-fit border border-purple-500 rounded-md cursor-pointer'>GitHub <FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </motion.div>
  )
}

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: 'Web Development',
      title: 'Chat Application',
      description: 'A real-time chat application built with React and Firebase.',
      image: '/ChatApp.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/chat_app',
      liveDemo: 'https://chat-app-theta-wheat.vercel.app/signin'
    }, {
      id: 2,
      category: 'Web Development',
      title: 'Online Code Editor',
      description: 'An online code editor that allows users to write, run and download a Code.',
      image: '/OnlineCodeEditor.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/Online-code-editor',
      liveDemo: 'https://online-code-editor-html-css-javscri.vercel.app/'
    }, {
      id: 3,
      category: 'Web Development',
      title: 'Recipe App',
      description: 'A recipe application that allows users to see the recipes.',
      image: '/RecipeApp.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/Display_Dishes',
      liveDemo: 'https://display-dishes.vercel.app/'
    }, {
      id: 4,
      category: 'Web Development',
      title: 'To Do List',
      description: 'A simple To Do List application built with HTML, CSS and JavaScript.',
      image: '/ToDoApp.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/Todo-App',
      liveDemo: 'https://todo-app-nine-wheat.vercel.app/'
    }, {
      id: 5,
      category: 'Web Development',
      title: 'Age Calculator',
      description: 'A simple age calculator that calculates the age based on the date of birth.',
      image: '/AgeCalculator.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/JavaScript_AgeCalculator',
      liveDemo: 'https://java-script-age-calculator-delta.vercel.app/'
    }, {
      id: 6,
      category: 'Web Development',
      title: 'Login Page Design',
      description: 'A simple login page design using HTML And CSS.',
      image: '/LoginDesign.jpg',
      github: 'https://github.com/Muhammad-Anas-CodeMaestro/Login_Page_design',
      liveDemo: 'https://login-page-design-ecru.vercel.app/'
    }

  ]

  return (
    <>
      <div id='project' className='w-full min-h-fit bg-white'>
        <motion.div
          className='w-3/4 mx-auto my-15'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        >
          <h1 className='text-gray-900 text-3xl text-center font-bold'>
            Portfolio
          </h1>
          <p className='text-gray-600 text-center text-sm mt-3'>
            Here are some of my projects that I have worked on. You can find more on my GitHub.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index}/>
            ))}
          </div>
          <h1 className='px-6 py-3 bg-purple-500 text-white rounded-md w-fit text-center mt-10 mx-auto'>
            <a href="https://github.com/Muhammad-Anas-CodeMaestro?tab=repositories" target='_blank'>More Project</a>
          </h1>
        </motion.div >
      </div >
    </>
  )
}
