import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
const Card = (Props) => {
  return (
    <div className="card" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.1),rgb(0, 0, 0)),url(${Props.Img})`}}>
        <div className="type text-danger">{Props.Type}</div>
        <div className="title">{Props.Title}</div>
        <div className="des">{Props.Des}</div>
        <div className="btns">
            <button className="btn">PLAY NOW</button>
            <FontAwesomeIcon  className="more" icon={faAnglesRight}/>
        </div>
    </div>
  );
};
export default Card;
