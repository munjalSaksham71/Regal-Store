import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import './Card.css'

const Card = ({product}) => {
  const { cartState: {cart}, cartDispatch } = useCart();
  const {wishlistState: {wishlist}, wishlistDispatch} = useWishlist();
  const { _id ,title, categoryName, imageUrl, price } = product;

  const removeFromCartHandler = async (id) => {
    const { data }  = await removeFromCart(id);
    cartDispatch({type: 'REMOVE_FROM_CART', payload: data.cart})
  }

  const addToCartHandler = async (product) => {
    const { data }  = await addToCart(product);
    cartDispatch({type: 'ADD_TO_CART', payload: data.cart})
  }

  return (
    <div className="card m-2 up-curve-border">
        <img className=" up-curve-border" src={imageUrl}></img>
      <div className="card_main pl-3 mt-2 mb-1">
        <div className="card_topic mb-1">{title}</div>
        <div className="card_author">{categoryName}</div>
      </div>
      <div className="card_content pl-3 pr-1 mt-2">Rs.{price}</div>
      <div className="card_footer mt-2 mb-2 pl-3">
          
          {cart.some((p) => p._id === _id ) ? (
            <button className="btn btn-error" onClick={() => removeFromCartHandler(product._id)} >Remove From Cart</button>
          ) : (
            <div className="card_buttons">
              {wishlist.includes(product) ? (
                <button className="btn btn-outline-error danger-colour" onClick={() => wishlistDispatch({type: 'REMOVE_FROM_WISHLIST', payload: product})}>Remove From Wishlist</button>
              ) : (
                <button className="btn btn-outline-primary primary-color" onClick={() => wishlistDispatch({type: 'ADD_TO_WISHLIST', payload: product})}>Add to wishlist</button>
              ) }
            <button className="btn btn-primary " onClick={() => addToCartHandler(product)}>Add to cart</button>
            </div>
          ) }
          <Link to={`/products/${_id}`} className="ml-1 mt-2 link grey-text">Click here to know more</Link>
      </div>
    </div>
  );
};

export default Card;
