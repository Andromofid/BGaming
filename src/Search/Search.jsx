import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Art from "../Trending/Art";
import "./style.css";
import img9 from "../img/art/9.jpeg";
import img10 from "../img/art/10.jpeg";
import img11 from "../img/art/11.jpeg";
import img12 from "../img/art/12.jpeg";
import img13 from "../img/art/13.jpeg";
import img14 from "../img/art/14.jpeg";
import img15 from "../img/art/15.jpeg";
import img16 from "../img/art/16.jpeg";
import img17 from "../img/art/17.jpeg";
import img18 from "../img/art/18.jpeg";
import img19 from "../img/art/19.jpeg";
import img20 from "../img/art/20.jpeg";

export default function Search() {
  const [Info, SetInfo] = useState([
    {
      id: 9,
      Img: img9,
      Title: "FIFA 13",
      Rate: "18/20",
      Comments: "8K",
      Views: 5000,
      Type: "Sport",
    },
    {
      id: 10,
      Img: img10,
      Title: "Dragon",
      Rate: "16/20",
      Comments: "5K",
      Views: 5000,
      Type: "ACTION",
    },
    {
      id: 11,
      Img: img11,
      Title: "Fall Guys",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 12,
      Img: img12,
      Title: "Grand Theft Auto V",
      Rate: "18/20",
      Comments: "5K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 13,
      Img: img13,
      Title: "Fortnite",
      Rate: "19/20",
      Comments: "8K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 14,
      Img: img14,
      Title: "Free Fire",
      Rate: "17/20",
      Comments: "5K",
      Views: 5000,
      Type: "ACTION",
    },
    {
      id: 15,
      Img: img15,
      Title: "God Of War",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 16,
      Img: img16,
      Title: "Call Of Duty",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 17,
      Img: img17,
      Title: "Need For Speed",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "RACING",
    },
    {
      id: 18,
      Img: img18,
      Title: "NFS Most Wanted",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "RACING",
    },
    {
      id: 19,
      Img: img19,
      Title: "PUBG",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "ACTION",
    },
    {
      id: 20,
      Img: img20,
      Title: "Red Dead Redemption",
      Rate: "18/20",
      Comments: "9K",
      Views: 50000,
      Type: "ACTION",
    },
  ]);
  const [Info1, setInfo1] = useState(Info);
  const [Tit, setTitle] = useState();
  const Search = (e) => {
    e.preventDefault();
    SetInfo(
      Info1.filter((elem) =>
        elem.Title.toLowerCase().includes(Tit.toLowerCase())
      )
    );
  };
  const Resault = () => {
    return Info == "" ? (
      <h1 className="text-white text-center m-5">NO GAME FOUND</h1>
    ) : (
      Info.map((elem) => {
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
      })
    );
  };

  return (
    <div className="container search " id="search">
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form w-100 d-flex justify-content-end px-3 my-3"
      >
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="form-control "
          placeholder="Search For Game"
        />
        <button
          className="btn mx-2"
          onClick={(e) => {
            Search(e);
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <div className="row justify-content-between">
        <Resault />
      </div>
    </div>
  );
}
