import React from "react";
import RightSideMenu from "./RightSideMenu";
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";

const FirstScreen = () => {
  return (
    <>
      <div className="firstScreen flex">
        <div className="w-[25%] ">
          <RightSideMenu />
        </div>

        <div className="w-[75%] ">
          <LeftSideMenu />
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
