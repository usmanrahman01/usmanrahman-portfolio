import React from 'react';
import './App.css';
import profileImage from './images/profile.jpg'; 
import { Banner } from "./Banner";
import './Footer.css';
import ScrollToTop from './ScrollToTop';


const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968305.png",
  "https://static-00.iconduck.com/assets.00/logo-js-icon-2048x2048-ptuzd8a3.png",
  "https://www.alignminds.com/wp-content/uploads/2022/10/Why-Should-You-Use-Syntactically-Awesome-Style-Sheets-SASS-Small.png",
  "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-typescript-logo-icon-download-in-svg-png-gif-file-formats--html-programming-coding-relate-pack-logos-icons-1982828.png",
  "https://www.pngfind.com/pngs/m/638-6386413_react-logo-png-white-transparent-png.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968286.png",
  "https://cdn-icons-png.freepik.com/256/5968/5968343.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png?f=webp"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));
function About() {
  return (
    <div>
   <div className="banner">
        < div className="header-content">
          <h1 className="name">Hello I’m<br /> Usman Rahman</h1>
          <p>I'm a Developer based in Karachi, Pakistan. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
          <button className="resume-btn" href="" >Say Hello!</button>
        </div>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      {/* Skills Section */}
      <section className="skills">
     
        <Banner images={images} speed={18000} />
      </section>

      <div>  <Footer/></div>
      <ScrollToTop />
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

export default About;
