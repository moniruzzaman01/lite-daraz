import React from "react";
import "./Product.css";

function Product(props) {
  const { img, name, price, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="details">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>
          <small>Manufacture: {seller} </small>
        </p>
        <p>
          <small>Rating: {ratings} </small>
        </p>
      </div>
      <button onClick={() => props.btnClickHandle(props.product)}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
