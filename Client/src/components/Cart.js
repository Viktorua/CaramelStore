import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
