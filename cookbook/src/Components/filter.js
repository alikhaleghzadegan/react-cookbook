import React from "react";

const Filter = (entries) => {
  const getdata = () => {
    const recipe = entries.items.map((item, index) => {
      const id = index;
      console.log("inside");
      // const out = item.fields;
      const title = item.fields.title;
      const subtitle = item.fields.subtitle;
      const intro = item.fields.intro.content[0].content[0].value;
      const description = item.fields.description.content[0].content[0].value;
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
    return recipe;
  };
  return { getdata };
};

export default Filter;
