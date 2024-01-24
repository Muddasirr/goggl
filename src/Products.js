

import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';

const Products = () => {
    const [productData, setProductData] = useState([]);

    
        const apiUrl = 'https://fakestoreapi.com/products';

        axios.get(apiUrl)
            .then(response => {
                // Handle the response data
                setProductData(response.data);
                console.log(productData);
            })
            .catch(error => {
                // Handle errors
                console.error('Error fetching data:', error);
            });
    

    return (
        <div className="product-container">
            {productData.map(item => (
                
                <div class="product-card">
                <img class="product-image" src={item.image} alt="Product Image"/>
                <div class="product-title">{item.title}</div>
                <div class="product-price">{item.price
                }</div>
                
              </div>
              
            ))}
        </div>
    );
};

export default Products;

