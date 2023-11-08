import React, { Component } from "react";
import './Board.scss'
export default function Squares(props) {
     const{value,onClick}=props
    return (
      <button className="square" onClick={()=>{onClick()}}>
        {value}
      </button>
    );
}