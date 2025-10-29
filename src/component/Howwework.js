import React from "react";

export default function Howwework() {


  const content = [
    {
      "title": "Compare, Hire & Learn",
      "description": "Take a free demo from our Home Tutors and Online Tutors. Compare amongst them and hire the best."
    },
    {
      "title": "Free Online Learning Platform",
      "description": "Start class with Perfect Tutor and get Free Online Learning Platform for your productive learning."
    },

    {
      "title": "Post Free Requirements",
      "description": "Post your learning requirement for free and get the best Home Tutors and Online Tutors near you."
    },
    {
      "title": "Instant Response",
      "description": "As per your learning needs, get an instant response from experienced tutors and teachers near you."
    }
  ];

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
      <h1 className='text-3xl md:text-4xl text-blue-900 font-medium'>How We Work?</h1>
      <div className='w-ful grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {content && content.map((item, index) => (
          <div key={index}
            className='border text-center border-blue-300 bg-blue-50 p-3 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
            <p className='text-blue-900 text-lg font-medium '>{item.title}</p>
            {item.description}

          </div>
        ))}
      </div>

    </div>

  );
}
