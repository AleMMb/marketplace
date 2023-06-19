import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";

import Card from "../../components/Card/Card";

import "../Shop/Shop.css";

function Shop() {
  const { productsList } = useContext(ShopContext);
  const [search, setSearch] = useState("");

  const productsListSearch = !search
    ? productsList
    : productsList.filter((e) =>
        e.nombre.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <div className="Shop">
      <div className="ShopTitle">
        <h1>Productos para ti</h1>
        <div className="search">
          <h5 className="h5-search">Buscador:</h5>
          <input
            className="input-search"
            type="text"
            placeholder="Ingrese palabra clave"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </div>
      </div>
      <div className="products">
        {productsListSearch.map((product) => (
          <li key={product.id}>
            <Card data={product} />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Shop;
