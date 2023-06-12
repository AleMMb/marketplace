import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import { AuthContex } from "../../context/AuthContext";
import "../AddProduct/AddProduct.css";

const AddProduct = () => {
  const { usuario } = useContext(AuthContex);
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
  });

  const handleSetNewProduct = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setNewProduct({ ...newProduct, ...field });
  };

  console.log(newProduct);

  const newProductRegister = async () => {
    const urlServer = "http://localhost:3000/nuevoproducto";

    var productDataArray = {
      id_usuario: usuario.id,
      nombre: newProduct.nombre,
      descripcion: newProduct.descripcion,
      precio: newProduct.precio,
      imagen: newProduct.imagen,
    };
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Tu Producto a sido agregado exitosamente',
      showConfirmButton: true,
      timer: 5000
    })
    navigate("/misproductos")
    //console.log(productDataArray);

    try {
      const response = await axios.post(urlServer, productDataArray);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="addProductForm">
        <label htmlFor="nombre">Nombre del producto:</label>
        <input
          type="text"
          name="nombre"
          id=""
          value={newProduct.nombre || ""}
          onChange={handleSetNewProduct}
        />

        <label htmlFor="precio">Precio:</label>
        <input
          type="text"
          name="precio"
          id=""
          value={Number(newProduct.precio) || ""}
          onChange={handleSetNewProduct}
        />

        <label htmlFor="imagen">URL Imagen:</label>
        <input
          type="text"
          name="imagen"
          value={newProduct.imagen || ""}
          onChange={handleSetNewProduct}
        />

        <label>
          Descripcion del producto:
          <textarea
            name="descripcion"
            rows={4}
            cols={40}
            value={newProduct.descripcion || ""}
            onChange={handleSetNewProduct}
          />
        </label>

        <button onClick={() => newProductRegister()}>Publicar</button>
      </div>
    </>
  );
};
export default AddProduct;

