import React from 'react'
import Header from '../component/Header'
import DemeForm from '../component/DemoForm'
import Footer from '../component/Footer'
import Faqs from '../component/Faqs'
import Testimonials from '../component/Testimonials'
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
      <Faqs />
      <Testimonials />
      <DemeForm />
      <Footer />
    </div>
  )
}

export default Home
