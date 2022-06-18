import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

function Reviews() {
  return (
    <div id='reviews' className='mx-6 text-center'>
      <h1 className='font-bold text-3xl xl md:text-4xl my-14'>
        What they've said
      </h1>

      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='space-y-16'
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
            centeredSlides: true,
            centeredSlidesBounds: true,
            pagination: false,
          },
        }}
      >
        <SwiperSlide className='pt-12 px-4'>
          <div className='bg-neutral-gray-blue-600/5 flex flex-col items-center justify-center pb-10 px-4'>
            <img
              className='w-16 -translate-y-7'
              src='/images/avatar-anisha.png'
              alt='avatar_anisha'
            />
            <p className='font-bold mb-3'>Anisha Li </p>
            <p className='text-neutral-gray-blue-600 text-sm leading-6'>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-12 px-4'>
          <div className='bg-neutral-gray-blue-600/5 flex flex-col items-center justify-center pb-10 px-4'>
            <img
              className='w-16 -translate-y-7'
              src='/images/avatar-ali.png'
              alt='avatar_ali'
            />
            <p className='font-bold mb-3'>Ali Bravo</p>
            <p className='text-neutral-gray-blue-600 text-sm leading-6'>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-12 px-4'>
          <div className='bg-neutral-gray-blue-600/5 flex flex-col items-center justify-center pb-10 px-4'>
            <img
              className='w-16 -translate-y-7'
              src='/images/avatar-richard.png'
              alt='avatar_richard'
            />
            <p className='font-bold mb-3'>Richard Watts</p>
            <p className='text-neutral-gray-blue-600 text-sm leading-6'>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pt-12 px-4'>
          <div className='bg-neutral-gray-blue-600/5 flex flex-col items-center justify-center pb-10 px-4'>
            <img
              className='w-16 -translate-y-7'
              src='/images/avatar-shanai.png'
              alt='avatar_shanai'
            />
            <p className='font-bold mb-3'>Shanai Gough</p>
            <p className='text-neutral-gray-blue-600 text-sm leading-6'>
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className='text-sm mt-5 md:mt-0 md:mb-10 bg-primary-red-200 text-white py-3 px-8 rounded-full shadow-lg shadow-primary-red-200/60 hover:bg-primary-red-200/70 transition-colors'>
        Get Started
      </button>
    </div>
  )
}

export default Reviews
