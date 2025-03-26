import React from "react";
import Art from "./Art";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import art1 from "../img/art/1.jpeg";
import art2 from "../img/art/2.jpg";
import art3 from "../img/art/3.jpeg";
import art4 from "../img/art/4.jpeg";
import art5 from "../img/art/5.jpeg";
import art6 from "../img/art/6.jpeg";
import art7 from "../img/art/7.jpeg";
import art8 from "../img/art/8.jpeg";

const Tranding = () => {
  const Info = [
    {
      Img: art1,
      Title: "GOD OF WAR 3",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      Img: art2,
      Title: "BALAURS GATE",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      Img: art3,
      Title: "FIFA 19",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "SPORT",
    },
    {
      Img: art4,
      Title: "ASPHALT LEGENDS",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "RACING",
    },
    {
      Img: art5,
      Title: "CALL OF DUTY",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      Img: art6,
      Title: "GTA VICE CITY",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      Img: art7,
      Title: "GTA SAN ANDREAS",
      Rate: "18/20",
      Comments: "8K",
      Views: 5000,
      Type: "ACTION",
    },
    {
      Img: art8,
      Title: "CLASH OF CLANS",
      Rate: "18/20",
      Comments: "6K",
      Views: 30000,
      Type: "ACTION",
    },
  ];
  return (
    <div className="container mt-5" id="Trending">
      <div className="trand d-flex  justify-content-between align-items-center py-2">
        <h3 className="text-white px-3 ">TRANDING NOW</h3>
        <p className="text-white">
          VIEW ALL <FontAwesomeIcon className="px-1 m-0" icon={faAngleRight} />
        </p>
      </div>
      <div className="row justify-content-around">
        {Info.map((elem) => {
          return (
            <Art
              Title={elem.Title}
              Comments={elem.Comments}
              Views={elem.Views}
              Rate={elem.Rate}
              Type={elem.Type}
              img={elem.Img}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Tranding;
