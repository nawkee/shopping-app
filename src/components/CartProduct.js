import React from 'react';
import { store } from "../store";
import { addItem, minusItem, delItem } from "../actions";
import './CartProduct.css';

const CartProduct = ({ id, name, price, qty }) => {
    return (
        <div className='CartProduct'>
            <p style={{fontSize:'20px'}}>{name}</p>
            <p style={{fontSize:'20px'}}>${price}</p>
            <div className='qty'>
                <button disabled={qty < 2} onClick={() => btnMinusItem(id)}>-</button>
                <p style={{fontSize:'20px',margin:'0 10px'}}>{qty}</p>
                <button onClick={() => btnAddItem(id)}>+</button>
            </div>
            <button onClick={() => btnDelItem(id)}><i className="fas fa-trash-alt"/></button>
        </div>
    );
};

const btnDelItem = (id) => {
    store.dispatch(delItem(id));
};

const btnAddItem = (id) => {
    store.dispatch(addItem(id));
};

const btnMinusItem = (id) => {
    store.dispatch(minusItem(id));
};

export default CartProduct;