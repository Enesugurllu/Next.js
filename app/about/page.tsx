import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Licence from '../../components/Licence'

const page = () => {
  return (
    <>
    <Header/>
    <div className='mt-32 bg-red-500 text-center text-4xl'>
      Hakkımızda
    </div>
    <Licence/>
    <Footer/>
    </>
  )
}

export default page
