import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import hero from '../assests/Hero_Section.png';
import logo from '../assests/Aonetutions_logo.png';

function Navbar() {
  // const navigate = useNavigate();
  const [showmenu, setshowmenu] = useState(false);
  const [profile, setprofile] = useState(false);

  return (
    <div className='flex items-center justify-between text-md py-4 border-b border-blue-900  '>
      <img className='w-20 cursor-pointer' style={{ width: '120px', height: '30px' }} src={logo} />
      {/* <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='boder-none outline-none h-0.5 bg-green-300 w-3/5 m-auto hidden'></hr>
        </NavLink>
        <NavLink to='https://adminpanel-doctor-appointment.vercel.app/login'>
          <li className=' border rounded-full px-2 py-1'>Admin Panel</li>
        </NavLink>
      </ul> */}
      <div className='flex items-center gap-3'>

        <a href='#BookDemo' className='bg-blue-900  text-white md:px-8 md:py-3 px-4 py-1 rounded-full font-light cursor-pointer'>Book Free Demo</a>

        {/* <img className='md:hidden w-7 cursor-pointer' onClick={() => setshowmenu(true)} src={assets.menu_icon} alt='' /> */}
      </div>

    </div>
  )
}

export default Navbar
