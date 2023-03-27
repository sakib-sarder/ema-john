import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = parseFloat((total * 0.07).toFixed(2));
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:{totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total:{total + tax} </h5>
        </div>
    );
};

export default Cart;