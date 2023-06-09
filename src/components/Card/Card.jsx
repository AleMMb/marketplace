import { useContext } from 'react'
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import '../Card/Card.css'



function Card (props){
    const {id, nombre, precio, imagen} = props.data;
    const {addToCart, cartItems} = useContext (ShopContext);
    const cartItemCount = cartItems[id];


  return (
    <div className='product-card'>
        <Link to={"/descripcion"}><img src={imagen}/></Link>
        <div className='description'>
            <p className='product-title'>{nombre}</p>
            <p className='product-price'>${precio}</p>
        </div>
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>Carrito
        {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
    </div>
  )
}

export default Card
