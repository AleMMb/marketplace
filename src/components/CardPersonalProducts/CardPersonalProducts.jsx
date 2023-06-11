import { Link } from "react-router-dom";

import "../CardPersonalProducts/CardPersonalProducts.css";
import axios from "axios";

const CardPersonalProducts = (info) => {
  const { id, nombre, descripcion, precio, imagen } = info.data;

  const deletProduct = async (id) => {
    const urlServer = "http://localhost:3000/producto/";
    try {
      const consulta  = await axios.delete(urlServer + id);
      console.log(consulta)
      alert(`el producto con nombre ${nombre} ha sido elinimado exitosamente`);
    } catch (error) {
      console.log(error);
    }
    return
  };

  return (
    <div className="personal-product-container">
      <img src={imagen} alt="" />
      <div className="Product-description">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <b>{precio}</b>
      </div>
      <div className="actions">
        <Link to={""}>
          <button>Editar</button>
        </Link>
        <button
          onClick={() => {
            deletProduct(id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default CardPersonalProducts;
