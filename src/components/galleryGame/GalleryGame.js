import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./GalleryGame.css";

function GallGame({
  id,
  nome,
  genere,
  piattaforma,
  descrizione,
  urlImmagine
}) {
  const navigate = useNavigate();

  const showGameDetails = () => {
    navigate("/detailsgame", {state: { gameId: id}});
  };

  return (
    <div
      key={"game-" + id}
      className={`game-wrapper`}
    >
      <div className={`game-hovered-container`}>
        <img
            className="card-image"
            src={urlImmagine}
            alt={`games-img-${id}`}
        />
        <div className="card-info">
            <p className="text-shadow">{nome}</p>
            <button className="cta-navigate" onClick={showGameDetails}><ArrowForwardIosIcon fontSize="8px"/></button>
        </div>
      </div>
    </div>
  );
}

export default GallGame;
