import React, { useRef } from 'react'
import next from "../Assets/icons/next-icon.png"
import back from "../Assets/icons/back-icon.png"
import tshirt from "../Assets/Merch/1.jpg"
import cap from "../Assets/Merch/1.jpg"
import band from "../Assets/Merch/1.jpg"
import tanktop from "../Assets/Merch/1.jpg"
const Merch = () => {

    const slider = useRef();
    let tx = 0;

    const slideFoward = ()=> {
        if(tx>-50){
            tx -=50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=> {
        if(tx<0){
            tx +=50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="merch" id='Merch'>
        <img src={next} className='nextbtn' onClick={slideFoward}/>
        <img src={back} className='backbtn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="photo">
                            <img src={tshirt} alt=""/>
                        </div>
                        <h3>Tshirt</h3>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="photo">
                            <img src={cap} alt=""/>
                        </div>
                        <h3>Cap</h3>
                    </div>
                </li>
                <li>
                <div className='slide'>
                        <div className="photo">
                            <img src={band} alt=""/>
                        </div>
                        <h3>Band</h3>
                    </div>
                </li>
                <li>
                <div className='slide'>
                        <div className="photo">
                            <img src={tanktop} alt=""/>
                        </div>
                        <h3>Tanktop</h3>
                    </div>
                </li>
            </ul>
        </div>
        
      
    </div>
  )
}

export default Merch
