import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

import "../CardPersonalProducts/CardPersonalProducts.css";
import axios from "axios";

const CardPersonalProducts = (info) => {
  const { id, nombre, descripcion, precio, imagen } = info.data;

  const deletProduct = async (id) => {
    const urlServer = "http://localhost:3000/producto/";
    try {
      const consulta  = await axios.delete(urlServer + id);
      console.log(consulta)
    } catch (error) {
      console.log(error);
    }
    return
  };

  const SweetAlert = () =>{
    Swal.fire({
      title: `Estás eliminando el producto llamado ${nombre}`,
      text: "¿Quieres continuar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimmiar.'
    }).then((result) => {
      //deletProduct (id)
      if (result.isConfirmed) {
        deletProduct (id)
        Swal.fire(
          'Eliminado',
          'El producto ha sido eliminado de tu lista',
          'success'
        )
      } else {
        Swal.fire(
          'cancelled',
          `El producto ${nombre} está a salvo.`,
          'error'
        )
      }
    })
  }

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
            SweetAlert();
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default CardPersonalProducts;
