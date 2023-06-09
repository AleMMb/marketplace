import {useContext } from "react";
import {AuthContex} from '../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

import "../SingUpForm/SingUpForm.css";

function SingUp() {
  const navigate = useNavigate();
  const {user, setUser} = useContext(AuthContex);


  const handleSetUser = ({ target: { value, name }}) => {
    const field = {};
    field[name] = value;
    setUser({ ...user, ...field });
  };

  const userRegistrer = async () => {
    const urlServer = "https://marketplace-alemmb.vercel.app";
    const endpoint = "/usuarios";
    try {
      if ( !user.nombre || !user.apellido || !user.email || !user.password)
      return (
        Swal.fire({
          icon: 'error',
          title: 'Ojo!',
          text: 'Todos los campos son obligatorios',
          backdrop: 'swal2-backdrop-hide',
          background: '#b1a961',
          color: '#1C374D'
      })
      )
      await axios.post(urlServer + endpoint, user);
      Swal.fire({
        icon: 'success',
        title: 'Maravilloso!',
        text: 'Te has resgistrado correctamente, ya puedes iniciar sesión',
        backdrop: 'swal2-backdrop-hide',
        background: '#b1a961',
        color: '#1C374D'
    })
      navigate("/login")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal.',
        text: 'El E-mail ya está registrado',
        backdrop: 'swal2-backdrop-hide',
        background: '#b1a961',
        color: '#1C374D'
    })
      console.log(error);
    }
  };

  return (
    <div className="SingUp-form">
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
