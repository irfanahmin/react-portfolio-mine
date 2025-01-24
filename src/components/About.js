// About.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="./images/profile.jpg"
              alt="Profile"
              className="rounded-full w-72 h-72 object-cover shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="text-center md:text-left text-white">
            <h2 className="text-4xl font-extrabold text-shadow-md mb-4">About Me</h2>
            <p className="text-lg mb-6 leading-relaxed">
              I'm Irfan Khan, a passionate backend developer with a strong interest in creating innovative solutions.
              I enjoy building cutting-edge systems like SafeSight, SafeLens, and developing stock market prediction
              models. I'm constantly looking for ways to improve and grow my skills, and I love exploring new
              technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              <a href="https://github.com/irfankhan" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com/in/irfankhan" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaLinkedin size={30} />
              </a>
              <a href="mailto:irfan@example.com" className="text-gray-200 hover:text-white transition-colors duration-300">
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
