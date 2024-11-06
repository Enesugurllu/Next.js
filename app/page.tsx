import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Licence from '../components/Licence'
import Current from '../components/Current'
import Guest from '../components/Guest'

const page = () => {
  return ( 
    <>
    <Header/>
    <div className='bg-red-500 text-4xl mt-32 text-center'>
      Enes Uğurlu
    </div>
    <Licence/>
    <Current/>
    <Guest/>
    <Footer/>
    </>
  )
}

export default page
