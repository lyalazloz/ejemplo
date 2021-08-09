import React,{useContext, useEffect} from 'react';
import './WidgetCart.css';
import {CartContext} from '../../../CartContext/index';
import {Link} from "react-router-dom";

const WidgetCart = ({show, action}) => {
    const {dropCart, cart , deleteItem, changeQty} = useContext(CartContext);

    useEffect(() => {
        console.log(cart)
    }, [])


    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
                        <button onClick={action}>x</button>

            {
                cart.data.map(item => {return (
                    <>
                    <div style={{display:"flex"}} key={item.id}>
                        <h2>{item.data.title}</h2>
                        <h3>{item.data.author}</h3>
                        <p>${item.data.price} x {item.data.quantity}</p>
                     <button onClick={() => changeQty(item, "-")}>-</button>
                     <button onClick={() => changeQty(item, "+")}>+</button>
                   </div>
                   <p>Codigo: {item.id}</p>
                   <button onClick={() => {deleteItem(item)}}>Eliminar</button>
                   </>
                )})
            }
            <button onClick={() => dropCart()}>Vaciar Carrito</button>
             <Link to="/cart"> <button>Comprar</button> </Link>
        </div>
    )
}

export default WidgetCart;