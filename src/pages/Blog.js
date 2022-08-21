import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';
import Footer from '../component/Footer';

export default function Blog() {
  const [axiosData, setAxiosData] = useState([]);
  let { id } = useParams();
    
    useEffect(() => {
        document.title = 'Blog';
        DarkMode(); 
        loadJson();
    },)

    function loadJson(){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setAxiosData(res.data)
      }).catch((e) => console.error(e))
    }

  return (
    <div>
        <Navbar page='blogs'/>
        <div className='h-screen dark:bg-slate-900  align-center flex flex-col  dark:text-white px-5 justify-center text-center'>
            <h1 className='text-dark font-bold text-xl text-center py-5'>{axiosData.title}</h1>
            <p className='mb-5'>{axiosData.body}</p>
        </div>
        <Footer />
    </div>
  )
}

