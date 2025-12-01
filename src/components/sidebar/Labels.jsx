import React from "react";
import { labelData } from "../../data/labelData";

const Labels = () => {
  return (
    <div className="lebels-menu mt-10">
      <p className="label-heading mt-1.5 mx-3 text-xs text-[#A5A5A5] font-medium leading-6 tracking-[0.16em] font-inter ">
        LABELS
      </p>

      <div className="flex flex-col mt-3 mx-3 mb-4 gap-3 ">
        {labelData.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 py-2 "
          >
            <div className="flex items-center gap-3">
              <div
                className="w-[10px] h-[10px] rounded-full"
                style={{ backgroundColor: item.dotColor }}
              ></div>
              <span className="font-inter font-medium text-sm leading-6 tracking-[-0.02em] text-[#565C63]">
                {item.label}
              </span>
            </div>

            <div
              className="flex items-center text-white justify-center font-inter font-semibold text-sm leading-6 tracking-[-0.02em] rounded"
              style={{
                width: `${item.width}px`,
                height: `${item.height}px`,
                backgroundColor: item.countColor,
              }}
            >
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labels;
