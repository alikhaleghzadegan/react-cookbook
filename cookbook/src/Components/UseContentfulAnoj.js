import { createClient } from "contentful";

const UseContentful = () => {
  const client = createClient({
    space: "9mskfxo0blnp",
    accessToken: process.env.REACT_APP_API_KEY,
    host: "preview.contentful.com",
  });

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "id",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        const recipeObject = item.fields;
        return recipeObject;
      });

      return sanitizedEntries;
    } catch (error) {
      console.log("error fetching data:" + error);
    }
  };

  return { getRecipes };
};

export default UseContentful;
