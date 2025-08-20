import React from "react";

export const Service = () => {
  const work = [
    {
      title: "Responsive UI/UX Design",
      description: "I create attractive and responsive interfaces, which fit to every device optimally. I intend to produce fluent user experiences in which the design and the functionality go hand in hand."
    },
    {
      title: "Web App Development",
      description: "I create dynamic and interactive web apps with such capabilities as real-time updating, API integration, and effective state control. All the projects are structured to be highly scalable and reliable."
    }

  ]
  return (
    <>
      <div id="services" className="bg-gray-200">
        <div className="w-full flex justify-around items-center py-17 px-35">
          <div className="w-5/12">
            <h1 className="text-3xl text-gray-900 font-semibold pb-4">What l do?</h1>
            <p className="text-gray-400 text-sm pb-2">
              My expertise is centered around creating modern web applications with React.js, Next.js, and Tailwind CSS. I can create responsive designs and they work across devices, dynamic user interface part and real-time accessibility through Firebase.
            </p>
            <p className="text-gray-400 text-sm pb-9">
              I also develop cross-platform mobile applications using react nativet And having some experience in API integration and state management.
            </p>
            <button className="px-6 py-2 text-white bg-purple-500 rounded-md">Say Hi!</button>
          </div>
          <div className="w-5/12">
            <div className="bg-white p-3 border-l-2 border-purple-500 rounded-md shadow-lg">
              <h2 className="text-gray-900 text-lg pb-2">
                Website Development
              </h2>
              <p className="text-sm text-gray-700">
                I am a Front-End Web Developer that specializes in building responsive and digitized websites using React.js, Tailwind CSS and handover Experience in Next.js.
              </p>
            </div>
            {work.map((detail, index) => (
              <div key={index} className="bg-white p-3 rounded-md mt-5">
                <h2 className="text-gray-900 text-lg pb-2">
                  {detail.title}
                </h2>
                <p className="text-sm text-gray-700">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}