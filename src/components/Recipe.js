import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import parse from "html-react-parser";
import "./Recipe.css";

function Recipe(props) {
  const [recipe, setRecipe] = useState(null);
  const recipeId = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${config.API_KEY}`
        );
        setRecipe(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-container">
      <h2>{recipe.title}</h2>
     
      <img src={recipe.image} alt={recipe.title} />
    
    

      <div className="recipe" key={recipe.id}>
        <p className="description">{parse(recipe.summary)}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h4>Instructions:</h4>
        <div className="instructions">{parse(recipe.instructions)}</div>
      </div>
    </div>
  );
}

export default Recipe;
