import {
  ALL_PRODUCTS_LIST_FAIL,
  ALL_PRODUCTS_LIST_REQUEST,
  ALL_PRODUCTS_LIST_SUCCESS,
  PRODUCT_BY_ID_FAIL,
  PRODUCT_BY_ID_REQUEST,
  PRODUCT_BY_ID_SUCCESS,
  SAVE_PRODUCT_ID,
} from "../constants/productConstants.js";
export const allProductsReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_LIST_REQUEST:
      return { loading: true, products: [] };
    case ALL_PRODUCTS_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productByIdReducers = (state = { theProduct: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BY_ID_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_BY_ID_SUCCESS:
      return {
        loading: false,
        theProduct: action.payload[0],
      };
    case PRODUCT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
