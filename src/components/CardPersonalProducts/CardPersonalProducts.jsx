
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

import "../CardPersonalProducts/CardPersonalProducts.css";
import EditForm from "../EditForm/EditForm";


const CardPersonalProducts = (info) => {
  const { id, nombre, descripcion, precio, imagen } = info.data;
  const navigate = useNavigate();

  const deletProduct = async (id) => {
    const urlServer = "https://marketplace-alemmb.vercel.app/producto/";
    try {
      const consulta  = await axios.delete(urlServer + id);
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
      if (result.isConfirmed) {
        deletProduct (id)
        Swal.fire(
          'Eliminado',
          'El producto ha sido eliminado de tu lista',
          'success'
        )
        
      } else {
        Swal.fire(
          'cancelado',
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
        
          <button onClick={()=>{navigate(`/editar/${id}`)}}>Editar</button>
       
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
