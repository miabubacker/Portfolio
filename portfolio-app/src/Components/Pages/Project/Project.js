import React from 'react'
import "./Project.scss"
import cardImg from "../../assets/Img/cardImg.svg"
import gameCard from "../../assets/Img/cardImggame.svg"
import cardEteram from "../../assets/Img/cardImgEtheram.svg"


export default function Project(props) {
  // console.log('project',props)
  const cardData = [
    {
      title: "Project 1 // _ui-animations",
      cardImg: cardImg,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
    },
    {
      title: "Project 2 // _tetris-game",
      cardImg: gameCard,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
    },
    {
      title: "Project 3 // _ethereum",
      cardImg: cardEteram,
      description: "Duis aute irure dolor in velit esse cillum dolore.",
    }
  ]
  return (
    <section className="Project_section">
      {cardData.map((data, index) => {
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
      )}
    </section>
  )
}
