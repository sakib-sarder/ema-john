import React from "react";
import "./Product.css";
import { CiShoppingCart } from 'react-icons/ci';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, quantity, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="fashion" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart
        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
        <CiShoppingCart/>
      </button>
    </div>
  );
};

export default Product;

// CiShoppingCart
