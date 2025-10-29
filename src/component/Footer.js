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
          <p className='w-full md:w-2/3 text-gray-800 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* middel section  */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-800'>
            <li>Home</li>
            <li>About us </li>
            <li>Contact us </li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section  */}
        <div>
          <p className='text-xl  font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-800'>
            <li>+0-000-000-000</li>
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
