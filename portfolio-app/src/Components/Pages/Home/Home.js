import React from "react";
import "./Home.scss";
import Board from "./Game/Board";

export default function Home(props) {
  return (
    <section className="Home_container">
      <section className="infoSection">
        <div className="top_component">
          <div className="Welcome">Hi all. I am</div>
          <h3 className="name_header">Abu backer Siddique</h3>
          <h5 className="domain_name"> {`>`} Front-end developer</h5>
        </div>
        <div className="lower_component">
          <div className="game_continue">// complete the game to continue</div>
          <div className="github_name">
            // you can also see it on my Github page
          </div>
          <div className="gitlink">
          <span className="gitlink_const">const</span> <span className="gitlink_link">githubLink</span> <span>=</span>             <span className="gitlink_url"   onClick={() => {
                          window.open('https://github.com/dashboard', "_blank");
                        }}>
              “https://github.com/dashboard”
            </span>
            {/* <span className="gitlink_const">const</span>
            <span className="gitlink_link">githubLink</span> =
            <span className="gitlink_url">
              “https://github.com/miabubacker/learning-plotFrom.git”
            </span> */}
          </div>
        </div>
      </section>
      <section className="game_section">
      <Board/>
      </section>
    </section>
  );
}
