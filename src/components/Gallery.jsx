import { useCallback, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Alert } from "react-bootstrap";
import { useAuth } from "../hooks/useAuth";
import GallGames from "./GallGames";

const Gallery = ({category}) =>{
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const {isLogged, accessToken} = useAuth();

  const fetchGames = useCallback(() => {
    if(isLogged && accessToken) {
      setIsLoading(true);
      fetch("http://localhost:3001/gioco", {
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
          setIsError(true);
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((data) => {
        // Usa "data" per rappresentare il risultato JSON
        console.log("giochi recuperati dal server", data);
        setGames(data.content);
      })
      .catch((err) => {
        setIsError(true);
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
      })
      .finally(() => {
        setIsLoading(false);
      })
    }
  }, [accessToken, isLogged]);

    useEffect(()=>{
      fetchGames()
    },[fetchGames])

    const filterGameListByCategory = () => {
      return games.filter(game => game.genere.includes(category));
    }

    return (
      <>
        <h4 className="text-white text-start">{category}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-1">
          {isLoading && <CircularProgress color="inherit" />}

          {isError && (
            <Alert variant="danger">Oops! Qualcosa è andato storto 😱</Alert>
          )}
            {filterGameListByCategory().map((game) => {
              return (
                <GallGames {...game}/>
              );
            })}
        </div>
      </>
    );
  }

export default Gallery;
