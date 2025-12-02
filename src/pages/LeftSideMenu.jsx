import React, { useState } from "react";
import SearchBar from "../components/topbar/SearchBar";
import TopButton from "../components/ui/TopButton";
import giftIcon from "../assets/gift.png";
import graduationCap from "../assets/graduation-cap.png";
import Divider from "../components/ui/Divider";
import UserNotification from "../components/topbar/UserNotification";
import UserOnline from "../components/topbar/UserOnline";
import RecentSearch from "../components/topbar/RecentSearch";
import TrainingLessons from "../components/RightContent/TrainingLessons";
import NewProjects from "../components/RightContent/NewProjects";
import ImageTextSection from "../components/RightContent/ImageTextSection";
import LatestProject from "../components/RightContent/LatestProject";
import LatestProjectHeading from "../components/RightContent/LatestProjectHeading";

const LeftSideMenu = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <div className="left-side bg-[#F4F4F4] pb-4">
        <div className="left-side-menu flex justify-between items-center bg-white px-5 py-3 sticky top-0 z-50">
          <div className="relative">
            <SearchBar onTogglePopup={() => setShowPopUp(!showPopUp)} />
            {showPopUp && <RecentSearch />}
          </div>
          <div className="flex gap-2">
            <TopButton
              icon={giftIcon}
              title="Bonuses"
              btnLabel="Get!"
              onClick={() => alert("Bonus clicked")}
            />
            <TopButton
              icon={graduationCap}
              title="Training"
              btnLabel="16"
              onClick={() => alert("Bonus clicked")}
              bgColor="bg-[#6E53DB]"
              textColor="text-white"
            />

            <div className="flex justify-center">
              <Divider />
              <UserNotification />
              <Divider />
            </div>
            <UserOnline />
          </div>
        </div>
        <ImageTextSection />
        <NewProjects />
        <LatestProjectHeading />
        <TrainingLessons />
      </div>
    </>
  );
};

export default LeftSideMenu;
