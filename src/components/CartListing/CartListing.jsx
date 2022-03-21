import './CartListing.css'
import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useCart } from '../../context/cart-context';
const CartListing = () => {
  
  const { cartState: {cart}, cartDispatch } = useCart();

  const total = cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.qty
    }, 0);

  return (
    <div>
      <div className="heading2 cart_screen">Shopping Cart</div>
      {cart.map((prod) => (
        <div key={prod._id} className="cart_container cart_screen">
        <img className="small_product_img" src={prod.imageUrl}></img>
        <div className="product_desc m-2">{prod.title}</div>
        <div className="product_price mt-2 ml-5">₹{prod.price}</div>
        <div className="product_qty mt-2 ml-5">
        </div>
        <div className="product_delete mt-2 ml-5">
          <button onClick={() => cartDispatch({type: 'REMOVE_FROM_CART', payload: prod}) } className="button"><AiFillDelete /></button>
        </div>
      </div>
      ))}

      <div className="wrap cart_total_box">
        <div className="heading2 ml-5 mt-1">Subtotal</div>
        <div className="heading4 subtotal_amt ml-5 mt-2 mb-2">Rs. {total}</div>
        <hr></hr>
        <button className="btn btn-dark-grey btn_checkout m-1">
          Proceed&nbsp;to&nbsp;checkout
        </button>
      </div>
    </div>
  );
};

export default CartListing;
