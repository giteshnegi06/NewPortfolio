import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import About from "./Pages/AboutUs"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
export default function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
          <Route path="/" element={<About/>}/>
          <Route path="/" element={<Skills/>}/>
          <Route path="/" element={<Projects/>}/>
          <Route path="/" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
