import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
        DarkMode();
            
    })

  return (
    <div>
        <Navbar/>
        <div className='h-screen dark:bg-black flex align-center flex-col  dark:text-white justify-center text-center'>
            <h1 className='text-dark font-bold text-xl text-center pt-5'>Home!</h1>
            <p>Ini adalah halaman</p>
        </div>
    </div>
  )
}
