// Projects.js
import React from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'SafeSight',
    description: 'A safety monitoring solution for women, using real-time analytics to identify risks.',
    technologies: ['Spring Boot', 'Machine Learning', 'Python'],
    githubLink: '#'
  },
  {
    id: 2,
    title: 'SafeLens',
    description: 'A visual data analysis tool that enhances decision-making with real-time image processing.',
    technologies: ['PyTorch', 'MediaPipe', 'Computer Vision'],
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Stock Market Prediction',
    description: 'A project that uses time series analysis for predicting stock market trends.',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    githubLink: '#'
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.githubLink} className="btn btn-primary">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
