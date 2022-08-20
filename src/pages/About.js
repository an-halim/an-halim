import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode'

export default function Home() {
    useEffect(() =>{
        document.title = 'About'
        DarkMode()
    })
  return (
    <div className='dark:bg-black'>
        <Navbar page='about'/>
        <div className='h-auto align-center dark:text-white relative flex items-center justify-around mx-auto px-2 sm:px-6 lg:px-8'>
            <h1 className='text-gray-600 dark:text-white text-left font-bold text-2xl pt-5'>Tentang Ahmad Nur Halim</h1>
            <p>Ini adalah halaman about</p>
        </div>
    </div>
  )
}
