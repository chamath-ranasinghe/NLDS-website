import React, { useState } from 'react'
import box from "../Assets/Merch/giftbox.png"
import "../Styles/Mystery.css"


    

function MysteryBox() {

    const [guess, setGuess] = useState('');  // State to store user input
  
    const handleSubmit = () => {
      if (guess.trim() === '') {
        alert("Please enter your guess.");   // Alert if input is empty
      } 
      else if((guess.trim() === 'mask')||(guess.trim() === 'MASK')){
        alert("Congradulations!!! You guessed it correct");   // Alert if input has a value
      }
      else {
        alert("OOPSIE!!! Wrong guess. Try Again");   // Alert if input has a value
      }
    };

  return (
    <div className='giftbox'>
      <div className="mystery-content">
        <div className="gift-text">
          <p className='mystext'>DIVE INTO THE MYSTERY</p>
          <p className='guesstext'>Have a guess what's inside the mystery box</p>

          {/* Input for user guess */}
          <input 
            type="text" 
            placeholder="Guess the mystery gift" 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)}  // Update state on input change
            className="guess-input"
          />
          {/* Submit button */}
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>

        <div className="gift-pack">
          <img src={box} alt="Logo" className="gift-items" />
        </div>
      </div>
    </div>
  )
}

export default MysteryBox
