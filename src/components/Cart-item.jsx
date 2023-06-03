import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const CartItem = (props) => {
    const { id, price, productName, productImage} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext (ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt="aro" />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p> Price: ${price} c/u</p>
            <div className='countHandler'>
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button on onClick={()=> addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

