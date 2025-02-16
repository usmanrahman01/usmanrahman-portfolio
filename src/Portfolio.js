import React from 'react';
import './App.css';
import profileImage from './images/profile.jpg'; 
import project1 from './images/project1.PNG';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/resume.PNG';
import project5 from './images/memory.jpg';
import project6 from './images/artgallery.jpg';
import './Footer.css';
function Portfolio() {
  return (
    <div>
  
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

export default Portfolio;
