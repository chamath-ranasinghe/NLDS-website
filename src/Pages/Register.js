import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Register.css";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/4.jpg";
import img4 from "../Assets/5.jpg";
import img5 from "../Assets/6.jpg";
import img6 from "../Assets/7.jpg";
import img7 from "../Assets/8.jpg";
import img8 from "../Assets/11.jpg";
import MerchFlyer from "../Assets/MerchFlyer.jpg"

import NavBar from "../Components/NavBar";

const Register = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    entity: "",
    email: "",
    dob: "",
    contactno: "",
    faculty: "",
    yearOfStudy:"",
    role:"",
    nic:"",
    gender: "",
    foodpreference: "",
    allergiesMedication: "",
    address:"",
    guardianName:"",
    emergency:"",
    partnerConsent:"",
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
  const roles = ["LCPe", "Specialist", "Manager", "Team Leader", "Member"]; //Roles

  const yearsOfStudy = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    "Fifth Year",
  ];

  const genders = ["Female", "Male"];

  const excitementList = [
    "1. Curious – \"I'm interested but still exploring\"",
    '2. Warming Up – "Starting to feel the excitement!"',
    '3. Pretty Excited – "Can’t wait to meet new people and learn!"',
    '4. Super Excited – "Ready for the challenges and fun ahead!"',
    '5. Pumped! – "This will be the highlight of my year!"',
  ];

  const images = [img1, img2, img3, img4, img6, img7, img8, img5];

  // Make sure all the boxes are filled before moving to the next page
  const validateInputs = () => {
    // Skip validation if on page 3
    if (page === 4) return true;

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
      if (page < 7) {
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

  const handleMerch = (e)=>{
    e.preventDefault(); 
    window.open('https://forms.gle/DZbGMCKoFzqBwt92A', '_blank');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData), // Adjust based on your form fields
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const responseText = await response.text();
      console.log("Submission successful:", responseText);

      // Optionally show a success message to the user
      alert("Form submitted successfully!");
      navigate("/");

      // Clear the form or take other actions
      // Example: setFormData({}); // Reset formData
    } catch (error) {
      console.error("Submission failed:", error);

      // Handle CORS errors separately
      if (
        error.message.includes("NetworkError") ||
        error.message.includes("Failed to fetch")
      ) {
        console.log("CORS issue or network error, treating it as success.");
        alert("Form submitted successfully!");
        navigate("/");

        // Optionally reset the form
        // Example: setFormData({});
      } else {
        alert("An error occurred. Please try again.");
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
                    <label>What's your first name?</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange(e, "firstName")}
                      required
                    />
                    <label>What's your last name?</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange(e, "lastName")}
                      required
                    />
                    <label>Which AIESEC Entity do you belong to?</label>
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
                    <label>Email (AIESEC email preferred)</label>
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
                    <label>Contact Number (Whatsapp Preferred)</label>
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
                    <label>Which faculty are you part of?</label>
                    <input
                      type="text"
                      value={formData.faculty}
                      onChange={(e) => handleInputChange(e, "faculty")}
                      required
                    />
                    <label>Which year are you in?</label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => handleInputChange(e, "yearOfStudy")}
                      required
                    >
                      <option value="">Select Year</option>
                      {yearsOfStudy.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {page === 3 && (
                  <div className="input-group">
                    <label>What's your role/ position in AIESEC?</label>
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
                    <label>NIC</label>
                    <input
                      type="text"
                      value={formData.nic}
                      onChange={(e) => handleInputChange(e, "nic")}
                      required
                    />
                    <label>Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange(e, "gender")}
                      required
                    >
                      <option value="">Select Gender</option>
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {page === 4 && (
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
                    <label>Any allergies or medical conditions we should know about?</label>
                    <textarea
                      value={formData.allergiesMedication}
                      onChange={(e) =>
                        handleInputChange(e, "allergiesMedication")
                      }
                      required
                    />
                  </div>
                )}
                {page === 5 && (
                  <div className="input-group">
                    <label>Home Address</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange(e, "address")}
                      required
                    />
                    <label>Guardian's Name</label>
                    <input
                      type="text"
                      value={formData.guardianName}
                      onChange={(e) => handleInputChange(e, "guardianName")}
                      required
                    />
                    <label>Emergency Contact Number</label>
                    <input
                      type="text"
                      value={formData.emergency}
                      onChange={(e) => handleInputChange(e, "emergency")}
                      required
                    />
                  </div>
                )}
                {page === 6 && (
                  <div className="input-group">
                  {/* Merch Details */}
                  <img
                    src={MerchFlyer}
                    alt="Merch"
                    style={{ width: "50%", height: "auto", margin:'30px auto 0 auto' }} // Adjust size as needed
                  />
                  <button
                    onClick={handleMerch}
                    className="merch-button"
                    style={{ width:'40%', margin: '10px auto 10px auto', padding: '10px', backgroundColor: '#AA4465', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                  >
                    Buy Merch
                  </button>
                </div>
                )}
                {page === 7 && (
                  <div className="input-group">
                    <label>
                      Do you consent to share your information with TRANSCEND -
                      NLDS 2024 partners?
                    </label>
                    <select
                      value={formData.partnerConsent}
                      onChange={(e) => handleInputChange(e, "partnerConsent")}
                      required
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      {/* Add more options here */}
                    </select>
                    <label>How excited are you? (1 to 5)</label>
                    <select
                      value={formData.excitement}
                      onChange={(e) => handleInputChange(e, "excitement")}
                      required
                    >
                      <option value="">Select</option>
                      {excitementList.map((excitement, index) => (
                        <option key={index} value={excitement}>
                          {excitement}
                        </option>
                      ))}
                    </select>
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
                  {page < 7 ? (
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
