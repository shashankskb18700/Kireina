const INITIAL_STATE = [];

export const SearchReducer = (state = {}, action) => {
  console.log(INITIAL_STATE);
  switch (action.type) {
    // case "FETC":
    //   console.log("inside of search reducer ");

    //   console.log(action.payload);
    //   return { ...action.payload.data};
    //   return { INITIAL_STATE: action.payload.data };
    case "BACKEND":
      console.log("inside of backedn");
      console.log(action.payload.data);
      // INITIAL_STATE = action.payload.data;
      // INITIAL_STATE.push(action.payload.data);
      // console.log(INITIAL_STATE);
      return { ...state, srch: action.payload };
    default:
      return state;
  }
};
