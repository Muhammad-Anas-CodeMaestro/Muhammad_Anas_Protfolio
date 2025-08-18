import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const WorkTogether = () => {
  return (
    <>
      <div className='bg-gray-900 p-10 mx-auto text-white'>
        <h1 className='text-2xl font-semibold w-3/12 mx-auto text-center'>Do you have project idea?
          Let's discuss your project!</h1>
        <p className='text-gray-300 py-10 text-sm w-2/4 mx-auto text-center'>
          It can be both a web page or mobile app or a specific online solution that you are telling me about. Together we can make your vision reality in an efficient and creative development.
        </p>
        <button className='cursor-pointer w-full mx-auto'>
          <a href="" className='px-6 py-3 bg-purple-500 w-fit rounded-md text-center'>Let's Work Togetter <FontAwesomeIcon icon={faArrowRight} className='text-sm'/></a>
        </button>
      </div>
    </>
  )
}
