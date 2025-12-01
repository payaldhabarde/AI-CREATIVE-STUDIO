import onlineUserIcon from "../../assets/online.png";
import CheveronIcon from "../../assets/Cheveron.png";
import { useState } from "react";
import UserAccount from "./UserAccount";

const UserOnline = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="relative inline-block">
      <div
        className="flex gap-1.5 justify-center items-center cursor-pointer"
        onClick={() => setShowPopup(!showPopup)}
      >
        <img src={onlineUserIcon} alt="notification" className="user-icon w-10 h-10" />
        <img
          src={CheveronIcon}
          alt="notification"
          className={`size-xl w-5 h-5 transition-transform ${showPopup} ? "rotate-180" : "" `}
        />
      </div>

      {showPopup && (
        <div className="absolute mt-2 right-0 z-50">
          <UserAccount />
        </div>
      )}
    </div>
  );
};

export default UserOnline;
