import React from 'react'
import merch from "../Assets/Merch/merchpack.png"
import "../Styles/BuyMerch.css"
function BuyMerch() {
  return (
    <div className='buymerch'>
      <div className="buy-content">
                <div className="merch-pack">
                    <img src={merch} alt="Logo" className="merch-items" />
                </div>
                <div className="buy-text">
        {/* <p>CLICK HERE TO BUY THE MERCH PACK</p> */}
        {/* <a href="https://forms.gle/DZbGMCKoFzqBwt92A" target="_blank" rel="noopener noreferrer" className="buy-text-link">
          CLICK HERE
        </a> */}
        <a href="#" className="buy-text-link">
          Pre Orders are closed :(
        </a>
      </div>
            </div>
    </div>
  )
}

export default BuyMerch
