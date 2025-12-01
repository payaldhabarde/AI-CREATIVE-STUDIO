import React from "react";
import Eye from "../../assets/eye.png";
import { lessonsData } from "../../data/lessonData";

const Lessons = () => {
  return (
    <div className="lesson-grid grid grid-cols-2 gap-4 mt-3 ">
      {lessonsData.map((lesson) => (
        <div
          key={lesson.id}
          className="lessons flex gap-[19px]  items-center rounded-[12px] bg-[#F4F4F4] pt-2 pr-2 pb-2 pl-2"
        >
          {/* Lesson Image */}
          <div className="lesson-image">
            <img src={lesson.image} alt={lesson.title} />
          </div>

          {/* Lesson Content */}

          <div className="lesson-content flex flex-col">
            <div className="flex items-center gap-2">
              <span className="lesson-caption font-inter font-semibold text-[8px] leading-4 tracking-[0.04em] text-[#6F767E]">
                {lesson.category}
              </span>
              <img src={lesson.filledIcon} alt="" />
            </div>

            <h2 className="lesson-title font-semibold text-[19px] leading-[48px] tracking-[-0.03em] align-middle text-[#1A1D1F]">
              {lesson.title}
            </h2>

            <p className="lesson-text max-w-[235px] font-inter font-medium text-[10px] leading-[15px] tracking-[-0.02em] text-[#565C63]">
              {lesson.description}
            </p>

            <button className="flex items-center w-[129px] gap-2 py-[8px] px-[14px] rounded-[12px] bg-[#6E53DB] text-white mt-3">
              <img src={Eye} alt="" className="w-[16.25px] h-[12.92px]" />
              <span className="font-inter font-medium text-[12px] leading-[24px] tracking-[-0.02em] ">
                View Lesson
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lessons;
