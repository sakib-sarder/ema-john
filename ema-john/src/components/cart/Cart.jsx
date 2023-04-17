import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";
const Cart = ({ cart, handleClearCart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if (product.quantity === 0) {
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = parseFloat((total * 0.07).toFixed(2));
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items:{quantity}</p>
      <p>Total Price:${total}</p>
      <p>Total Shipping:{totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total:{total + tax} </h5>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span> <FaTrashAlt />
      </button>
      <Link to={"/checkout"} className="btn-clear-cart">
        <span>Checkout</span> <FaTrashAlt />
      </Link>
    </div>
  );
};

export default Cart;
