import React from 'react';
import './Home.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details' >
         <div className='profile-details-name'>
          <span className='primary-text'>
            {" "}
            <h1>Hello, I am <span className='highlighted-text'>Theocharoula </span></h1>
          </span>
         </div>
        <div className='profile-details-role'>
          <span className='profile-role-tagline'>
          Being successful in your life is like a hard race. Try to be your own winner.
          </span>
        </div>
        <div>
            <a href='Cv.pdf' download='Tarara Cv.pdf'>
              <button className='Resume'> Get Resume</button>
            </a>
        </div>
    </div>
    <div className='profile-picture'>
      <div className='profile-picture-background'>

      </div>

    </div>
  </div>
</div>
  );
}
