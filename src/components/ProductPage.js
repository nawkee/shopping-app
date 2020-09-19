import React from 'react';
import Product from "./Product";
import { store } from "../store";
import './ProductPage.css';

const ProductPage = () => {
    const items = store.getState().items;

    return (
        <div className='ProductPage'>
            <p>Product List</p>
            <div>
                {items.map(item => (
                    <Product
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        label={item.label}
                        price={item.price}
                        inCart={item.inCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;