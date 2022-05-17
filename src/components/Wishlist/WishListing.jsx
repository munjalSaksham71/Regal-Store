import { AiFillDelete } from "react-icons/ai";
import { useWishlist } from "../../context/wishlist-context"
import { useCart } from "../../context/cart-context"
import { addToCart  } from '../../actions/cartActions'
import { removeFromwishlist } from '../../actions/wishlistActions'
import '../CartListing/CartListing.css'
import './Wishlist.css'

const WishListing = () => {
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

    const moveToCartHandler = async (product) => {
        const { data } = await addToCart(product);
        cartDispatch({type: 'ADD_TO_CART', payload: data.cart});
        const response = await removeFromwishlist(product._id);
        wishlistDispatch({type: 'REMOVE_FROM_WISHLIST', payload: response.data.wishlist})
    }

    const removeFromWishlistHandler = async (id) => {
        const { data }  = await removeFromwishlist(id);
        wishlistDispatch({type: 'REMOVE_FROM_WISHLIST', payload: data.wishlist})
      }

  return (
    <div>
      <div className="heading2 m-3">Your Wishlist</div>
      {wishlist.map((product) => (
        <div key={product._id} className="wishlist_container wishlist_screen">
          <img className="small_product_img" src={product.imageUrl}></img>
          <div className="product_desc m-2 mt-3">{product.title}</div>
          <div className="product_price mt-4 ml-5">Rs. {product.price}</div>
          {cart.some((item) => item.title === product.title) ? (
            <button className="btn btn-primary mt-2 ml-5" disabled={true}>
              Already in Cart
            </button>
          ) : (
            <button
              className="btn btn-primary mt-2 ml-5"
              onClick={() => moveToCartHandler(product)}
            >
              Move&nbsp;to&nbsp;Cart
            </button>
          )}
           <div className="product_delete mt-4 ml-5" onClick={() =>  removeFromWishlistHandler(product._id)}><AiFillDelete /></div>
        </div>
      ))}
    </div>
  );
};

export default WishListing;
