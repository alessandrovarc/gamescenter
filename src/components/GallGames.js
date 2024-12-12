import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function GallGames({
  id,
  nome,
  genere,
  piattaforma,
  descrizione,
  urlImmagine
}) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRiproduci = (imdbID) => {
    navigate("/detailsFilm/" + imdbID);
  };

  return (
    <div
      key={"game-" + id}
      className="col mb-4 text-center px-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`GallFilmCont ${isHovered ? "hovered" : ""}`}>
        <img
          className={`poster-img ${isHovered ? "special-hover" : ""}`}
          src={urlImmagine}
          alt={`games-img-${id}`}
        />
        {isHovered && (
          <div
            className="film-details p-2 text-start position-absolute w-100"
            style={{ backgroundColor: "black" }}
          >
            <p className="mb-0 fw-bold">{nome}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GallGames;
