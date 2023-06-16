import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import("../EditForm/EditForm.css");

const EditForm = () => {
  const [product, setProduct] = useState([]);
  const [editProduct, setEditProduct] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSetEditProduct = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setEditProduct({ ...editProduct, ...field });
  };

  const getProduct = async () => {
    const urlServer = "http://localhost:3000/producto/";
    try {
      const { data } = await axios.get(urlServer + id);
      setProduct(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const editProductfunction = async () => {
    const urlServer = "http://localhost:3000/producto/";
    const newInfo = {
      id: id,
      nombre: editProduct.nombre,
      descripcion: editProduct.descripcion,
      precio: editProduct.precio,
    };

    try {
      if (
        !newInfo.id ||
        !newInfo.nombre ||
        !newInfo.descripcion ||
        !newInfo.precio
      ) {
        Swal.fire({
          position: "top",
          icon: "error",
          title:
            "Necesitamos el nombre, descripción y precio para hacer las modificaciones.",
          showConfirmButton: true,
          timer: 5000,
        });
      } else {
        const response = await axios.patch(urlServer, newInfo);
        Swal.fire({
          icon: "success",
          title: "Excelente!",
          text: "Tu producto a sido modificado.",
          backdrop: "swal2-backdrop-hide",
          background: "#b1a961",
          color: "#1C374D",
        });
        navigate("/misproductos");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Algo a salido mal, por favor intenta más tarde.",
        backdrop: "swal2-backdrop-hide",
        background: "#b1a961",
        color: "#1C374D",
      });
      console.log(error);
    }
  };

  return (
    <div className="edit-form-container">
      <div className="actual-info">
        <h1>Información actual del producto</h1>
        <img src={product.imagen} alt={product.nombre} />
        <p>
          <b>Nombre:</b> {product.nombre}
        </p>
        <p>
          <b>Descripcion:</b> {product.descripcion}
        </p>
        <p>
          <b>Precio:</b> {product.precio}
        </p>
      </div>
      <div className="new-info">
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese nuevo nombre"
          value={editProduct.nombre}
          onChange={handleSetEditProduct}
        />

        <input
          type="text"
          name="descripcion"
          value={editProduct.descripcion}
          placeholder="Ingrese nueva descripción"
          onChange={handleSetEditProduct}
        />

        <input
          type="number"
          name="precio"
          value={editProduct.precio}
          placeholder="Ingrese nuevo precio"
          onChange={handleSetEditProduct}
        />

        <button onClick={() => editProductfunction()}>Guardar cambios</button>
        <Link to={"/misproductos"}>
          <button>Cancelar</button>
        </Link>
      </div>
    </div>
  );
};
export default EditForm;
