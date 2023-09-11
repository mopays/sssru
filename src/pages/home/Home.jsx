import React from 'react'
import Itemsgrid from '../../components/Itemgrid/itemsgrid'
import './home.css';




function home() {
  const banner = 'https://static.vecteezy.com/system/resources/previews/002/393/980/original/corporate-banner-with-modern-design-free-vector.jpg';
  return (
  <div>
      <div className='container'>
        <div className='corlasel'>
          <img className='img' src={banner} alt="banner"/>
        </div>
        </div>
     <Itemsgrid/> 
        <hr/>
     
    </div>
  )
}

export default home