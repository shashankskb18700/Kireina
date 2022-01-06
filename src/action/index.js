import srch from '../Api/Api.js';

export const fetc = () => {
  return async dispatch => {
    const promise = await srch.get(`api.xml?title=~naruto`);
   
    dispatch({ type:'FETC', payload: promise });
  }
};