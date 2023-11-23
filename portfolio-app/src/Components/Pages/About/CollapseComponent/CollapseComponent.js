import React from "react";
import { Collapse } from "antd";
import "./Collapse.scss";
import Folder3FillIcon from "remixicon-react/Folder3FillIcon";
import MarkdownFillIcon from "remixicon-react/MarkdownFillIcon";


export default function CollapseComponent() {
  const { Panel } = Collapse;
  const renderTile = () => (
    <div style={{ display: "flex", gap: "9px", alignItems: "center" }}>
      <Folder3FillIcon color="#E99287" size={14} />
      bio
    </div>
  );
  const renderTile2 = () => (
    <div
      style={{
        display: "flex",
        gap: "9px",
        alignItems: "center",
        color: "#607B96",
      }}
    >
      <Folder3FillIcon color="#43D9AD" size={14} />
      interests
    </div>
  );
  const renderTile3 = () => (
    <div
      style={{
        display: "flex",
        gap: "9px",
        alignItems: "center",
        color: "#607B96",
      }}
    >
      <Folder3FillIcon color="#3A49A4" size={14} />
      education
    </div>
  );
  const educationChild = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "22px",
        paddingBottom: "27px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "9px",
          alignItems: "center",
          color: "#607B96",
        }}
      >
        <MarkdownFillIcon />
        high-school
      </div>
      <div
        style={{
          display: "flex",
          gap: "9px",
          alignItems: "center",
          color: "#607B96",
        }}
      >
        <MarkdownFillIcon />
        university
      </div>
    </div>
  );
  return (
    <div className="collapsechild">
      <Collapse
        bordered={false}
        expandIconPosition="left"
        className={"collapse_bio"}
      >
        <Panel key="1" bordered={false} header={renderTile()}></Panel>
      </Collapse>

      <Collapse
        bordered={false}
        expandIconPosition="left"
        className={"collapse_bio"}
      >
        <Panel key="2" bordered={false} header={renderTile2()}>
          {/* <div // className={styles.drpImplementationProgressChild}></div> */}
        </Panel>
      </Collapse>

      <Collapse
        bordered={false}
        expandIconPosition="left"
        className={"collapse_bio"}
      >
        <Panel key="3" bordered={false} header={renderTile3()}>
          {educationChild()}
          {/* <div // className={styles.drpImplementationProgressChild}></div> */}
        </Panel>
      </Collapse>
    </div>
  );
}
