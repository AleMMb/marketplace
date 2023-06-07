import { useContext } from "react";
import { AuthContex } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import "../styles/Alert.css"



export const Private = ({ children }) => {
  const { usuario } = useContext(AuthContex);

  if (!usuario) {
    Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Es necesario iniciar session para acceder a esa página!',
        popup: 'swal2-hide',
        backdrop: 'swal2-backdrop-hide',
        background: '#b1a961',
        color: '#1C374D'
    })

    return <Navigate to="/login" />;
  }
  return children;
};

