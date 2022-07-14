import { useState, useEffect } from "react";
import useContentful from "./useContentful";
import Categories from './Categories';
import { Routes, Route } from "react-router-dom";
import DisplayRecipe from "./DisplayRecipe";
import Header from "./resources/Header";

function App() {

  const [categories, setCategories] = useState();
  const [recipes, setRecipes] = useState([]);
  const { getCategories, getRecipes } = useContentful();

  useEffect(() => {
    getCategories().then(response => setCategories(response))
    getRecipes().then(response => setRecipes(response))
  }, []);

  console.log(recipes)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories categories={categories} />} />
        <Route path="/:recipeId" element={<DisplayRecipe recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
