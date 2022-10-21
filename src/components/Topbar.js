import React from "react";
import "./Topbar.css";
import pokeball from "../images/pokeball.png";
import pokeballcolor from "../images/pokeballcolor.png";
import pokeapi from "../images/pokeapi.png";

const Topbar = () => {
  return (
    <div className="title">
      <div className="title__left">
        <img src={pokeapi} alt="title" className="logo" />
        <div className="caught-seen">
          <div className="caught">
            <img
              src={pokeballcolor}
              alt="pokeball"
              style={{ width: "50px", height: "40px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={pokeball}
              alt="pokeball"
              style={{ width: "38px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
