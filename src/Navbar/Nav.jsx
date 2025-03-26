import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch,faPortrait,faNavicon,faX } from "@fortawesome/free-solid-svg-icons";
import "./style.css" ;
import { useState } from "react";
const Nav = () => {
  const [btn,setBtn] = useState(faNavicon);
  const [trans,settrans] = useState("1000px");
  const [display,setdisplay] = useState("none");
  const EventBtn =()=>{
    if (btn == faNavicon ){
      setBtn(faX)
      settrans("-5px")
      setdisplay("block")
    }
    else{
      setBtn(faNavicon)
      settrans("1000px")
      setdisplay("none")


    }
  }
  return (
    <nav className="navbar" id="top">
      <h1 className="text-white mx-5"><span className="text-danger">BG</span>aming</h1>
      <ul className="nav align-items-center mx-2">
          <li className="nav-item">
            <a href="" className="nav-link ">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#Trending" className="nav-link">
              TRENDIND GAMES
            </a>
          </li>
          <li className="nav-item">
            <a href="#Comments" className="nav-link">
              COMMENTS
            </a>
          </li>
          <li className="nav-item">
            <a href="#Contact" className="nav-link">
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <a href="#search">          
              <FontAwesomeIcon className="nav-link " icon={faSearch} />
           </a>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon className="nav-link " icon={faPortrait} />
          </li>
      </ul>
      {/* -------- */}
      <ul  className="nav-2" style={{transform:`translateX(${trans})`,display:display}}>
          <li className="nav-item">
            <a href="" className="nav-link ">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              TRENDIND GAMES
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              COMMENTS
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              CONTACT US
            </a>
          </li>
          <li className="nav-item">
            <button className="nav-link btn bg-white text-primary py-2 px-3">
              LOG IN
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn bg-primary  py-2 px-3">
              SING UP
            </button>
          </li>
      </ul>
      <FontAwesomeIcon onClick={EventBtn} icon={btn} className="btn bg-primary mx-3 text-white toggle"  />
    </nav>
  );
};
export default Nav;
