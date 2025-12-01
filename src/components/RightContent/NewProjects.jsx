import React from "react";
import Projects from "../ui/Projects";

const NewProjects = () => {
  return (
    <>
      <div className="new-projects bg-white rounded-xl pt-4 pr-3 pb-[18px] pl-3 gap-[14px] mt-8 w-full max-w-[940px] mx-auto">
        <h3 className="projects-top-heading font-inter font-medium text-[28px] leading-[48px] tracking-[-0.02em] text-center text-[#292D31]">
          Create New Project
        </h3>
        <Projects />
      </div>
    </>
  );
};

export default NewProjects;
