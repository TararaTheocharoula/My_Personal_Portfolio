import React from 'react';
import './Portfolio.css';
import Blood from '../assets/Home/Blood.JPG';
import weather from '../assets/Home/weather.jpg';
import Flower from '../assets/Home/Flower.jpg';
import Todo from '../assets/Home/Todo.jpg';

const Portfolio = () => {
  return (
    <div className="Home">
      <main>
        <div className="grid-container">
          <div className="grid-item">
            <h2>Flower Shop</h2>
            <img src={Flower} alt="Image 1" />
            <p>This is a website for a flower shop, based on an 
            assignment in Coursera's Meta Course "Meta front-end developer
             professional"." </p>
          </div>
          <div className="grid-item">
            <h2>Blood Donor Card</h2>
            <img src={Blood} alt="Image 3" />
            <p> This is my master's thesis.It is the digitization of the blood donor card using the kotlin language in the android studio environment.</p>
          </div>
          <div className="grid-item">
            <h2>To do list</h2>
            <img src={Todo} alt="Image 3" />
            <p>This is a Todo List.It helps me to remember my every day Tasks.</p>
          </div>
          <div className="grid-item">
            <h2>Weather App</h2>
            <img src={weather} alt="Image 2" />
            <p>This is an app that can easily show me the temperature, the humidity and the wind speed.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
