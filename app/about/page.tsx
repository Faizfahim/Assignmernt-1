import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import Footer from '../Components/Footer/footer'

const aboutPage = () => {
  return (
    <div>
        <Navbar/>
      <div className='h-screen w-{100%} text-3xl text-center pt-56 bg-rose-800'>
      <h1>AboutUS</h1>
      </div>

      <div className='text-center bg-blue-600 text-purple-950'>
      <a href='/'>Go to HomePage</a>
      </div>

      <Footer/>
    </div>
  )
}

export default aboutPage
