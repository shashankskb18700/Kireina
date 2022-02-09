export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETC":
      console.log("inside of search reducer ");

      console.log(action.payload);
      // return { ...action.payload.data};
      return action.payload.data;
    case "BACKEND":
      console.log("inside of backedn");
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return {};
  }
};
