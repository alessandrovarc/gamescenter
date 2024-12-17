import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

function DetailsGame() {
  const {state} = useLocation();
  const [gameDetails, setGameDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Stato per il caricamento
  const {accessToken} = useAuth();

  const fetchGameById = useCallback(() => {
    if(!state.gameId) return;

    setIsLoading(true);

    fetch("http://localhost:3001/gioco/" + state.gameId, {
      method: 'GET',
      headers: {
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${accessToken}`,
      },
  })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((data) => {
        // Usa "data" per rappresentare il risultato JSON
        console.log("FILMS RECUPERATI DAL SERVER", data);
        setGameDetails(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
        setIsLoading(false);
      });
  },[state.gameId, accessToken]);

  useEffect(() => {
    fetchGameById();
  }, [fetchGameById]);

  return (
    <>
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <div className="col-12">
            <div className="col-6 m-auto">
              <img
                src={gameDetails?.urlImmagine}
                alt={gameDetails?.nome}
                style={{    
                  width: "100%",
                  maxHeight: "60vh",
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "20px auto"
                }}
              />
            </div>
            <div className="col-10 m-auto">
              <h2 className="m-2">{gameDetails?.nome}</h2>
              <div className="">
                <div className="col-12 text-start">
                  <p>
                    <b>Genere:</b> {gameDetails?.genere}
                  </p>
                  <p>
                    <b>Piattaforma:</b> {gameDetails?.piattaforma}
                  </p>
                  <p>
                    <b>Descrizione:</b> {gameDetails?.descrizione}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailsGame;
