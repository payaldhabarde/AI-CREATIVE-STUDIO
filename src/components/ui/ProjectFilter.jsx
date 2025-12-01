import React from "react";

const ProjectFilter = () => {
  return (
    <div className="project-filter w-[146px] p-3  h-[184px] rounded-[16px] bg-white backdrop-blur-[32px] shadow-[0px_32px_48px_-8px_#0000001A,0px_0px_14px_-4px_#0000000D,0px_40px_64px_-12px_#00000014]">
      <ul className="date-list flex flex-col">
        <li className="w-[122px] h-12 flex justify-between rounded-[12px] p-3 opacity-100 rounded-[12px] p-[12px] font-inter font-semibold text-[15px] leading-[24px] tracking-[-0.01em] text-[#1A1D1F]">
          Last Day
        </li>
        <li className="opacity-100 rounded-[12px] p-[12px] font-inter font-semibold text-[15px] leading-[24px] tracking-[-0.01em] text-[#1A1D1F]">
          Last Month
        </li>
        <li className="opacity-100 rounded-[12px] p-[12px] font-inter font-semibold text-[15px] leading-[24px] tracking-[-0.01em] text-[#1A1D1F]">
          Last Year
        </li>
      </ul>
    </div>
  );
};

export default ProjectFilter;
