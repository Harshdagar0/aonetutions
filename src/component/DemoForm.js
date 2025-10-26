import React, { useContext, useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiAddressBookLight } from "react-icons/pi";
import Loading from './Loading';
function DemeForm({ sendDataToParent }) {
  const [credentials, setCredentials] = useState({ email: '', name: '', address: '', });
  const [loader, setLoader] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });

  // };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });

    // if (name === "address" && value.length > 4) {
    //   try {
    //     const res = await fetch(
    //       `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
    //         value
    //       )}&filter=countrycode:in&bias=proximity:28.6,77.2&apiKey=3bc1b6eb7b5e4114ba09f332f1ee40a8`
    //     );
    //     const data = await res.json();
    //     const results = data.features || [];
    //     setSuggestions(results);
    //   } catch (err) {
    //     console.error("Error fetching address:", err);
    //   }
    // } else {
    //   setSuggestions([]);
    // }
  };


  const handleSelect = (address) => {
    setCredentials({ ...credentials, address });
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    const message = `Hi, I want to know more about the demo class\nName: ${credentials.name}\nEmail: ${credentials.email}\nAddress: ${credentials.address}`;
    console.log(message);
    const whatsappUrl = `https://wa.me/${process.env.REACT_APP_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

  };

  return (
    <div className="mt-20 flex items-center justify-center " id='BookDemo'>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg  w-full max-w-md  shadow-2xl shadow-blue-900"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Book Free Demo</h2>



        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <div className='flex border rounded-lg focus:outline-none '>
            <span>
              <CgProfile className='mx-2 mt-3' />
            </span>

            <input
              type="text"
              name="name"
              value={credentials.name}
              required
              onChange={handleChange}
              className="w-full px-1 py-2  focus:outline-none "
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
              className="w-full px-1 py-2  focus:outline-none "
              placeholder="youremail@example.com"
            />
          </div>
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <div className='flex border rounded-lg focus:outline-none '>
            <span>
              <PiAddressBookLight className='mx-2 mt-3' />
            </span>

            <input
              type="text"
              name="address"
              value={credentials.address}
              required
              onChange={handleChange}
              className="w-full px-1 py-2  focus:outline-none "
              placeholder="Your Address"
            />
          </div>
        </div> */}
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
              className="w-full px-1 py-2 focus:outline-none"
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

        <button type='submit' className='cursor-pointer m-auto py-1 px-2 rounded-lg bg-blue-900 text-white w-full'>
          {loader ? <Loading className='text-center' />
            : 'Book'}

        </button>
      </form>
    </div>
  )
}

export default DemeForm
