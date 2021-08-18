import {
  TAILOR_CUSTOMERS_DETAILS_FAIL,
  TAILOR_CUSTOMERS_DETAILS_REQUEST,
  TAILOR_CUSTOMERS_DETAILS_SUCCESS,
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
  TAILOR_LOGOUT,
  TAILOR_ORDERS_DETAILS_FAIL,
  TAILOR_ORDERS_DETAILS_REQUEST,
  TAILOR_ORDERS_DETAILS_SUCCESS,
  TAILOR_REGISTER_FAIL,
  TAILOR_REGISTER_REQUEST,
  TAILOR_REGISTER_SUCCESS,
  TAILOR_SALES_DETAILS_FAIL,
  TAILOR_SALES_DETAILS_REQUEST,
  TAILOR_SALES_DETAILS_SUCCESS,
  TAILOR_UPDATE_PROFILE_FAIL,
  TAILOR_UPDATE_PROFILE_REQUEST,
  TAILOR_UPDATE_PROFILE_SUCCESS,
} from "../constants/tailorConstants";

export const tailorRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_REGISTER_REQUEST:
      return { loading: true };
    case TAILOR_REGISTER_SUCCESS:
      return { loading: false, tailorInfo: action.payload };
    case TAILOR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_LOGIN_REQUEST:
      return { loading: true };
    case TAILOR_LOGIN_SUCCESS:
      return { loading: false, tailorInfo: action.payload };
    case TAILOR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TAILOR_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const tailorSalesDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_SALES_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_SALES_DETAILS_SUCCESS:
      return { loading: false, tailorSales: action.payload };
    case TAILOR_SALES_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_ORDERS_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_ORDERS_DETAILS_SUCCESS:
      return { loading: false, orders: action.payload };
    case TAILOR_ORDERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorCustomersReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_CUSTOMERS_DETAILS_REQUEST:
      return { loading: true };
    case TAILOR_CUSTOMERS_DETAILS_SUCCESS:
      return { loading: false, customers: action.payload };
    case TAILOR_CUSTOMERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tailorUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case TAILOR_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, tailorInfo: action.payload };
    case TAILOR_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
