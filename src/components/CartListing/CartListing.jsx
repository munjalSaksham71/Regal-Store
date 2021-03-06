import "./CartListing.css";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from "../../actions/cartActions";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { addToWishlist } from "../../actions/wishlistActions";
import toast from 'react-hot-toast'

const CartListing = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const moveToWishlistHandler = async (product) => {
    const { data } = await removeFromCart(product._id);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
    const response = await addToWishlist(product);
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: response.data.wishlist,
    });
  };

  const total = Array.isArray(cart)
    ? cart.reduce((acc, curr) => {
        return acc + Number(curr.price) * curr.qty;
      }, 0)
    : 0;

  let cartItems = cart;

  const removeFromCartHandler = async (id) => {
    const { data } = await removeFromCart(id);
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
  };

  const handleIncrement = (id) => {
    cartDispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  const handleDecrement = (qty, id) => {
    if (qty <= 1) {
      removeFromCartHandler(id);
    } else {
      cartDispatch({ type: "DECREMENT_QUANTITY", payload: id });
    }
  };

  return (
    <div>
      <div className="heading2 cart_screen">Shopping Cart</div>
      {cart.length === 0 && (
        <div className="heading3 center"> No Items in Cart.</div>
      )}
      {cartItems?.map((prod) => (
        <div key={prod._id} className="cart_container cart_screen">
          <img className="small_product_img" src={prod.imageUrl}></img>
          <div className="product_desc m-2">{prod.title}</div>
          <div className="product_price mt-2 ml-3">₹{prod.price}</div>
          <div className="product_qty mt-2 ml-5"></div>
          <div className="flex-row ml-2 mr-2">
            <button
              className="qty-btn"
              onClick={() => handleDecrement(prod.qty, prod._id)}
            >
              -
            </button>
            <p>
              {prod.qty
                ? `${prod.qty}`
                : cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })}
            </p>
            <button
              className="qty-btn"
              onClick={() => handleIncrement(prod._id)}
            >
              +
            </button>
          </div>
          {wishlist.some((item) => item.title === prod.title) ? (
            <button
              className="btn button-height btn-primary mt-2 ml-5"
              disabled={true}
            >
              Already in Wishlist
            </button>
          ) : (
            <button
              className="btn button-height btn-primary mt-2 ml-5"
              onClick={() => moveToWishlistHandler(prod)}
            >
              Move&nbsp;to&nbsp;Wishlist
            </button>
          )}
          <div className="product_delete mt-2 ml-1">
            <button
              onClick={() => removeFromCartHandler(prod._id)}
              className="button"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
      {total !== 0 && (
        <div className="wrap cart_total_box">
          <div className="heading2 ml-5 mt-1">Subtotal</div>
          <div className="heading4 subtotal_amt ml-5 mt-2 mb-2">
            Rs. {total}
          </div>
          <hr></hr>
          <button className="btn btn-dark-grey btn_checkout m-1">
            Proceed&nbsp;to&nbsp;checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartListing;
