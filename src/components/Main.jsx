import { useTranslation } from 'react-i18next'
import Feature from './Feature'

function Main() {
  const { t } = useTranslation(['translation', 'common'])
  const tMain = (translate) => t(`main.${translate}`)
  const features = t('main.features', { returnObjects: true })

  return (
    <main className='my-16 md:mx-10 lg:mx-24 xl:mx-36 md:flex gap-10 md:items-baseline xl:justify-between relative'>
      <div className='xl:max-w-lg'>
        <h1 className='mx-6 md:mx-0 text-center ltr:md:text-left rtl:md:text-right text-3xl md:text-4xl xl:text-[40px] font-bold mb-4'>
          {tMain('title')}
        </h1>
        <p className='text-center ltr:md:text-left rtl:md:text-right mx-7 md:mx-0 text-sm text-neutral-gray-blue-600 leading-6 xl:mr-20'>
          {tMain('body')}
        </p>
        <img
          className='absolute hidden md:block -z-10 bottom-0 ltr:-left-72 rtl:left-72 lg:top-48 ltr:lg:-left-[530px] rtl:lg:left-0 rtl:lg:-right-[400px] overflow-hidden -translate-y-12 max-w-sm md:max-w-md lg:max-w-2xl'
          src='/images/bg-tablet-pattern.svg'
          alt='tablet_pattern'
        />
      </div>
      <div className='xl:max-w-lg'>
        {features.map((feature) => (
          <Feature
            key={features.number}
            number={0 + feature.number}
            title={feature.title}
            body={feature.body}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
