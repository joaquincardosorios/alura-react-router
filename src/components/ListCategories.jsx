import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buscar } from "../api/api";
import "../assets/css/blog.css"

const ListCategories = () => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        buscar('/categorias', setCategorias)
    },[])

    return(
        <ul className="category-list container flex">
            {
                categorias.map(categoria => (
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <li className={`category-list__category category-list__category--${categoria.id}`}>
                            {categoria.nombre}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )

}

export default ListCategories