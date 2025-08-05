'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function HomeSection() {
  const skillRef = useRef();
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      }, {
      threshold: 0.4
    }
    )

    if (skillRef.current) {
      observer.observe(skillRef.current)
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current)
      }
    }

  }, [])


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
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className='bg-gradient-to-l from-purple-200 to-white absolute right-0 top-0 w-1/2 h-full z-0'></div>
        <div className="w-2/3 mx-auto relative z-10">
          <div className="flex justify-around items-center h-fit mt-12">
            <div className="w-1/2">
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
            </div>
            <div className="w-2/5">
              <img src="/DP.jpg" alt="AnasPicture" width={300} className='rounded-2xl  shadow-lg mx-auto' />
            </div>
          </div>
          <div className="flex shadow-2xl px-12 py-15 my-16 bg-gray-50 rounded-lg items-center">
            <div className='w-fit relative mx-auto'>
              <img src="/Graybg.jpg" alt="AnasPicture" width={300} className='bg-transparent rounded-md' />
              <div className='flex items-center justify-center bg-white text-purple-500 text-lg px-3 py-2 
              absolute transform -translate-x-1/2 translate-y-1/2 left-1/2 bottom-0 space-x-3 shadow-md'>
                <FontAwesomeIcon icon={faFacebookF} className='pr-3' />
                <FontAwesomeIcon icon={faLinkedinIn} className='p-3 bg-purple-500 text-white' />
                <FontAwesomeIcon icon={faGithub} className='pl-3' />
              </div>
            </div>
            <div className='w-1/2 space'>
              <h3 className='text-gray-900 font-semibold font-sans text-3xl pb-7'>I am Front-End Developer</h3>
              <p className='text-gray-600 text-sm pb-5'>
                I build modern, simple to use, and highly responsive website designs using the latest front-end tools such as React, Tailwind CSS and JavaScript. I am a UX designer that enjoys creating interactive digital designs and experiences that are user-centric, creative, user-friendly.
              </p>
              <p className='text-gray-600 text-sm pb-5'>
                I enjoy overcoming real world challenges with code whether it is through the development of user friendly user interfaces or cross-browser compatibilities.
              </p>
              <a href="https://github.com/Muhammad-Anas-CodeMaestro" target='_blank' className='px-5 py-3 bg-purple-500 text-white rounded-md w-fit mr-2'>My Projects</a>
              <button className='px-5 py-2 bg-white text-purple-500 w-fit border border-purple-500 rounded-md'>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </button>
            </div>
          </div>
          <div className='mb-10'>
            <div className="relative w-full bg-white rounded-xl px-6 py-4">
              <h1 className="text-2xl text-purple-500 rounded-md border px-5 py-2 w-fit mx-auto mb-5">My Skills</h1>
              <div ref={skillRef} className='flex gap-x-8'>
                <div className='w-1/2'>
                  {skillLeft.map((skill, inder) => (
                    <div key={inder} className="my-9">
                      <span className="block text-lg font-semibold text-gray-700">{skill.name}</span>
                      <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                        <span className={`relative block h-full rounded-xl bg-purple-500 ${inView ? 'opacity-100 animate-progress' : 'opacity-0'}`} style={{
                          "--bar-width": skill.percentage,
                          animationDelay: `${inder * 0.1}s`
                        }}>
                          <span className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10">{skill.percentage}
                            <span className='absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0'></span>
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='w-1/2'>
                  {skillRight.map((skill, inder) => (
                    <div key={inder} className="my-9">
                      <span className="block text-lg font-semibold text-gray-700">{skill.name}</span>
                      <div className="h-2 w-full rounded-xl mt-2 bg-gray-200">
                        <span className={`relative block h-full rounded-xl bg-purple-500 ${inView ? 'opacity-100 animate-progress' : 'opacity-0'}`} style={{
                          "--bar-width": skill.percentage,
                          animationDelay: `${inder * 0.1}s`
                        }}>
                          <span className="absolute -right-3.5 -top-11 text-sm font-medium text-white py-1 px-2 rounded-md bg-purple-500 z-10">{skill.percentage}
                            <span className='absolute left-1/2 -bottom-1 h-2.5 w-2.5 bg-purple-500 transform -translate-x-1/2 rotate-45 z-0'></span>
                          </span>
                        </span>
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