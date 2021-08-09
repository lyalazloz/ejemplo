import React from 'react';
import './reset.css';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {CartProvider} from './CartContext/index';


const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavAndWidgetCart />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Katarite-eCommerce">
            <Redirect to="/"/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/:genre_name">
            <Category />
          </Route>
          <Route exact path="/:genre_name/:id">
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
  );

}
export default App;
