'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string()  
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  email: z.string()
    .email("Please enter a valid email address")
    .max(254, "Email too long"),
  location: z.string()
    .min(5, "Location must be at least 5 characters")
    .max(100, "Location must not exceed 100 characters")
    .trim(),
  budget: z.string()
    .min(2, "Budget must be specified")
    .max(100, "Budget text too long")
    .trim(),
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters")
    .trim(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters")
    .trim(),
});

export const Contact = () => {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    toast.dismiss();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else if (res.status === 429) {
        toast.error("Too many requests. Please wait a moment and try again.");
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Connection error. Please check your internet and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
  ];

  const socialLinks = [
    { icon: faInstagram, link: 'https://www.instagram.com/muhammadanas62600/' },
    { icon: faGithub, link: 'https://github.com/Muhammad-Anas-CodeMaestro' },
    { icon: faLinkedinIn, link: 'https://www.linkedin.com/in/muhammad-anas-72aa05260/' }
  ];

  const firstRowFields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'location', label: 'Location', type: 'text' },
  ];

  const secondRowFields = [
    { name: 'budget', label: 'Budget', type: 'text' },
    { name: 'subject', label: 'Subject', type: 'text' },
  ];

  const formValues = watch();

  return (
    <div className="w-full bg-white overflow-x-hidden" id="contact">
      <div
        ref={aboutRef}
        className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start shadow-2xl rounded-lg mt-6 p-6 md:p-10 gap-10"
      >
        <motion.div
          initial={{ x: -80, opacity: 0, scale: 0.95 }}
          animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: -80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
          className="w-full md:w-5/12"
        >
          <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold">Let's discuss your project</h2>
          <p className="pt-3 text-sm text-gray-500">Please provide the details of your project, and I will get back to you shortly.</p>
          <div className="flex p-4 w-full bg-white rounded-md shadow-md mt-5 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="p-3 text-white bg-purple-500 rounded-md mr-5 text-lg" />
            <div>
              <h2 className="text-gray-700 text-sm font-medium">Address:</h2>
              <h2 className="text-gray-900 text-sm font-semibold pt-2">Karachi, Pakistan</h2>
            </div>
          </div>
          {personalDetails.map((detail, index) => (
            <div key={index} className="flex p-4 w-full bg-white my-5 items-center shadow-sm rounded-md">
              <FontAwesomeIcon icon={detail.icon} className="p-3 text-purple-500 bg-gray-100 rounded-md mr-5 text-lg" />
              <div>
                <h2 className="text-gray-700 text-sm font-medium">{detail.title}</h2>
                <h2 className="text-gray-900 text-sm font-semibold pt-2">{detail.id}</h2>
              </div>
            </div>
          ))}
          <div className="flex text-purple-500 text-lg mt-5 items-center space-x-5">
            <a href="https://www.facebook.com/profile.php?id=100017561626556" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="bg-purple-500 text-white p-2 rounded-md cursor-pointer hover:scale-110 transition-transform duration-300" />
            </a>
            {socialLinks.map((social, index) => (
              <a href={social.link} target="_blank" rel="noopener noreferrer" key={index}>
                <FontAwesomeIcon icon={social.icon} className="p-2 cursor-pointer hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={isAboutInView ? { x: 0, opacity: 1, scale: 1 } : { x: 80, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 15, damping: 10, ease: 'easeInOut' }}
          className="w-full md:w-6/12"
        >
          <h1 className="text-gray-500 text-sm">Ready to bring your ideas to life? Fill out the form and let's get started!</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full mt-5">
            {firstRowFields.map((field) => (
              <div className="relative" key={field.name}>
                <input
                  type={field.type}
                  placeholder={field.label}
                  {...register(field.name)}
                  className={`peer w-full border-b-2 bg-transparent py-3 placeholder-transparent focus:outline-none transition-colors ${
                    errors[field.name]
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:border-purple-500'
                  }`}
                />
                <label
                  htmlFor={field.name}
                  className={`absolute left-0 top-3 transition-all ${
                    errors[field.name] ? 'text-red-500' : 'text-gray-400'
                  }
                  ${formValues[field.name] ? 'top-[-8px] text-xs text-purple-500' : 'peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-purple-500'}
                  `}
                >
                  {field.label}
                </label>
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>
                )}
              </div>
            ))}

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              {secondRowFields.map((field) => (
                <div className="relative w-full md:w-1/2" key={field.name}>
                  <input
                    type={field.type}
                    placeholder={field.label}
                    {...register(field.name)}
                    className={`peer w-full border-b-2 py-3 placeholder-transparent focus:outline-none transition-colors ${
                      errors[field.name]
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:border-purple-500'
                    }`}
                  />
                  <label
                    htmlFor={field.name}
                    className={`absolute left-0 top-3 transition-all ${
                      errors[field.name] ? 'text-red-500' : 'text-gray-400'
                    }
                    ${formValues[field.name] ? 'top-[-8px] text-xs text-purple-500' : 'peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-purple-500'}
                    `}
                  >
                    {field.label}
                  </label>
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field.name]?.message}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <textarea
                placeholder="Message"
                {...register('message')}
                className={`peer w-full border-b-2 bg-transparent py-3 placeholder-transparent focus:outline-none transition-colors resize-none ${
                  errors.message
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-300 focus:border-purple-500'
                }`}
                rows={4}
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-0 top-3 transition-all ${
                  errors.message ? 'text-red-500' : 'text-gray-400'
                }
                ${formValues.message ? 'top-[-8px] text-xs text-purple-500' : 'peer-focus:top-[-8px] peer-focus:text-xs peer-focus:text-purple-500'}
                `}
              >
                Message
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`font-semibold py-2 px-6 rounded-md w-full md:w-auto transition-all mt-3 ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              }`}
            >
              {isSubmitting ? "Sending..." : <>Send <FontAwesomeIcon icon={faPaperPlane} className="ml-2" /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};