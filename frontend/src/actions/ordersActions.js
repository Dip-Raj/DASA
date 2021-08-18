import axios from "axios";
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  SAVE_PAYMENT_METHOD,
  SAVE_PRODUCT_DETAILS,
  SAVE_QUANTITY,
  SAVE_SHIPPING_ADDRESS,
  SAVE_SIZE,
} from "../constants/ordersConstants";

export const saveProductDetails = (data) => async (dispatch, getState) => {
  dispatch({ type: SAVE_PRODUCT_DETAILS, payload: data });
  localStorage.setItem(
    "productDetails",
    JSON.stringify(getState().processToOrder.productDetails)
  );
};

export const saveProductSize = (data) => (dispatch, getState) => {
  dispatch({
    type: SAVE_SIZE,
    payload: data,
  });
  localStorage.setItem(
    "productSize",
    JSON.stringify(getState().processToOrder.productSize)
  );
};

export const saveProductQuantity = (data) => (dispatch, getState) => {
  dispatch({
    type: SAVE_QUANTITY,
    payload: data,
  });

  localStorage.setItem(
    "productQuantity",
    JSON.stringify(getState().processToOrder.productQuantity)
  );
};

export const saveShippingAddress = (data) => (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem(
    "shippingAddress",
    JSON.stringify(getState().processToOrder.shippingAddress)
  );
};
export const savePaymentMethod = (data) => (dispatch, getState) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem(
    "paymentMethod",
    JSON.stringify(getState().processToOrder.paymentMethod)
  );
};

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // The below line is responsible for the backend connect, it goes to the respected route and does the backend work and then again comes back
    const { data } = await axios.post(`/api/orders`, order, config);
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    localStorage.removeItem("productId");
    localStorage.removeItem("productSize");
    localStorage.removeItem("productDetails");
    localStorage.removeItem("productQuantity");
    localStorage.removeItem("paymentMethod");
    localStorage.removeItem("shippingAddress");
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    // The below line is responsible for the backend connect, it goes to the respected route and does the backend work and then again comes back
    const { data } = await axios.get(`/api/orders/getParticularOrder/${id}`);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
