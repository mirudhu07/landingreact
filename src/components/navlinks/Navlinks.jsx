import React from 'react'
import "../../styles/navlinks.css"
import logo from '../../assets/logo.webp'
import { useNavigate,useNavigation } from 'react-router-dom'

export default function Navlinks() {
const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <img src={logo} alt="explore" width={"150px"}></img>
      <div className='navlinks'>
      <ul className='color'>
        
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/About page")}>ABOUT</li>
        <li onClick={() => navigate("/Contact page")}>CONTACT</li>
        </ul>
        </div>
    </div>
  )
}
