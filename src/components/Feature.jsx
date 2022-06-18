import React from 'react'

function Feature({ number, title, body }) {
  return (
    <>
      <div className='ml-4 my-12 md:hidden'>
        <div className='flex items-center gap-3 rounded-l-full bg-primary-red-200/10 md:bg-transparent mb-3'>
          <p className='bg-primary-red-200 px-5 py-2 rounded-full font-bold text-white'>
            {number}
          </p>
          <h2 className='font-bold'>{title}</h2>
        </div>
        <p className='font-light text-neutral-gray-blue-600 text-sm leading-7'>
          {body}
        </p>
      </div>

      <div className='ml-4 my-12 hidden md:flex items-start gap-5'>
        <p className='bg-primary-red-200 px-6 py-2 rounded-full font-bold text-white'>
          {number}
        </p>
        <div className='flex flex-col  gap-2 rounded-l-full bg-primary-red-200/10 md:bg-transparent mb-3'>
          <h2 className='font-bold'>{title}</h2>
          <p className='font-light text-neutral-gray-blue-600 text-sm leading-7'>
            {body}
          </p>
        </div>
      </div>
    </>
  )
}

export default Feature
