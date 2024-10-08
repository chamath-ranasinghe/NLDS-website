import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import MerchAlert from '../Components/MerchAlert';

import "../Styles/Register.css";
import "../Styles/Loading.css"

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

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

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
  const [showLoading, setShowLoading] = useState(false);

  // Merch Alert
  const [modalOpen, setModalOpen] = useState(false);

  //Entities
  const entities = [
    "CC",
    "CN",
    "CS",
    "Kandy",
    "NIBM",
    "NSBM",
    "Rajarata",
    "Ruhuna",
    "SLIIT",
    "USJ",
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

  const genders = ["Female", "Male", "Prefer not to say"];

  const excitementList = [
    "1. Curious – \"I'm interested but still exploring\"",
    '2. Warming Up – "Starting to feel the excitement!"',
    '3. Pretty Excited – "Can’t wait to meet new people and learn!"',
    '4. Super Excited – "Ready for the challenges and fun ahead!"',
    '5. Pumped! – "This will be the highlight of my year!"',
  ];

  const images = [img1, img2, img3, img4, img6, img7, img8, img5];

  const handleContact = ()=>{
    navigate('/ContactUs');
  }

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
      setShowLoading(true);

      const response = await fetch(process.env.REACT_APP_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData), // Adjust based on your form fields
      });

      setShowLoading(false);

      if (!response.ok) {
        setShowLoading(false);
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const responseText = await response.text();
      console.log("Submission successful:", responseText);

      // Optionally show a success message to the user
      //alert("Your application is recieved! Await for further instructions...");
      //navigate("/");

      setModalOpen(true);

      // Clear the form or take other actions
      // Example: setFormData({}); // Reset formData
    } catch (error) {
      setShowLoading(false);
      alert("Error Occurred: Check your network connection!");
      console.error("Submission failed:", error);
    }
  };

  const handleAgree = () => {
    setShowModal(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate("/"); // Navigate after closing the modal
  };


  return (
    <div>
      <NavBar />
      {showLoading && <Loading />}
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
        <div className={`registration-container ${showLoading ? 'loading' : ''}`}>
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
                {page === 2 && (
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
                      <option value="non-veg">Non-veg</option>
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
                    style={{ width: "40%", height: "auto", margin:'30px auto 0 auto' }} // Adjust size as needed
                  />
                  <button
                    onClick={(e)=>e.preventDefault()}
                    className="reg-merch-btn"
                    style={{ width:'40%', margin: '10px auto 0 auto', padding: '10px', backgroundColor: '#462255', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                  >
                    You Just Missed it :(
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
                    <p>An adventure of a lifetime awaits for just 19,000/- LKR!
                    (Investment from your Local Entity will be unlocked through the efforts and impact you make within your entity.)</p>
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
              <div className="contact-us">
                Any issues? <p onClick={handleContact}>Contact us!</p>
              </div>
            </div>
          </div>

        </div>
      )}
      <MerchAlert isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Register;
