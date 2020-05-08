import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { ProductContext } from '../context/products-context';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {
  // setting up the context 
  const productsList = useContext(ProductContext).products;
  console.log("do we have the products list from context: ", productsList);
  // this method used for ContextAPI
  const favoriteProducts = productsList.filter( p => p.isFavorite === true);
  console.log('favoriteProducts list: ', favoriteProducts);
  // this method used for redux
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
