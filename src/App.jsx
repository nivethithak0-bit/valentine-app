import React from "react";
import "./app.css";
import inital from "./assests/inital.gif";
import ok from "./assests/ok.gif";
import { useState } from "react"; 
export default function App() {
  const [accepted, setAccepted] = useState(false);
  const [moved, setMoved] = useState(false);
  const [noPos, setNoPos] = useState({ top: "50%", left: "60%" });

  const moveNo = () => {
    setMoved(true);
  setNoPos({
    top: Math.random() * 200 - 100 + "px",
    left: Math.random() * 200 - 100 + "px"
  });
};
  return (
<div className="container">
      {!accepted ? (
        <>
         
          <img
            src={inital}
            alt="White Teddy"
            className="teddy-jump"
          />

          <h1>Will you be my Valentine? ❤️</h1>

          <div className="btn-area">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 💕
            </button>

            <button
              className="no"
              style={moved?
                {transform: `translate(${noPos.left}, ${noPos.top})`}
              :{}}
              onMouseEnter={moveNo}
            >
              No 😢
            </button>
          </div>
        </>
      ) : (
        <>
          
          <img
            src={ok}
            alt="Teddy Hug"
            className="teddy-hug"
          />
          <h1>Love U! 💖</h1>
        </>
      )}
    </div>

  );
}
