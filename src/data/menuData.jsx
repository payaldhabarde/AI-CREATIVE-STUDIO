import groupIcon from "../assets/Group_39547.png";
import paperText from "../assets/papers-text.png";
import plusIcon from "../assets/plus-icon.png";
import CpuIcon from "../assets/cpu.png";
import desktopCode from "../assets/desktop-code.png";
import UserIcon from "../assets/user-circle.png";
import paletteIcon from "../assets/palette.png";
import graduationIcon from "../assets/graduation-cap1.png";
import giftIcon from "../assets/gift1.png";
import microphoneIcon from "../assets/microphone.png";
import databaseIcon from "../assets/database.png";
import imageCheck from "../assets/image-check.png";
import laptopCode from "../assets/laptop-code.png";
import videoOutgoing1 from "../assets/video-outgoing1.png";
import brushIcon from "../assets/brush.png";
import speedoMeter from "../assets/speedometer.png";
import videoPlay from "../assets/video-play.png";
import imageGallery from "../assets/image-gallery.png";
import fireIcon from "../assets/fire.png";

export const menuData = [
  {
    topHeading: "CONTENT FEATURES",
    features: [
      {
        title: "AI Content Generator",
        titleIcon: paperText,
        listIcon: groupIcon,
        list: ["Creator Project", "Project List", "All Drafts"],
        showChevron: true,
        sideIcon: { icon: plusIcon, green: 16, gray: 7 },
      },
    ],
  },
  {
    topHeading: "IMAGE & VIDEO FEATURES",
    features: [
      {
        title: "AI 4K Image Generator",
        titleIcon: imageCheck,
        listIcon: groupIcon,
        showPlus: true,
        list: ["Creator Project", "Project List", "All Drafts"],
        showChevron: true,
        sideIcon: { icon: plusIcon, green: 16, gray: 7 },
      },
      {
        title: "AI 4K Image Generator",
        titleIcon: imageCheck,
        showPlus: true,
        showChevron: true,
      },
      {
        title: "DFY Prompt Generator",
        titleIcon: laptopCode,
        showChevron: true,
      },
      {
        title: "Image Video Upscaler",
        titleIcon: videoOutgoing1,
        listIcon: groupIcon,
        list: ["Creator Project", "Project List", "All Drafts"],
        showChevron: true,
        sideIcon: { icon: plusIcon, green: 8, greenBg: "#3E90F0" },
      },
      {
        title: "Image Restoration",
        showPlus: true,
        showChevron: true,
        titleIcon: brushIcon,
        button: {
          show: true,
          replacePlus: true,
          icon: speedoMeter,
          text: "MAX",
          bgColor: "#BAB152",
          width: "46px",
          height: "18px",
          fontSize: "10px",
        },
      },
      {
        title: "Short Video Generator",
        titleIcon: videoPlay,
        showChevron: true,
      },
      {
        title: "Background Remover",
        showPlus: true,
        showChevron: true,
        titleIcon: imageGallery,
        button: {
          show: true,
          replacePlus: true,
          icon: fireIcon,
          text: "PRO",
          bgColor: "#F03E8B",
          width: "46px",
          height: "18px",
          fontSize: "10px",
        },
      },
    ],
  },

  {
    topHeading: "AUDIO FEATURES",
    features: [
      {
        title: "AI Voiceover Generator",
        titleIcon: microphoneIcon,
        showChevron: true,
      },
      {
        title: "Any Content Generator",
        titleIcon: databaseIcon,
        showChevron: true,
      },
    ],
  },
  {
    topHeading: "OTHER FEATURES",
    features: [
      {
        title: "Automation",
        titleIcon: CpuIcon,
        showChevron: true,
      },
      {
        title: "DFY Scripts",
        titleIcon: desktopCode,
        showChevron: true,
      },
      {
        title: "Add Agency User",
        titleIcon: UserIcon,
      },
      {
        title: "Click Design",
        titleIcon: paletteIcon,
      },
      {
        title: "Training",
        titleIcon: graduationIcon,
      },

      {
        title: "Bonuses",
        showPlus: true,
        titleIcon: giftIcon,
        button: {
          show: true,
          replacePlus: true,
          text: "Get Bonus!",
          bgColor: "#52BA69",
          width: "88px",
          height: "24px",
        },
      },
    ],
  },
];
