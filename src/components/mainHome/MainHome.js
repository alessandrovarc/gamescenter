import { useEffect, useState } from "react";
import "./MainHome.css";
import Gallery from "../gallery/Gallery";
import FilterBar from "../filterBar/FilterBar";
import { useAuth } from "../../hooks/useAuth";
import GamesCenterImage from "../../assets/images/gameCenter.png"
import Login from "../Login";
import { useLocation } from "react-router-dom";

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
    const {isLogged} = useAuth();
    const filteredCategory = selectedCategory && selectedCategory !== "Seleziona" ? [selectedCategory] : categoryList.slice(1);
    const {state} = useLocation();

    return(
      <div className="main-home-wrapper">
        {
          isLogged ? 
          <>
            <FilterBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setSearchedGame={setSearchedGame} setSearchWord={setSearchWord}/>
            { searchWord !== "" && searchWord.length > 2 ?
              <Gallery category={`${searchedGame.length} risultati ottenuti per "${searchWord}"`} searchedGames={searchedGame}/>
              :
              filteredCategory.map((category) => (
                <Gallery category={category} />
              ))
            }
          </>
          :
          <>
            <h1 className="align-center"><strong>Benvenuto al Game Center</strong></h1>
            <div className="no-content-container">
              <Login withModal={false} emailFromRegistration={state?.email} passwordFromRegistration={state?.password}/>
              <img src={GamesCenterImage} alt="GameCenter" style={{width: "50%"}}/>
            </div>
          </>
        }
      </div>
    )
}

export default MainHome;