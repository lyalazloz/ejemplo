import React, {useContext, useState} from 'react';
import {CartContext} from '../../CartContext/index';
import firebase from "firebase/app";
import {getFirestore} from '../../firebase/index';
import './checkout.css';

const Checkout = () => {
    const {cart, cartPrice} = useContext(CartContext);
    const [data_usuario, setData_usuario] = useState(); 
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore();


    const precioTotal = cartPrice();

    const order = {
        usuariodata: data_usuario,
        items: cart.data,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        precioFinal: precioTotal,
    }

   const handleChange = (e) => {
      setData_usuario({ ...data_usuario,
          [e.target.name]: e.target.value
      })
   }

   const handleSubmitForm = (e) => {
    e.preventDefault();
    db.collection('orders').add(order)
    .then(({id}) => setOrderId(id))
    .catch(error => console.log(error))
    }
 
    return (         
    <section className="checkout">
    <div className={`container ${orderId ? 'hide' : 'show'}`}>
        <h2>Checkout</h2>
       { cart.data.map(item => {return (
                    <div key={item.id}>
                        <h3>{item.data.title}</h3>
                        <p>{item.data.author}, ${item.data.price} x {item.data.quantity}</p>
                        <p>{item.data.description}</p>
                        <p>Codigo:{item.id}</p> 
                     </div>
                     )})
       }
       <h2>Total: {precioTotal} </h2>
        <form method='POST' onSubmit={handleSubmitForm} >
            <input onKeyUp={handleChange} onBlur={handleChange} type="text" name="nombre" placeholder="Nombre" />
            <input onKeyUp={handleChange} onBlur={handleChange} type="text" name="apellido" placeholder="Apellido" />
            <input onKeyUp={handleChange} onBlur={handleChange} type="email" name="email" placeholder="E-mail" />
            <input onKeyUp={handleChange} onBlur={handleChange} type="tel" name="tel" placeholder="Teléfono" />
            <button>Pagar</button>
        </form>
       
            <div className={`compraFinalizad ${orderId ? 'show' : 'hide'}`}>
                <h2>¡Compra exitosa!</h2>
                <p>Este es tu numero de seguimiento: {orderId}</p>
            </div>
        
    </div>
</section>
)
}

export default Checkout;