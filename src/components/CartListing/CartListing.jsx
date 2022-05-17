import "./CartListing.css";
import { AiFillDelete } from "react-icons/ai";
import { removeFromCart } from '../../actions/cartActions'
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

const CartListing = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  const moveToWishlistHandler = (product) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const total = cart.reduce((acc, curr) => {
    return acc + Number(curr.price) * curr.qty;
  }, 0);

  let cartItems = cart;

  const handleIncrement = (id) => {
    cartDispatch({type: 'INCREMENT_QUANTITY', payload: id})
  };

  const handleDecrement = (id) => {
    cartDispatch({type: 'DECREMENT_QUANTITY', payload: id})
  }

    const removeFromCartHandler = async (id) => {
      const { data }  = await removeFromCart(id);
      cartDispatch({type: 'REMOVE_FROM_CART', payload: data.cart})
    }

  return (
    <div>
      <div className="heading2 cart_screen">Shopping Cart</div>
      {cartItems.map((prod) => (
        <div key={prod._id} className="cart_container cart_screen">
          <img className="small_product_img" src={prod.imageUrl}></img>
          <div className="product_desc m-2">{prod.title}</div>
          <div className="product_price mt-2 ml-3">₹{prod.price}</div>
          <div className="product_qty mt-2 ml-5"></div>
          <div className="flex-row ml-2 mr-2">
            <button className="qty-btn" onClick={() => handleIncrement(prod._id)}>+</button>
            <p>{prod.qty ? `${prod.qty}` : cartDispatch({ type: "REMOVE_FROM_CART", payload: prod }) }</p>
            <button className="qty-btn" onClick={() => handleDecrement(prod._id)}>-</button>
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
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: prod })
              }
              className="button"
            >
              <AiFillDelete />
            </button>
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
