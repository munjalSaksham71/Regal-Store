import { useEffect } from "react";
import { useCart } from "../../context/cart-context";
import './Card.css'

const Card = ({product}) => {
  const { cartState: {cart}, cartDispatch } = useCart();
  const { _id ,title, categoryName, imageUrl, price } = product;

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
            <button className="btn btn-error" onClick={() => cartDispatch({type: 'REMOVE_FROM_CART', payload: product})} >Remove From Cart</button>
          ) : (
            <div className="card_buttons">
            <button className="btn btn-outline-primary primary-color">Add to wishlist</button>
            <button className="btn btn-primary" onClick={() => cartDispatch({type: 'ADD_TO_CART', payload: product})}>Add to cart</button>
            </div>
          ) }
      </div>
    </div>
  );
};

export default Card;
