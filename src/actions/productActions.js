import {
  PRODUCT_LIST_REQUEST,
  /*PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,*/
} from '../constants/productConstants';

export const listProducts = () => {
  // for getting the initial showing items
  return {
    type: PRODUCT_LIST_REQUEST,
  };
};
