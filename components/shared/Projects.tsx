import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento_grid';
import Image from 'next/image';
import { dataProjects } from '@/public/links/dataProjects';
import ProjectFlex from './ProjectFlex';
const Projects = () => {
  return (
    <section
      className="max-w-7xl items-center justify-center w-full pb-20 pt-36 text-white-200"
      id="projects"
    >
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto justify-center">
        <h2 className="font-bold text-xl text-purple-100 text-left lg:text-3xl mb-14">
          03. <span className="text-white ml-3 lg:text-4xl">My Projects</span>
        </h2>
        <div className="relative mx-auto">
          {dataProjects.map((project) => (
            <ProjectFlex
              key={project.id}
              title={project.title}
              description={project.description}
              srcImg={project.srcImg}
              defaultImg={project.defaultImg}
              projectName={project.projectName}
              isReverse={project.isReverse}
              id={project.id}
              projectTools={project.projectTools}
              linkLiveView={project.linkLiveView}
              linkGithub={project.linkGithub}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
