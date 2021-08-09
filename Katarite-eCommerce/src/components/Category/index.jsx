import React, {useState, useEffect} from 'react';
import {products} from '../../products'
import {useParams} from 'react-router-dom';
import ProductsList from './ProductsList';
import './Category.css';
import {getFirestore} from '../../firebase/index';

const Category = () => {
    const {genre_name} = useParams();
    const [prods, setProds] = useState([]);
    const db = getFirestore();

    const getProducts = () => {
        db.collection('items').get()
        .then(doc => {
            let arr = []
            doc.forEach(item => {
                arr.push({
                    id: item.id,
                    data: item.data()
                })
            })
            setProds(arr)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section className="category">
            <h2>{genre_name.split('-').join(' ')}</h2>
            <ProductsList prods={prods} genre_name={genre_name} />
        </section>
    )
}

export default Category;