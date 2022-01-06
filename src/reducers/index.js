import { combineReducers } from 'redux';


const SearchReducer = (state =[],action) => {
  switch (action.type) {
    case 'FETC':
      console.log(action.payload);
      return [... action.payload];
    default:
      return [];
  }
  
}

export default combineReducers({
  srchRedu: SearchReducer,
})