import React from 'react';

const About = () => {
  return (
    <div id="about" className="container pt-48">
      {/* Heading with a serif font style */}
      <h1 className="text-4xl md:text-6xl font-semibold text-center font-serif" data-aos="zoom-in-up">
        About me
      </h1>
      
      {/* Paragraph with a sans-serif font style */}
      <p className="text-base md:text-lg text-gray-1000 pt-4 font-sans" data-aos="zoom-in-up">
      Hi there! I am passionate Computer Science student with a deep interest in technology, programming, and problem-solving. I am always eager to learn new skills, explore innovative ideas, and apply my knowledge in real-world projects. Currently enrolled in GIAIC, I have honed my technical skills in areas like software development, algorithms, and data structures. My journey began with a solid foundation in Matriculation from BSEK, and now I am continuing my studies in the intermediate level at D.J. Science Sindh Govt. College.

If you are looking for a dedicated and driven individual to collaborate with or work on exciting projects in the tech field, I do love to connect and discuss potential opportunities. Lets create something amazing together!


      </p>      
    </div>
  );
}

export default About;
