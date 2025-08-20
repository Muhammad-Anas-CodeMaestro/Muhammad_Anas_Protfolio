'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Service = () => {
  const leftRef = useRef(null);
  const isLeftInView = useInView(leftRef, { thershold: 0.4 });
  const workRef = useRef(null)
  const isWorkInView = useInView(workRef, { thershold: 0.4 });

  const work = [
    {
      title: "Responsive UI/UX Design",
      description:
        "I create attractive and responsive interfaces, which fit to every device optimally. I intend to produce fluent user experiences in which the design and the functionality go hand in hand.",
    },
    {
      title: "Web App Development",
      description:
        "I create dynamic and interactive web apps with such capabilities as real-time updating, API integration, and effective state control. All the projects are structured to be highly scalable and reliable.",
    },
  ];

  return (
    <>
      <div id="services" className="bg-gray-200">
        <div className="w-full flex justify-around items-center py-17 px-35">
          <motion.div
            ref={leftRef}
            initial={{ x: -80, opacity: 0 }}
            animate={isLeftInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-5/12"
          >
            <h1 className="text-3xl text-gray-900 font-semibold pb-4">
              What I do?
            </h1>
            <p className="text-gray-400 text-sm pb-2">
              My expertise is centered around creating modern web applications
              with React.js, Next.js, and Tailwind CSS. I can create responsive
              designs and they work across devices, dynamic user interface part
              and real-time accessibility through Firebase.
            </p>
            <p className="text-gray-400 text-sm pb-9">
              I also develop cross-platform mobile applications using React
              Native and having some experience in API integration and state
              management.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white bg-purple-500 rounded-md shadow-md"
            >
              Say Hi!
            </motion.button>
          </motion.div>
          <motion.div
            ref={workRef}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-5/12"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isWorkInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-3 border-l-2 border-purple-500 rounded-md shadow-lg"
            >
              <h2 className="text-gray-900 text-lg pb-2">
                Website Development
              </h2>
              <p className="text-sm text-gray-700">
                I am a Front-End Web Developer that specializes in building
                responsive and digitized websites using React.js, Tailwind CSS
                and handover Experience in Next.js.
              </p>
            </motion.div>

            {work.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isWorkInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-3 rounded-md mt-5 shadow-md"
              >
                <h2 className="text-gray-900 text-lg pb-2">{detail.title}</h2>
                <p className="text-sm text-gray-700">{detail.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};
