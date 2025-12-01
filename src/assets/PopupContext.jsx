import { createContext, useContext, useEffect, useRef, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [openPopup, setOpenPopup] = useState(null); // "filter1", "filter2", "filter3"
  const popupRef = useRef(null);

  // Global click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpenPopup(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <PopupContext.Provider value={{ openPopup, setOpenPopup, popupRef }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
