import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./FilterBar.css";
import { categoryList } from "../mainHome/MainHome";
import Search from "../search/Search";
const FilterBar = ({
    selectedCategory,
    setSelectedCategory,
    setSearchedGame,
    setSearchWord
}) => {

    return (
        <div className="filter-bar-wrapper">
             <FormControl sx={{ m: 1, width: 200 }}>
                <InputLabel id="select-label" color="primary">Categoria</InputLabel>
                <Select
                  id="select-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  autoWidth
                  label="Categoria"
                  placeholder="Tutti"
                >
                  { 
                    categoryList.map((item) => (
                      <MenuItem key={item} value={item} >
                        {item}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <Search setSearchedGame={setSearchedGame} setSearchWord={setSearchWord}/>
        </div>
    )
}

export default FilterBar;