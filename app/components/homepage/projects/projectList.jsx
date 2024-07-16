'use client'
import React, { useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import { FaArrowRight } from 'react-icons/fa';
import SingleProject from './single-project'

const ProjectsList  =  () => {
  const [total, setTotal] = useState(6)

  return (
      <div className="pt-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {projectsData.slice(0, total).map((project, index) => (
            <div
              // id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                {/* <ProjectCard project={project} /> */}
                <SingleProject project = {project} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center  mt-5 lg:mt-12">
          <button
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            onClick={() => {setTotal(projectsData.length)}}
          >
            <span>View More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
  );
};

export default ProjectsList;