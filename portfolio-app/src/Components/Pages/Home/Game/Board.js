import React, { Component, useState } from "react";
import Squares from "./Squares";
 import './Board.scss'

export default function Board() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Squares: Array(9).fill(null),
//       isNext: true
//     };
//   }
 const[square,setSquare]= useState(Array(9).fill(null))
  const[isNext,setIsnext]=useState(true)
   const[start,setStart]=useState(false)

  const handleClick=(i)=> {
    // let squareData = [...this.state.Squares];
    let squareData = square.slice();
    if (calculate(square) || squareData[i]) {
      return;
    }
    squareData[i] = isNext ? "X" : "O";
    setSquare(squareData)
    setIsnext(!isNext)
  }

  const calculate=(squares)=> {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  const renderSquare=(i)=> {
    return (
      <Squares
        value={square[i]}
        onClick={() => {
          handleClick(i);
        }}
      />
    );
  }

   const restart=()=>{
setSquare(Array(9).fill(null))
setIsnext(false)
   }
  
    const winner = calculate(square);

    const moves = `${winner?    ` player ${winner} is winner`:`player:${isNext ? "X" : "O"}`}`;
     console.log(winner,isNext,square)

    return (
      <div className="gameContainer">
          { !start&&<div onClick={()=>{setStart(true)}} className="start">start</div>}
          {start&&
            <div className="MainBox">
            <div className="board-row">
               {renderSquare(0)}
               {renderSquare(1)}
               {renderSquare(2)}
             </div>
             <div className="board-row">
               {renderSquare(3)}
               {renderSquare(4)}
               {renderSquare(5)}
             </div>
             <div className="board-row">
               {renderSquare(6)}
               {renderSquare(7)}
               {renderSquare(8)}
             </div>
            </div>
          }
     
      
        <div className="status_Container">
           {start&&<div>{ moves}</div> }
          {start&&<div onClick={()=>{restart()}} className="playagain">Play again</div>}
            </div>
      </div>
    );
  
}


