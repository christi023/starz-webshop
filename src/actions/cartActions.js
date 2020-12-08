import {
  GET_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CART_INCREASE_ITEM,
  CART_DECREASE_ITEM,
  CART_TOTAL_ITEMS,
  CART_DETAILS,
} from '../constants/cartConstants';

// for getting the initial showing items
export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

// adding to cart
export const addToCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)); // save to local storage
};

// removing from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// for increasing item, inside the cart
export const increaseItem = (id) => (dispatch, getState) => {
  console.log(`increase item ${id}`);
  dispatch({
    type: CART_INCREASE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// for decreasing item, inside the cart
export const decreaseItem = (id) => (dispatch, getState) => {
  console.log(`decrease item ${id}`);
  dispatch({
    type: CART_DECREASE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// for getting total price of items, inside the cart
export const getTotals = () => (dispatch, getState) => {
  dispatch({
    type: CART_TOTAL_ITEMS,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// for getting item details info
export const getDetails = () => (dispatch, getState) => {
  dispatch({
    type: CART_DETAILS,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
