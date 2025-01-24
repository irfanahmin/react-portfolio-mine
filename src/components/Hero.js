import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">I'm Smith</h1>
        <p className="text-xl mb-8">Website Designer</p>
        <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full">
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;