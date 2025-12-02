import React from "react";
import GroupMenu from "./GroupMenu";
import Labels from "./Labels";
import { menuData } from "../../data/menuData";

const AllSidebarMenu = () => {
  return (
    <div>
      <div className="menu-list flex flex-col gap-6">
        {menuData.map((menu, index) => (
          <GroupMenu
            key={index}
            topHeading={menu.topHeading}
            features={menu.features}
          />
        ))}
      </div>
      <Labels />
    </div>
  );
};

export default AllSidebarMenu;
