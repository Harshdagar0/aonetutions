import React from 'react'
import Header from '../component/Header'
import DemeForm from '../component/DemoForm'
import Footer from '../component/Footer'
import Faqs from '../component/Faqs'
import Testimonials from '../component/Testimonials'
import AddReview from '../component/AddReview'
import Howwework from '../component/Howwework'
// import SpecialityMenu from '../component/SpecialityMenu'
// import Topdoctors from '../component/Topdoctors'
// import Banner from '../component/Banner'

function Home() {
  return (
    <div>
      <Header />
      {/* <SpecialityMenu/> */}
      {/* <Topdoctors/> */}
      {/* <Banner/> */}
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
