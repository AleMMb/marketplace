import React, { createContext, useState } from "react";
import { PRODUCTS } from "../../productData";

export const ShopContext = createContext(null);

const getProductos = async ()=>{

  const urlServer = "http://localhost:3000";
  const endpoint = "/shop";
  try {
    const response = await fetch(urlServer + endpoint)
    const productos = await response.json();
    console.log(productos) 
  } catch (error) {
    console.log(error)
  }
}

/*getProductos()*/


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0 ){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
