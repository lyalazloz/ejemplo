import React, {useContext} from 'react';
import './NavCart.css';
import CartIcon from './cart.svg';
import {CartContext} from '../../../CartContext/index'

const NavCart = ({action}) => {
    const {cart} = useContext(CartContext);

    return (
        <div className="navCart" onClick={action}>
            <img src={CartIcon} width="40" alt="cart"></img>
            <span>{cart.cantidadTotal}</span>
        </div>
    )
}

export default NavCart;