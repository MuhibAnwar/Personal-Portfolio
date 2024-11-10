import React from 'react';
import Headings from './Headings';
import Cards from './Cards';

const data = [
  {
    id: 0,
    title: "Resume Builder",
    descri: "A resume builder that helps users create resumes quickly and easily.",
    img: "/screen.png", 
    tags: ["HTML", "CSS", "TYPESCRIPT"]
  },
  {
    id: 1,
    title: "CLI PROJECTS",
    descri: "CLI projects made with Typescript that work on Command Prompt only.",
    img: "/muh.jpeg",
    tags: ["TYPESCRIPT"]
  }
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Headings title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 place-items-center">
        {data.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            des={el.descri}  
            img={el.img}
            tages={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
