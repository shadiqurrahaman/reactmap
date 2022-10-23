const initialState = {
    token:''
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "SET_TOKEN":
        newState.token = action.value;
        break;
  
      case "REMOVE_TOKEN":
        newState.token= "";
        break;
    }
    return newState;
  };
  
  export default reducer;