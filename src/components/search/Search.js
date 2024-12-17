import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import "./Search.css";
import { useAuth } from "../../hooks/useAuth";

const Search = ({setSearchedGame, setSearchWord}) =>  {
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {accessToken} = useAuth();

  // Debounce Timer
  let debounceTimeout = null;

  // mi serve per fare l'autofocus all'input. Si attiva quando nel componentDidMount
  const searchInputRef = useRef(null);

  // quando andiamo a scrivere si attiva questa funzione che a sua volta va ad attivare la funzione fetch con un ritardo
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    // un ritardo per non avere problemi con la fetch
    debounceTimeout = setTimeout(() => {
        fetchGames(searchValue);
    }, 1000);
  };

  //----------------------------------------------------------
  const fetchGames = (searchQuery) => {
    if (!searchQuery) {
        setIsLoading(false);
      return;
    }

    setIsLoading(true);

    fetch(`http://localhost:3001/gioco/search/${search}`, {
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
        console.log("data", data)
        setSearchedGame(data.content);
        setSearchWord(search);
      })
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => setIsLoading(false))
  };

  useEffect(() => {
    fetchGames(search); // Fetch iniziale
      // Fa il focus all'input
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
  }, [])

    return (
        <div className="search-wrapper">
            <TextField
                id="outlined-basic"
                label="Ricerca"
                variant="outlined"
                onChange={handleSearchChange}
                value={search}
                inputRef={searchInputRef}
                placeholder="Nome gioco"
                fullWidth
            />
        </div>
    );
}

export default Search;
