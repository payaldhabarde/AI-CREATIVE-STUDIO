import React from "react";
import RightSideMenu from "./RightSideMenu";
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";

const FirstScreen = () => {
  return (
    <>
      <div className="firstScreen flex justify-between w-[100%] ">
        <RightSideMenu />

        <LeftSideMenu />
      </div>
    </>
  );
};

export default FirstScreen;
