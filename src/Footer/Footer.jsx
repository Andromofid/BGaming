import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
export default function Footer() {
  return (
    <div className="mt-5 footer d-flex flex-column  align-items-center m-auto">
        <a href="#top" > 
        <FontAwesomeIcon className="btn totop" icon={faAngleDoubleUp} />
        </a>
      <h1 className="text-white ">
        <span className="text-danger">BG</span>aming
      </h1>
      <ul className="mx-auto">
        <li className="" ><a href="">Homepage</a></li>
        <li className="" ><a href="">Categories</a></li>
        <li className="" ><a href="">our blog</a></li>
        <li className="" ><a href="">Contacts</a></li>
      </ul>
      <form className="form d-flex" id="Contact">
        <input className="mx-3 form-control-sm" type="text" placeholder="message"/>
        <button className="btn btn-sm" type="submit">SEND</button>
      </form>
      <p className="p-2">Copyright &copy;2024 All rights reserved || ANDROMOFID</p>
    </div>
  );
}
