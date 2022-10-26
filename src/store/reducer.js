const initialState = {
    token:''
  };
  
  export const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "SET_TOKEN_API":
        newState.token = action.value;
        localStorage.setItem('token',action.value)
        break;
  
      case "REMOVE_TOKEN":
        newState.token= "";
        localStorage.removeItem('token')
        break;
    }
   
    return newState;
  };
  
  export default reducer;