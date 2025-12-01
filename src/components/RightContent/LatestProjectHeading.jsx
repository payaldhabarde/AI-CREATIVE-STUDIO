import React, { useState } from "react";
import Arrow from "../../assets/arrow-right-small.png";
import CheveronIcon from "../../assets/Cheveron.png";
import LatestProject from "./LatestProject";
import ProjectFilter from "../ui/ProjectFilter";
const LatestProjectHeading = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="latest-projects bg-white rounded-xl pt-4 pr-3 pb-[18px] pl-3 gap-[14px] mt-8 w-full max-w-[940px] mx-auto">
      <div className="top-heading-btn flex justify-between items-center rounded-xl">
        <h3 className="top-heading font-inter font-medium text-[28px] leading-[48px] tracking-[-0.02em] text-center text-[#292D31]">
          Latest Projects
        </h3>

        <div className="button-wrapper flex items-center gap-3">
          <div className="relative inline-block">
            <button
              onClick={() => setOpen(!open)}
              className="projects-btn flex w-[107px] h-[40px] rounded-[12px] px-[14px] py-[8px] items-center gap-[10px] opacity-100 border border-[#6E53DB]"
            >
              <span className="font-inter font-medium text-[12px] leading-[24px] tracking-[-0.02em] text-black">
                Last Day
              </span>
              <img src={CheveronIcon} alt="arrow" className="w-5 h-5" />
            </button>

            {open && (
              <div className="absolute left-0 top-[48px] z-30">
                <ProjectFilter />
              </div>
            )}
          </div>
          <button
            className="projects-btn flex  w-[169px] 
     h-[40px] 
     rounded-[12px] 
     px-[14px] 
     py-[8px] 
     flex 
     items-center 
     gap-[10px] 
     border border-[#C5C5C5]"
          >
            <span
              className="
   font-inter
   font-medium
   text-[12px]
   leading-[24px]
   tracking-[-0.02em]
   text-black
 "
            >
              Show More projects
            </span>
            <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <LatestProject />
    </div>
  );
};

export default LatestProjectHeading;
