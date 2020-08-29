import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [q, setQ] = useState("chicken");

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const updateQ = (e) => {
    e.preventDefault();
    setQ(search);
    setSearch("");
  };

  useEffect(() => {
    getRecipe();
  }, [q]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${q}&app_id=81c2ca1a&app_key=b3da4abe3ab65636afdd944588c5545a`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="frm" onSubmit={updateQ}>
        <input
          className="tbox"
          type="text"
          onChange={updateSearch}
          value={search}
          placeholder="enter food"
        ></input>
        <button className="sbmtbtn" type="submit">
          Search recipes
        </button>
      </form>
      <div className="bigL">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ing={recipe.recipe.ingredients}
            imgsrc={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
