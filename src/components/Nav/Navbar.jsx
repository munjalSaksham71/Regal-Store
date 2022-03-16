import "./Navbar.css"
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'
import { FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1 className="heading">REGAL SHOES</h1>
        <div className="topbar_link">
          <Link to="/" className="header_link link ">
          <AiOutlineHeart /> Wishlist
          </Link>
          <Link to="/" className="header_link link ">
          <BsCartFill /> Cart
          </Link>
          <Link to="/" className="header_link link ">
            <FaSignInAlt className="mr-1" />Signin
          </Link>
        </div>
      </header>{" "}
      <hr />
    </>
  );
};

export default Navbar;
