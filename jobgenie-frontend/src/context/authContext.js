import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import authReducer from "../reducer/authReducer";
import { endpoints } from "../constants/endpoints";

const AuthContext = createContext();

const inialState = {
  isAuthenticated: false,
  username: null,
  error: null,
  stateRestored: false,
  userId: null,
  accessToken: null,
};
 
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, inialState);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("authState"));
    if (storedState) {
      dispatch({ type: "RESTORE_STATE", payload: storedState });
    } 

    dispatch({ type: "STATE_RESTORED" });
    
  }, []);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

  const register = async (username, email, password) => {
    try {
      const response = await axios.post(endpoints.REGISTER, {
        username,
        email,
        password,
      });
  
      if (response.data) {
        await login(username, password);
      }
  
      return response.data;
    } catch (error) {
      console.log(error.response.data); // Log the error response data
      dispatch({ type: "AUTH_ERROR", payload: error });
      throw error; // Throw the error to be caught in handleSave
    }
  };
  

  const login = async (username, password) => {
    try {
      const response = await axios.post(endpoints.LOGIN, {
        username,
        password,
      });
  
      if (response.data.accessToken) {
        dispatch({
          type: "LOGIN",
          payload: {
            username: response.data.username,
            accessToken: response.data.accessToken,
            userId: response.data.userId,
          },
        });
  
        return response.data;
      }
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "AUTH_ERROR", payload: error });
      throw error;
    }
  };
  
  

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };



  return (
    <AuthContext.Provider value={{ ...state, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );


};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuthContext };
