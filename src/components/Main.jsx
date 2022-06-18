import Feature from './Feature'

function Main() {
  return (
    <main className='my-16 md:mx-10 lg:mx-24 xl:mx-36 md:flex md:items-baseline relative'>
      <div>
        <h1 className='mx-6 md:mx-0 text-center md:text-left text-3xl md:text-4xl font-bold mb-4'>
          What’s different about Manage?
        </h1>
        <p className='text-center md:text-left mx-7 md:mx-0 text-sm text-neutral-gray-blue-600 leading-6'>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <img
          className='absolute hidden md:block -z-10 bottom-0 -left-72 lg:top-48 lg:-left-[530px]  overflow-hidden -translate-y-12 max-w-sm md:max-w-md lg:max-w-2xl'
          src='/images/bg-tablet-pattern.svg'
          alt='tablet_pattern'
        />
      </div>
      <div>
        <Feature
          number={'01'}
          title={'Track company-wide progress'}
          body={
            ' See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
          }
        />

        <Feature
          number={'02'}
          title={'Advanced built-in reports'}
          body={
            'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed'
          }
        />

        <Feature
          number={'03'}
          title={'Everything you need in one place'}
          body={
            'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
          }
        />
      </div>
    </main>
  )
}

export default Main
