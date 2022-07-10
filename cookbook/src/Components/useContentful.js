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
    const obj = {
      content_type: "recipes",
      select: "fields",
    };
    try {
      const entries = await client.getEntries(obj);
      // const listItems = entries.map(([key, value]) => (
      //   <li>
      //     {key}: {value}
      //   </li>
      // ));
      // return <ul>{listItems}</ul>;
      // };

      // client.getEntries().then(function (entries)
      //This annoying loooooooooooooong list points to one awesome value: sugar !!
      // const filtered = obj.homes.filter((a) => {
      //   return a.home_id === '2';
      // });

      // let testconsole =
      //   "Titel: " +
      //   entries.items[0].fields.title +
      //   " Subtitle :" +
      //   entries.items[0].fields.subtitle +
      //   " Intro :" +
      //   entries.items[0].fields.intro.content[0].content[0].value +
      //   " Description :" +
      //   entries.items[0].fields.description.content[0].content[0].value +
      //   " Image Url :" +
      //   entries.items[0].fields.images.fields.file.url +
      //   " Ingredients :" +
      //   entries.items[0].fields.ingredients +
      //   " Category :" +
      //   entries.items[0].fields.category +
      //   " Subcategory :" +
      //   entries.items[0].fields.subcategory;

      return entries;
    } catch (error) {
      console.log("Contentful Error :" + error);
    }
  };
  return { getitem };
};

export default useContentful;
