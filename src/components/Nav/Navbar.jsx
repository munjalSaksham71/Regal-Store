import "./Navbar.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
const Navbar = () => {
  const { user, logoutUser } = useAuth();

  return (
    <>
      <header className="header">
        <Link to="/" className="heading link">
          REGAL SHOES
        </Link>
        <div className="topbar_link">
          <NavLink to="/wishlist" className="header_link link ">
            <AiOutlineHeart /> Wishlist
          </NavLink>
          <NavLink to="/cart" className="header_link link ">
            <BsCartFill /> Cart
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
