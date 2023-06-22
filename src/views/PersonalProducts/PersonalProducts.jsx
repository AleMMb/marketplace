import { useState, useContext, useEffect } from "react";
import { AuthContex } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";


import CardPersonalProducts from "../../components/CardPersonalProducts/CardPersonalProducts"
import "../PersonalProducts/PersonalProducts.css"




const PersonalProducts = () => {
    const {usuario} = useContext(AuthContex)
    const [products, setProducts] = useState([]);

    const getUseProducts = async () => {
        const urlServer = "https://marketplace-alemmb.vercel.app";
        const endpoint = "/productos/";
        const id = usuario.id
        try {
          const { data } = await axios.get(urlServer + endpoint + id);
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      };
     
      useEffect(() => {
        getUseProducts();
      }, []);

    

  return (
    <>
    <div className="personal-product-header">
    <h1>Mis Productos Listados</h1>
    <button><Link className="link" to="/nuevoproducto">NUEVO</Link></button>
    </div>
    <div className="Personal-Products-container">
        {products.map((product)=>(
          <li key={product.id} >< CardPersonalProducts data={product} /></li>
         ))}
      </div>
    </>
  )
}
export default PersonalProducts