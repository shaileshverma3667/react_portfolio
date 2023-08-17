import React from 'react'
import "./style/Who.css"
const Who = () => {
  return (
    <div className='whoBox'>
      <div className='row'>
         <div className='col-sm-6'></div>
         <div className='col-sm-6'>
  
          <p className='fs-1 fw-bold'>Think Outside the <br/>Square Space</p>
              <img src='images/line.png' height={"6px"} width={"50px"}/>
              <span className='ms-2 text-info'>What we Are</span>
              <div>
              <p>a creative group of designeres and developers with a passion for <br/>the arts</p>
              <button className='btn btn-info w-25'>Learn More</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Who