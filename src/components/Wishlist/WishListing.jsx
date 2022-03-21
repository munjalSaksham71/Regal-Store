import { AiFillDelete } from "react-icons/ai";
import { useWishlist } from "../../context/wishlist-context"
import { useCart } from "../../context/cart-context"
import '../CartListing/CartListing.css'
import './Wishlist.css'

const WishListing = () => {
    const { wishlistState: {wishlist}, wishlistDispatch } = useWishlist();
    const { cartDispatch } = useCart();
    
    const moveToCartHandler = (prod) => {
        cartDispatch({type: 'ADD_TO_CART', payload: prod});
        wishlistDispatch({type: 'REMOVE_FROM_WISHLIST', payload: prod})
    }

    return (
        <div>
            <div className="heading2 m-3">Your Wishlist</div>
            {wishlist.map((prod) => (
                <div key={prod._id} className="wishlist_container wishlist_screen">
                <img className="small_product_img" src={prod.imageUrl}></img>
                <div className="product_desc m-2 mt-3">{prod.title}</div>
                <div className="product_price mt-4 ml-5">Rs. {prod.price}</div>
                <button className="btn btn-primary mt-2 ml-5" onClick={() => moveToCartHandler(prod)} > Move&nbsp;to&nbsp;Cart </button>
                <div className="product_delete mt-4 ml-5" onClick={() => wishlistDispatch({type: 'REMOVE_FROM_WISHLIST', payload: prod})}><AiFillDelete /></div>
            </div>
            ))}
        </div>
    )
}

export default WishListing