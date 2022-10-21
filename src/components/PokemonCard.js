import React, { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../images/pokeball.png";
import Modal from "./Modal";

const PokemonCard = ({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) => {
  const [isShown, setIsShown] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <img src={image} alt={name} className="image-title" />
            <p style={{ width: "80px", color: "#000" }}>No. {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" className="pokeball-title" />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p>type</p>
              <p>height</p>
              <p>weight</p>
            </div>
            <div className="stats-right" style={{ background: "#ffffff" }}>
              <p>{type}</p>
              <p>{height}0 cm</p>
              <p>{weight} lbs</p>
            </div>
          </div>

          <div className="base-stats">
            <div>
              {stats.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
            <div>
              {stats.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
          </div>
        </div>
      )}
      <div
        className="rigth"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={modalHandler}
      >
        <img
          src={image}
          alt={name}
          style={{ mazHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          type={type}
          onClick={closeModalHandler}
        />
      )}
    </div>
  );
};

export default PokemonCard;
