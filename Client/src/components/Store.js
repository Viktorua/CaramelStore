import React, { useState } from "react";
import Products from "../components/products/Products";
import Cart from "./Cart";

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [];

  return (
    <div>
      <h1>Интернет-магазин</h1>
      <div>
        {products.map((product) => (
          <Products
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Store;
