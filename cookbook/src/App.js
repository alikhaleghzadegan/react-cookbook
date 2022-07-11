import "./css/style.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Recipes from "./Recipes";
import React from "react";

import useContentful from "./Components/useContentful";

function App() {
  // console.log(process.env);
  const [recipes, setRecipes] = useState([]);
  const { getitem } = useContentful();

  useEffect(() => {
    getitem().then((response) => {
      setRecipes(response);
      return response;
    });
  }, []);

  return (
    <div>
      <header className="headerreact">
        <Header />
      </header>

      <main>
        <h1>Test Contentful</h1>
        <Recipes recipes={recipes} />
      </main>
    </div>
  );
}

export default App;
