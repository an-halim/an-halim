import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About"
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Post from "../pages/Post";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogs/:id" element={<Blog />}/>
            <Route path="/post/:slug" element={<Post />}/>
        </Routes>
    )
}