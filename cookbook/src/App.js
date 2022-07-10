import "./css/style.css";
import { useEffect, useState } from "react";
import React from "react";

import useContentful from "./Components/useContentful";

function App() {
  // console.log(process.env);
  const [recipes, setRecipes] = useState([]);
  const { getitem } = useContentful();

  useEffect(() => {
    getitem().then((response) => {
      console.log(response.recipe[0].title);
      setRecipes(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Test Contentful</h1>
      <h2> {recipes.recipe[0].title}</h2>
      <h3> {recipes.recipe[0].subtitle}</h3>
      <br></br>
      <h3>Intro</h3>
      <p>{recipes.recipe[0].intro}</p>
      <h3>Description</h3>
      <p>{recipes.recipe[0].description}</p>
      <img className="image" src={recipes.recipe[0].url} alt="" />
      {/* <ol>
        {recipes.recipe[0].ingredients.map((index) => (
          <li>{recipes.recipe[0].ingredients[0]}</li>
        ))}
      </ol> */}
    </div>
  );
}

export default App;
