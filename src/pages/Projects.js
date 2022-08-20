import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';

export default function Projects() {
    useEffect(() => {
        document.title = 'Projects';
        DarkMode();
    })

  return (
    <div>
        <Navbar page='projects'/>
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex dark:text-white align-center justify-center flex-col text-center'>
            <h1 className='font-bold text-xl'>Projects</h1>
            <p>Beberapa projects yang telah saya buat</p>
        </div>
    </div>
  )
}
