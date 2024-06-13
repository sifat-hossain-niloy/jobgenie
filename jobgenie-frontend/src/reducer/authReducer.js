const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("accessToken", action.payload.accessToken);
        return {
          ...state,
          isAuthenticated: true,
          username: action.payload.username,
          error: null,
          userId: action.payload.userId,
        };

      case "LOGOUT":
        localStorage.removeItem("accessToken");
        return {
          ...state,
          isAuthenticated: false,
          username: null,
          userId: null,
        };
      
      case "RESTORE_STATE":
        return action.payload;

      case "STATE_RESTORED":
      return {
        ...state,
        stateRestored: true,
      };

      case "AUTH_ERROR":
        localStorage.setItem("accessToken", null);
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  