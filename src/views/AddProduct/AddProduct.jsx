import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";

import { AuthContex } from "../../context/AuthContext";
import "../AddProduct/AddProduct.css";
import { storage } from "../../helpers/firebase";

const AddProduct = () => {
  const { usuario } = useContext(AuthContex);
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(null);
  const [urlProductImage, setUrlProductImage] = useState("");
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
  });

  const handleSetNewProduct = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setNewProduct({ ...newProduct, ...field });
  };

  const uploadProductImage = () => {
    if (productImage === null) {
      alert(`No has subido ningun archivo`);
      return;
    }
    const productImageRef = ref(
      storage,
      `ProductImages/${usuario.nombre}/${productImage.name}`
    );
    const uploadTask = uploadBytesResumable(productImageRef, productImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        switch (snapshot.state) {
          case "running":
            console.log("subiendo");
          
          case "success": 
          Swal.fire({
      position: "top-end",
      icon: "success",
      title: "La imagen se ha subido con exito!",
      showConfirmButton: true,
    });

            break;  
          case "error":
            
              Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops! intenta nuevamente",
                showConfirmButton: true,
                timer: 5000,
              })
            }
      },
      (error) => {
        alert(`error`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) =>
          setUrlProductImage(url)
        );
      }
    );
  };

  const newProductRegister = async () => {
    const urlServer = "https://marketplace-alemmb.vercel.app/nuevoproducto";

    var productDataArray = {
      id_usuario: usuario.id,
      nombre: newProduct.nombre,
      descripcion: newProduct.descripcion,
      precio: newProduct.precio,
      imagen: urlProductImage,
    };
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tu producto ya está disponible! ",
      showConfirmButton: true,
    });
    navigate("/misproductos");

    try {
      if (
        !usuario.id ||
        !newProduct.nombre ||
        !newProduct.descripcion ||
        !newProduct.precio ||
        !urlProductImage
      ) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: "Todo los campos son requeridos",
          showConfirmButton: true,
          timer: 5000,
        });
        navigate("/nuevoproducto");
      } else {
        const response = await axios.post(urlServer, productDataArray);
      }
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
          value={Number(newProduct.precio) || ""}
          onChange={handleSetNewProduct}
        />

        <label htmlFor="imagen">Imagen:</label>
        <input
          type="file"
          onChange={(e) => {
            setProductImage(e.target.files[0]);
          }}
        />
        <button className="upload-image-button" onClick={uploadProductImage}>Subir Imagen</button>

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

        <button onClick={() => newProductRegister()}>Publicar Producto</button>
      </div>
    </>
  );
};
export default AddProduct;
