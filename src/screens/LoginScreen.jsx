import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import './LoginScreen.css'
import toast from 'react-hot-toast'

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginUser } = useAuth();

  const navigate = useNavigate()

  const submitHandler = async (e) => {
      e.preventDefault();
      if(!email || !password ){
        toast.error("Please enter both the fields");
      }
      try {
          await loginUser(email, password);
      } catch (error) {
          toast.error("User Credential Didnt Match")
      }
  }

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    try {
        await loginUser("janedoe@gmail.com", "janedoe");
        toast.success("Login as a Guest User")
    } catch (error) {
        toast.error("Something went wrong.")
    }
  }

  useEffect(() => {
    if(user){
      navigate("/products")
    }
  }, [user])
  
  return (
    <div>
      <form className="wrap form-height">
        <div className="heading1 mt-3">SIGN IN</div>
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input className="mt-1 p-1" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input className="mt-1 p-1" type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password" />
        <button onClick={submitHandler} className="btn btn-10 btn-dark-grey mt-2"> Sign In</button>
        <button onClick={guestLoginHandler} className="btn btn-10 btn-outline-dark-grey mt-2">Login as a Guest</button>
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

export  {LoginScreen};
