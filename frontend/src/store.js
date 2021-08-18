import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  allProductsReducers,
  productByIdReducers,
} from "./reducers/productReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  processToOrderReducers,
} from "./reducers/ordersReducers";
import {
  tailorCustomersReducer,
  tailorLoginReducer,
  tailorOrdersReducer,
  tailorRegisterReducer,
  tailorSalesDetailsReducer,
  tailorUpdateProfileReducer,
} from "./reducers/tailorReducers";
import {
  adminAllCustomersDetailsReducer,
  adminAllProductOrdersDetailsReducer,
  adminAllProductsDetailsReducer,
  adminAllTailorsDetailsReducer,
  adminDashBoardReducer,
} from "./reducers/adminReducers";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/customerReducers";

const reducer = combineReducers({
  // for customer
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,

  // For products👇👇
  allProducts: allProductsReducers,
  processToOrder: processToOrderReducers,
  productById: productByIdReducers,

  // orders
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,

  // For tailors.
  tailorRegister: tailorRegisterReducer,
  tailorLogin: tailorLoginReducer,
  tailorSalesDetails: tailorSalesDetailsReducer,
  tailorOrders: tailorOrdersReducer,
  tailorCustomers: tailorCustomersReducer,
  tailorUpdateProfile: tailorUpdateProfileReducer,

  // for admin
  adminDashBoard: adminDashBoardReducer,
  adminAllCustomers: adminAllCustomersDetailsReducer,
  adminAllTailors: adminAllTailorsDetailsReducer,
  adminAllProductOrders: adminAllProductOrdersDetailsReducer,
  adminAllProducts: adminAllProductsDetailsReducer,
});
const middleware = [thunk];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const productDetailsFromStorage = localStorage.getItem("productDetails")
  ? JSON.parse(localStorage.getItem("productDetails"))
  : null;

const productSizeFromStorage = localStorage.getItem("productSize")
  ? JSON.parse(localStorage.getItem("productSize"))
  : null;

const productQuantityFromStorage = localStorage.getItem("productQuantity")
  ? JSON.parse(localStorage.getItem("productQuantity"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : null;

// tailor local storage
const tailorInfoFromStorage = localStorage.getItem("tailorInfo")
  ? JSON.parse(localStorage.getItem("tailorInfo"))
  : null;
const initialState = {
  processToOrder: {
    productDetails: productDetailsFromStorage,
    productSize: productSizeFromStorage,
    productQuantity: productQuantityFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  tailorLogin: { tailorInfo: tailorInfoFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
