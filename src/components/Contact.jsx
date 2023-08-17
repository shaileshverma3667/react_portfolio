import React, { useState } from 'react'
import "./style/Contact.css"
import MapChart from './MapChart'
const Contact = () => {
  const [formData,setFormData]=useState({fname:"",email:"",address:""})
  const [data,setData]=useState([])
  const handleSubmit=(e)=>{
     e.preventDefault()
     setData((prev)=>([...prev,formData]))
     setFormData({fname:"",email:"",address:""})
  }
  const handleChange=(e)=>{
       const {name,value}=e.target
       setFormData({...formData,[name]:value})
  
  }
  console.log(data)
  return (
    <div className='contactBox'>
      <div className='row  contact_row'>
          <div className='col-sm-6'>
            <div className='card w-75 p-5'>
              <form onSubmit={handleSubmit}>
               <div className='card-header text-center fs-4'>Contact Us</div>
               <div className='card-body'>
                <input type='text' name="fname" value={formData.fname} placeholder='Name' className='form-control  mb-2' onChange={handleChange}/>
                <input type='email' name="email" value={formData.email}  placeholder='email' className='form-control mb-2' onChange={handleChange}/>
                <textarea className='form-control mb-2' value={formData.address}  name="address" placeholder='Address' onChange={handleChange}></textarea>
                <input type='submit' value={"send"} className='form-control mb-2 btn btn-success'/>
               </div>
               </form>
            </div>
          </div>
          <div className='col-sm-6 '>
         <MapChart/>
          </div>
      </div>
      <div className='row'>
          <div className='col-sm-10 mx-auto'>

       
          <table className='table table-striped table-borderd'>
            <thead>
             <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
             </tr>
            </thead>
            <tbody>
              {
               data.length!=0 && data.map((ele,index)=>{ 
                  <tr key={index}>
                    <td>{ele.fname}</td>
                    <td>{ele.email}</td>
                    <td>{ele.address}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
          </div>
      </div>
    </div>
  )
}

export default Contact