import { createClient } from "contentful";
import { useState, useEffect } from "react";

const useContentful = () => {
  const [recipes, setRecipes] = useState([]);
  // const { getitem } = useContentful();

  useEffect(() => {
    const client = createClient({
      space: "exxodu89m7jl",
      accessToken: process.env.REACT_APP_API_KEY,
      host: "preview.contentful.com",
    });
    const getitem = async () => {
      const obj = {
        content_type: "recipes",
        select: "fields",
      };

      try {
        const entries = await client.getEntries(obj);
        //map over each entry

        const recipe = entries.items.map((item, index) => {
          const id = index;
          const title = item.fields.title;
          const subtitle = item.fields.subtitle;
          const intro = item.fields.intro.content[0].content[0].value;
          const description =
            item.fields.description.content[0].content[0].value;
          const url = item.fields.images.fields.file.url;
          const ingredients = item.fields.ingredients;
          const category = item.fields.category;
          const subcategory = item.fields.subcategory;

          return {
            id,
            title,
            subtitle,
            intro,
            description,
            url,
            ingredients,
            category,
            subcategory,
          };
        });
        const item = recipe.filter((item) => item.category === "drinks");

        return { item }; //destructure object
      } catch (error) {
        console.log("Contentful Error :" + error);
      }
    };
    getitem().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, []);
  return recipes;
};
export default useContentful;
