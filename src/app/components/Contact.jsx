'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope, } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { toast } from "react-toastify";

export const Contact = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { threshold: 0.2 });
  const [ formData, setFormData ] = useState({ name: '', email: '', location: '', budget: '', subject: '', message: '' });
  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    toast.dismiss()
    toast.success("Message queued! I'll get back to you soon.")
    setFormData({ name: '', email: '', location: '', budget: '', subject: '', message: '' })
    if (loading) return;
    setLoading(false)
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!data.success) {
        toast.dismiss();
        toast.error("Message could not be sent. Please try again later.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

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

  const foamHeading = [
    {
      name: 'name',
      label: 'Name*',
      type: 'text'
    },
    {
      name: 'email',
      label: 'Email*',
      type: 'email'
    },
    {
      name: 'location',
      label: 'Location*',
      type: 'text'
    },
  ]

  const secondHeading = [
    {
      name: 'budget',
      label: 'Budget*',
      type: 'text'
    },
    {
      name: 'subject',
      label: 'Subject*',
      type: 'text'
    },
  ]

  return (
    <>
      <div className="relative w-full h-full bg-white" id="contact">
        <div ref={aboutRef} className="w-2/3 mx-auto relative z-10 flex justify-around items-center shadow-2xl h-11/12 rounded-lg mt-2 py-10">
          <motion.div
            initial={{ x: -80, opacity: 0, scale: 0.95 }}
            animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
            className='w-5/12'>
            <h2 className="text-3xl text-gray-900 font-semibold w-full">Let's discuss your project </h2>
            <p className="pt-3 text-sm text-gray-400 font-medium">Please provide the detail of your project, and I will get back to you shortly.</p>
            <div className="flex p-4 w-4/5 bg-white rounded-md shadow-md shadow-gray-400 mt-5 items-center">
              <FontAwesomeIcon icon={faLocationDot} className="p-3 text-white bg-purple-500 rounded-md mr-5 text-lg" />
              <div>
                <h2 className="text-gray-700 text-sm font-medium"> Address: </h2>
                <h2 className="text-gray-900 text-sm font-semibold pt-2"> Karachi, Pakistan </h2>
              </div>
            </div>
            {personalDetails.map((detail, index) => (
              <div key={index} className="flex p-4 w-4/5 bg-white my-5 items-center">
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
            <h1 className="text-gray-400 text-sm">Ready to bring your ideas to life? Fill out the form and let's get started!</h1>
            <form onSubmit={handleSubmit} className="space-y-3 w-full mt-5 ">
              {foamHeading.map((field, i) => (
                <div className="relative" key={i}>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    id={field.name}
                    placeholder={field.label}
                    className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:border-purple-500 focus:outline-none"
                    required
                  />
                  <label
                    htmlFor={field.name}
                    className="absolute left-0 top-3 text-gray-400 transition-all
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                    peer-[&:not(:placeholder-shown)]:top-[-8px] peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-purple-500"
                  >
                    {field.label}
                  </label>
                </div>
              ))}
              <div className="flex space-x-4">
                {secondHeading.map((field, i) => (
                  <div className="relative w-1/2" key={i}>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="peer w-full border-b-2 border-gray-300 py-3 focus:border-purple-500 focus:outline-none"
                      required
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute left-0 top-3 text-gray-400 transition-all
                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-purple-500 peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-purple-500"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="relative">
                <input
                  name="message"
                  id="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 bg-transparent py-3 placeholder-transparent focus:border-purple-500 focus:outline-none"
                  required
                ></input>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-3 text-gray-400 transition-all
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-8px]peer-focus:text-xs peer-focus:text-purple-500 peer-valid:top-[-8px] peer-valid:text-xs peer-valid:text-purple-500"
                >
                  Message*
                </label>
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-md w-fit transition-all mt-3 cursor-pointer"
              >
               {loading ? "Sending..." : <>Send <FontAwesomeIcon icon={faPaperPlane} /></>} 
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  )
}