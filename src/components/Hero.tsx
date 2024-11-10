import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left bg-cover"
     
    >
      <Navbar />
      <div className="container h-[calc(100vh-60px)] flex items-center justify-between">
        {/* Left Side: Image centered slightly left */}
        <div
          className="flex-1 h-full bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/KM2.jpg')",
            backgroundSize: 'contain',  // Ensures the image fits in the left side container
            backgroundPosition: 'center left',  // Position the image in the left-center of the container
            backgroundRepeat: 'no-repeat',
            height: '60%',  // Full height
          }}
        ></div>

        {/* Right Side: Text centered */}
        <div className="flex-1 flex justify-center items-center text-[80px] sm:text-[100px] font-bold leading-tight text-white text-center">
          <div>
            <p>Muhib</p>
            <p>Anwar</p>
            <p>Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
