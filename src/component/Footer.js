import React from 'react'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import logo from '../assests/Aonetutions_logo.png';

function Footer() {
  const message = 'Hi, I want to know more about the demo class';
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className='md:mx-10 mt-20'>
      <hr className='border-blue-900'></hr>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  mt-10 text-sm'>
        {/* left section  */}
        <div>
          <img className='w-32 mb-2' src={logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-800 leading-6'>A One Tuitions is committed to providing quality education for students from Classes 8th to 12th. We help students connect with expert teachers for personalized and result-oriented learning. Our platform also supports teachers in finding the right students and growing their teaching network. Join A One Tuitions — where learning and teaching come together for success.</p>
        </div>
        {/* middel section  */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-800'>
            <li><a href='#BookDemo'>Book Demo Class</a></li>
            <li><a href='#hww'> How we work</a></li>
            <li><a href='#testimonials'>  What Our Students Say</a></li>
          </ul>
        </div>
        {/* right section  */}
        <div>
          <p className='text-xl  font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-800'>
            <li>+91 8448475396</li>
            <li>random@gmail.com</li>
            <li className='flex gap-3'>
              <a href='https://www.facebook.com/' target='_blank' ><BiLogoFacebookCircle className='text-2xl cursor-pointer' /></a>
              <a href='https://www.facebook.com/' target='_blank' ><FaInstagram className='text-2xl cursor-pointer' /></a>
              <FaWhatsapp className='text-2xl cursor-pointer' onClick={handleClick} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='border-blue-900 mt-2'></hr>
        <p className='text-center my-5'>Copyright 2024  - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
