import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

function NavBar() {
  return (
    <nav>
      {/* Mobile Navigation */}
      <ul className='flex p-6 items-center sm:hidden'>
        <li className='w-32 '>
          <img src='/images/logo.svg' alt='main_logo' />
        </li>
        <li className='ml-auto'>
          <Modal />
        </li>
      </ul>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-4 md:gap-5 md:mx-10 lg:mx-24 xl:mx-36 md:py-6 lg:py-14 md:px-0 p-6 items-center'>
        <li className='w-32'>
          <img src='/images/logo.svg' alt='main_logo' />
        </li>

        <li className='ml-auto'>
          <a
            className='text-xs md:text-sm md:font-medium text-gray-900 hover:text-gray-400 transition-colors'
            href='#'
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className='text-xs md:text-sm md:font-medium text-gray-900 hover:text-gray-400 transition-colors'
            href='#'
          >
            Product
          </a>
        </li>
        <li>
          <a
            className='text-xs md:text-sm md:font-medium text-gray-900 hover:text-gray-400 transition-colors'
            href='#'
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className='text-xs md:text-sm md:font-medium text-gray-900 hover:text-gray-400 transition-colors'
            href='#'
          >
            Careers
          </a>
        </li>
        <li>
          <a
            className='text-xs md:text-sm md:font-medium text-gray-900 hover:text-gray-400 transition-colors'
            href='#'
          >
            Community
          </a>
        </li>

        <li className='ml-auto'>
          <button className='text-xs bg-primary-red-200 text-white p-3 md:py-3 md:px-7 rounded-full shadow-lg shadow-primary-red-200/60 hover:bg-primary-red-200/70 transition-colors'>
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  )
}

function Modal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      {!isOpen ? (
        <MenuIcon onClick={openModal} className='w-7 h-7' />
      ) : (
        <XIcon onClick={closeModal} className='w-7 h-7' />
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-20' />
          </Transition.Child>

          <div className='fixed top-14 overflow-y-auto'>
            <div className='flex min-h-full w-screen items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  as='ul'
                  className='w-full max-w-md transform overflow-hidden rounded-md bg-white py-10 px-6 text-center align-middle shadow-xl transition-all flex flex-col gap-5'
                >
                  <Dialog.Title as='li'>
                    <a
                      className='text-base font-bold leading-6 text-gray-900 hover:text-gray-400 transition-colors'
                      href='#'
                    >
                      Pricing
                    </a>
                  </Dialog.Title>
                  <Dialog.Title as='li'>
                    <a
                      className='text-base font-bold leading-6 text-gray-900 hover:text-gray-400 transition-colors'
                      href='#'
                    >
                      Product
                    </a>
                  </Dialog.Title>
                  <Dialog.Title as='li'>
                    <a
                      className='text-base font-bold leading-6 text-gray-900 hover:text-gray-400 transition-colors'
                      href='#'
                    >
                      About Us
                    </a>
                  </Dialog.Title>
                  <Dialog.Title as='li'>
                    <a
                      className='text-base font-bold leading-6 text-gray-900 hover:text-gray-400 transition-colors'
                      href='#'
                    >
                      Careers
                    </a>
                  </Dialog.Title>
                  <Dialog.Title as='li'>
                    <a
                      className='text-base font-bold leading-6 text-gray-900 hover:text-gray-400 transition-colors'
                      href='#'
                    >
                      Community
                    </a>
                  </Dialog.Title>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default NavBar
