import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "exxodu89m7jl",
    accessToken: process.env.REACT_APP_api_key,
  });
  // The Pangalactic Gargle Blaster

  const getitem = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "Recipes",
        // select: "fields",
      });

      // const sanitizedEntries = entries.items.map((item) => {
      //     const name = item.fields.name
      //     const description = item.fields.description.content[0].content[0].value
      //     const exit = item.fields.exit

      //     return {
      //         // ...item.fields,
      //         name,
      //         description,
      //         exit
      //     }
      // })
      // return sanitizedEntries
      console.log("Entries" + entries);
      return entries;
    } catch (error) {
      console.log("Contentful Error :" + error);
    }
  };
  return { getitem };
};

export default useContentful;
