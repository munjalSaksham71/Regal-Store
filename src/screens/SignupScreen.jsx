import { Link } from "react-router-dom"
import Navbar from "../components/Nav/Navbar"
import './LoginScreen.css'

const SignupScreen = () => {
    return (
        <div>
        <form className="wrap form-height">
        <div className="heading1 mt-3">SIGN UP</div>
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input className="mt-1 p-1" type="email" placeholder="Enter your email" />
        <label className="mt-1" htmlFor="email">
          Full Name: 
        </label>
        <input className="mt-1 p-1" type="email" placeholder="Enter your Full Name" />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input className="mt-1 p-1" type="password" placeholder="Enter your password" />
        <label className="mt-1" htmlFor="password">
          Confirm Password
        </label>
        <input className="mt-1 p-1" type="password" placeholder="Confirm your password" />
        <button className="btn btn-10 btn-dark-grey mt-2"> Sign Up</button>
        <span className="grey-text mt-2">
          Already have an account?
          <Link to="/login" className="ml-1 bolder grey-text">
            Login here
          </Link>
        </span>
      </form>
        </div>
    )
}

export default SignupScreen
