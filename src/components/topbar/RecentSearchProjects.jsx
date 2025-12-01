import Project1 from "../../assets/project1.png";
import Project2 from "../../assets/project2.png";
import rightArrow from "../../assets/light.png";

const RecentSearchProjects = () => {
  const projects = [
    {
      projectImage: Project1,
      title: "Upscaler Project #212",
      datentime: "Apr 9, 2021 at 3:55 PM",
    },
    {
      projectImage: Project2,
      title: "AI My Voice - My Project",
      datentime: "Apr 9, 2021 at 3:55 PM",
    },
  ];
  return (
    <div className="search-history-project w-[360px] h-[172px] flex flex-col gap-[10px] mt-2 p">
      <h2 className="project-title mb-3 font-inter font-semibold text-[13px] leading-[16px] tracking-[-0.01em] text-[#6F767E]">
        Projects
      </h2>
      {projects.map((item, index) => (
        <div
          key={index}
          className="project-histry-wrapper flex justify-between items-center "
        >
          <div className="flex gap-5 items-center">
            <img
              src={item.projectImage}
              alt="AI Content Generator"
              className="project-img"
            />
            <div className="search-history-content">
              <h3 className="project-title">{item.title}</h3>
              <p className="project-caption">{item.datentime}</p>
            </div>
          </div>
          <img
            src={rightArrow}
            alt="Read More"
            className="explore-project w-6 h-6"
          />
        </div>
      ))}
    </div>
  );
};

export default RecentSearchProjects;
