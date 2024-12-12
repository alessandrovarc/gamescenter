import { Component, createRef } from "react";
import { TextField } from "@mui/material";
import GallFilm from "../components/GallGames";

class Search extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
    search: "",
  };

  // Debounce Timer
  debounceTimeout = null;

  // mi serve per fare l'autofocus all'input. Si attiva quando nel componentDidMount
  searchInputRef = createRef();

  // quando andiamo a scrivere si attiva questa funzione che a sua volta va ad attivare la funzione fetch con un ritardo
  handleSearchChange = (event) => {
    const searchValue = event.target.value;
    this.setState({ search: searchValue });

    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    // un ritardo per non avere problemi con la fetch
    this.debounceTimeout = setTimeout(() => {
      this.fetchFilms(searchValue);
    }, 300);
  };

  //----------------------------------------------------------
  fetchFilms = (searchQuery) => {
    if (!searchQuery) {
      this.setState({
        films: [],
        isLoading: false,
        isError: false,
      });
      return;
    }

    this.setState({ isLoading: true });

    fetch(`http://www.omdbapi.com/?apikey=184dbc60&s=${searchQuery}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((data) => {
        console.log("FILMS RECUPERATI DAL SERVER", data);
        this.setState({
          films: data.Search || [], // Imposta films con l'array "Search" o un array vuoto se non esiste
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  componentDidMount() {
    this.fetchFilms(this.state.search); // Fetch iniziale
    // Fa il focus all'input
    if (this.searchInputRef.current) {
      this.searchInputRef.current.focus();
    }
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-start p-5 flex-column mb-5">
          <TextField
            className="w-25"
            id="outlined-basic"
            label="Ricerca"
            variant="outlined"
            onChange={this.handleSearchChange}
            value={this.state.search}
            // Attach the ref to the TextField
            inputRef={this.searchInputRef}
          />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 mt-5">
            {this.state.films.map((film, i) => (
              <GallFilm
                key={i}
                src={film.Poster}
                title={film.Title}
                type={film.Type}
                year={film.Year}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
