import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Card from "./Card";
import "./style.css";
import efoot from "../img/efoot.jpg";
import gdf from "../img/gdf.webp";
import nfs from "../img/nfs.webp";

const Main = () => {
  // ________________________
  const Container = useRef();
  const Toleft = () => {
    Container.current.scrollLeft -= 400;
  };
  const Toright = () => {
    Container.current.scrollLeft += 400;
  };
  // __________________
  const info = [
    {
      Type: "Sport",
      Title: "EA Sport FC 2024",
      Des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, optio?",
      Img: efoot,
    },
    {
      Type: "War",
      Title: "God Of War",
      Des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, optio?",
      Img: gdf,
    },
    {
      Type: "Racing",
      Title: "Need For Speed",
      Des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, optio?",
      Img: nfs,
    },
  ];
  // setInterval(Toright,2000)
  // _____________________
  return (
    <main>
      <FontAwesomeIcon
        onClick={Toleft}
        className="iconleft text-white"
        icon={faAngleLeft}
      />
      <div className="cards" ref={Container} style={{ width: "" }}>
        {info.map((elem) => {
          return (
            <Card
              Img={elem.Img}
              Title={elem.Title}
              Type={elem.Type}
              Des={elem.Des}
            />
          );
        })}
      </div>
      <FontAwesomeIcon
        onClick={Toright}
        className="iconright text-white"
        icon={faAngleRight}
      />
    </main>
  );
};
export default Main;
