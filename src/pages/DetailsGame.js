import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function DetailsGame() {
  const { imdbID } = useParams();
  const [detailsFilm, setDetailsFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Stato per il caricamento
  const [isError, setIsError] = useState(false); // Stato per gli errori
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(imdbID);
    fetchFilm();
  }, []);

  const fetchFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=184dbc60&i=" + imdbID)
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
        setDetailsFilm(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
          <div className="row g-5 px-5">
            <div className="col-3"></div>
            <div className="col-9 text-start">
              <h2>{detailsFilm.Title}</h2>
            </div>
          </div>
          <div className="row g-5 px-5 mt-2">
            <div className="col-3 text-start">
              <img
                src={detailsFilm.Poster}
                alt={detailsFilm.Title}
                style={{ maxWidth: "300px" }}
              />
            </div>
            <div className="col-9 text-start">
              <p>
                <b>Anno:</b> {detailsFilm.Year}
              </p>
              <p>
                <b>Genere:</b> {detailsFilm.Genre}
              </p>
              <p>
                <b>Regista:</b> {detailsFilm.Director}
              </p>
              <p>
                <b>Attori:</b> {detailsFilm.Actors}
              </p>
              <p>
                <b>Trama:</b> {detailsFilm.Plot}
              </p>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default DetailsGame;
