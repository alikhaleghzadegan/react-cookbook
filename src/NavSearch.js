import { useLocation, Link } from "react-router-dom";

export default function NavSearch({ recipes, categories }) {
    const location = useLocation();

    const getCategoryTitle = function (name) {
        return categories ? categories.filter(x => x.name == name)[0].title : 'novalue';
    }

    const getRecipeTitle = function (id) {
        return recipes ? recipes.filter(x => x.id == id)[0].title : 'novalue';
    }

    const getLinks = function () {
        const path = location.pathname.split('/').filter(x => x.length !== 0);

        switch (path.length) {
            case 0:
                return (<p><Link to={"/"}>Home</Link></p>);

            case 2:
                return (
                    <p>
                        <Link to={"/"}>Home</Link> / <Link to={`/categories/${path[1]}`}>{getCategoryTitle(path[1])}</Link>
                    </p>
                );

            case 3:
                return (
                    <p>
                        <Link to={"/"}>Home</Link> / <Link to={`/categories/${path[1]}`}>{getCategoryTitle(path[1])}</Link> / <Link to={`/categories/${path[1]}/${path[2]}`}>{getRecipeTitle(path[2])}</Link>
                    </p>
                );

            default:
                return (<p>Error!</p>);
        }

    }

    return (
        <div>
            {
                recipes.length > 1 && categories.length > 1 &&
                <div className='path'>{getLinks()}</div>
            }
        </div>
    );
}