import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 bg-black-100">
      <div className="grid md:grid-cols-2 gap-20 items-center"data-aos="zoom-in-up">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">ABOUT MY SKILLS</h2>
          <p className="text-gray-500 pt-2">
            I possess a strong foundation in web development, with expertise in TypeScript and Next.js for building modern, scalable web applications. I am proficient in front-end technologies such as HTML and CSS, allowing me to create responsive and user-friendly interfaces. My technical skills are complemented by a solid understanding of communication, which enables me to collaborate effectively with both team members and clients. Additionally, my problem-solving mindset and ability to adapt to new technologies ensure that I can tackle challenges and deliver high-quality results in any project I undertake.
          </p>
        </div>

        <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
          <div className="space-y-2">
            <h3 data-aos="zoom-in-up">TypeScript</h3>
            <h3 data-aos="zoom-in-up">HTML</h3>
            <h3 data-aos="zoom-in-up">CSS</h3>
          </div>
          <div className="space-y-2">
            <h3 data-aos="zoom-in-up">Next.js</h3>
            <h3 data-aos="zoom-in-up">WordPress</h3>
            <h3 data-aos="zoom-in-up">Node.js</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
