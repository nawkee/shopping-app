import React from 'react';
import { store } from "../store";
import { addItem } from "../actions";
import './Product.css';

const Product = ({ id, name, label, price, inCart }) => {
    return (
        <div className='Product'>
            <div className='Product-props Product-props-1'>
                <p className='name'>{name}</p>
                <p className='info'>{label.length > 170 ? label.substr(0, 170) + '...' : label}</p>
            </div>
            <div className='Product-props Product-props-2'>
                <button onClick={() => dispatchBtnAction(id)}>+</button>
                <h3>${price}</h3>
            </div>
        </div>
    );
};

const dispatchBtnAction = (id) => {
    store.dispatch(addItem(id));
};

export default Product;