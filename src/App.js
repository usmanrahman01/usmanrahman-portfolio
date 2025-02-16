// src/App.js
import ScrollToTop from './ScrollToTop';
import React from 'react';
import './App.css';
import { Banner } from "./Banner";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// Import your components for different sections
import profileImage from './images/profile.jpg'; 
import logo from './images/Logo.png'; 
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';


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

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="header">
          <div id="nav" className="nav">
            <ul>

              <li className="nave">
                <li className="logosec"> 
                  <img src={logo} alt="Profile" className="logo" />
             
                </li>
                <li className="navitem"> 
                 <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link></li>
             
              </li>
            </ul>
          </div>
        </header>

        {/* Main Content */}
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
  </Routes>
        </main>
       
        <ScrollToTop />
    </div>
      </Router>
   
  );
}




export default App;
