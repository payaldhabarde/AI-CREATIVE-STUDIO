import React from "react";
import subtract from "../../assets/Subtract.png";
import frame309 from "../../assets/Frame-309.png";

const TopBanner = ({
  className = "",
  leftIcon = subtract,
  subtitle = "Dashboard",
  rightIcon = frame309,
}) => {
  return (
    <div
      className={`right-top-banner flex justify-between items-center bg-[#F3F2FF] p-3 rounded-xl ${className}`}
    >
      <div className="flex gap-3 items-center">
        {leftIcon && <img src={leftIcon} alt="icon" className="w-6 h-6" />}
        {subtitle && (
          <p className="sidebar-heading font-inter font-semibold text-[14px] leading-6 tracking-[-0.02em] text-[#6E53DB] ">
            {subtitle}
          </p>
        )}
      </div>
      {rightIcon && (
        <img
          src={rightIcon}
          alt="icon"
          className="right-icon w-[38px] h-[24px]"
        />
      )}
    </div>
  );
};

export default TopBanner;
