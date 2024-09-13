import React, { useEffect, useRef, useState } from 'react'
import image1 from '../Assets/Merch/skinny.png';
import image2 from '../Assets/Merch/cap.png';
import image3 from '../Assets/Merch/skinny.png';
import image4 from '../Assets/Merch/band.png';
import image5 from '../Assets/Merch/giftbox.png';
import '../Styles/MerchHero.css'


const MerchHero = () => {
  const sets = [
    { png: image1, title: 'T-SHIRT' },
    { png: image2, title: 'CAP' },
    { png: image3, title: 'SKINNY' },
    { png: image4, title: 'WRIST BAND' },
    { png: image5, title: 'MYSTERY GIFT' }
  ];

  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % sets.length);
    }, 5000); // Change set every 10 seconds (5s in + 5s out)

    return () => clearInterval(interval);
  }, [sets.length]);

  return (
    <div className="header-container">
      {sets.map((set, index) => (
        <div
          key={index}
          className={`header-set ${index === currentSet ? 'active' : ''} ${index === (currentSet - 1 + sets.length) % sets.length ? 'exit' : ''}`}
        >
          <img src={set.png} alt={set.title} className="header-img" />
          <h1 className="header-title">{set.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default MerchHero
