import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
const Art = (Props) => {
  return (
    <div className="cart">
      <div className="card-body"
      style={{ backgroundImage: `url(${Props.img})`}} 
      >
        <div className="rate">{Props.Rate}</div>
        <div className="com_vu">
            <div className="comment">
              <FontAwesomeIcon icon={faComment} className="mx-1" />
              {Props.Comments}
            </div>
            <div className="views">
              <FontAwesomeIcon icon={faEye} className="mx-1" />
              {Props.Views}
            </div>
        </div>
      </div>
      <div className="card-footer m-auto">
          <div className="tpe fs-6">{Props.Type}</div>
          <div className="title m-auto">{Props.Title}</div>
      </div>
    </div>
  );
};

export default Art;
