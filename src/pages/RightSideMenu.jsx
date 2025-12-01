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
      <div className="right-side-menu flex-col border border-[#E8E8E9] w-[344px] ">
        <div className="right-side-menu-wrapper mt-3 mx-4 mb-4">
          <CompanyLogo />
          <TopBanner />
          {/* {menuData.map((item, index) => (
            <GroupMenu
              key={index}
              topHeading={item.topHeading}
              titleIcon={item.titleIcon}
              title={item.title}
              listIcon={item.listIcon}
              list={item.list}
              sideIcons={item.sideIcons}
            />
          ))} */}
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
