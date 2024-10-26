import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad odit unde, minima quam aperiam repellendus aliquam repudiandae possimus explicabo rem, quasi, ut corrupti accusantium numquam quidem laboriosam provident? In.
            </h1>
        </div>
        <div className="fade-bottom">
            
        </div>
    </div>
  )
}

export default Banner