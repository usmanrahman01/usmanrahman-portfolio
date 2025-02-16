import React from 'react';
import './App.css';
import './Footer.css';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Banner } from "./Banner";
import profileImage from './images/profile.jpg'; 
import project1 from './images/project1.PNG';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/resume.PNG';
import project5 from './images/memory.jpg';
import project6 from './images/artgallery.jpg';
import e1 from './images/f1.png';
import e2 from './images/f2.png';
import e3 from './images/tag 1.png';
import e4 from './images/pc.png';
import e5 from './images/comicon.png';


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
function Home() {
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
      {/* Projects Section */}
      <section className="projects">
      <div className="projecthead">
  <ul>
    <li className="projectminihead"><h3>Recent Projects</h3></li>
    <li className="projectmainhead"><h1>My Portfolio</h1></li>
  </ul>
    </div>
        <div className="project-list">
          <ProjectCard title="E-commerce website" image={project1} technologies="HTML CSS" details="I would love to hear about your project and how I could help." link="https://delzeta-e-commerce-website.vercel.app/" />
          <ProjectCard title="Robotic Car" image={project2} technologies="IOT Device" details="I would love to hear about your project and how I could help."link="https://example-ecommerce.com" />
          <ProjectCard title="Neflix clone" image={project3} technologies="HTML CSS JavaScript" details="I would love to hear about your project and how I could help."link="https://netflix-website-homepage-repo.vercel.app/" />
          <ProjectCard title="Dynamic Resume Builder" image={project4} technologies="HTML CSS JavaScript" details="I would love to hear about your project and how I could help."link="https://milestone5-by-hafsarahman.vercel.app/" />
          <ProjectCard title="Memory Game" image={project5} technologies="HTML CSS JavaScript" details="I would love to hear about your project and how I could help." link="https://example-ecommerce.com"/>
          <ProjectCard title="Art Gallery Showcase" image={project6} technologies="HTML CSS JavaScript" details="I would love to hear about your project and how I could help."link="https://example-ecommerce.com" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <ScrollToTop />
<div>  <Footer/></div>

      </div>
    );
  }
  
function ProjectCard({ title, image, technologies, details, link  }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{technologies}</p>
        <p>{details}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="projectbutton">
          View Project
        </a>
      </div>
      
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



export default Home;
