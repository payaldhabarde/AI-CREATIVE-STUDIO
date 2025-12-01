
import { latestProjectData } from "../../data/latestProjectData";

const LatestProject = () => {
  return (
    <div className="latest-project bg-white w-full max-w-[940px]  rounded-[20px] p-[16px_12px_18px_12px] flex flex-col gap-[14px] opacity-100">
      <table className=" border border-gray-200 rounded-lg overflow-hidden">
        <thead className="h-[30px] px-[12px] pb-3 items-start">
          <tr className="">
            <th className="font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
              Project Name
            </th>
            <th className="font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
              Status
            </th>
            <th className="font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
              Label
            </th>
            <th className="font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
              Latest modification
            </th>
            <th className="font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
              Action
            </th>
          </tr>
        </thead>


        <tbody className="mt-5">
          {latestProjectData.map((project) => (
            <tr
              key={project.id}
              className="border-t border-[#EFEFEF] hover:bg-[#F5F5F5] hover:shadow-sm transition-all hover:rounded-xl"
            >
         
              <td className="px-4 py-2">
                <div className="mt-3 flex items-center gap-4">
                  <div className="project-name flex items-center gap-4">
                    <img
                      src={project.projectIcon}
                      alt=""
                      className="project-icon w-[80px] h-[80px] rounded-md"
                    />
                    <div>
                      <h4 className="project-name font-inter font-semibold text-[15px] leading-[25px] tracking-[-0.03em] align-middle text-[#1A1D1F]">
                        {project.projectName}
                      </h4>
                      <p className="project-tool font-inter font-medium text-[10px] leading-[15px] tracking-[-0.01em] text-[#565C63]">
                        {project.projectTool}
                      </p>
                    </div>
                  </div>
                </div>
              </td>

         
              <td className="px-4 py-2">
                <div
                  className={`flex items-center gap-[4px] rounded-[4px] opacity-100`}
                  style={{
                    backgroundColor: project.status.bgColor,
                    width: `${project.status.width}px`,
                    height: `${project.status.height}px`,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  <p
                    className="font-inter font-semibold text-[12px] leading-[24px] tracking-[-0.01em]"
                    style={{ color: project.status.textColor }}
                  >
                    {project.status.text}
                  </p>
                </div>
              </td>

         
              <td className="px-4 py-2">
                <div
                  className={`flex items-center gap-[4px] rounded-[4px] opacity-100`}
                  style={{
                    backgroundColor: project.label.bgColor,
                    width: `${project.label.width}px`,
                    height: `${project.label.height}px`,
                    paddingLeft: "8px",
                    paddingRight: "8px",
                  }}
                >
                  <p
                    className="font-inter font-semibold text-[12px] leading-[24px] tracking-[-0.01em]"
                    style={{ color: project.label.textColor }}
                  >
                    {project.label.text}
                  </p>
                </div>
              </td>

       
              <td className="px-4 py-2">
                <div className="latest-modification flex items-center gap-2">
                  <img
                    src={project.latest.icon}
                    alt="watch"
                    className="clock w-6 h-6"
                  />
                  <p className="m-date font-inter font-semibold text-[12px] leading-[24px] tracking-[-0.01em] text-[#6F767E] text-center">
                    {project.latest.date}
                  </p>
                </div>
              </td>

           
              <td className="px-4 py-2">
                <button
                  className="flex items-center gap-[10px] rounded-[12px] opacity-100"
                  style={{
                    backgroundColor: project.action.bgColor,
                    width: `${project.action.width}px`,
                    height: `${project.action.height}px`,
                    paddingLeft: "14px",
                    paddingRight: "14px",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                >
                  <img
                    src={project.action.icon}
                    alt="edit"
                    className="w-5 h-5"
                  />
                  <span className="font-inter font-medium text-[12px] leading-[24px] tracking-[-0.02em] text-black">
                    {project.action.text}
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestProject;
