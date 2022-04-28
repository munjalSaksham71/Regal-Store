import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import './LoginScreen.css'
import { useAuth } from '../context/auth-context'

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const { user, signupUser } = useAuth();

  const navigate = useNavigate()

  const submitHandler = async (e) => {
      e.preventDefault();
      if(password === confirmPassword){
          try {
              await signupUser(email, password);
          } catch (error) {
              console.log(error.message)
          }
      } else {
          alert("Password and confirm password fields didn't match.")
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
        <div className="heading1 mt-3">SIGN UP</div>
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input className="mt-1 p-1" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input className="mt-1 p-1" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <label className="mt-1" htmlFor="password">
          Confirm Password
        </label>
        <input className="mt-1 p-1" type="password" placeholder="Confirm your password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={submitHandler} className="btn btn-10 btn-dark-grey mt-2"> Sign Up</button>
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
