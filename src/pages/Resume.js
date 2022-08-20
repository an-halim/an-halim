import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';

export default function Resume() {
    useEffect(() => {
        document.title = 'Resume';
        DarkMode();
            
    })

  return (
    <div>
        <Navbar page='resume'/>
        <div className='h-screen dark:bg-black flex align-center flex-col  dark:text-white justify-center text-center'>
            <h1 className='text-dark font-bold text-xl text-center pt-5'>Resume!</h1>
            <p>Ini adalah halaman utama</p>
        </div>
    </div>
  )
}
