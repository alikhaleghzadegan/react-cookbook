import React from "react";

const Recipes = ({ recipes }) => {
  console.log(recipes);

  return (
    <div>
      <h2> {recipes.recipe[0].title}</h2>
      <h3> {recipes.recipe[0].subtitle}</h3>
      <br></br>
      <h3>Intro</h3>
      <p>{recipes.recipe[0].intro}</p>
      <h3>Description</h3>
      <p>{recipes.recipe[0].description}</p>
      <img className="image" src={recipes.recipe[0].url} alt="" />
    </div>
  );
};

export default Recipes;
