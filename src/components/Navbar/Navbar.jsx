import React from 'react'
import './Navbar.css'
import DarkMode from '../DarkMode/DarkMode'
import fire from '../../assets/fire.png'
import star from '../../assets/star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CineAstra</h1>
      <div className="nav-links">
        <DarkMode />
        <a href="">
          
          Popular
          <img className="nav-icon" src={fire} alt="Fire" />
        </a>
        <a href="">
          
          Top Rated
          <img className="nav-icon" src={star} alt="Star" />
        </a>
        <a href="">
          
          Trending
          <img className="nav-icon" src={party} alt="Party" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar