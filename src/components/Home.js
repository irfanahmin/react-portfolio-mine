// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Hi, I'm Irfan Khan</h1>
        <p>A Backend Developer & Innovator</p>
        <div className="home-buttons">
          <a href="/projects" className="btn btn-primary">View Projects</a>
          <a href="/contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
