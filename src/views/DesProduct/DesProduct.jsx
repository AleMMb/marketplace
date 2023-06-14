import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatPrice } from "../../helpers/helper";

const DesProduct = () => {

  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(id)

  const getProduct = async()=>{
    const urlServer = "http://localhost:3000/producto/";
    try{
      const {data}  = await axios.get(urlServer + id)
      //const data = await response.json();
      setProduct (data[0])
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getProduct ();
  }, []);
 console.log(product)

  return (
    <>
    <div className="description-container">
        <img src={product.imagen} alt={product.nombre} />
        <div className="details">
            <p>{product.nombre}</p>
            <p> ${product.precio}</p>
        </div>
        <div className="description-product">
            <p> {product.descripcion}</p>
        </div>
        <Link to={'/shop'}><button>Volver a la tienda</button></Link>
        <button>Agregar al carrito</button>

    </div>
    </>
  )
}
export default DesProduct