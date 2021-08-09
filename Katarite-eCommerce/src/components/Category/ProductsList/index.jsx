import React from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './ProductsList.css';


const ProductsList = ({prods, genre_name}) => {

    return (
        <section className="products">
            <ul>
                <li><ProductCard prods={prods} genre_name={genre_name}/></li>
            </ul>
        </section>
    )
}

export default ProductsList;