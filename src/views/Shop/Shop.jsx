import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

import Card from "../../components/Card/Card";

import "../Shop/Shop.css";




function Shop() {
  const {productsList} = useContext(ShopContext)

  return (
    <div className="Shop">
      <div className="ShopTitle">
        <h1>Productos para ti</h1>
      </div>
      <div className="products">
        {productsList.map((product)=>(
          <li key={product.id} >< Card data={product} /></li>
         ))}
      </div>
    </div>
  );
}

export default Shop