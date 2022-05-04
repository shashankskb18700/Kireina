export const Tesho = (state = [], action) => {
  switch (action.type) {
    case "TESTER":
      return [...state, action.payload];
    default:
      return state;
  }
};
