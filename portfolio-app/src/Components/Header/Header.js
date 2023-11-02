import React, { useState } from "react";
import "./Header.scss";
import { useNavigate, Link } from "react-router-dom";
import MenuFillIcon from "remixicon-react/MenuFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import TwitterFillIcon from "remixicon-react/TwitterFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";

export default function Header(props) {
  const navigate = useNavigate();
  const { headers } = props;
  const [selectPage, setSelectPage] = useState(0);
  const [drawer, setDrawer] = useState(false);
  const viewPage = (heder, index) => {
    navigate(`/${heder}`);
    setSelectPage(index);
    setDrawer(false)
  };
  const ViewDrawer = (event) => {
    event.stopPropagation();
    setDrawer(!drawer);
    console.log("ss");
  };
  return (
    <div className="headermain">
      <section className="header_container">
        <div className="profile_details">
          <div className="profile_details_nameContainer">
            <div className="profilename">abubacker-siddique</div>
          </div>

          <div className="pages">
            {headers.map((heading, index) => (
              <div
                className={
                  selectPage === index
                    ? "pages_child selectedpage"
                    : "pages_child"
                }
                key={index}
                onClick={() => viewPage(heading, index)}
              >
                {heading}
              </div>
            ))}
          </div>
        </div>
        <div
          className={selectPage === 3 ? "contactus selected" : "contactus"}
          onClick={() => viewPage("contact", 3)}
        >
          _contact-me
        </div>
        <MenuFillIcon
          className="hamburger"
          onClick={(e) => {
            ViewDrawer(e);
          }}
        />
      </section>

      {/* moile */}
      <div className={!drawer ? "mobile" : "mobile View"}>
        <div className="mobilecontainer">
          <section className="mbheader_container">
          <div  className="mbtop">
          <div className="profile_details">
              <div className="profile_details_nameContainer">
                <div className="profilename">abubacker-siddique</div>
              </div>
            </div>
            <div>
            <CloseFillIcon
              onClick={(e) => {
                ViewDrawer(e);
              }}
            />
            </div>
          </div>
    
          <div className="mbpages">
            {headers.map((heading, index) => (
              <div
                className={"pages_child"}
                key={index}
                onClick={() => viewPage(heading, index)}
              >
                {heading}
              </div>
            ))}
            <div className="pages_child"  onClick={() => viewPage("contact", 3)}> _contact-me</div>
          </div>

          </section>

          <div  className="mbfooter">
            <div className="findme">find me in:</div>
            <div className="socialmedia">
                <div className="socialIcon"><TwitterFillIcon/></div>
                <div className="socialIcon"><FacebookFillIcon/></div>
                <div className="socialIcon"><GithubFillIcon/></div>
            </div>
          </div>
        </div>
        {/* footer */}
      </div>
    </div>
  );
}
