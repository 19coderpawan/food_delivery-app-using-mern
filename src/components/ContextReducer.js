import React, { createContext,useReducer,useContext } from 'react'

// In this file we are going to define the Context api and the useReducer.

/*frist we have to create the context here we are going to create two context one is that will be a global context
  in which the state is stored so that from anywhere throught the code i can change/update the state .
  Second context is to handle the useReducer.
  */

  const CartStateContext=createContext();// global context.
  const CartDispatchContext=createContext();// dispatch context.

  const reducer=(state,actions)=>{
    // now once you have the data in the CartDispatchContext.
    switch(actions.type){
        case "Add":
            // so we are going to store the data passed in the backed for that create an object.
            return [...state,{id:actions.id,name:actions.name,description:actions.description,image:actions.image,
            size:actions.size,quantity:actions.quantity,finalPrice:actions.finalPrice}]

        default:console.log("error in fetching the data")    
    }
  }

/*Now lets create the Provider*/
export const CartProvider=({children})=>{
    // now create the useReducer to handle the actions .
    const [state,dispatch]=useReducer(reducer,[]);
    return(
        // here's how we can create the provider . now to make the provider value global you have to 
        //wrap the router in the Context in the main file.
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
} 

// now we also have to export the tow Cart context .
export const CartState=()=>useContext(CartStateContext) ;
export const CartDispatch=()=>useContext(CartDispatchContext) ;
