import { React, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Person3Icon from "@mui/icons-material/Person3";
import Swal from "sweetalert2";

import logo from "../assets/penguinlogo.svg";
import "../styles/navbar.css";
import { AuthContex } from "../context/AuthContext";

function Navbar() {
  const { usuario, setUsuario } = useContext(AuthContex);
  const [OpenLinks, setOpenLinks] = useState(false);
  const toggleOpenLinks = () => {
    setOpenLinks(!OpenLinks);
  };


  /*const logout = async() => {
    Swal.fire({
      title: 'estas a punto de cerrar session',
      text: "estas segur@?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cerrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUsuario (false)
        localStorage.removeItem("usuario-token");
        Swal.fire(
          'Hecho',
          'esperamos verte pronto',
          'success'
        )
      }
    } )
  }*/


  return (
    <div className="navbar">
      <div className="leftSide" id={OpenLinks ? "open" : "close"}>
        <img className="logo" src={logo} alt="logo_tienda" />
        <div className="hiddenLinks">
          <Link to={"/"}>Home</Link>
          <Link to={"/carrito"}>Mi Cart</Link>
          <Link to={"/registro"}>Registro</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <div className="rightSide">
      <Link to={"/"}>Home</Link>
        <Link to={"/carrito"}>Mi carrito</Link>
        {usuario ? <div>
          <Link to={"/perfil"}>Mi perfil</Link>
          <Link to="misproductos">Mis Productos</Link>
          <Link to={"/login"} onClick={()=> setUsuario(false)}
          >Cerrar Sessión</Link></div>
        
        : (
          <div className="public">
            <Link to={"/nosotros"}>Nosotros</Link>
            <Link to={"/registro"}>Registro</Link>
            <Link to={"/login"}>
              {" "}
              <Person3Icon />{" "}
            </Link>
          </div>
        )}
        <button onClick={toggleOpenLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
