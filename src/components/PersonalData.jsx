import { useContext, useState, useEffect } from "react";
import { AuthContex } from "../context/AuthContext";
import axios from "axios";

function PersonalData() {
  const { setUsuario: setUsuarioGlobal } = useContext(AuthContex);
  const [usuario, setUsuarioLocal] = useState({});

  const getUserData = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuarios/";
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch (error) {
      console.log(error);
    }
  };
 
  console.log(usuario);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="personal-data">
      <h3>Datos Personales</h3>
      <div>
        <p>Nombre: {usuario.nombre}</p>
        <p>Apellido: {usuario.apellido}</p>
        <p>Correo Electronico: {usuario.email}</p>
        <button>editar</button>
      </div>
    </div>
  );
}

export default PersonalData;
