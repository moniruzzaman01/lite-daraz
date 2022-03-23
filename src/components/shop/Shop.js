import React, { useEffect, useState } from "react";
import OrderSummary from "../order-summary/OrderSummary";
import Product from "../product/Product";
import "./Shop.css";

function Shop() {
  const [cart, setCart] = useState([]);
  const btnClickHandle = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products">
        {products.map((product, key) => (
          <Product
            key={key}
            product={product}
            btnClickHandle={btnClickHandle}
          ></Product>
        ))}
      </div>
      <div className="order-summary">
        <OrderSummary cart={cart}></OrderSummary>
      </div>
    </div>
  );
}

export default Shop;
