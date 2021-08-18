import {
  ALL_PRODUCTS_LIST_FAIL,
  ALL_PRODUCTS_LIST_REQUEST,
  ALL_PRODUCTS_LIST_SUCCESS,
  PRODUCT_BY_ID_FAIL,
  PRODUCT_BY_ID_REQUEST,
  PRODUCT_BY_ID_SUCCESS,
  SAVE_PRODUCT_ID,
} from "../constants/productConstants";
import axios from "axios";

import { CHECK_PRODUCT } from "../constants/customerConstants";

export const listAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_LIST_REQUEST });
    const { data } = await axios.get(`/api/products/getAllProducts`);

    dispatch({ type: ALL_PRODUCTS_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetailsById = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BY_ID_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
