import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from './Loading';

export default function AddReview() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();
    if (!name || !review) {
      toast.error("Please fill all fields!");
      setLoader(false)
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reviews`, { name, review });

      if (res.data.success) {
        toast.success("Review added successfully! 🎉");
        setLoader(false)
        setName("");
        setReview("");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setLoader(false)
        toast.error(res.data.message);
      }
    } catch (err) {
      setLoader(false)
      toast.error("Error adding review 😔");
      console.error(err);
    }
  };

  return (
    <div className=" bg-blue-900 mt-10 py-4 flex items-center justify-center rounded-2xl ">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md m-2 text-blue-900"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add Your Review</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 h-24"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
        >
          {loader ? <Loading className='text-center' />
            : 'Submit Review'}

        </button>
      </form>
    </div>
  );
}
