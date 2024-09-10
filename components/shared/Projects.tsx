import React from 'react';
import { dataProjects } from '@/public/links/dataProjects';
import ProjectFlex from './ProjectFlex';
import OtherProjects from './OtherProjects';

import SectionTitle from './SectionTitle';
const Projects = () => {
  return (
    <section
      className="max-w-7xl items-center justify-center mt-10 lg:mt-0 w-full pb-20 pt-36 text-white-200"
      id="projects"
    >
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto justify-center">
        <SectionTitle sectionNum="03." sectionName="My Projects" />
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
      <div className="flex justify-center items-center">
        <OtherProjects />
      </div>
    </section>
  );
};

export default Projects;
