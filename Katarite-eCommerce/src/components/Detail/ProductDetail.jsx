import React, {useState, useContext} from 'react';
import './ProductDetail.css';
import {CartContext} from '../../CartContext/index';


const ProductDetail = ({product}) => {
    const [counter, setCounter] = useState(1);
    const {addOnCart} = useContext(CartContext);

    const resta = () => {
        if(counter === 0) {
            return
        } else {
            setCounter(() => {return counter - 1})
        }
    }

    const suma = () => setCounter(() => {return counter + 1})

    const onAdd = (producto, counter) => {
        addOnCart(producto, counter)
        setCounter(1)
    }

    return (
        <article className="product">
            <div className="foto">
                <img src={product.data.image} alt=""/>
            </div>
            <div className="info">
                <h1 className="title">{product.data.title}</h1>
                <h3 style={{color:"black"}}>${product.data.price}</h3>                
                <div className="contador">
                    <button onClick={() => resta()}>-</button>
                    <p>{counter}</p>
                    <button onClick={() => suma()}>+</button>
                </div>
                <button onClick={() => onAdd(product, counter)} className="btn" >Agregar al carrito</button>
            </div>
        </article>
    )
}
export default ProductDetail;