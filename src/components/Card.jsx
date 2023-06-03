import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';


function Card (props){
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext (ShopContext);
    const cartItemCount = cartItems[id];

  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Carrito
        {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Card
