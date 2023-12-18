import axios from "axios";

export const Clicked = (state = {}, action) => {
  console.log("iside in clicked");
  // console.log(action.payload);
  switch (action.type) {
    case "CLICK":
      // console.log("super inside");
      // console.log(action.payload);

      // let vs = await axios.post("/moreData", action.payload.url);

      // console.log(vs);
      return { ...state, newD: action.payload };
    default:
      return state;
  }
};
