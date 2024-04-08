import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
          <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap" />
            </li>
          </ul>
          <div className="subheading mb-3">Workable Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Creativity
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Communication
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Cooperation
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Self-learning
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Problem-solving
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
