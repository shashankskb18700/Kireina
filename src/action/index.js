import srch from "../Api/Api.js";

export const fetc = (title) => {
  return async (dispatch) => {
    const promise = await srch.get(`api.xml?title=~${title}`, {
      "Content-Type": "application/xml; charset=utf-8",
    });
    // console.log(promise.data);

    dispatch({ type: "FETC", payload: promise });
  };
};
