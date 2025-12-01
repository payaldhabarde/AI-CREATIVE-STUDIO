import React from "react";
import { projectsData } from "../../data/projectData";
import plusCircle from "../../assets/project-plus-circle.png";

const Projects = () => {
  return (
    <div>
      <div className="projects-grid grid grid-cols-3 gap-4 mt-3">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="projects group flex flex-col justify-center text-center gap-[5px] items-center rounded-[12px] hover:bg-[#F4F4F4] pt-2 pr-2 pb-5 pl-2"
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} className="image" />
            </div>

            <div className="project-content items-center text-center flex flex-col p-3">
              <div className="flex items-center gap-2">
                <span className="project-caption font-inter font-semibold text-[8px] leading-4 tracking-[0.04em] text-[#6F767E]">
                  {project.category}
                </span>
                <img src={project.filledIcon} alt="" />
              </div>

              <h2 className="project-title font-semibold text-[19px] leading-[48px] tracking-[-0.03em] text-[#1A1D1F]">
                {project.title}
              </h2>

              <p className="project-text max-w-[235px] font-inter font-medium text-[10px] leading-[15px] tracking-[-0.02em] text-[#565C63] text-center">
                {project.description}
              </p>

              <button
                className="
          project-btn flex items-center w-[166px] h-10 gap-2 py-[8px] px-[14px]
          rounded-[12px] bg-[#F4F4F4] text-black
          hover:bg-[#6E53DB] hover:text-white
          group-hover:bg-[#6E53DB] group-hover:text-white
          mt-3
        "
              >
                <svg
                  className="w-[18px] h-[18px] stroke-black group-hover:stroke-white transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="font-inter font-medium text-[12px] leading-[24px] tracking-[-0.02em]">
                  Create New Project
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
