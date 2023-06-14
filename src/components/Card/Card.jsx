import { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";


import { formatPrice } from "../../helpers/helper";
import '../Card/Card.css'



function Card (props){
    const {id, nombre, precio, imagen} = props.data;
    const {addToCart, cartItems} = useContext (ShopContext);
    const cartItemCount = cartItems[id];
    const navigate = useNavigate();


  return (
    <div className='product-card'>
        <img onClick={() => navigate(`/descripcion/${id}`)} src={imagen}/>
        <div className='description'>
            <p className='product-title'>{nombre}</p>
            <p className='product-price'>${formatPrice(precio)}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Carrito
        {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Card
