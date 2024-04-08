import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the email meets the criteria
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="personal-details">
        <h2>Personal Details</h2>
        <p>Name: Tarara Theocharoula</p>
        <p>Email: theocharoula.tarara@gmail.com</p>
        <p>Phone: +306955851030</p>
        <p>Address: Cholargos, Athens</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/xaroula.tarara"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/theocharoula-tarara-650017200/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/xaroula__tarara/"><i className="fab fa-instagram"></i></a>
          <a href="hhttps://github.com/TararaTheocharoulattps://linkedin.com"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            name="name" 
            type="text" 
            className="feedback-input" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          <input 
            name="email" 
            type="text" 
            className="feedback-input" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          <textarea 
            name="comment" 
            className="feedback-input" 
            placeholder="Comment" 
            value={formData.comment} 
            onChange={handleChange} 
          ></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
