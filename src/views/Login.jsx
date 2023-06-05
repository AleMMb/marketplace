import { useState, useContext } from "react";
import { AuthContex } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import '../styles/Login.css'


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
    const urlServer = "http://localhost:3000";
    const endpoint = "/login";
    //const { email, password } = usuario;
    try {
      //if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      alert("Usuario identificado con éxito");
      localStorage.setItem("token", token);
      setUsuario();
      navigate("/dashboard");
    } catch (error) {
      alert(" Ups! faltan datos");
      console.log(error);
    }
  };

  return (
    <div className='login'>
        <div className='form-login'>
        <h1>Login</h1>
      <div className="low-div">
            <label htmlFor="email">ingrese correo</label>
            <input name="email" placeholder='email...' type="text" value={usuario.email}
          onChange={handleSetUsuario}/>

            <label htmlFor="password">ingrese su contraseña</label>
            <input name="password" placeholder='contraseña' type="password" value={usuario.password}
          onChange={handleSetUsuario}/>

            <button onClick={iniciarSesion}>Entrar</button>
        </div>
        </div>
    </div>
  )
}

export default Login
