import React from 'react'
import hero from '../assests/Hero_Section.png'
import arrow from '../assests/arrow_icon.svg'

function Header() {
  return (
    <div className='bg-blue-900 mt-4 flex flex-col md:flex-row  rounded-2xl md:px-12 px-3 py-2 md:py-6  '>
      {/* <-----left side---> */}
      <div className=' md:py-16 py-3 md:w-1/2 space-y-4'>
        <p className='font-bold lg:text-4xl text-3xl md:text-4xl md:text-start text-center text-white'>Book a Free Demo Class
          With Trusted Teachers
        </p>
        <div className='lg:flex md:text-start text-center gap-3 '>
          <p className='text-white font-light'>Personalized tuition for Classes 1–12 | Online & Offline | Expert Tutors | Result-Oriented Learning</p>
        </div>
        <button className='mx-auto mt-3 rounded-full text-gray-800 bg-white px-4 py-2 hover:scale-105 transition-all duration-300'>
          <a className='flex gap-2 ' href='#BookDemo'>Book a Free Demo Class<img src={arrow} className='pt-1' /> </a>
        </button>
      </div>
      {/* <-----Right side---> */}
      <div className=' mx-auto flex justify-end '>
        <img className=' lg:w-96 md:w-72  ' src={hero} alt='header image' />
      </div>
    </div>
  )
}

export default Header;
