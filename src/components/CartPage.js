import React from 'react';
import CartProduct from "./CartProduct";
import { store } from "../store";
import './CartPage.css';

const CartPage = () => {
    const items = store.getState().items.filter(item => item.inCart > 0);
    const subtotal = items.length > 0  ?
        Object.values(items).reduce((acc, {price, inCart}) => acc + price * inCart, 0)
        :
        0;

    return (
        <div className='CartPage'>
            <p>Your Shopping Cart</p>
            <div>
                {
                    items.map(item => {
                        return <CartProduct
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            qty={item.inCart}
                        />
                    })
                }
            </div>
            <p>Subtotal: ${subtotal}</p>
        </div>
    );
};

export default CartPage;