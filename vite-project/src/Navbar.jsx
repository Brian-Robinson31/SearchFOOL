import { Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'


function Navbar(){
  return (
  <div className ="navbar">
    <div>
      <h1>Search Tool</h1>
    </div>
    <div>
    <ul className="nav-links">
      <li className="nav"><Link to="/">Manga</Link></li>
      <li className="nav"><Link to="anime">Anime</Link></li>
      <li className="nav"><Link to="list">List</Link></li>
    </ul>
    </div>  
  </div>
  )
}

export default Navbar