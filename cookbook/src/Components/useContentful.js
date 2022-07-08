import { createClient } from "contentful";
// import contentful from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "exxodu89m7jl",
    accessToken: process.env.REACT_APP_API_KEY,
    host: "preview.contentful.com",
  });
  // The Pangalactic Gargle Blaster

  const getitem = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipes",
        select: "fields",
      });

      //This annoying loooooooooooooong list points to one awesome value: sugar !!
      console.log(
        entries.items[0].fields.Textbody.content[4].content[0].content[0]
          .content[0].value
      );
      return entries;
    } catch (error) {
      console.log("Contentful Error :" + error);
    }
  };
  return { getitem };
};

export default useContentful;
