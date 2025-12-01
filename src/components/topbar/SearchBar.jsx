import React from "react";
import searchIcon from "../../assets/Search_input.png";
import filledIcon from "../../assets/filled.png";

const SearchBar = ({ onTogglePopup }) => {
  return (
    <div className="search-bar flex items-center w-[361px] h-[48px] gap-[10px] rounded-[12px] p-2 bg-[#F4F4F4] border border-[#6E53DB] opacity-100 relative ">
      <img src={searchIcon} alt="search" className="w-6 h-6 " />

      <input
        type="text"
        placeholder="AI Content Generator Project|"
        className="inpul-label flex-1 font-inter font-medium text-sm leading-6 tracking-[-0.02em] text-black focus:outline-none focus-visible:outline-none"
      />

      <p
        className="input-selector font-inter font-semibold text-base leading-6 tracking-[0] text-[#1A1D1F] w-[56px] h-[32px] rounded-[8px] pt-[4px] pb-[4px] px-[12px] bg-white gap-[10px]
         shadow-[inset_0px_2px_0px_0px_#FFFFFF40,inset_0px_-1px_1px_0px_#0000000A,inset_0px_-1px_2px_0px_#0000000D]"
      >
        ⌘ F
      </p>

      <img
        src={filledIcon}
        alt="filled"
        className="exit-icon w-5 h-5 cursor-pointer"
        onClick={onTogglePopup}
      />
    </div>
  );
};

export default SearchBar;
