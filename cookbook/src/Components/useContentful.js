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

      console.log("Entries" + entries);
      return entries;
    } catch (error) {
      console.log("Contentful Error :" + error);
    }
  };
  return { getitem };
};

export default useContentful;
