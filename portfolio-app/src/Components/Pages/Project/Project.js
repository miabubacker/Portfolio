import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import CloseFillIcon from "remixicon-react/CloseFillIcon"
import "./Project.scss";


export default function Project(props) {
  const { typeofProject, projects, MainPageActions, filterProjects } = props;
  const [selectproject, setSelectProject] = useState([]);
  const handleCheckbox = (filterproject) => {
    let select = [...selectproject];
    if (select.includes(filterproject)) {
      const toggle = select.filter((data) => data !== filterproject);
      setSelectProject(toggle);
    } else {
      setSelectProject([...select, filterproject]);
    }
  };

  useEffect(() => {
    MainPageActions.selectedProject(
      projects.filter((data) => selectproject.indexOf(data.project) !== -1)
    );
  }, [selectproject]);


  return (
    <>
      <section className="Project_section">
        {/* leftcolumn */}
        <div className="Project_menu">
          <h4>Projects</h4>
          {typeofProject.map((domain, index) => (
            <div key={index} className="left_main">
              <Checkbox
                onChange={(e) => {
                  handleCheckbox(e.target.value);
                }}
                value={domain.name.toLowerCase()}
              >
              </Checkbox>
              <div>{domain.icon}</div>
              <div><p>{domain.name}</p></div>
            </div>
          ))}
        </div>
        <div className="Projects">
          <div className="Project_title">
            {/*  header */}
            <div>
              {selectproject.map((data) => (
                <span key={data}>{data};</span>
              ))}
              <CloseFillIcon className="closeBtn" size={18}
                onClick={(e) => {

                }}
              />
            </div>

          </div>
          {/* projects */}
          <div className="Project_cards">
            {(filterProjects.length > 0 ? filterProjects : projects).map(
              (project, index) => (
                <div className="card_container">
                  <div><span className="ProjectName">Project-{index + 1}:</span> <span className="ProjectTitle">// _{project.title}</span></div>
                  <div className="cards">
                    <img src={project.img} alt="" />
                    <div className="cards_Icon" style={{ position: "absolute", top: 24, right: 20 }}><i>{project.Project_Icon}</i></div>

                    <div className="cards_Body">
                      <p>{project.about_us}</p>
                      <button
                        onClick={() => {
                          window.open(project.project_link, "_blank");
                        }}
                      >
                        view Product
                      </button>
                    </div>
                  </div>

                </div>
              )
            )}
          </div>
        </div>
        <div className="empty">
          <div className="bar"></div>
        </div>
      </section>

    </>
  );
}