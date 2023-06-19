import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

import { formatPrice } from "../../helpers/helper";
import { CartItem } from "../../components/Card-item/Cart-item";
import "../Cart/Cart.css";

function Cart() {
  const { cartItems, getTotalCartAmount, productsList } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Mi carro</h1>
      </div>
      <div className="cart-2">
        {" "}
        {productsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <li className="list-cart-products" key={product.id}>
                <CartItem data={product} />
              </li>
            );
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <h2>
            <b>Subtotal:</b> ${formatPrice(totalAmount)}
          </h2>
          <button onClick={() => navigate("/shop")}>Seguir Comprando</button>
          <button className="checkout-button">Pagar</button>
        </div>
      ) : (
        <div className="checkout">
          <h1>Tu carro de compras está vacio </h1>
          <button onClick={() => navigate("/shop")}>Vamos a la tienda</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
