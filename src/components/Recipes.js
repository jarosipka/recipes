import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";
import "./Recipes.css";
import Search from "./Search";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const onSearch = async (query) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.API_KEY}&query=${query}&number=9`
    );
    setRecipes(response.data.results);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${config.API_KEY}&number=9`
      );
      setRecipes(response.data.recipes);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="search-container">
        <Search onSearch={onSearch} />
      </div>
      <div className="recipes-container">
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div className="recipes" key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recipes;
