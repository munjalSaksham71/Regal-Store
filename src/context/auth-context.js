import { createContext, useContext, useState } from "react";
import { login, signup } from '../actions/authActions'
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const token = localStorage.getItem("user_info");

const AuthContextProvider = ({children}) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(token ? true :false)
    const [user,setUser] = useState(token);

    const loginUser = async (email, password) => {
        const { data, status } =  await login(email, password);
        if (status === 200) {
          localStorage.setItem("user_info", JSON.stringify(data.encodedToken));
          setUser(data.encodedToken);
          setIsUserLoggedIn(true);
        }
      };
    
      const signupUser = async (email, password) => {
        const {data, status} = await signup(email, password);
        if(status === 201){
          localStorage.setItem("user_info", JSON.stringify(data.encodedToken));
          setUser(data.encodedToken);
          setIsUserLoggedIn(true);
        }
      }
    
      const logoutUser = async () => {
        localStorage.removeItem("user_info");
        setIsUserLoggedIn(false);
        setUser(null);
      }

    return <AuthContext.Provider value={{user, isUserLoggedIn, loginUser, signupUser, logoutUser}}>{children}</AuthContext.Provider>
}

export {useAuth, AuthContextProvider};