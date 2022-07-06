import { createClient } from "contentful";
// import contentful from "contentful";

const useContentful = () => {
  const client = createClient({
    space: REACT_APP_space_id,
    accessToken: process.env.REACT_APP_api_key,
  });
  // The Pangalactic Gargle Blaster

  const getitem = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipes",
        select: "fields",
      });
      //mapping over it
      console.log("Entries" + entries);
      return entries;
    } catch (error) {
      console.log("Contentful Error :" + error);
    }
  };
  return { getitem };
};

export default useContentful;
