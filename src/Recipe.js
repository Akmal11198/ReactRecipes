import React from "react";
import "./App.css";

const Recipe = (props) => {
  return (
    <div className="list">
      <h1 className="BB">{props.title}</h1>
      <p>calories: {props.calories}</p>
      <p>Ingredients:</p>
      <ul>
        {props.ing.map((ingredient, index) => (
          <li key={ingredient.text + props.title + index}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={props.imgsrc} alt="" />
    </div>
  );
};

export default Recipe;
