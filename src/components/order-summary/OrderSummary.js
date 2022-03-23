import React from "react";

function OrderSummary({ cart }) {
  console.log(cart);
  const getTotal = (prev, current) => prev + current.price;
  const totalPrice = cart.reduce(getTotal, 0);
  const totalShippingFee = 100;
  const tax = Math.floor(totalPrice * 0.15);
  return (
    <div>
      <h2>order summary</h2>
      <p>Carted Product: {cart.length} </p>
      <p>Total Price: {totalPrice} </p>
      <p>Total Shipping Charge: {totalShippingFee} </p>
      <p>Tax: {tax} </p>
      <h3>Grand Total: {totalPrice + totalShippingFee + tax} </h3>
      <button>Clear Cart</button> <br />
      <button>Review Order</button>
    </div>
  );
}

export default OrderSummary;
