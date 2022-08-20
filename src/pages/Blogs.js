import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../component/Navbar'
import DarkMode from '../function/DarkMode';
import data from '../assets/data'

export default function Blogs() {
  const [authors, setauthors] = useState({});
  const [axiosData, setAxiosData] = useState([]);

    useEffect(() => {
        document.title = 'Blogs';
        DarkMode();
        setauthors(data())   
        loadJson();
    }, [])

    function loadData(){
        return (
          <div>
            {JSON.stringify(authors.authors)}
          </div>
        )
    }

    function loadJson(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setAxiosData(res.data)
      }).catch((e) => console.error(e))
    }

  return (
    <div>
        <Navbar page='blogs'/>
        <div className='h-screen dark:bg-black  align-center  dark:text-white px-5 justify-center'>
            <h1 className='text-dark font-bold text-xl text-center pt-5'>Posts</h1>
            <p className='mb-5'>Ini adalah halaman utama</p>
            <table className="table-auto border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className='border border-slate-600'>Title</th>
                  <th className='border border-slate-600'>User ID</th>
                  <th className='border border-slate-600'>ID</th>
                </tr>
              </thead>
              <tbody>
                  {axiosData.map((value) => {
                    return(
                      <tr>
                        <td className='border border-slate-600'>
                          <Link key={value.id} to={`/blogs/${value.id}` }>{value.title}</Link>
                        </td>
                        <td className='border border-slate-600'>
                          <Link key={value.id} to={`/blogs/${value.id}` }>{value.userId}</Link>
                        </td>
                        <td className='border border-slate-600'>
                          <Link key={value.id} to={`/blogs/${value.id}` }>{value.id}</Link>
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
        </div>
    </div>
  )
}
