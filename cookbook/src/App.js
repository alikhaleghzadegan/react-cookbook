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
      // console.log(response);
      setRecipes(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Test</h1>
    </div>
  );
}

export default App;
