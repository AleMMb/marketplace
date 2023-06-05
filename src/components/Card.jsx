import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';



function Card (props){
    const {id, nombre, precio, imagen} = props.data;
    const {addToCart, cartItems} = useContext (ShopContext);
    const cartItemCount = cartItems[id];


  return (
    <div className='product'>
        <img src={imagen}/>
        <div className='description'>
            <p><b>{nombre}</b></p>
            <p>${precio}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Carrito
        {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Card
