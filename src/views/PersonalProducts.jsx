import { useState, useContext, useEffect } from "react";
import { AuthContex } from "../context/AuthContext";
import axios from "axios";

import CardPersonalProducts from "../components/CardPersonalProducts"



const PersonalProducts = () => {
    const {usuario} = useContext(AuthContex)

    const [products, setProducts] = useState([]);

    const getUseProducts = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/productos/";
        const id = usuario.id
        console.log(usuario.id)
        try {
          const { data } = await axios.get(urlServer + endpoint + id);
          setProducts(data);
        } catch (error) {
          console.log(error);
        }
      };
     
      console.log(products)
      useEffect(() => {
        getUseProducts();
      }, []);

    

  return (
    <>
    <div><h1>Mis Productos</h1></div>
    <div>
        {products.map((product)=>(
          <li key={product.id} >< CardPersonalProducts data={product} /></li>
         ))}
      </div>
    </>
  )
}
export default PersonalProducts