import { useLocation, Link } from "react-router-dom";

export default function NavSearch({ recipes, categories }) {
    const location = useLocation();

    const getCategoryTitle = function (name) {
        return categories ? /*categories.filter(x => x.name === name)[0].title*/ ' ABC' : 'novalue';
    }

    const getRecipeTitle = function (id) {
        return recipes ? recipes.filter(x => x.id === id)[0].title : 'novalue';
    }

    const foo = function () {
        const path = location.pathname.split('/').filter(x => x.length !== 0);

        console.log("path ", path)

        switch (path.length) {
            case 0:
                return (<p><Link to={"/"}>Home</Link></p>);

            case 2:
                return (
                    <p>
                        <Link to={"/"}>Home</Link> /


                        <Link to={`/categories/${path[0]}`}>{getCategoryTitle(path[0])}</Link>
                    </p>
                );

            case 3:
                return (
                    <p>
                        <Link to={"/"}>Home</Link> /

                        {/*                         
                        <Link to={`/categories/${path[2]}`}>{getCategoryTitle(path[2])}</Link> / <Link to={`/categories/${path[2]}/${path[3]}`}>{getRecipeTitle(path[3])}</Link> */}

                    </p>
                );

            default:
                return (<p>Error!</p>);
        }

    }

    return (
        <div className='path'>{foo()}</div>
    );
}