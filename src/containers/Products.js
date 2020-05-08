import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';

import { ProductContext } from '../context/products-context'

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // this is how to get products useing redux hooks
  // const productList = useSelector(state => state.shop.products);
  
  // using the context API
  const productList = useContext(ProductContext).products;
  console.log('what is in productList: ', productList);
  
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
