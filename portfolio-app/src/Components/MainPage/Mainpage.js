import React from 'react'
import About from '../Pages/About/About'
import Project from '../Pages/Project/Project'
import Home from '../Pages/Home/Home'
import {Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'

export default function Mainpage(props) {
  return (
<React.Fragment>
<Header {...props}/>
        <Routes>
            <Route path='/' element={<Home {...props}/>}/>
            <Route path='/about' element={<About {...props}/>}/>
            <Route path='/project' element={<Project {...props}/>}/>
        </Routes>
</React.Fragment>
  )
}






