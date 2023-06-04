import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../productData'
import { ShopContext } from '../context/ShopContext';
import {CartItem} from '../components/Cart-item'
import '../styles/Cart.css'
 


function Cart() {
  const {cartItems, getTotalCartAmount} = useContext (ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1>Tu carrito :D</h1>
      </div>
      <div className="cart"> {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <li key={product.id} >< CartItem data={product} /></li>
          }
        })}
      </div>


      {totalAmount > 0 ?
      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=> navigate('/shop')}>Seguir Comprando</button>
        <button>Pagar</button>
      </div>
      : (<h1>Tu carro de compras está vacio </h1>)}
    </div>
  )
}

export default Cart
