import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Person3Icon from "@mui/icons-material/Person3";

import logo from "../assets/penguinlogo.svg";
import "../styles/navbar.css";
import { AuthContex } from "../context/AuthContext";

function Navbar() {
  const { usuario } = useContext(AuthContex);
  const [OpenLinks, setOpenLinks] = useState(false);
  const toggleOpenLinks = () => {
    setOpenLinks(!OpenLinks);
  };

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
        {usuario ? (
          <Link to={"/perfil"}>Mi perfil</Link>
        ) : (
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
