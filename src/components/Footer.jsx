import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='bg-primary-red-200 text-white text-center py-20 px-10 mt-10 md:flex md:items-center md:justify-between md:px-10 lg:px-24 xl:px-36 md:text-left'>
        <h2 className='text-4xl font-medium md:max-w-md'>
          Simplify how your team works today.
        </h2>
        <button className='text-sm mt-5 md:mt-0 text-primary-red-200 bg-white py-3 px-8 rounded-full font-medium hover:text-primary-red-200/80 transition-colors'>
          Get Started
        </button>
      </div>
      <div className='bg-neutral-blue-800 text-neutral-red-800 p-10 flex flex-col lg:flex-row lg:items-start md:px-10 lg:px-24 xl:px-36 lg:justify-between'>
        <div className='flex justify-center gap-3 lg:order-4 lg:flex-col lg:justify-between lg:self-stretch'>
          <div className='flex justify-center gap-3'>
            <input
              placeholder='Updates in your inbox...'
              className='rounded-full text-neutral-gray-blue-600 text-sm pl-5 pr-10'
              type='text'
            />
            <button className='text-sm bg-primary-red-200 text-white py-3 px-8 md:px-6 rounded-full hover:bg-primary-red-200/90 hover:brightness-125 transition-all'>
              Go
            </button>
          </div>
          <p className='self-end text-xs text-neutral-gray-blue-600 hidden lg:block'>
            Copyright 2020. All Rights Reserved
          </p>
        </div>

        <ul className='flex my-10 lg:my-0 justify-between sm:justify-around text-sm lg:order-2 lg:flex-1'>
          <div className='flex flex-col gap-4'>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Products
              </a>
            </li>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                About Us
              </a>
            </li>
          </div>
          <div className='flex flex-col gap-4'>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Careers
              </a>
            </li>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Community
              </a>
            </li>
            <li>
              <a
                className='hover:text-primary-red-200 transition-colors'
                href='#'
              >
                Privacy Policy
              </a>
            </li>
          </div>
        </ul>

        <div className='lg:flex lg:flex-col lg:justify-between lg:self-stretch'>
          <div
            className='flex justify-around order-2 lg:gap-3 lg:justify-start'
            id='social_media'
          >
            <img
              className='w-7 md:w-5 cursor-pointer hue-rotate-80 sepia-1'
              src='/images/icon-facebook.svg'
              alt='icon_facebook'
            />
            <img
              className='w-7 md:w-5 cursor-pointer'
              src='/images/icon-youtube.svg'
              alt='icon_youtube'
            />
            <img
              className='w-7 md:w-5 cursor-pointer'
              src='/images/icon-twitter.svg'
              alt='icon_twitter'
            />
            <img
              className='w-7 md:w-5 cursor-pointer'
              src='/images/icon-pinterest.svg'
              alt='icon_pinterest'
            />
            <img
              className='w-7 md:w-5 cursor-pointer'
              src='/images/icon-instagram.svg'
              alt='instagram'
            />
          </div>

          <img
            className='w-36 my-12 mx-auto lg:mx-0 lg:my-0 lg:max-w-sm'
            src='/images/logo_footer.svg'
            alt='manage_logo'
          />
        </div>

        <p className='self-center text-xs text-neutral-gray-blue-600 lg:hidden'>
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
