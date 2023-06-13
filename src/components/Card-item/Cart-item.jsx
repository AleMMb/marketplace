import React from 'react'
import { useContext } from 'react';
import { ShopContext } from "../../context/ShopContext";

export const CartItem = (props) => {
  
    const { id, nombre, precio, imagen} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext (ShopContext);

  return (
    <div className='cartItem'>
        <img src={imagen} alt="producto" />
        <div className='description'>
            <p><b>{nombre}</b></p>
            <p> Precio: ${precio} c/u</p>
            <div className='countHandler'>
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button on onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

