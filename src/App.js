import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import useContentful from "./useContentful";
import Categories from './Categories'
import SubCategories from './SubCategories';
import SearchFilter from "./resources/SearchFilter";





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
       <SearchFilter placeholder="Find a recipe..." />  {/*store in component data={RecipesData}*/}  
      
    </div>
  );
}

export default App;
