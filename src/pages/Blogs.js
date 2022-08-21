import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";
import DarkMode from "../function/DarkMode";
import Footer from "../component/Footer";

export default function Blogs() {
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    document.title = "Blogs";
    DarkMode();
    loadJson();
  }, []);



  function loadJson() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setAxiosData(res.data);
      })
      .catch((e) => console.error(e));
  }

  return (
    <div>
      <Navbar page='blogs' />
      <div className='flex dark:text-white dark:bg-slate-900 py-4 flex-col text-center'>
        <div className='max-w-7xl mx-auto px-8 sm:px-6 md:px-8 lg:px-10 grid justify-items-center'>
          <h1 className='text-dark font-bold text-xl text-center py-5'>
            Posts
          </h1>
          <table className='table text-center border-collapse border border-slate-500'>
            <thead>
              <tr>
                <th className='border border-slate-600'>Title</th>
                <th className='border border-slate-600'>ID</th>
              </tr>
            </thead>
            <tbody>
              {axiosData.map((value) => {
                return (
                  <tr key={value.id}>
                    <td className='border border-slate-600 '>
                      <Link to={`/blogs/${value.id}`}>
                        <p  className="font-light px-2 text-start">{value.title}</p>
                      </Link>
                    </td>
                    <td className='border border-slate-600 '>
                      <Link  to={`/blogs/${value.id}`}>
                      <p  className="px-2 font-semibold">{value.id}</p>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
