import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
import { ProductContext } from '../../context/products-context';

const ProductItem = props => {
  // const dispatch = useDispatch();

  // using the context API - getting access to the toggleFavs function
  const toggleFavs = useContext(ProductContext).toggleFavs ;


  const toggleFavHandler = () => {
    console.log("do we get a props.id: ", props.id)
    // dispatch is used when using redux 
    // dispatch(toggleFav(props.id));

    // called when using the contextAPI
    toggleFavs(props.id);

  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
