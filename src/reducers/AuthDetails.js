export const AuthDetails = (state = {}, action) => {
  console.log("inside ");
  switch (action.type) {
    case "DET":
      // const [name, email] = action.payload;
      // console.log(name);
      // console.log(email);
      return action.payload;
    default:
      return {};
  }
};
