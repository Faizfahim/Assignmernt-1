import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import Footer from '../Components/Footer/footer'

const Contect = () => {
  return (
    <div>
        <Navbar/>
      <div className='h-screen text-center text-2xl pt-60 bg-orange-600 text-orange-950'>
      <h1>Contect Us</h1>
      </div>

      <div className='text-center bg-blue-600 text-purple-950'>
      <a href='/'>Go to HomePage</a>
      </div>

      <Footer/>
    </div>
  )
}

export default Contect
