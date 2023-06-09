import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const DesProduct = (props) => {
  //const { product } = props.id
  //console.log(product)




  return (
    <>
    <div className="description-container">
        <img src="" alt="" />
        <div className="details">
            <p>precio</p>
            <p>codigo</p>
        </div>
        <div className="description-product">
            <p> blablablblablablblablbalblabblblablalbalbalbalbalbalablbalbalbalbalbalba</p>
        </div>
        <Link to={'/shop'}><button>Volver a la tienda</button></Link>
        <button>Agregar al carrito</button>

    </div>
    </>
  )
}
export default DesProduct