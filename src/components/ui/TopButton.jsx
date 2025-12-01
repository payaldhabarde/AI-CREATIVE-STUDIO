const TopButton = ({
  icon,
  title,
  btnLabel = "Click",
  onClick = () => {},
  className = "",
  bgColor = "bg-white",
  textColor = "text-#000",
}) => {
  return (
    <div
      className={`w-[144px] h-[40px] rounded-[12px] border border-[#6E53DB] px-[8px] py-[8px] flex items-center justify-center gap-[10px] ${textColor} ${bgColor} ${className}`}
    >
      {icon && <img src={icon} alt={title} className="w-5 h-5" />}

      <p className="font-medium text-sm">{title}</p>

      <button
        onClick={onClick}
        className="w-[30px] h-6 ml-auto bg-[#52BA69] rounded-[5px] text-white font-inter font-semibold text-[12px] leading-[24px] tracking-[-0.02em]"
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default TopButton;
