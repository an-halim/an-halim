import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import DarkMode from "../function/DarkMode";
import Footer from "../component/Footer";
import Alert from "../component/Alert";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
    DarkMode();
  });

  return (
    <div>
      <Navbar />
      <div className='h-screen dark:text-white dark:bg-slate-900 py-4 text-center '>
        <div className='max-w-7xl mx-auto px-8 sm:px-6 md:px-8 lg:px-10 grid justify-items-center'>
          <Alert />
          <p className='text-justify py-5 leading-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            impedit perspiciatis laudantium voluptatibus, aliquid architecto eum
            quae. Quae, vel omnis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Amet impedit perspiciatis laudantium voluptatibus,
            aliquid architecto eum quae. Quae, vel omnis. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Amet impedit perspiciatis
            laudantium voluptatibus, aliquid architecto eum quae. Quae, vel
            omnis.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
