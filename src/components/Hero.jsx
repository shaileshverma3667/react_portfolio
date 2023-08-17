import React from 'react'
import "./style/Hero.css"
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div className='myHeroBox'>
        <Navbar/>
        <div>
          <div className='row herofield'>
            <div className='col-sm-6 left'>
               <p className='fs-1 fw-bold'>Think. Make. <br/>Slove</p>
               <div>
              <img src='images/line.png' height={"6px"} width={"50px"}/>
              <span className='ms-2 text-info'>What we do</span>
              </div>
              <p>We enjoy creating delightful,human-centered digital <br/>Experiences</p>
              <button className='btn btn-info w-25'>Learn More</button>
            </div>
            <div className='col-sm-5 right mt-5 me-2'>
              <img src='images/moon.png' height={"500px"} width={"400px"}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero