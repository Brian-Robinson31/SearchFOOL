import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Search from './Search.jsx'
import Anime from './Anime.jsx'
import ListPage from './ListPage.jsx'

function App(){
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Anime />} />
                <Route path="/anime" element={<Anime />} /> 
                <Route path="/list" element={<ListPage />} />
            </Routes>
        </div>
    )
}


export default App