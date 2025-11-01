import React from 'react'
import Header from '../component/Header'
import DemeForm from '../component/DemoForm'
import Footer from '../component/Footer'
import Faqs from '../component/Faqs'
import Testimonials from '../component/Testimonials'
import AddReview from '../component/AddReview'
import Howwework from '../component/Howwework'
import { Helmet } from "react-helmet-async";
import useSEO from "../hooks/useSEO";

function Home() {
  const meta = {
    title: "A One Tuitions - Best Coaching Classes in Delhi, New Delhi , Gurugram",
    description:
      "A One Tuitions offers expert coaching for students of class 8th to 12th.",
    keywords: "tuition, coaching, class 10 maths, class 12 physics, Tuition, Coaching Classes, A One Tuitions, School Classes, Best Tuition, Aone, A one, Study",
    // image: "https://www.aonetutions.com/og-image.jpg",
    url: "https://www.aonetutions.com",
  };
  useSEO(meta);
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
      </Helmet>
      {/* <SpecialityMenu/> */}
      {/* <Topdoctors/> */}
      {/* <Banner/> */}
      <Header />
      <Howwework />
      <Testimonials />
      <DemeForm />
      <Faqs />
      <AddReview />
      <Footer />
    </div>
  )
}

export default Home
