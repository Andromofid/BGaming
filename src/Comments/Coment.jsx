import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHeartBroken,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
const Coment = (props) => {
  return (
    <div key={props.key} className="comments d-flex justify-content-around align-items-center w-75 mt-3 text-white mx-5 my-2">
      <div className="profile">
      <FontAwesomeIcon className="icon mx-4" icon={faPortrait} />
      </div>
      <div className="d-flex flex-column align-items-end justify-content-center">
        <p className="text-justify p-3 m-auto">{props.message}</p>
        <div className="d-flex justify-content-around align-items-center">
          <div className="m-1 d-flex  align-items-center">
            {props.like}
          <FontAwesomeIcon className="heart mx-1 text-success" icon={faHeart} />
          </div>
          <div className="m-1 d-flex  align-items-center">
            {props.dislike}
          <FontAwesomeIcon className="heart mx-1 text-danger" icon={faHeartBroken} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coment;
