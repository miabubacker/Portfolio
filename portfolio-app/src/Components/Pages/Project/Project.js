import React, { useEffect, useState } from "react";
import { Checkbox, Collapse } from "antd";
import CloseFillIcon from "remixicon-react/CloseFillIcon"
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import "./Project.scss";
import { selectedProject } from "../../MainPage/MainPage.actionHandler";


export default function Project(props) {
  const { Panel } = Collapse
  const { typeofProject, projects, MainPageActions, filterProjects } = props;
  const [selectproject, setSelectProject] = useState([]);
  const [btnindex, setBtnindex] = useState([])


  const handleCheckbox = (filterproject, index) => {

    let select = [...selectproject];
    if (select.includes(filterproject)) {
      const toggle = select.filter((data) => data !== filterproject);
      setSelectProject(toggle);
    } else {
      setSelectProject([...select, filterproject]);
    }
    const selectedbtn = [...btnindex]
    if (selectedbtn.includes(index)) {
      const toggle = selectedbtn.filter((data) => data !== index);
      setBtnindex(toggle);
    } else {
      setBtnindex([...selectedbtn, index]);
    }

  };

  useEffect(() => {
    MainPageActions.selectedProject(
      projects.filter((data) => selectproject.indexOf(data.project) !== -1)
    );
  }, [selectproject]);

  const closeBtn = () => {
    setSelectProject([])
  }
  return (
    <>
      <section className="Project_section">
        <p className="toptitle">_Projects</p>
        {/* leftcolumn */}
        <div className="Project_menu">
          <Collapse
            bordered={false}
            className="projectCollapse"
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <div>
                <ArrowDownSFillIcon
                  className={`${isActive
                    ? "collapseHeaderIconExpands"
                    : "collapseHeaderIconCollapsed"
                    }`}
                />
              </div>
            )}
            expandIconPosition="left"
            onChange={() => { }}
          >
            <Panel key="1" header="Projects">
              {/* <div> */}
              {typeofProject.map((domain, index) => (
                <div key={index} className="left_main">
                  <Checkbox
                    onChange={(e) => {
                      handleCheckbox(e.target.value,index);
                    }}
                    checked={selectproject.includes(domain.name.toLowerCase())}
                    value={domain.name.toLowerCase()}
                  >
                  </Checkbox>
                  <div className={btnindex.includes(index) ? 'isActive' : 'false'}>{domain.icon}</div>
                  <div className={btnindex.includes(index) ? 'isActive' : 'false'}><p>{domain.name}</p></div>
                </div>
              ))}
              {/* </div> */}
            </Panel>
          </Collapse>
        </div>
        <div className="Projects">
          <div className="Project_title">
            {/*  header */}
            {selectproject.length > 0 && <div>
              <p>// Projects:</p>
              {selectproject.map((data) => (
                <span key={data}>{data};</span>
              ))}
              <CloseFillIcon className="closeBtn" size={18}
                onClick={() => { closeBtn() }}
              />
            </div>
            }

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
        <div className="Pro_empty">
          <div className="bar"></div>
        </div>
      </section>

    </>
  );
}