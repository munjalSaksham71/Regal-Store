import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { AiFillStar } from "react-icons/ai";
import "./Card.css";

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
          {wishlist.includes(product) ? (
            <button
              className="btn btn-outline-error danger-colour"
              onClick={() =>
                wishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: product,
                })
              }
            >
              Remove From Wishlist
            </button>
          ) : (
            <button
              className="btn btn-outline-primary primary-color"
              onClick={() =>
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
            >
              Add to wishlist
            </button>
          )}
          {cart.some((p) => p._id === _id) ? (
            <button
              className="btn btn-error"
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-primary "
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to cart
            </button>
          )}
        </div>
        <Link to={`/products/${_id}`} className="ml-1 mt-2 link grey-text">
          Click here to know more
        </Link>
      </div>
      <div class="card_badge btn btn-primary">
        {" "}
        <AiFillStar /> {rating}/5
      </div>
    </div>
  );
};

export default Card;
