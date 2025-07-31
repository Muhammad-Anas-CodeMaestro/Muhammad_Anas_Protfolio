import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function HomeSection() {

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

  return (
    <>
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className='bg-gradient-to-l from-purple-200 to-white absolute right-0 top-0 w-1/2 h-full z-0'></div>
        <div className="w-2/3 mx-auto relative z-10">
          <div className=" flex justify-between items-center h-fit">
            <div className="w-1/2 px-3">
              <h1 className="text-5xl text-gray-900 py-5">Hello, I'm Muhammad Anas</h1>
              <p className="w-full text-gray-600 text-sm drop-shadow-lg pb-5">
                I am a  <span className="relative font-semibold text-gray-900">
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-pink-200 z-[-1]"></span>
                  Front-End Developer
                </span> trying his best to build clean, responsive, and, of course, accessible user interface. Bringing ideas to the visions of interactivity with pixel perfect websites.
              </p>
              <h3 className="px-5 py-2 bg-purple-500 text-white rounded-md w-fit">Say Hello!</h3>
              <div className="flex justify-around items-center mt-20 mb-10 py-3 text-center bg-gray-300">
                {data.map((item, index) => (
                  <div key={index} className="">
                    <h3 className="">{item.h3}</h3>
                    <h5 className="">{item.h5}</h5>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <img src="/DP.jpg" alt="AnasPicture" width={300} />
            </div>
          </div>
          <div className="bg-yellow-500">
            <div>
              <img src="/DP.jpg" alt="AnasPicture" width={200} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div>
              <h3>I am Front-End Developer</h3>
              <p>
                I build modern, simple to use, and highly responsive website designs using the latest front-end tools such as React, Tailwind CSS and JavaScript. I am a UX designer that enjoys creating interactive digital designs and experiences that are user-centric, creative, user-friendly, and always with an intuitive design that works perfectly on any device.
              </p>
              <p>
                I enjoy overcoming real world challenges with code whether it is through the development of user friendly user interfaces or cross-browser compatibilities.
              </p>
              <button>
                My Project
              </button>
              <button>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection