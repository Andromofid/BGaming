import React from "react";
import "./style.css";
import Coment from "./Coment";
export default function Coments() {
  const Comments = [
    { id:0,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, sint.",
      like: 130,
      dislike: 32,
    },
    { id:1,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, sint.",
      like: 110,
      dislike: 32,
    },
    { id:2,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, sint.",
      like: 130,
      dislike: 1,
    },
    { id:3,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, sint.",
      like: 1220,
      dislike: 289,
    },
  ];
  return (
    <div className="container mt-3" id="Comments">
      <h3 className="text-white px-3">Comments:</h3>
      {
        Comments.map((com)=>{
            return <Coment key={com.id} message={com.message} like={com.like} dislike={com.dislike} />
        })
      }
      
    </div>
  );
}
