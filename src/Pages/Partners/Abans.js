// src/Pages/ProductShowcase.js
import React,{useEffect} from "react";
import "../../Styles/Abans.css";
import NavBar from "../../Components/NavBar";
import Product from "../../Assets/1.jpg"
import Logo from "../../Assets/Partner_Logos/Abans.png"
import DescriptionImage from "../../Assets/10.jpg"

const Abans = () => {
    useEffect(() => {
        const featureItems = document.querySelectorAll('.abans-feature-item');
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          {
            threshold: 0.1, // Trigger when 10% of the element is visible
          }
        );
    
        featureItems.forEach((item) => {
          observer.observe(item);
        });
    
        // Cleanup observer when the component unmounts
        return () => {
          featureItems.forEach((item) => {
            observer.unobserve(item);
          });
        };
      }, []);

  return (
    <div className="abans-product-showcase">
      <NavBar />
      {/* Hero Section */}
      <section className="abans-hero">
        <div className="abans-hero-text">
          <h1 className="abans-hero-title">Official Mobile Partner</h1>
          <h1 className="abans-hero-title">Motorolla by Abans Group</h1>
          <p className="abans-hero-subtitle">
          <b>Industry Leaders, Inspiring Leadership</b>
          <br/>
Motorola by Abans has joined NLDS 2024 as the Official Mobile Partner. In collaboration with Abans Group, Motorola brings cutting-edge technology to inspire and empower tomorrow’s leaders.
<br/>
<br/>
<b>A Legacy of Innovation</b><br/>
Motorola has been at the forefront of mobile technology for decades. From providing the communication equipment for the Apollo 11 mission that helped astronauts relay the first-ever words from the moon, to revolutionizing the mobile industry with the world’s first flip mobile phones, Motorola continues to pioneer cutting-edge innovations.
<br/>
<br/>
<b>Your Go-To for Genuine Motorola Devices</b><br/>
Through Abans, the trusted reseller of Motorola in Sri Lanka, Motorola ensures you access to their latest technology. With trusted after-sales support and guaranteed authenticity, you can purchase your next Motorola device with confidence.
          </p>
          <button className="abans-hero-button">Visit their page</button>
        </div>
        <div className="abans-hero-image">
          <img src={Product} alt="Product" id="productLogo" />
          <div className="abans-logo-box">
            <img src={Logo} alt="Company Logo" width="100"/>{" "}
            {/* Adjust width as necessary */}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="abans-description">
  <div className="abans-description-text">
    <h2>About Our Products</h2>
    <ul className="abans-features">
      <li className="abans-feature-item">High-quality materials</li>
      <li className="abans-feature-item">Exceptional customer service</li>
      <li className="abans-feature-item">Affordable pricing</li>
      <li className="abans-feature-item">Sustainable practices</li>
      <li className="abans-feature-item">Wide product range</li>
    </ul>
  </div>
  <div className="abans-description-image">
    <img src={DescriptionImage} alt="About Our Products" />
  </div>
</section>


      {/* Product Showcasing Section */}
      <section className="abans-product-showcase-section">
        <h2>Featured Products</h2>
        <div className="abans-products">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="abans-product" key={index}>
              <img
                src={`product${index + 1}.png`}
                alt={`Product ${index + 1}`}
                className="abans-product-image"
              />
              <h3 className="abans-product-title">Product {index + 1}</h3>
              <p className="abans-product-price">$99.99</p>
              <button className="abans-product-button">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="abans-social-media">
        <h2>Follow Us</h2>
        <div className="abans-social-media-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Abans;
