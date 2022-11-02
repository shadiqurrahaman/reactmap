const initialState = {
    next_page:null,
    previous_page:null,
    placeData:[]
  };
  
  export const Placereducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "SET_PLACE_DATA":
        newState.next_page = action.next_page;
        newState.previous_page = action.previous_page;
        newState.placeData = action.placedata
        break;
    }

    return newState;
  };
  
  export default Placereducer;