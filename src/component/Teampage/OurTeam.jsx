import React from 'react'
import CardOurTeam from './CardOurTeam'

const OurTeam = () => {
  return (
    <div className='container mx-auto px-8 md:px-20'>
      <h1 className='text-center mx-auto font-semibold text-4xl my-16' data-aos="fade-up" data-aos-duration='1500'>Our Team</h1>
      <div className="flex flex-wrap justify-center items-center">
        <CardOurTeam
          title="Make digital transformation happens"
          description="We believe that integration of digital technology is a must for all sectors to keep us competitive in the world"
        />
        <div className="max-w-sm mx-auto shadow-md my-10 lg:my-0 card-our-teams text-center overflow-hidden md:max-w-2xl" data-aos="fade-up" data-aos-duration='1500'>
          <div className="py-10 md:py-12 md:px-6">
            <div className="leading-8 text-2xl px-12 md:px-7 text-black-color font-bold">
              Help young people build a better future
            </div>
            <p className="mt-5 text-sm leading-7 px-8 md:px-4 text-gray-700">We support young people as a national asset to have a better capacity through empowermentand development</p>
          </div>
        </div>
        <CardOurTeam
          title="We save ocean for the next generation"
          description="We do all effort to preserve our ocean as the natural resources and common heritage for a quality next generation"
        />
      </div>
    </div>
  )
}

export default OurTeam
