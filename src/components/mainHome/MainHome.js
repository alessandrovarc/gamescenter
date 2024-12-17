import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import "./MainHome.css";
import Gallery from "../gallery/Gallery";
import FilterBar from "../filterBar/FilterBar";

export const categoryList = [
  "Seleziona",
  "Sparatutto",
  "Picchiaduro",
  "Sport",
  "Horror"
]

function MainHome() {
    const [selectedCategory, setSelectedCategory] = useState("Seleziona");
    const [searchedGame, setSearchedGame] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const filteredCategory = selectedCategory && selectedCategory !== "Seleziona" ? [selectedCategory] : categoryList.slice(1);

    useEffect(()=> {
      console.log("searchedGame", searchedGame)
    }, [searchedGame])
    return(
      <div className="main-home-wrapper">
        <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearchedGame={setSearchedGame} setSearchWord={setSearchWord}/>
        { searchWord !== "" && searchWord.length > 2 ?
          <Gallery category={`${searchedGame.length} risultati ottenuti per "${searchWord}"`} searchedGames={searchedGame}/>
          :
          filteredCategory.map((category) => (
            <Gallery category={category} />
          ))
        }
      </div>
    )
}

export default MainHome;