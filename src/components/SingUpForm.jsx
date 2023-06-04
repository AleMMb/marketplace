import {useContext } from "react";
import {AuthContex} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/SingUpForm.css";

function SingUp() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContex);


  const handleSetUser = ({ target: { value, name }}) => {
    const field = {};
    field[name] = value;
    setUser({ ...user, ...field });
  };

  const userRegistrer = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/usuarios";
    console.log('no pasa')
    try {
      await axios.post(urlServer + endpoint, user);
      console.log('pasa')
      alert("Usuario registrado con éxito")
      navigate("/login")
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
  };

  return (
    <div className="SinghUp-form">
      <h1> ¿Nuevo Acá? </h1>
      <p>
        {" "}
        <b>Regístrate </b> y accede a nuestra tienda.
      </p>
      <form>
        <label>Tu nombre </label>
        <input
          name="nombre"
          placeholder="nombre"
          type="text"
          value={user.nombre || ''}
          onChange={handleSetUser}
        />

        <label>Tu apellido </label>
        <input
          name="apellido"
          placeholder="apellido"
          type="text"
          value={user.apellido || ''}
          onChange={handleSetUser}
        />

        <label>Correo Electronico</label>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={user.email || ''}
          onChange={handleSetUser}
        />

        <label>Crea una contraseña</label>
        <input
          name="password"
          placeholder="contraseña"
          type="password"
          value={user.password || ''}
          onChange={handleSetUser}
        />


        <button type="Reset" value="Borrar todo"
        onClick={userRegistrer}
        >Registrarse</button>
      </form>
    </div>
  );
}

export default SingUp;


/*disabled={
  (user.nombre !== "" && user.apellido !== "" && user.email !== "" && user.password !== "") ? false : true}*/