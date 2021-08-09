import {React, useEffect} from "react";
import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({prods, genre_name}) => {

        const genero =  genre_name ? prods.filter( item => item.data.genre === genre_name) : prods

        // prods.filter(item => item.data.genre === genre_name)

        // Condicion ? si condicion se cumple : la condicion no se cumple

        useEffect(() => {
            console.log(prods)
            console.log(genre_name)
        }, [])

    return (
        <>
        {
           genero.map( item => { return (
                <article key={item.id} className={`productCard`}>
                    <img src={item.data.image} alt="productos" width="300"/>
                    <div>
                        <h3>{item.data.title}</h3>
                        <p>${item.data.price}</p>
                        <Link to={`/${item.data.title.replaceAll(' ', '-').toLowerCase()}/${item.id}`}>Ver detalle</Link>
                    </div>
               </article>
           )
        }) 
        }
        </>
    )
}

export default ProductCard;




