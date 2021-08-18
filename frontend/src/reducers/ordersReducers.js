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

export const processToOrderReducers = (state = {}, action) => {
  switch (action.type) {
    case SAVE_PRODUCT_DETAILS:
      return {
        ...state,

        productDetails: action.payload,
      };
    case SAVE_SIZE:
      return {
        ...state,

        productSize: action.payload,
      };
    case SAVE_QUANTITY:
      return {
        ...state,

        productQuantity: action.payload,
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,

        shippingAddress: action.payload,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,

        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        theOrder: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
