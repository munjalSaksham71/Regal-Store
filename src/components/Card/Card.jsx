import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import {
  addToWishlist,
  removeFromwishlist,
} from "../../actions/wishlistActions";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { AiFillStar } from "react-icons/ai";
import "./Card.css";
import toast from 'react-hot-toast';

const Card = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { _id, title, categoryName, imageUrl, price, rating } = product;

  const removeFromCartHandler = async (id) => {
    try {
      const { data } = await removeFromCart(id);
      cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart }); 
    } catch (error) {
      toast.error("Something Went Wrong! Please Try Again")
    }
  };

  const addToCartHandler = async (product) => {
    try {
      const { data } = await addToCart(product);
      cartDispatch({ type: "ADD_TO_CART", payload: data.cart }); 
    } catch (error) {
      toast.error("Please Login First")
    }
  };

  const removeFromWishlistHandler = async (id) => {
    try {
      const { data } = await removeFromwishlist(id);
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: data.wishlist }); 
    } catch (error) {
      toast.error("Something Went Wrong! Please Try Again")
    }
  };

  const addToWishlistHandler = async (product) => {
    try {
      const { data } = await addToWishlist(product);
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist }); 
    } catch (error) {
      toast.error("Please Login First!!")
    }
  };

  return (
    <div className="card m-2 up-curve-border">
      <img className=" up-curve-border" src={imageUrl}></img>
      <div className="card_main pl-3 mt-2 mb-1">
        <div className="card_topic mb-1">{title}</div>
        <div className="card_author">{categoryName}</div>
      </div>
      <div className="card_content pl-3 pr-1 mt-2">Rs.{price}</div>
      <div className="card_footer mt-2 mb-2 pl-3">
          <div className="card_buttons">
            {wishlist.some((item) => item._id === product._id) ? (
              <button
                className="btn btn-outline-error danger-colour"
                onClick={() => removeFromWishlistHandler(product._id)}
              >
                Remove From Wishlist
              </button>
            ) : (
              <button
                className="btn btn-outline-primary primary-color"
                onClick={() => addToWishlistHandler(product)}
              >
                Add to wishlist
              </button>
            )}
            {cart.some((p) => p._id === _id) ? (
              <button
              className="btn btn-error"
              onClick={() => removeFromCartHandler(product._id)}
            >
              Remove From Cart
            </button>
            ) : (
              <button
              className="btn btn-primary "
              onClick={() => addToCartHandler(product)}
            >
              Add to cart
            </button>
            )}
            </div>
        <Link to={`/products/${_id}`} className="ml-1 mt-2 link grey-text">
          Click here to know more
        </Link>
      </div>
      <div className="card_badge btn btn-primary">
        <AiFillStar /> {rating}/5
      </div>
    </div>
  );
};

export default Card;
