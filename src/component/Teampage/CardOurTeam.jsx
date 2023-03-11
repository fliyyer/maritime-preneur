import React from 'react'

const CardOurTeam = ({ title, description }) => {
  return (
    <div className="max-w-sm mx-auto shadow-md card-our-team text-center overflow-hidden md:max-w-2xl" data-aos="fade-up" data-aos-duration='1500'>
      <div className="py-10 md:py-12 md:px-6">
        <div className="leading-8 text-2xl px-12 md:px-7 text-white font-bold">
          {title}
        </div>
        <p className="mt-5 text-sm leading-7 px-8 text-gray-300 md:px-4">{description}</p>
      </div>
    </div>
  )
}

export default CardOurTeam
