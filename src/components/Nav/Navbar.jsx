import "./Navbar.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'
import { FaSignInAlt } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth-context";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const { wishlistState: {wishlist} } = useWishlist();
  const { cartState: {cart} } = useCart();
  return (
    <>
      <header className="header">
        <Link to="/" className="heading link">
          REGAL SHOES
        </Link>
        <div className="topbar_link">
          <NavLink to="/wishlist" className="header_link link ">
          <AiOutlineHeart />  Wishlist <span className={!wishlist.length ? "no_badge" : "badge_circle"}> {wishlist.length} </span>
          </NavLink>
          <NavLink to="/cart" className="header_link link ">
          <BsCartFill /> Cart <span className={!cart.length ? "no_badge" : "badge_circle"}> {cart.length} </span>
          </NavLink>
          <NavLink to="/login" className="header_link link ">
            <FaSignInAlt className="mr-1" />Signin
          </NavLink>
          {user ? (
            <div onClick={logoutUser} className="header_link link ">
              <FaSignInAlt className="mr-1" /> Logout
            </div>
          ) : (
            <NavLink to="/login" className="header_link link ">
              <FaSignInAlt className="mr-1" /> Signin
            </NavLink>
          )}
        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
