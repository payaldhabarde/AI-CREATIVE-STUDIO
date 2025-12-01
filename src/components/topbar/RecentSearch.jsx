import React from "react";
import tool1 from "../../assets/img.png";
import tool2 from "../../assets/project1.png";
import Close from "../../assets/Union.png";
import RecentSearchProjects from "./RecentSearchProjects";

const RecentSearch = () => {
  const tools = [
    {
      contentImage: tool1,
      caption: "CONTENT FEATURES",
      title: "AI Content Generator",
    },
    {
      contentImage: tool2,
      caption: "CONTENT FEATURES",
      title: "AI Content Generator",
    },
  ];
  return (
    <div
      className="
    search-history
     rounded-xl
    bg-[#FFFFFFE5]
    w-[384px] h-[387px]
    absolute top-[40px]
    border border-[#F4F4F4]
    shadow-[0px_32px_48px_-8px_#0000001A,0px_0px_14px_-4px_#0000000D]
    backdrop-blur-[32px]
    p-4 flex flex-col gap-[10px] mt-6
  "
    >
      <h2 className="search-heading mb-3 font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
        Recent search
      </h2>
      {tools.map((item, index) => (
        <div className="histry-wrapper flex justify-between items-center gap-5">
          <div className="flex items-center gap-5">
            <img
              src={item.contentImage}
              alt="AI Content Generator"
              className="search-history-img"
            />
            <div className="search-history-content">
              <p className="content-caption">{item.caption}</p>
              <h3 className="content-caption">{item.title}</h3>
            </div>
          </div>
          <img
            src={Close}
            alt="close"
            className="search-history-close w-3 h-3"
          />
        </div>
      ))}
      <RecentSearchProjects />
    </div>
  );
};
export default RecentSearch;
