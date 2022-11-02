
const initialState = {
    token:''
  };
  
  export const authreducer = (state = initialState, action) => {
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
  
  export default authreducer;