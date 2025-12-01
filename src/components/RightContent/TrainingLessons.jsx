import React from "react";
import Arrow from "../../assets/arrow-right-small.png";
import Lessons from "../ui/Lessons";

const TrainingLessons = () => {
  return (
    <div className="training-lessions bg-white rounded-xl pt-4 pr-3 pb-[18px] pl-3 gap-[14px] mt-8 w-full max-w-[940px] mx-auto">
      <div className="top-heading-btn flex justify-between items-center rounded-xl">
        <h3 className="top-heading font-inter font-medium text-[28px] leading-[48px] tracking-[-0.02em] text-center text-[#292D31]">
          Check Training Lessons
        </h3>
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
      <Lessons />
    </div>
  );
};

export default TrainingLessons;
