import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Header = () => {
  return (
    <>
    <div id='row'>
      <div className="col-12 bg-black h-10">
        <div className="flex justify-between items-center text-white ml-5">
            <p className='mt-2'>30 Ekim 2024</p>
        </div>
        <div className="flex items-center justify-end gap-24 mr-5 -mt-6 text-white">
            <p>İnstagram</p>
            <p>Youtube</p>
        </div>
      </div>
      </div>

      <div className="row">
        <div className="col-12 text-black">
        <Image className='mt-5 mb-5 ml-5 '
        src="/assets/letter.png"
        width={54}
        height={54}
        alt="SE Teknoloji"
      />
        </div>

      </div>

      <div className="row bg-black">
        <div className="col-12 flex items-center justify-start gap-24 ml-5 h-14 text-white">
            <Link href='/'>Ana Sayfa</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='about'>Hakkımızda</Link>
            <Link href='content'>İletişim</Link>
        </div>
      </div>
    
    </>
  )
}

export default Header
