import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import "./Project.scss";
// import cardImg from "../../assets/Img/cardImg.svg";
// import gameCard from "../../assets/Img/cardImggame.svg";
// import cardEteram from "../../assets/Img/cardImgEtheram.svg";

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
    <section className="Project_section">
      {/* leftcolumn */}
      {typeofProject.map((domain, index) => (
        <div key={index} className="left_main">
          <div>{domain.icon}</div>
          <Checkbox
            onChange={(e) => {
              handleCheckbox(e.target.value);
            }}
            value={domain.name.toLowerCase()}
          >
            {domain.name}
          </Checkbox>
        </div>
      ))}
      {/*  header */}
      <div>
        {selectproject.map((data) => (
          <span key={data}>{data};</span>
        ))}
      </div>
      {/* projects */}
      {(filterProjects.length > 0 ? filterProjects : projects).map(
        (project, index) => (
          <div className="card_container">
            <div>Project {index + 1}</div>
            <div>{project.title}</div>
            <div>{project.about_us}</div>
            <button
              onClick={() => {
                window.open(project.project_link, "_blank");
              }}
            >
              view Product
            </button>
          </div>
        )
      )}
      {/* {cardData.map((data, index) => {
        return (
          <>
            <div className="card_container">
              <h6 key={index}>{data.title}</h6>
              <div className="cards">
                <img key={index} src={data.cardImg} alt="" />
                <div className="cards_Body">
                  <p key={index}>{data.description}</p>
                  <button>view-project</button>
                </div>
              </div>
            </div>

          </>
        )
      }
      )} */}
    </section>
  );
}
