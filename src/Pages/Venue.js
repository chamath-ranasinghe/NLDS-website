import React from 'react';
import '../Styles/Venue.css'; // Separate CSS file for the Venue page
import NavBar from '../Components/NavBar';

const Venue = () => {
  return (
    <div className="venue-container">
        <NavBar/>
      <div className="venue-header">
        <h1>Conference Venue</h1>
        <p>Join us at our beautiful venue for the 3-day conference</p>
      </div>

      <div className="venue-content">
        <div className="venue-image-section">
          <img
            src={require('../Assets/Venue/Carolina.jpg')}
            alt="Conference Venue"
            className="venue-image"
          />
        </div>

        <div className="venue-details">
          <h2>Location Details</h2>
          <p>
            The conference will be held at the stunning XYZ Conference Center, located in the heart of the city. With state-of-the-art facilities and breathtaking views, this venue provides the perfect backdrop for our three-day event. You'll have access to world-class amenities, breakout rooms, and an exciting atmosphere for networking.
          </p>
          <div className="venue-info">
            <div className="info-item">
              <h3>Address:</h3>
              <p>Carolina Beach Resort and Spa, Ambakandawila Road, Chilaw</p>
            </div>
            <div className="info-item">
              <h3>Date:</h3>
              <p>October 25th - 27th, 2024</p>
            </div>
            <div className="info-item">
              <h3>Parking:</h3>
              <p>On-site parking available</p>
            </div>
          </div>
        </div>
      </div>

      <div className="venue-map-section">
        <h2>Find Us on the Map</h2>
        {/* Embed a map iframe or use a Google Maps API */}
        <iframe
          className="venue-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4595444535826!2d79.7903475750023!3d7.524749892488289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c8fa7a541f0f%3A0x61819717cfb3295c!2sCarolina%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2slk!4v1729159818408!5m2!1sen!2slk"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          title="Conference Venue Map"
        />
      </div>
    </div>
  );
};

export default Venue;


