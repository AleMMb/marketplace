import { useState, useContext } from "react";
import { AuthContex } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import 'animate.css'

import axios from "axios";

import '../Login/Login.css'


function Login() {

  const { setUsuario } = useContext(AuthContex);
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };


  const iniciarSesion = async () => {
    const urlServer = "https://marketplace-alemmb.vercel.app";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) 
      return (
      Swal.fire({
        icon: 'error',
        title: 'No se puede iniciar sessión.',
        text: 'Email y password obligatorias',
        backdrop: 'swal2-backdrop-hide',
        background: '#b1a961',
        color: '#1C374D'
    })
      )
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      localStorage.setItem("token", token);
      setUsuario(true);
      Swal.fire({
        title:  `Bienvenido ${usuario.email}`,
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate("/perfil");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal, contraseña inválida',
        backdrop: 'swal2-backdrop-hide',
        background: '#ffc107',
        color: '#1C374D'
    })
      console.log(error);
    }
  };

  return (
    <div className='login'>
        <div className='form-login'>
        <h1>Login</h1>
      <div className="low-div">
            <label htmlFor="email">ingrese correo</label>
            <input name="email" placeholder='email...' type="text" value={usuario.email || ''}
          onChange={handleSetUsuario}/>

            <label htmlFor="password">ingrese su contraseña</label>
            <input name="password" placeholder='contraseña' type="password" value={usuario.password || ''}
          onChange={handleSetUsuario}/>

            <button onClick={iniciarSesion}>Entrar</button>
        </div>
        </div>
    </div>
  )
}

export default Login
