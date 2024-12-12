import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Gallery  from "./Gallery";
import { useState } from "react";

const categoryList = [
  "Tutti",
  "Sparatutto",
  "Picchiaduro",
  "Sport",
  "Horror"
]

function MainHome() {
    const [selectedCategory, setSelectedCategory] = useState("Tutti");

    const filteredCategory = selectedCategory && selectedCategory !== "Tutti" ? [selectedCategory] : categoryList.slice(1);

    return(
      <div className="container-fluid px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <FormControl sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="select-label">Categoria</InputLabel>
                <Select
                  id="select-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  autoWidth
                  label="Categoria"
                >
                  { 
                    categoryList.map((item) => (
                      <MenuItem key={item} value={item}>
                        <em>{item}</em>
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </div>
            <div>
              <i className="bi bi-grid icons"></i>
              <i className="bi bi-grid-3x3 icons"></i>
            </div>
          </div>
          {
            filteredCategory.map((category) => (
              <Gallery category={category} />
            ))
          }
      </div>
    )
}

export default MainHome;