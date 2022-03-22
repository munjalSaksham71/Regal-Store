import { Link } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <div>
      <Navbar />
      <form className="wrap form-height">
        <div className="heading1 mt-3">SIGN IN</div>
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input className="mt-1 p-1" type="email" placeholder="Enter your email" />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input className="mt-1 p-1" type="password" placeholder="Enter your password" />
        <button className="btn btn-10 btn-dark-grey mt-2"> Sign In</button>
        <span className="grey-text mt-2">
          New Customer?
          <Link to="/signup" className="ml-1 bolder grey-text">
            Register here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
