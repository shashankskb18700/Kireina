export const Clicked = (state = {}, action) => {
  // console.log("iside in clicked");
  // console.log(action.payload);
  switch (action.type) {
    case "CLICK":
      // console.log("super inside");
      // console.log(action.payload);
      return { ...state, newD: action.payload };
    default:
      return state;
  }
};
