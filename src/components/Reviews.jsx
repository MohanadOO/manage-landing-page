import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { useTranslation } from 'react-i18next'

function Reviews() {
  const { t } = useTranslation(['translation', 'common'])
  const tReviews = (translate) => t(`reviews.${translate}`)
  const reviews = t('reviews.reviews', { returnObjects: true })

  return (
    <div id='reviews' className='mx-6 text-center'>
      <h1 className='font-bold text-3xl xl md:text-4xl my-14'>
        {tReviews('title')}
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
        {reviews.map((review) => (
          <SwiperSlide key={review.name} className='pt-12 px-4'>
            <div className='bg-neutral-gray-blue-600/5 flex flex-col items-center justify-center pb-10 px-4'>
              <img
                className='w-16 -translate-y-7'
                src={`/images/avatar-${review.name.split(' ')[0]}.png`}
                alt={`avatar_${review.name}`}
              />
              <p className='font-bold mb-3'>{review.name}</p>
              <p className='text-neutral-gray-blue-600 text-sm leading-6'>
                “{review.review}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='text-sm mt-5 md:mt-0 md:mb-10 bg-primary-red-200 text-white py-3 px-8 rounded-full shadow-lg shadow-primary-red-200/60 hover:bg-primary-red-200/70 transition-colors'>
        {t('common:getStarted')}
      </button>
    </div>
  )
}

export default Reviews
