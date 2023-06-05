import { useState, useEffect } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import {CartItem} from '../components/Cart-item'
import '../styles/Cart.css'
 


function Cart() {


  const { cartItems, getTotalCartAmount, productsList} = useContext (ShopContext);
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()


  return (
    <div className='cart'>
      <div>
        <h1>Tu carrito :D</h1>
      </div>
      <div className="cart-2"> {productsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <li key={product.id} >< CartItem data={product} /></li>
          }
        })}
      </div>


      {totalAmount > 0 ?
      <div className='checkout'>
        <h2><b>Subtotal:</b> ${totalAmount}</h2>
        <button onClick={()=> navigate('/shop')}>Seguir Comprando</button>
        <button className='checkout-button'>Pagar</button>
      </div>
      : (<h1>Tu carro de compras está vacio </h1>)}
    </div>
  )
}

export default Cart
