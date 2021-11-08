import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { greetingReducer } from "./greeting/greeting";

// const initialState = {
//   messages: []
// };

// const rootReducer = (state, action) => {
//   console.log(action.type);
//   switch (action.type) {
//     default:
//       return state 
//   }
// }

const reducer = combineReducers({
  greetingReducer,
});


const store = createStore(
  reducer, 
  applyMiddleware(logger, thunk),
);


export default store;