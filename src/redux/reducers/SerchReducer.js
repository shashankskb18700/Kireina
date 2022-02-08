export const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETC":
      console.log(action.payload);
      // return { ...action.payload.data};
      return action.payload.data;
    default:
      return {};
  }
};
