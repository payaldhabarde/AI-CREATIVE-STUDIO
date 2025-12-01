import React from "react";
import onlineUserIcon from "../../assets/online.png";
import rightIcon from "../../assets/Frame592.png";
import buttonIcon from "../../assets/Button.png";

const UserUpgradePro = () => {
  return (
    <div className="user_Upgrade_pro flex flex-col justify-between items-center bg-[#F4F4F4] p-3 rounded-xl ">
      <div className="flex gap-3 items-center">
        <img src={onlineUserIcon} alt="icon" className="w-10 h-10" />
        <div className="flex flex-col">
          <img src={rightIcon} alt="icon" className="" />
          <span className="pro-email text-[#565C6380] text-xs font-semibold leading-6 font-inter">
            <a href="" className="">
              kontakt@infinityrain.pl
            </a>
          </span>
        </div>
      </div>

      <button type="button" className="upgradePro_btn">
        <img src={buttonIcon} alt="icon" className=" my-3" />
      </button>
    </div>
  );
};

export default UserUpgradePro;
