import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QTY,
  CART_TOTAL_ITEMS,
} from '../constants/itemConstants';

// adding to cart
export const addToCart = (id) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { id },
  });
};

// removing from cart
export const removeFromCart = (id) => (dispatch) => {
  console.log(`item  deleted: ${id}`);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
};
// qty
export const adjustItemQty = (id, qty) => (dispatch) => {
  dispatch({
    type: ADJUST_ITEM_QTY,
    payload: {
      id,
      qty,
    },
  });
};

// view items
export const cartTotalItems = (item) => (dispatch) => {
  dispatch({
    type: CART_TOTAL_ITEMS,
    payload: item,
  });
};
