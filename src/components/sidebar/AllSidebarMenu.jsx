import React from "react";
import GroupMenu from "./GroupMenu";
import Labels from "./Labels";
import { menuData } from "../../data/menuData";

const AllSidebarMenu = () => {
  return (
    <div>
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
      <div className="menu-list flex flex-col gap-6">
        {menuData.map((menu, index) => (
          <GroupMenu
            key={index}
            topHeading={menu.topHeading}
            features={menu.features} // ✅ This must be passed!
          />
        ))}
      </div>
      <Labels />
    </div>
  );
};

export default AllSidebarMenu;
