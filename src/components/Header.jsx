function Header() {
  return (
    <header className='text-center my-10 px-6 flex flex-col items-center md:flex-row-reverse md:text-left md:justify-between md:px-10 lg:px-24 xl:px-36 overflow-hidden'>
      <img
        className='max-w-sm lg:max-w-lg w-full'
        src='/images/illustration-intro.svg'
        alt=''
      />
      <img
        className='absolute -z-10 top-0 right-0 -translate-y-12 max-w-sm md:max-w-md lg:max-w-2xl'
        src='/images/bg-tablet-pattern.svg'
        alt='tablet_pattern'
      />
      <div className='md:max-w-sm relative'>
        <h1 className='text-3xl md:text-4xl font-bold mb-3'>
          Bring everyone together to build better products.
        </h1>
        <p className='text-neutral-gray-blue-600 leading-6 text-sm'>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className='text-sm my-10 bg-primary-red-200 text-white py-3 px-8 rounded-full shadow-lg shadow-primary-red-200/60 hover:bg-primary-red-200/70 transition-colors'>
          Get Started
        </button>
        <img
          className='absolute sm:hidden -z-10 bottom-0 left-64 overflow-hidden -translate-y-12 max-w-sm md:max-w-md lg:max-w-2xl'
          src='/images/bg-tablet-pattern.svg'
          alt='tablet_pattern'
        />
      </div>
    </header>
  )
}

export default Header
