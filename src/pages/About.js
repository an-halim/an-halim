import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode'
import Footer from '../component/Footer'

export default function About() {
    useEffect(() =>{
        document.title = 'About'
        DarkMode()
    })
    return (
      <div>
          <Navbar page='about'/>
          <div className='h-screen dark:text-white dark:bg-slate-900 py-4 text-center '>
              <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-8 lg:px-10 grid justify-items-center">
                <h1 className='font-bold text-xl py-5'>Tentang saya</h1>
                <p className="text-justify pb-5 leading-7 indent-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet impedit perspiciatis laudantium voluptatibus, aliquid architecto eum quae. Quae, vel omnis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet impedit perspiciatis laudantium voluptatibus, aliquid architecto eum quae. Quae, vel omnis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet impedit perspiciatis laudantium voluptatibus, aliquid architecto eum quae. Quae, vel omnis.
                </p>
              </div>
          </div>
          <Footer />
      </div>
    )
}
