import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import useContentful from "./useContentful";
import Categories from './Categories'
import SubCategories from './SubCategories';

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

      <Categories categories={categories} />
      <SubCategories recipes={recipes} />

    </div>
  );
}

export default App;
