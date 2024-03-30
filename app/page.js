'use client'
import React from 'react'
import "./components/style.css"
import  "./components/responsive.css"
import Home from './components/Home'
import About from './components/About'
import Services from './components/Service'
import Blog from './components/Blog'
import Partner from './components/Partner'
export default function page() {
  return (
    <div>
      {/* HERO SECTION */}
      <Home />
      {/* ABOUT SECTION */}
      <About />
      {/* SERVICE SECTION */}
      <Services />
      {/* PARTNER SECTION */}
      <Partner />
      {/* BLOG SECTION */}
      <Blog />
    </div>
  )
}
