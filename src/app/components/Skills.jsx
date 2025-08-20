'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Skills = () => {
  const skillRef = useRef( null )
  const isSkillInView = useInView( skillRef, { threshold: 0.2 } );

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
    { name: "Tailwind CSS", percentage: "85%" },
    { name: "React Native", percentage: "65%" }
  ];

  return (
    <>
      <div className="relative w-full min-h-fit flex items-center justify-center bg-white" id='skills'>
        <div className='absolute bottom-0 w-full h-full bg-gray-200 z-0'>
        </div>
        <div className='w-2/3 mx-auto relative z-10 mt-5'>
          <h1 className="text-2xl font-semibold text-gray-900 w-fit mx-auto">My Skills</h1>
          <div ref={ skillRef } className='flex gap-x-8 bg-white rounded-xl px-3 py-4 my-4'>
            <div className='w-1/2'>
              { skillLeft.map( ( skill, index ) => (
                <div key={ index } className="my-9">
                  <span className="block text-lg font-semibold text-gray-700">{ skill.name }</span>
                  <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                    <motion.span
                      initial={ { width: 0, opacity: 0 } }
                      animate={ isSkillInView ? { width: skill.percentage, opacity: 1 } : {} }
                      transition={ { duration: 0.8, delay: index * 0.1 } }
                      className="block h-full rounded-xl bg-purple-500 relative"
                    >
                      <motion.span
                        initial={ { opacity: 0, y: 0 } }
                        animate={ isSkillInView ? { opacity: 1, y: 0 } : {} }
                        transition={ { delay: index * 0.1 + 0.3 } }
                        className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10"
                      >
                        { skill.percentage }
                        <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0"></span>
                      </motion.span>
                    </motion.span>
                  </div>
                </div>
              ) ) }
            </div>
            <div className='w-1/2'>
              { skillRight.map( ( skill, index ) => (
                <div key={ index } className="my-9">
                  <span className="block text-lg font-semibold text-gray-700">{ skill.name }</span>
                  <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                    <motion.span
                      initial={ { width: 0, opacity: 0 } }
                      animate={ isSkillInView ? { width: skill.percentage, opacity: 1 } : {} }
                      transition={ { duration: 0.8, delay: index * 0.1 } }
                      className="block h-full rounded-xl bg-purple-500 relative"
                    >
                      <motion.span
                        initial={ { opacity: 0, y: 0 } }
                        animate={ isSkillInView ? { opacity: 1, y: 0 } : {} }
                        transition={ { delay: index * 0.1 + 0.3 } }
                        className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10"
                      >
                        { skill.percentage }
                        <span className="absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0"></span>
                      </motion.span>
                    </motion.span>
                  </div>
                </div>
              ) ) }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
