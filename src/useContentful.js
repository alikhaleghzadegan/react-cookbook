import { createClient } from "contentful";


const useContentful = () => {

    const client = createClient({
        space: "cycjaijorqvk",
        accessToken: "VkFyFy7lSxh9IT9yLmx6Ejs3kOdAt6IhmW6VrulTiEc",
        host: "preview.contentful.com"
    });

    const getCategories = async () => {
        try {
            const entries = await client.getEntries({ content_type: "categories" });
            return entries.items
                .map(item => item.fields)
                .map(item => {
                    const { id, title, name } = item;
                    const image = item.image.fields.file.url;
                    return { id, title, name, image }
                })
        } catch (error) {
            console.error(error);
        }
    }

    const getRecipes = async () => {
        try {
            const entries = await client.getEntries({ content_type: "cookbook_api" });
            console.log(entries.items.map(item => item.fields));
            return entries.items.map(item => item.fields);
            
        } catch (error) {
            console.error(error);
        }
    }

    return { getCategories, getRecipes };
}

export default useContentful;