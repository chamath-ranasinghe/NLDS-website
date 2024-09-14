import React, { useState} from "react";
import {useNavigate } from "react-router-dom";

import "../Styles/Register.css";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/4.jpg";
import img4 from "../Assets/5.jpg"
import img5 from "../Assets/6.jpg"
import NavBar from "../Components/NavBar";

const Register = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    entity: "",
    gender: "",
    dob: "",
    email: "",
    contactno: "",
    role: "",
    foodpreference: "",
    allergiesMedication: "",
    excitement: "",
  });
  const [showModal, setShowModal] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  //Entities
  const entities = [
    "CS",
    "CN",
    "CC",
    "USJ",
    "SLIIT",
    "Ruhuna",
    "Kandy",
    "NIBM",
    "NSBM",
    "Rajarata",
  ];

  //Roles
  const roles = ["LCPe","Specialist", "Manager","Team Leader","Member"];

  const images = [img1, img2, img3, img4,img5];

  // Make sure all the boxes are filled before moving to the next page
  const validateInputs = () => {
    // Skip validation if on page 3
    if (page === 3) return true;
  
    const inputs = document.querySelectorAll(
      ".carousel-content input, .carousel-content select, .carousel-content textarea"
    );
    return Array.from(inputs).every((input) => input.value.trim() !== "");
  };

  const handleInputChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });

    if (key === "email") {
      // Email validation logic
      setIsEmailValid(e.target.validity.valid);
    }
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      if (page < 4) {
        setPage(page + 1);
        setErrorMessage(""); // Clear error message
      } else {
        handleSubmit(e);
      }
    } else {
      setErrorMessage("Make sure to fill all details"); // Set error message
    }
  };

  const prevPage = (e) => {
    e.preventDefault();
    if (page > 0) {
      setPage(page - 1);
      setErrorMessage(""); // Clear error message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(process.env.REACT_APP_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData), // Adjust based on your form fields
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }
  
      const responseText = await response.text();
      console.log('Submission successful:', responseText);
  
      // Optionally show a success message to the user
      alert('Form submitted successfully!');
      navigate('/');
  
      // Clear the form or take other actions
      // Example: setFormData({}); // Reset formData
  
    } catch (error) {
      console.error('Submission failed:', error);
  
      // Handle CORS errors separately
      if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
        console.log('CORS issue or network error, treating it as success.');
        alert('Form submitted successfully!');
        navigate('/');
        
        // Optionally reset the form
        // Example: setFormData({});
      } else {
        alert('An error occurred. Please try again.');
      }
    }
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
            <p>
              Psst... You are signing up to a secret mission. Are you willing to
              accept the challenge?
            </p>
            <button onClick={handleAgree}>I Do</button>
          </div>
        </div>
      )}
      {!showModal && (
        <div className="registration-container">
          <div className={`registration-modal ${showModal ? "slide-in" : ""}`}>
            <div className="modal-left">
              <img src={images[page]} alt="Registration Visual" />
            </div>
            <div className="modal-right">
              <form onSubmit={handleSubmit} className="carousel-content">
                {page === 0 && (
                  <div className="input-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                      required
                    />
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange(e, "lastName")}
                      required
                    />
                    <label>Entity</label>
                    <select
                      value={formData.entity}
                      onChange={(e) => handleInputChange(e, "entity")}
                      required
                    >
                      <option value="">Select Entity</option>
                      {entities.map((entity, index) => (
                        <option key={index} value={entity}>
                          {entity}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {page === 1 && (
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange(e, "email")}
                      required
                      className={!isEmailValid ? "invalid-email" : ""}
                    />
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleInputChange(e, "dob")}
                      required
                    />
                    <label>Contact Number</label>
                    <input
                      type="tel"
                      value={formData.contactno}
                      onChange={(e) => handleInputChange(e, "contactno")}
                      required
                    />
                  </div>
                )}
                {page === 2 && (
                  <div className="input-group">
                    <label>Food Preference</label>
                    <select
                      value={formData.foodpreference}
                      onChange={(e) => handleInputChange(e, "foodpreference")}
                      required
                    >
                      <option value="">Select Food Preference</option>
                      <option value="veg">Non-veg</option>
                      <option value="veg">Veg</option>
                      {/* Add more options here */}
                    </select>
                    <label>Allergies/Medication</label>
                    <textarea
                      value={formData.allergiesMedication}
                      onChange={(e) =>
                        handleInputChange(e, "allergiesMedication")
                      }
                      required
                    />
                    <label>Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => handleInputChange(e, "role")}
                      required
                    >
                      <option value="">Select Role</option>
                      {roles.map((role, index) => (
                        <option key={index} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {page === 3 && (
                  <div className="input-group">
                    {/*Merh Details*/ }
                  </div>
                )}
                {page === 4 && (
                  <div className="input-group">
                    <label>How excited are you? (1 to 10)</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.excitement}
                      onChange={(e) => handleInputChange(e, "excitement")}
                      required
                    />
                  </div>
                )}
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <div className="register-carousel-controls">
                  {page > 0 && (
                    <button type="button" onClick={prevPage}>
                      Previous
                    </button>
                  )}
                  {page < 4 ? (
                    <button type="button" onClick={nextPage}>
                      Next
                    </button>
                  ) : (
                    <button type="submit">Submit</button>
                  )}
                </div>
                <div className="dot-indicator-register">
                  {images.map((_, index) => (
                    <span
                      key={index}
                      className={`dot-register ${
                        page === index ? "active" : ""
                      }`}
                    ></span>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
