// src/components/Projects.js
import React from 'react';

const projects = [
  { title: 'Project 1', description: 'A brief description of Project 1', link: 'https://github.com/project1' },
  { title: 'Project 2', description: 'A brief description of Project 2', link: 'https://github.com/project2' },
  { title: 'Project 3', description: 'A brief description of Project 3', link: 'https://github.com/project2' },
  { title: 'Project 4', description: 'A brief description of Project 4', link: 'https://github.com/project2' },
  { title: 'Project 1', description: 'A brief description of Project 1', link: 'https://github.com/project1' },
  { title: 'Project 2', description: 'A brief description of Project 2', link: 'https://github.com/project2' },
  { title: 'Project 3', description: 'A brief description of Project 3', link: 'https://github.com/project2' },
  { title: 'Project 4', description: 'A brief description of Project 4', link: 'https://github.com/project2' },
  { title: 'Project 5', description: 'A brief description of Project 4', link: 'https://github.com/project2' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-amber-200">
      <div className="container-fluid mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
