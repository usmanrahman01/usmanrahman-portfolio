import React from 'react';
import './App.css';
import e1 from './images/f1.png';
import e2 from './images/f2.png';
import e3 from './images/tag 1.png';
import e4 from './images/pc.png';
import e5 from './images/comicon.png';
import './Footer.css';
function Skills() {
  return (
    <div>
   {/* Expertise Section */}
   <section className="expertise">
    <div className="expertisehead">
  <ul>
    <li className="expertiseminihead"><h3>My Skills</h3></li>
    <li className="expertisemainhead"><h1>Expertise</h1></li>
  </ul>
    </div>
    <div className="expertisecontent">
    <ul>
    <li className="expertisebox"><img src={e4}></img><h2>Strategy & Direction</h2><p> Crafting clear, effective strategies that align with project goals, ensuring a seamless journey from concept to completion.</p></li>
    <li className="expertisebox"><img src={e2}></img><h2>Smooth Coding</h2><p>Writing clean, efficient code to create fast, responsive, and reliable web experiences.</p></li>
    <li className="expertisebox"><img src={e3}></img><h2>Multiple Platform</h2><p>Developing adaptable solutions that work across all devices, providing a consistent experience on desktop, tablet, and mobile.</p></li>
    <li className="expertisebox"><img src={e1}></img><h2>Webflow Development</h2><p>Expert in Webflow, bringing designs to life with precision and interactivity for engaging web interfaces.</p></li>
    <li className="expertisebox">
      <img src={e5}></img><h2>Strong Communication</h2><p>Collaborating closely with clients to understand their vision, ensuring clarity and alignment throughout the project.</p></li>
  </ul>
    </div>
  </section>
  <div>  <Footer/></div>
      </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
      </ul>
    
      <p>&copy;2024 Usman Rahman | All Rights Reserved</p>
    </footer>
  );
}
export default Skills;
