import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' render = { () => (
                        <React.Fragment>
                            <ProductPage />
                        </React.Fragment>
                    )}/>
                <Route path='/cart' render = { () => (
                    <React.Fragment>
                        <CartPage />
                    </React.Fragment>
                )}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
