/**
 * ContextAPI is good for low frequency state updates like auth
 * it re renders all the components that use it even if they aren't effected
 * but the state update or not
 */
import React, { useState } from 'react';

// products array is the same as what was in the redux store
// putting initial values in here for better IDE support and code hints
export const ProductContext = React.createContext({ 
    products: [],
    toggleFavs: (id) => {}
})

export default props => {
    const [ productsList, setProductsList ] = useState([
        {
          id: 'p1',
          title: 'Red Scarf',
          description: 'A pretty red scarf.',
          isFavorite: false
        },
        {
          id: 'p2',
          title: 'Blue T-Shirt',
          description: 'A pretty blue t-shirt.',
          isFavorite: false
        },
        {
          id: 'p3',
          title: 'Green Trousers',
          description: 'A pair of lightly green trousers.',
          isFavorite: false
        },
        {
          id: 'p4',
          title: 'Orange Hat',
          description: 'Street style! An orange hat.',
          isFavorite: false
        }
    ]);

    const toggleFavs = (prodID) => {
      setProductsList( currentProdList => {

        // logic to set the favorite setting
        const prodIndex = currentProdList.findIndex( p => {
          return p.id === prodID
        });

        const newFavsStatus = !currentProdList[prodIndex].isFavorite;
        const updatedProds = [...currentProdList];
        updatedProds[prodIndex] = {
          ...currentProdList[prodIndex],
          isFavorite: newFavsStatus
        };

        return [...updatedProds]
      })
    }
    /**
     * review useContext hook lecture for a refresher
     * the toogleFavs in the value is a pointer to the function that
     * actually does the state updating
     * doesn't need to have an annonomous call to wrap the required param in
     */
    return (
        <ProductContext.Provider
          value={{
            products: productsList, 
            toggleFavs: toggleFavs}}
        >
            { props.children }
        </ProductContext.Provider>
    );
}

