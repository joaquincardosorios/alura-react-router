import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom' 
import "../assets/css/componentes/card.css"
import { buscar } from "../api/api"

const ListPost = ({ url }) => {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        buscar(url, setPosts)
    }, [url])

    return(
        <section className="posts container">
        {
            posts.map(post => {
                const { id, title, metadescription, categoria } = post;
                return <Link to={`/post/${id}`} className={`post__card post-card--${categoria}`} key={id}>
                        <h3 className="post-card__title">
                            {title} 
                        </h3>
                        <p className="post-card__meta">{metadescription}</p>
                </Link>
            })
        }
        </section>
    )
}

export default ListPost