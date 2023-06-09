import { useContext, useState, useEffect } from "react";
import { AuthContex } from "../context/AuthContext";
import '../styles/PersonalData.css'
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
 

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="personal-data">
      <h3>Datos Personales</h3>
      <div>
        <p> <b>Nombre:</b> {usuario.nombre}</p>
        <p> <b>Apellido:</b> {usuario.apellido}</p>
        <p> <b>Correo Electronico:</b> {usuario.email}</p>
        <div className="button-container">
        <button>editar</button></div>
      </div>
    </div>
  );
}

export default PersonalData;
