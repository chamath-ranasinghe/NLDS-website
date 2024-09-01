import React, { useState } from 'react';
import '../Styles/Register.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/4.jpg';
import NavBar from '../Components/NavBar';

const Register = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: ''
  });
  const [showModal, setShowModal] = useState(true); // State to control initial modal visibility

  const images = [img1, img2, img3];

  const nextPage = (e) => {
    e.preventDefault();
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleInputChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add your submission logic here
  };

  const handleAgree = () => {
    setShowModal(false);
  };

  return (
    <div>
      <NavBar />
      {showModal && (
        <div className="initial-modal">
          <div className="modal-content">
            <p>Psst... You are signing up to a secret mission. Are you willing to accept the challenge? </p>
            <button onClick={handleAgree}>I Do</button>
          </div>
        </div>
      )}
      {!showModal && (
        <div className="registration-container">
          <div className="registration-modal">
            <div className="modal-left">
              <img src={images[page]} alt="Registration Visual" />
            </div>
            <div className="modal-right">
              <form onSubmit={handleSubmit} className="carousel-content">
                {page === 0 && (
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange(e, 'firstName')}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange(e, 'lastName')}
                    />
                  </div>
                )}

                {page === 1 && (
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, 'email')}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => handleInputChange(e, 'password')}
                    />
                  </div>
                )}

                {page === 2 && (
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => handleInputChange(e, 'address')}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange(e, 'phoneNumber')}
                    />
                  </div>
                )}

                <div className="carousel-controls">
                  {page > 0 && <button type="button" onClick={prevPage}>Previous</button>}
                  {page < 2 ? (
                    <button type="button" onClick={nextPage}>Next</button>
                  ) : (
                    <button type="submit">Submit</button>
                  )}
                </div>
              </form>
              <div className="dot-indicator-register">
                {images.map((_, index) => (
                  <span key={index} className={`dot-register ${page === index ? 'active' : ''}`}></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
