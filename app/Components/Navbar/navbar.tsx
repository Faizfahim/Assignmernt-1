import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-gray-500 h-12 pl-10 flex justify-between items-center text-yellow-500'>
      <div className="logo">
            <h1 className='text-xl m-2'>Nevbar</h1>
      </div>
          <div className='nevigations pr-20'>
            <ul className='flex gap-4 mr-4 cursor-pointer'>
                <Link href="/" className='hover:text-red-500'>Home</Link>
                <Link href="/about" className='hover:text-blue-600'>About</Link>
                <Link className='hover:text-yellow-600' href="/contect">Contect</Link>
                <Link className='hover:text-green-500' href="/services">Services</Link>
            </ul>
      </div>
     </header>
  )
}

export default Navbar
