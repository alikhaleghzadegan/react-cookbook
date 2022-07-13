import { useState, useEffect } from "react";
import useContentful from "./useContentful";
import Categories from './Categories'

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
    </div>
  );
}

export default App;
