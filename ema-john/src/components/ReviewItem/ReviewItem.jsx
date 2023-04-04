import React from 'react';
import './ReviewItem.css'
import { FaTrashAlt } from 'react-icons/fa';

const ReviewItem = ({ product, handleDeleteBtn }) => {
    const {img, id, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Qunatity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleDeleteBtn(id)} className='btn-delete'><FaTrashAlt className='trash'/></button>
        </div>
    );
};

export default ReviewItem;

// FaTrashAlt