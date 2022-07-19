import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import useContentful from "./useContentful";
import Categories from './Categories'
import SubCategory from './SubCategory'
import Recipe from "./Recipe";
import Header from "./Header";
import NavSearch from "./NavSearch";

function App() {

  const [categories, setCategories] = useState();
  const [recipes, setRecipes] = useState();
  const { getCategories, getRecipes } = useContentful();

  useEffect(() => {
    getCategories().then(response => setCategories(response))
    getRecipes().then(response => setRecipes(response))
  }, []);

  return (
    <div className="App">
      <Header />
      <NavSearch categories={categories} recipes={recipes} />
      <Routes>
        <Route path="/" element={<Categories categories={categories} />} />
        <Route path="/categories/:category" element={<SubCategory recipes={recipes} />} />
        <Route path="/categories/:category/:recipe_id" element={<Recipe recipes={recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
