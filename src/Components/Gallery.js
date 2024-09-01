import React from 'react'
import gallery_1 from "../Assets/1.jpg"
import gallery_2 from "../Assets/2.jpg"
import gallery_3 from "../Assets/3.jpg"
import gallery_4 from "../Assets/4.jpg"
import arrow from "../Assets/icons/white-arrow.png"

const Gallery = () => {
  return (
    <div className="photos">
        <div className='gallery' id='Gallery'>
            <img src = {gallery_1} alt=""/>    
            <img src = {gallery_2} alt=""/>
            <img src = {gallery_3} alt=""/>    
            <img src = {gallery_4} alt=""/>    
        </div>

    <button className='btn darkbtn' >See more here <img src={arrow} alt =""/></button>
    </div>
  )
}

export default Gallery
