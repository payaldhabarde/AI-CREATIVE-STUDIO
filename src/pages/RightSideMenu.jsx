import React from "react";
import GroupMenu from "../components/sidebar/GroupMenu";
import CompanyLogo from "../components/ui/CompanyLogo";
import TopBanner from "../components/sidebar/TopBanner";
import { menuData } from "../data/menuData";
import lifeIcon from "../assets/life-ring.png";
import rightIcon from "../assets/Frame304.png";
import UserUpgradePro from "../components/sidebar/UserUpgradePro";
import AllSidebarMenu from "../components/sidebar/AllSidebarMenu";

const RightSideMenu = () => {
  return (
    <>
      <div className="right-side-menu fixed left-0 top-0 h-screen w-[25%] overflow-y-auto  border border-[#E8E8E9] ">
        <div className="right-side-menu-wrapper mt-3 mx-4 mb-4">
          <CompanyLogo />
          <TopBanner />

          <AllSidebarMenu />
          <TopBanner
            className="bg-white my-3 text-[15px] leading-6 font-semibold font-inter tracking-[-0.01em] text-[#6E53DB]"
            subtitle="Help & getting started"
            leftIcon={lifeIcon}
            rightIcon={rightIcon}
          />
          <UserUpgradePro />
        </div>
      </div>
    </>
  );
};

export default RightSideMenu;
