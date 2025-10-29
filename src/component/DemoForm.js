import React, { useContext, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiAddressBookLight } from "react-icons/pi";
import Loading from './Loading';
function DemeForm({ sendDataToParent }) {
  const [credentials, setCredentials] = useState({ email: '', name: '', address: '', });
  const [loader, setLoader] = useState(false);


  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = `Hi, I want to know more about the demo class\nName: ${credentials.name}\nEmail: ${credentials.email}\nAddress: ${credentials.address}`;
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

  };

  return (
    <div className="mt-10 flex items-center justify-center " id='BookDemo'>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl  w-full max-w-md  shadow-2xl shadow-blue-900 "
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Book Free Demo</h2>



        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 ">
            Name
          </label>
          <div className='flex border rounded-lg focus:outline-none  '>
            <span>
              <CgProfile className='mx-2 mt-3' />
            </span>

            <input
              type="text"
              name="name"
              value={credentials.name}
              required
              onChange={handleChange}
              className="w-full px-1 py-2  focus:outline-none  text-blue-900 "
              placeholder="Your Name"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <div className='flex border rounded-lg focus:outline-none '>
            <span>
              <MdOutlineMailOutline className='mx-2 mt-3' />
            </span>

            <input
              type="email"
              name="email"
              value={credentials.email}
              required
              onChange={handleChange}
              className="w-full px-1 py-2  focus:outline-none  text-blue-900 "
              placeholder="youremail@example.com"
            />
          </div>
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium mb-2">Address</label>
          <div className="flex border rounded-lg">
            <PiAddressBookLight className="mx-2 mt-3" />
            <input
              type="text"
              name="address"
              value={credentials.address}
              required
              onChange={handleChange}
              className="w-full px-1 py-2 focus:outline-none  text-blue-900"
              placeholder="Enter your address"
            />
          </div>

          {/* Suggestions Dropdown */}
          {/* {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white border rounded-md shadow-md w-full max-h-60 overflow-y-auto">
              {suggestions.map((s, i) => (
                <li
                  key={i}
                  onClick={() => handleSelect(s.properties.formatted)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {s.properties.formatted}
                </li>
              ))}
            </ul>
          )} */}
        </div>

        <button type='submit' className='w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition'>
          {loader ? <Loading className='text-center' />
            : 'Book'}

        </button>
      </form>
    </div>
  )
}

export default DemeForm
