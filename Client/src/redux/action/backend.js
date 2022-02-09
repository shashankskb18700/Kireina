import axios from "axios";

export const backend = (title) => {
  return async (dispatch) => {
    const name = { name: title };
    const data = await axios.post("/post", name);
    dispatch({
      type: "BACKEND",
      payload: data,
    });
  };
};

// export const backend = (title) => {
//   return {
//     type: "BACKEND",
//     payload: title,
//   };
// };
