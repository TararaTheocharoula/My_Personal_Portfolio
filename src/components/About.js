import React from 'react';
import './About.css'; // Import CSS file for styling
import ProfileImage from '../assets/Home/Me.jpg'; // Import the profile image

function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="profile-circle">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <h1>🌼 Hi, I am Charoula, nice to meet You 🌼</h1>
    <p>I am Front-end developer and the last 7 Years i live in Athens.<br/>
       I am from Thessaloniki and i have a little daughet, her name is Ioanna.<br/>
       In 2018 I completed my undergraduate studies in Information Technology <br/> 
       in the city of Kastoria and in 2023 my master's degree in advanced<br/> 
       IT systems - software development and artificial intelligence at the <br/>
        University of Piraeus. I believe that every person should try to become <br/>
         better every day and every failure should give him the energy to continue on.
      </p>
    </div>
  );
}

export default AboutMe;
