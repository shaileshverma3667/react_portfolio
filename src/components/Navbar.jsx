import React from 'react'
import "./style/Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div className='Navbar d-flex justify-content-around'>
        <div className='d-flex'>
        <img src='images/logo.png'  height={"40px"}/>
          <ul className='listNavbar mt-2'>
            <li>Home</li>
            <li>Study</li>
            <li>Works</li>
            <li>Contact</li>
          </ul> 
        </div>
        <div>
          <SearchIcon/>
          <button className='btn btn-info m-2   '>Hire Now</button>
        </div>
    </div>
  )
}

export default Navbar