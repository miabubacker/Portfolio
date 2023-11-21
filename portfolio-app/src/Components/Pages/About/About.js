import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import TerminalBoxFillIcon from "remixicon-react/TerminalBoxFillIcon";
import User4FillIcon from "remixicon-react/User4FillIcon";
import GamepadFillIcon from "remixicon-react/GamepadFillIcon";
import { Collapse } from "antd";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import ChatSmileFillIcon from "remixicon-react/ChatSmileFillIcon";
import StarFillIcon from "remixicon-react/StarFillIcon";
import profileIcon from "../../Assets/Img/user_icon.svg";
import CollapseComponent from "./CollapseComponent/CollapseComponent";
import Aboutme from "./CollapseComponent/Aboutme";

export default function About(props) {
  const { Panel } = Collapse;
  const [lineCount, setLineCount] = useState(0);
  const contact = () => (
    <div className="contact_main">
      <div className="contact_detail">
        <MailFillIcon className="fontsize" />
        miabubacker98@gmail.com
      </div>
      <div className="contact_detail">
        <PhoneFillIcon className="fontsize" />
        8144679552
      </div>
    </div>
  );
  const numbers = () => {
    let size = [];
    for (let i = 1; i <= lineCount; i++) {
      size.push(i);
    }
    return size;
  };
  const frstcommentsection = () => (
    <div>
      <div className="comment_header">
        <div className="topimg_details">
          <div>
            <img src={profileIcon} />
          </div>
          <div className="comment_nameAndDetails">
            <h5 style={{ marginBottom: "2px" }}> @username</h5>
            <h6>Created 5 months ago</h6>
            <h4>5 months ago</h4>
          </div>
        </div>
        <div className="starsAndComment">
          <div className="icons details">
            <ChatSmileFillIcon size={18} color="#607B96" />
            details
          </div>
          <div className="icons">
            <StarFillIcon size={18} />3 starts
          </div>
        </div>
      </div>
      <div className="message">
        {/* <div className='msg_content'> */}
        <div>
          <span className="function">function</span> initializeModelChunk
          {<span className="T">{`<T>`}</span>}(chunk: ResolvedModelChunk): T{" "}
          {`{`}
        </div>
        <div className="insideFunction">
          const value: <span className="function">T</span> ={" "}
          <span className="parseModel">parseModel</span>(chunk.
          <span className="response">_response</span>, chunk.
          <span className="response">_value</span>);
          <br />
          <span className="function">const</span> initializedChunk:{" "}
          <span className="initial">InitializedChunk </span>
          <span className="response">{"<"}</span>
          <span className="initial">T</span>
          <span className="response">{">"}</span> = (chunk: any);
          initializedChunk.<span className="response">_status</span> ={" "}
          <span className="response">INITIALIZED;</span>
          <br />
          initializedChunk.<span className="response">_value</span> = value;
          <br />
          <span className="function">return</span> value;
        </div>
        <div>{"}"}</div>
        {/* </div> */}
      </div>
    </div>
  );

  const scndcommentsection = () => (
    <div className="twosnip">
      <div className="comment_header">
        <div className="topimg_details">
          {" "}
          <div>
            <img src={profileIcon} />
          </div>
          <div className="comment_nameAndDetails">
            <h5 style={{ marginBottom: "2px" }}> @username</h5>
            <h6>Created 5 months ago</h6>
            <h4>5 months ago</h4>
          </div>
        </div>
        <div className="starsAndComment">
          <div className="icons details">
            <ChatSmileFillIcon size={18} color="#607B96" />
            details
          </div>
          <div className="icons">
            <StarFillIcon size={18} />3 starts
          </div>
        </div>
      </div>
      <div className="messagetwo">
        <>
          {" "}
          <span className="function">export function</span> parseModelTuple (
        </>
        <br />
        <div className="insideFunction">
          response: <span className="initial">Response</span>,<br />
          <>
            {" "}
            value:{`{`}
            <span className="response">+</span>[key: string]: JSONValue |
            $ReadOnlyArray<span className="response">{`<`}</span>
            <span className="T">JSONValue</span>{" "}
            <span className="response">{`>`}</span>,
          </>
        </div>
        <div>): any {`{`}</div>
        <div className="insideFunction">
          const tuple: [mixed, mixed, mixed, mixed] = (value: any);
        </div>
      </div>
    </div>
  );

  return (
    <section className="aboutsection">
      <div className="smTop">_about-me</div>
      <section className="left_icon">
        <TerminalBoxFillIcon className="icon" size={24} />
        <User4FillIcon color="#607B96" size={24} />
        <GamepadFillIcon className="icon" size={24} />
      </section>
      <section className="info_left">
        {/* <div className='top_folder'> */}
        <Collapse
          bordered={false}
          className="CollapseParent"
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <ArrowDownSFillIcon
              className={`${
                isActive
                  ? "collapseHeaderIconExpand"
                  : "collapseHeaderIconCollapse"
              }`}
            />
            // <ArrowDownSFillIcon className={`${isActive ? styles.collapseHeaderIconCollapse : styles.collapseHeaderIconExpand}`} color="#4285F4" size="L">icon-chevron-up</ArrowDownSFillIcon>
          )}
          expandIconPosition="left"
          onChange={() => {}}
        >
          <Panel key="1" header="personal-info" className="maincollapseHeader">
            <div>
              <CollapseComponent />
            </div>
          </Panel>
        </Collapse>

        <Collapse
          bordered={false}
          className="CollapseParent"
          defaultActiveKey={["2"]}
          expandIcon={({ isActive }) => (
            <ArrowDownSFillIcon
              className={`${
                isActive
                  ? "collapseHeaderIconExpand"
                  : "collapseHeaderIconCollapse"
              }`}
            />
          )}
          expandIconPosition="left"
          onChange={() => {}}
        >
          <Panel key="2" header="contacts">
            {contact()}
          </Panel>
        </Collapse>

        {/* </div> */}
      </section>
      <section className="personal_info">
        <div className="personal_fileName">
          <div className="file">
            personal-info <CloseFillIcon />
          </div>
        </div>
        <div className="personal_about">
          <div className="personal_detail">
            <div className="num">
              {numbers().map((num,index) => (
                <span key={index}>
                  {num}
                  <br />
                </span>
              ))}
            </div>
            <div className="text">
              <Aboutme  lineCount={lineCount} setLineCount={setLineCount}/>
            </div>
          </div>

          <div className="empty">
            <div className="bar"></div>
          </div>
        </div>
      </section>
      <section className="mbpersonalInfo">
        <h6 className="header">
          // personal-info <span>/ bio</span>
        </h6>
        <div className="experice">
          I have 5 years of experience in web development lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat officia deserunt mollit anim id est
          laborum.
        </div>
      </section>
      <section className="mbcodecode_snippet">
        <h6 className="header">// Code snippet showcase:</h6>
      </section>
      <section className="code_snippet">
        <div className="personal_fileName"></div>
        <div className="sinppetmain">
          <div className="snipet">
            <div className="head">// Code snippet showcase:</div>
            <div className="comments">
              {frstcommentsection()}
              <div className="line"></div>
              <div className="comment_two">
                <div>
                  My work here was 5 months ago. It was for the project called{" "}
                  <br />
                  “...”. Some other text can be placed here.
                </div>
                <div>
                  <CloseFillIcon size={24} />
                </div>
              </div>
              {scndcommentsection()}
            </div>
          </div>
          <div className="empty">
            <div className="bar"></div>
          </div>
        </div>
      </section>
    </section>
  );
}
