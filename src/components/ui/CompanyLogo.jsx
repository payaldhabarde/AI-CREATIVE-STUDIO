import React from "react";
import AI from "../../assets/AI.png";
import creative from "../../assets/Creative.png";
import STUDIO from "../../assets/STUDIO.png";
import Logo from "../../assets/site-logo.png";

const CompanyLogo = () => {
  return (
    <div className="flex gap-2 pb-6">
      <img src={Logo} alt="" className="" />
      {/* <img src={AI} alt="" className="w-[56.4px] h-[45.32px] mt-[0.86px]" />
      <div className="flex flex-col gap-[2px] ">
        <img src={creative} alt="" className=" w-[116.88px] h-[18.59px]" />
        <img src={STUDIO} alt="" className="w-[118px] h-[24px]" /> */}
      {/* </div> */}
    </div>
  );
};

export default CompanyLogo;
