"use client";
import { useState, useEffect } from "react";
import "../../Styles/ThankYouOverlay.css"; // Import the CSS file
import OCImage from "../../Assets/1.jpg";

export default function ThankYouOverlay() {
  const [isOpen, setIsOpen] = useState(false); // Opens by default on page load

  useEffect(() => {
    const hasSeenOverlay = localStorage.getItem("hasSeenOverlay");
    if (!hasSeenOverlay) {
      setIsOpen(true);
      localStorage.setItem("hasSeenOverlay", "true");
    }

    // Clear the localStorage item when the page is about to be unloaded (when the user closes the tab)
    const handleBeforeUnload = () => {
      localStorage.removeItem("hasSeenOverlay");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const closeOverlay = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="overlay">
        <div className="overlay-content">
          {/* Image */}
          <img src={OCImage.src} alt="Overlay Image" className="overlay-image" />
          <p id="thank-you">Thank You for making it the best conference ever</p>
          <p>Much love from OC Diablos!</p>
          {/* Close Button */}
          <button className="overlay-button" onClick={closeOverlay}>
            Explore
          </button>
        </div>
      </div>
    )
  );
}
