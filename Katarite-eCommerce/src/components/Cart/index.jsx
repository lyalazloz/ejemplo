import React,{useContext} from 'react';
import {CartContext} from '../../CartContext/index';
import './cart.css';
import {Link} from 'react-router-dom';


const Cart = () => {

    const {cart,cartPrice, dropCart, deleteItem, changeQty} = useContext(CartContext);

    const precioTotal = cartPrice();

    return (
        <section className="cart">
            <h1>Cart</h1>
            
            <ul>
                {
                    cart.data.map(item => (
                        <li key={item.id}>
                            <img src={item.data.image} alt=""/>
                            <div>
                            <h2>{item.data.title}</h2>
                            <h3>{item.data.author}</h3>
                                <p>Cantidad: {item.data.quantity}</p>
                                <p>Precio por unidad: <strong>${item.data.price}</strong></p>
                                <p>Precio total: <strong>${item.data.price * item.data.quantity}</strong></p>
                                <button onClick={() => deleteItem(item)}>Eliminar producto</button>
                                <button onClick={() => changeQty(item, "+")}> + </button>
                                <button onClick={() => changeQty(item, "-")}> - </button>
                            </div>
                        </li>
                    ))
                }
             <button style={{padding: "10px 50px 10px 50px" }} onClick={() => dropCart()}>Vaciar carrito</button>
            </ul>
            <div className="final">
                <p>Precio total: ${precioTotal} </p>
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </section>
    )
}

export default Cart;