import React, { createContext, useState, useEffect } from "react";


export const ShopContext = createContext(null);

let PRODUCTS = [{},{},{},{},{},{}]  
/*quiero crear un arreglo para tener un carrito por defecto y poder sumar y restar items,
 debería recorrer productsList, pero no tengo acceso a ella desde afuera, 
 y cuando meto la función (getDefaultCart) dentro del provider y reemplazo PRODUCTS por productsList
 luego las funciones no me funcionan
y  retorna un NaN ¬¬
pero ahora así como lo tengo funcionan... tendría que dejar esto estático (lo cual no es la idea)
o dejar PRODUCTOS muy muy muy largo... 
se me fundió el cerebro, intenté hasta que me estresé...  Mati ayuda plis u.u */

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {  
    cart[i] = 0;
  }
  return cart;
};


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [productsList, setProductsList] = useState([])

  const getProductos = async ()=>{

    const urlServer = "http://localhost:3000";
    const endpoint = "/shop";
    try {
      const response = await fetch(urlServer + endpoint)
      const productos = await response.json();
      setProductsList (productos) 
    } catch (error) {
      console.log(error)
    }
  }

//console.log(productsList)
  useEffect(()=>{
    getProductos()
    },[])


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
        let itemInfo = productsList.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.precio
      }
    }
    return totalAmount
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, productsList, setProductsList}


  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
