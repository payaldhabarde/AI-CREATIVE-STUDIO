import groupIcon from "../../assets/Group_39547.png";
import paperText from "../../assets/papers-text.png";
import plusIcon from "../../assets/plus-icon.png";
import cheveronIcon from "../../assets/Cheveron.png";
import NavItem from "../../assets/Nav-item.png";

const GroupMenu = ({ topHeading, features }) => {
  return (
    <div className="group-menu border-b border-[#E8E8E9] pb-4">
      
      {topHeading && (
        <p className="mt-1.5 mx-3 text-xs text-[#A5A5A5] font-medium leading-6 tracking-[0.16em] font-inter">
          {topHeading}
        </p>
      )}

     
      <div className="sub-items mt-4 flex flex-col gap-4">
        {features?.map((feature, index) => (
          <div key={index} className="feature-item ">
           
            {(feature.title ||
              feature.titleIcon ||
              feature.showPlus ||
              feature.showChevron ||
              feature.button) && (
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  {feature.titleIcon && (
                    <img
                      src={feature.titleIcon}
                      alt="title icon"
                      className="menu-icon w-[21.5px] h-[21.5px]"
                    />
                  )}
                  {feature.title && (
                    <p className="main-menu font-inter font-medium text-sm leading-6 tracking-[-0.02em] text-[#565C63]">
                      {feature.title}
                    </p>
                  )}
                </div>

                
                <div className="icons-wrapper flex gap-2 items-center ">
                  
                  {feature.button?.replacePlus
                    ? feature.button?.show && (
                        <button
                          style={{
                            backgroundColor:
                              feature.button.bgColor || "#52BA69",
                            width: feature.button.width || "88px",
                            height: feature.button.height || "24px",
                            color: feature.button.textColor || "#FFFFFF",
                            fontSize: feature.button.fontSize || "14px",
                            fontWeight: feature.button.fontWeight || "600",
                            borderRadius: feature.button.borderRadius || "6px",
                          }}
                          className="flex justify-center gap-[5px] items-center font-inter tracking-[-0.02em] focus:outline-none focus-visible:outline-none"
                        >
                          
                          {feature.button.icon && (
                            <img
                              src={feature.button.icon}
                              alt="btn-icon"
                              className="w-[10px] h-[10px]"
                            />
                          )}

                          
                          {feature.button.text}
                        </button>
                      )
                    : feature.showPlus && (
                        <img
                          src={plusIcon}
                          alt="plus"
                          className="top-plus-icon"
                        />
                      )}

                  
                  {feature.showChevron && (
                    <img
                      src={cheveronIcon}
                      alt="chevron"
                      className="top-menu-arrow w-6 h-6"
                    />
                  )}

                 
                  {!feature.button?.replacePlus &&
                    feature.button?.show &&
                    feature.button?.position === "after" && (
                      <button
                        style={{
                          backgroundColor: feature.button.bgColor || "#52BA69",
                          width: feature.button.width || "88px",
                          height: feature.button.height || "24px",
                          color: feature.button.textColor || "#FFFFFF",
                          fontSize: feature.button.fontSize || "14px",
                          fontWeight: feature.button.fontWeight || "600",
                          borderRadius: feature.button.borderRadius || "6px",
                        }}
                        className="flex items-center justify-center font-inter tracking-[-0.02em]"
                      >
                        {feature.button.text}
                      </button>
                    )}
                </div>
              </div>
            )}

           
            {(feature.list?.length > 0 || feature.listIcon) && (
              <div className="flex justify-between items-center mt-3 sub-menu-list">
                <div className="flex gap-3 items-center">
                  {feature.listIcon && (
                    <img
                      src={feature.listIcon}
                      alt="list icon"
                      className="submenu-icon w-9 h-[121px]"
                    />
                  )}

                  {feature.list && (
                    <ul className="submenu-list flex flex-col gap-3">
                      {feature.list.map((item, i) => (
                        <li
                          key={i}
                          className="submenu font-inter font-medium text-sm leading-6 tracking-[-0.02em] text-[#565C63] hover:text-[#6E53DB]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                
                {feature.sideIcon && feature.sideIcon.icon && (
                  <div className="rightsideIcons grid grid-rows-3 gap-3">
                    <img src={feature.sideIcon.icon} alt="side icon" />
                    {feature.sideIcon.green !== undefined && (
                      <p
                        className="submenu-count rounded-md flex items-center justify-center font-inter font-semibold text-sm leading-6 tracking-[-0.02em]"
                        style={{
                          backgroundColor:
                            feature.sideIcon.greenBg || "#52BA69",
                          color: feature.sideIcon.greenText || "#FFFFFF",
                          width: feature.sideIcon.greenWidth || "32px",
                          height: feature.sideIcon.greenHeight || "24px",
                        }}
                      >
                        {feature.sideIcon.green}
                      </p>
                    )}

                    {feature.sideIcon.gray !== undefined && (
                      <p className="submenu-count rounded-md bg-[#616161] w-[25px] h-6 flex items-center justify-center font-inter font-semibold text-sm leading-6 tracking-[-0.02em] text-white">
                        {feature.sideIcon.gray}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupMenu;
