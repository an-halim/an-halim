import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';
import Footer from '../component/Footer';

export default function Resume() {
    useEffect(() => {
        document.title = 'Resume';
        DarkMode();
            
    })

  return (
    <div className='dark:bg-slate-900'>
        <Navbar page='resume'/>
        <div className='h-screen flex align-center flex-col dark:text-white justify-center text-center'>
            <h1 className='text-dark font-bold text-xl text-center pt-5'>Resume!</h1>
            <p>Coming soon!</p>
        </div>
        <Footer />
    </div>
  )
}
