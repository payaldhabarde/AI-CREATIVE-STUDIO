import React, { createContext, useState, useRef, useEffect } from "react";

export const PopupNewContext = createContext();

export const PopupProvider = ({ children }) => {
  const [openNewPopup, setOpenPopup] = useState(null); // keeps track of which popup is open
  const popupNewRef = useRef(null); // reference for the popup element

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupNewRef.current && !popupNewRef.current.contains(event.target)) {
        setOpenPopup(null); // close popup if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PopupNewContext.Provider
      value={{ openNewPopup, setOpenPopup, popupNewRef }}
    >
      {children}
    </PopupNewContext.Provider>
  );
};
