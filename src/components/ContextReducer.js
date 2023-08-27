import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      const newItem = {
        id: action.id,
        name: action.name,
        description: action.description,
        image: action.image,
        size: action.size,
        quantity: action.quantity,
        finalPrice: action.finalPrice,
      };

      const updatedState = [...state, newItem];
      localStorage.setItem('cart', JSON.stringify(updatedState)); // Update localStorage
      return updatedState;
    //   to remove the data from our code we have the Remove case.
      case 'REMOVE':{
           const newState=[...state];
           newState.splice(action.index,1);
           localStorage.setItem('cart',JSON.stringify(newState));//update the localstorage.
           return newState;
      }

    default:
      console.log('Error in fetching the data');
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const CartState = () => useContext(CartStateContext);
export const CartDispatch = () => useContext(CartDispatchContext);
