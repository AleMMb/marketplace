import React from "react";
import { Link } from 'react-router-dom'

import {PRODUCTS} from "../../productData.js"
import Card from "../components/Card.jsx";

import "../styles/Shop.css";

function Shop() {
  return (
    <div className="Shop">
      <div className="ShopTitle">
        <h1>Productos para ti</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=>(
          <li key={product.id} >< Card data={product} /></li>
        ))}
      </div>
    </div>
  );
}

export default Shop