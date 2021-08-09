import React, {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';
import {getFirestore} from '../../../firebase';
import { Link } from "react-router-dom";


const FeaturedProducts = () => {
    const [items, setItems] = useState([]);

    const db = getFirestore();

        const getProductsFromDB = () => {
            db.collection('items').where("outstanding", "==", true).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })
                setItems(arr);
            })
            .catch(e => console.log(e));
        }

            useEffect(() => {
                getProductsFromDB();
            }, [])

           return (
                <section className="featuredProducts">
                    <div className="container">
                        {
                            items.length ?
                            <>
                                <h2>Best Sellers</h2>
                                <ul>
                                    <ProductCard prods={items}/>
                                </ul>
                        </> :
                        <p className="cargando">Cargando items...</p>
                    }
                </div>
            </section>
        )
    }
    export default FeaturedProducts;