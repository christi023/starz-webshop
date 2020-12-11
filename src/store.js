import { createStore, combineReducers, applyMiddleware } from 'redux';
// Import Thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({});

// get cart items
const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
